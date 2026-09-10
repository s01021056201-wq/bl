export default function Starfield(){
  const stars=Array.from({length:70},(_,i)=>({
    top:(i*73.31)%100,left:(i*41.17)%100,size:(i%5)*.4+.6,delay:(i%9)*.6,op:.25+((i*13)%60)/100
  }));
  return <div className="fixed inset-0 -z-10 bg-black pointer-events-none overflow-hidden">
    <div className="absolute inset-0 opacity-60" style={{background:"radial-gradient(circle at 50% 0%,rgba(139,92,246,.16),transparent 38%),radial-gradient(circle at 100% 100%,rgba(192,38,211,.12),transparent 38%),radial-gradient(circle at 0% 100%,rgba(240,171,252,.07),transparent 34%)"}}/>
    {stars.map((s,i)=><div key={i} className="absolute rounded-full bg-white animate-twinkle" style={{top:`${s.top}%`,left:`${s.left}%`,width:`${s.size}px`,height:`${s.size}px`,animationDelay:`${s.delay}s`,opacity:s.op}}/>)}
  </div>;
}