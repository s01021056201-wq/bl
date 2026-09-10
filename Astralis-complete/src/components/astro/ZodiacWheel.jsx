import { ZODIAC } from "../../lib/astrology";
export default function ZodiacWheel({highlight,className="",size=320}){
  const segs=ZODIAC.map((z,i)=>{const a=(i/12)*Math.PI*2+Math.PI; return {z,a};});
  const pt=(r,a)=>[100+r*Math.cos(a),100+r*Math.sin(a)];
  return <svg width={size} height={size} viewBox="0 0 200 200" className={className} aria-label="Zodiac wheel">
    <defs><linearGradient id="wheelGrad" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#8B5CF6"/><stop offset=".55" stopColor="#C026D3"/><stop offset="1" stopColor="#F0ABFC"/></linearGradient></defs>
    <circle cx="100" cy="100" r="92" fill="none" stroke="url(#wheelGrad)" strokeOpacity=".5"/>
    <circle cx="100" cy="100" r="58" fill="none" stroke="#C026D3" strokeOpacity=".3"/>
    <circle cx="100" cy="100" r="34" fill="none" stroke="#8B5CF6" strokeOpacity=".25"/>
    {segs.map(({z,a})=>{const [x1,y1]=pt(58,a),[x2,y2]=pt(92,a); const selected=highlight===z.name; const [gx,gy]=pt(75,a+Math.PI/12); return <g key={z.name}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C026D3" strokeOpacity=".28"/>
      <text x={gx} y={gy} textAnchor="middle" dominantBaseline="middle" fontSize={selected?15:11} fill={selected?"#F0ABFC":"#C026D3"} fontFamily="var(--font-mono)" filter={selected?"drop-shadow(0 0 5px rgba(240,171,252,.7))":undefined}>{z.symbol}</text>
    </g>})}
    <circle cx="100" cy="100" r="2.5" fill="#F0ABFC"/>
  </svg>;
}