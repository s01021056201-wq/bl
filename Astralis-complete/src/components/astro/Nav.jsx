import {Link,useLocation,useNavigate} from "react-router-dom";
import {Sparkles,Settings as SettingsIcon,LogOut} from "lucide-react";
import {useState} from "react";
import GradientText from "./GradientText";
import Settings from "./Settings";
export default function Nav(){
  const loc=useLocation(),nav=useNavigate(),[settings,setSettings]=useState(false);
  const links=[["Today","/"],["Chart","/chart"],["Learn","/learn"]];
  const logout=()=>{localStorage.removeItem("astralis_profile");localStorage.removeItem("astralis_natal_chart");nav("/");};
  return <>
    <nav className="sticky top-0 z-30 backdrop-blur-md bg-black/60 border-b border-fuchsia/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-5">
        <Link to="/" className="flex items-center gap-2 mr-auto"><Sparkles size={19}/><GradientText as="span" className="font-heading tracking-[.25em] text-sm">ASTRALIS</GradientText></Link>
        <div className="hidden sm:flex gap-5">{links.map(([label,to])=><Link key={to} to={to} className={`font-mono uppercase tracking-[.2em] text-[10px] ${loc.pathname===to?"uv-text text-glow":"opacity-70 hover:opacity-100"}`}>{label}</Link>)}</div>
        <button onClick={()=>setSettings(true)} title="Settings" aria-label="Settings"><SettingsIcon size={17}/></button>
        <button onClick={logout} title="Clear local profile" aria-label="Log out"><LogOut size={17}/></button>
      </div>
      <div className="sm:hidden flex justify-center gap-7 pb-3">{links.map(([label,to])=><Link key={to} to={to} className={`font-mono uppercase tracking-[.18em] text-[9px] ${loc.pathname===to?"uv-text":"opacity-65"}`}>{label}</Link>)}</div>
    </nav>
    <Settings open={settings} onClose={()=>setSettings(false)}/>
  </>;
}