import {useEffect,useState} from "react";
import {Eye,EyeOff,X,Save} from "lucide-react";
import {getRaw,setRaw} from "../../lib/storage";
export default function Settings({open,onClose}){
  const [key,setKey]=useState(""),[model,setModel]=useState("gemini-2.5-flash"),[show,setShow]=useState(false);
  useEffect(()=>{if(open){setKey(getRaw("astralis_gemini_key",""));setModel(getRaw("astralis_gemini_model","gemini-2.5-flash"));}},[open]);
  if(!open)return null;
  const save=()=>{setRaw("astralis_gemini_key",key.trim());setRaw("astralis_gemini_model",model);onClose();};
  return <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true">
    <div className="w-full max-w-lg uv-border-soft bg-black p-5 sm:p-7 shadow-2xl">
      <div className="flex items-center justify-between mb-5"><h2 className="font-heading text-xl uv-text">ASTRALIS SETTINGS</h2><button onClick={onClose} aria-label="Close"><X/></button></div>
      <p className="font-mono text-[11px] leading-relaxed mb-5">Add a Gemini API key to unlock deep readings. The key is stored only in this browser and sent directly to Google when a reading is generated. Never enter your Google password here.</p>
      <label className="font-mono text-xs block mb-2">GEMINI API KEY</label>
      <div className="flex border border-fuchsia/30 mb-5">
        <input value={key} onChange={e=>setKey(e.target.value)} type={show?"text":"password"} className="flex-1 px-3 py-3 outline-none" placeholder="Paste API key" autoComplete="off"/>
        <button className="px-3" onClick={()=>setShow(v=>!v)}>{show?<EyeOff size={17}/>:<Eye size={17}/>}</button>
      </div>
      <label className="font-mono text-xs block mb-2">MODEL</label>
      <select value={model} onChange={e=>setModel(e.target.value)} className="w-full border border-fuchsia/30 px-3 py-3 mb-5 outline-none">
        <option value="gemini-2.5-flash">gemini-2.5-flash</option>
        <option value="gemini-2.5-pro">gemini-2.5-pro</option>
      </select>
      <p className="font-mono text-[10px] opacity-70 mb-5">Client-side keys can be inspected by the browser. Use an appropriately restricted key and usage limits.</p>
      <div className="flex justify-end gap-3"><button onClick={onClose} className="px-4 py-2 border border-fuchsia/20 font-mono text-xs">Cancel</button><button onClick={save} className="px-4 py-2 bg-fuchsia/20 border border-fuchsia/40 font-mono text-xs flex items-center gap-2"><Save size={14}/><span>Save Key</span></button></div>
    </div>
  </div>;
}