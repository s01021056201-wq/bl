const CONSTELLATIONS={
  crown:[[.1,.7],[.25,.3],[.4,.6],[.55,.25],[.7,.55],[.85,.3],[.95,.7]],
  river:[[.08,.2],[.2,.4],[.32,.3],[.45,.55],[.58,.45],[.72,.7],[.88,.6],[.95,.85]],
  lyre:[[.5,.15],[.3,.4],[.7,.4],[.35,.75],[.65,.75],[.5,.9]]
};
export default function StarMap({variant="crown",className="",stars=24}){
  const pts=CONSTELLATIONS[variant]||CONSTELLATIONS.crown;
  const scattered=Array.from({length:stars},(_,i)=>({x:(i*47.3)%300,y:(i*31.7)%120,r:(i%3)*.35+.45}));
  return <svg viewBox="0 0 300 120" className={className} aria-hidden="true">
    <defs><linearGradient id="uvLine" x1="0" x2="1"><stop stopColor="#8B5CF6"/><stop offset=".55" stopColor="#C026D3"/><stop offset="1" stopColor="#F0ABFC"/></linearGradient></defs>
    {scattered.map((s,i)=><circle key={"s"+i} cx={s.x} cy={s.y} r={s.r} fill="#fff" opacity=".25" className="animate-twinkle" style={{animationDelay:`${(i%7)*.5}s`}}/>)}
    <polyline points={pts.map(([x,y])=>`${x*300},${y*120}`).join(" ")} fill="none" stroke="url(#uvLine)" strokeWidth="1" opacity=".8"/>
    {pts.map(([x,y],i)=><g key={i}><circle cx={x*300} cy={y*120} r="4" fill="none" stroke="#C026D3" strokeOpacity=".55"/><circle cx={x*300} cy={y*120} r="1.6" fill="#fff"/></g>)}
  </svg>;
}