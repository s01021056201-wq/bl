import {useState} from "react";
import {User,Calendar,Clock,MapPin,Sparkles,Loader2,ArrowLeft} from "lucide-react";
import AsciiBox from "./AsciiBox";
import GradientText from "./GradientText";
import StarMap from "./StarMap";
import ZodiacWheel from "./ZodiacWheel";
import {getLifePathNumber,getSunSign} from "../../lib/astrology";
const steps=[
  ["name",User,"What shall I call you?","Your name, as you want Astralis to speak it."],
  ["birth_date",Calendar,"When were you born?","Your date anchors the solar and numerological reading."],
  ["birth_time",Clock,"The moment of your first breath","Optional — leave blank if unknown."],
  ["birth_location",MapPin,"Where did you arrive?","City and country are enough for this static version."]
];
export default function Onboarding({onSaved}){
  const [step,setStep]=useState(0),[saving,setSaving]=useState(false),[revealed,setRevealed]=useState(null);
  const [form,setForm]=useState({name:"",birth_date:"",birth_time:"",birth_location:""});
  const [field,Icon,title,help]=steps[step],valid=step===2||Boolean(form[field].trim());
  const next=async()=>{if(!valid)return;if(step<3){setStep(s=>s+1);return;}setSaving(true);const sun=getSunSign(form.birth_date),profile={...form,sun_sign:sun.name,life_path_number:getLifePathNumber(form.birth_date)};localStorage.setItem("astralis_profile",JSON.stringify(profile));setRevealed(sun);setTimeout(()=>onSaved(profile),2200);};
  if(revealed)return <div className="max-w-2xl mx-auto animate-fade-up"><AsciiBox title="Your Revelation" glyph="✦" bodyClassName="text-center py-10"><ZodiacWheel highlight={revealed.name} size={260} className="mx-auto animate-spin-slow"/><p className="font-mono uppercase tracking-[.3em] text-[10px] mt-5">Your Sun Sign</p><GradientText as="h2" className="font-heading text-3xl sm:text-4xl block mt-2">{revealed.symbol} {revealed.name}</GradientText><p className="mt-3">{revealed.traits}</p><p className="font-mono text-xs mt-8">✦ Casting your chart… ✦</p></AsciiBox></div>;
  return <div className="max-w-xl mx-auto animate-fade-up"><div className="text-center mb-8"><StarMap variant="river" className="w-full h-24 opacity-50"/><GradientText as="h1" className="font-heading text-3xl block">WELCOME, SEEKER</GradientText><p className="mt-2">A precise daily companion for the sky above and the patterns within.</p></div><AsciiBox title={`Step ${step+1} of 4`} glyph="✦"><div className="flex items-center gap-3 mb-5"><Icon size={22}/><div><GradientText as="h2" className="font-heading text-xl block">{title}</GradientText><p className="text-sm opacity-80">{help}</p></div></div><input autoFocus type={field==="birth_date"?"date":field==="birth_time"?"time":"text"} max={field==="birth_date"?new Date().toISOString().slice(0,10):undefined} value={form[field]} onChange={e=>setForm({...form,[field]:e.target.value})} placeholder={field==="birth_location"?"e.g. Lisbon, Portugal":field==="name"?"Your name":""} className="w-full bg-transparent border border-fuchsia/30 h-12 px-3 text-lg outline-none"/>{step===2&&<p className="font-mono text-[10px] mt-2 opacity-65">Leave blank if unknown — the daily system still works.</p>}<div className="flex justify-between mt-7">{step>0?<button onClick={()=>setStep(s=>s-1)} className="px-4 py-2 flex gap-2 items-center opacity-70"><ArrowLeft size={15}/><span>Back</span></button>:<span/>}<button disabled={!valid||saving} onClick={next} className="px-5 py-3 bg-fuchsia/20 border border-fuchsia/40 disabled:opacity-30 flex items-center gap-2">{saving&&<Loader2 size={15} className="animate-spin"/>}<span>{saving?"Reading the stars…":step===3?"Reveal my chart ✦":"Continue"}</span></button></div></AsciiBox></div>;
}