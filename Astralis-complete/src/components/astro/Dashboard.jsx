import {Link} from "react-router-dom";
import {Orbit,BookOpen} from "lucide-react";
import GradientText from "./GradientText";
import StarMap from "./StarMap";
import ZodiacWheel from "./ZodiacWheel";
import AsciiBox from "./AsciiBox";
import DailyReport from "./DailyReport";
import {formatDate} from "../../lib/astrology";
export default function Dashboard({profile}){
 const h=new Date().getHours(),g=h<12?"morning":h<17?"afternoon":"evening",trait=profile.sun_sign?profile.sun_sign.split(",")[0].toLowerCase():"";
 return <div className="animate-fade-up"><div className="text-center"><p className="font-mono uppercase tracking-[.35em] text-[9px]">{formatDate(new Date())}</p><GradientText as="h1" className="font-heading text-3xl sm:text-5xl block mt-3">Good {g}, {profile.name}</GradientText><p className="mt-3">You carry the {profile.sun_sign} sun — {trait} energy at the center of your chart.</p><StarMap variant="crown" className="w-full max-w-2xl h-28 mx-auto mt-4 opacity-60"/></div><DailyReport profile={profile}/><div className="grid sm:grid-cols-2 gap-5 mt-8"><Link to="/chart" className="hover:-translate-y-1 transition-transform"><AsciiBox title="Your Natal Chart" glyph="✦" bodyClassName="text-center"><ZodiacWheel highlight={profile.sun_sign} size={110} className="mx-auto"/><Orbit className="mx-auto mt-2" size={20}/><p className="mt-2">Your symbolic blueprint of temperament, timing and soul pattern.</p><GradientText as="p" className="font-mono text-xs block mt-4">Open the chart →</GradientText></AsciiBox></Link><Link to="/learn" className="hover:-translate-y-1 transition-transform"><AsciiBox title="Learn Astrology" glyph="✧" bodyClassName="text-center"><StarMap variant="lyre" className="w-full h-28"/><BookOpen className="mx-auto mt-1" size={20}/><p className="mt-2">Learn the signs, planets, houses, aspects and magical correspondences.</p><GradientText as="p" className="font-mono text-xs block mt-4">Enter the library →</GradientText></AsciiBox></Link></div></div>;
}