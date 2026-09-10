export const ZODIAC = [
  {name:"Aries",symbol:"♈",element:"Fire",modality:"Cardinal",ruler:"Mars",dates:"Mar 21 – Apr 19",traits:"Pioneer, courageous, driven, impulsive, leader.",keywords:"I am"},
  {name:"Taurus",symbol:"♉",element:"Earth",modality:"Fixed",ruler:"Venus",dates:"Apr 20 – May 20",traits:"Steady, sensual, patient, determined, grounded.",keywords:"I have"},
  {name:"Gemini",symbol:"♊",element:"Air",modality:"Mutable",ruler:"Mercury",dates:"May 21 – Jun 20",traits:"Curious, communicative, adaptable, witty, dual.",keywords:"I think"},
  {name:"Cancer",symbol:"♋",element:"Water",modality:"Cardinal",ruler:"Moon",dates:"Jun 21 – Jul 22",traits:"Nurturing, intuitive, protective, emotional, home-loving.",keywords:"I feel"},
  {name:"Leo",symbol:"♌",element:"Fire",modality:"Fixed",ruler:"Sun",dates:"Jul 23 – Aug 22",traits:"Radiant, generous, proud, creative, loyal.",keywords:"I will"},
  {name:"Virgo",symbol:"♍",element:"Earth",modality:"Mutable",ruler:"Mercury",dates:"Aug 23 – Sep 22",traits:"Analytical, precise, service-minded, discerning, humble.",keywords:"I analyze"},
  {name:"Libra",symbol:"♎",element:"Air",modality:"Cardinal",ruler:"Venus",dates:"Sep 23 – Oct 22",traits:"Harmonious, diplomatic, fair, relational, refined.",keywords:"I balance"},
  {name:"Scorpio",symbol:"♏",element:"Water",modality:"Fixed",ruler:"Pluto",dates:"Oct 23 – Nov 21",traits:"Intense, transformative, magnetic, deep, resolute.",keywords:"I desire"},
  {name:"Sagittarius",symbol:"♐",element:"Fire",modality:"Mutable",ruler:"Jupiter",dates:"Nov 22 – Dec 21",traits:"Adventurous, philosophical, free, optimistic, truthful.",keywords:"I seek"},
  {name:"Capricorn",symbol:"♑",element:"Earth",modality:"Cardinal",ruler:"Saturn",dates:"Dec 22 – Jan 19",traits:"Ambitious, disciplined, enduring, responsible, wise.",keywords:"I use"},
  {name:"Aquarius",symbol:"♒",element:"Air",modality:"Fixed",ruler:"Uranus",dates:"Jan 20 – Feb 18",traits:"Innovative, humanitarian, independent, visionary, eccentric.",keywords:"I know"},
  {name:"Pisces",symbol:"♓",element:"Water",modality:"Mutable",ruler:"Neptune",dates:"Feb 19 – Mar 20",traits:"Compassionate, dreamy, mystical, empathic, boundless.",keywords:"I believe"}
];

export const PLANETS = {
  Sun:{symbol:"☉",color:"Gold",crystal:"Citrine",domain:"Identity, vitality, ego, life force."},
  Moon:{symbol:"☽",color:"Silver",crystal:"Moonstone",domain:"Emotions, instincts, memory, inner self."},
  Mars:{symbol:"♂",color:"Red",crystal:"Red Jasper",domain:"Drive, courage, action, desire, conflict."},
  Mercury:{symbol:"☿",color:"Yellow",crystal:"Aventurine",domain:"Mind, communication, logic, travel."},
  Jupiter:{symbol:"♃",color:"Royal Blue",crystal:"Amethyst",domain:"Expansion, wisdom, luck, faith, growth."},
  Venus:{symbol:"♀",color:"Rose Pink",crystal:"Rose Quartz",domain:"Love, beauty, values, attraction, art."},
  Saturn:{symbol:"♄",color:"Deep Indigo",crystal:"Garnet",domain:"Structure, discipline, karma, time, mastery."},
  Uranus:{symbol:"♅",color:"Electric Blue",crystal:"Labradorite",domain:"Change, rebellion, insight, awakening."},
  Neptune:{symbol:"♆",color:"Sea Green",crystal:"Aquamarine",domain:"Dreams, illusion, mysticism, compassion."},
  Pluto:{symbol:"♇",color:"Black",crystal:"Obsidian",domain:"Death, rebirth, power, transformation."}
};

const DAY_RULERS=["Sun","Moon","Mars","Mercury","Jupiter","Venus","Saturn"];
export const DAY_COLORS={
  Sun:["Gold","Yellow","Orange"],Moon:["Silver","White","Pearl Grey"],Mars:["Red","Scarlet","Crimson"],
  Mercury:["Yellow","Orange","Grey"],Jupiter:["Royal Blue","Purple","Indigo"],Venus:["Green","Rose Pink","Emerald"],
  Saturn:["Black","Deep Indigo","Dark Purple"]
};
export const DAY_CRYSTALS={
  Sun:["Citrine","Sunstone","Tiger's Eye"],Moon:["Moonstone","Selenite","Pearl"],Mars:["Red Jasper","Carnelian","Bloodstone"],
  Mercury:["Aventurine","Agate","Citrine"],Jupiter:["Amethyst","Lapis Lazuli","Sapphire"],Venus:["Rose Quartz","Emerald","Jade"],
  Saturn:["Garnet","Onyx","Hematite"]
};
export const CHALDEAN=["Saturn","Jupiter","Mars","Sun","Venus","Mercury","Moon"];

export function getSunSign(dateStr){
  const d=new Date(`${dateStr}T12:00:00`);
  if(Number.isNaN(d.getTime())) return null;
  const code=(d.getMonth()+1)*100+d.getDate();
  const starts=[321,420,521,621,723,823,923,1023,1122,1222,120,219];
  let idx=-1;
  for(let i=0;i<starts.length;i++) if(code>=starts[i]) idx=i;
  if(idx<0) idx=9;
  return ZODIAC[idx];
}
export function getDayRuler(date=new Date()){return DAY_RULERS[new Date(date).getDay()];}
export const getDayColors=(date)=>DAY_COLORS[getDayRuler(date)];
export const getDayCrystals=(date)=>DAY_CRYSTALS[getDayRuler(date)];

const fmtTime=(d)=>d.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"});
export function getLuckyTimes(date=new Date()){
  const d=new Date(date), ruler=getDayRuler(d), startIdx=CHALDEAN.indexOf(ruler), out=[];
  for(let h=0;h<24;h++){
    const planet=CHALDEAN[(startIdx+h)%7];
    if(planet!==ruler) continue;
    const start=new Date(d); start.setHours(6+h,0,0,0);
    const end=new Date(start); end.setHours(end.getHours()+1);
    out.push({planet,start,end,startStr:fmtTime(start),endStr:fmtTime(end)});
  }
  return out;
}
export function getNextLuckyTime(date=new Date()){
  const now=new Date(date), times=getLuckyTimes(now);
  const next=times.find(x=>x.start>now);
  if(next) return {...next,minutesUntil:Math.max(0,Math.ceil((next.start-now)/60000))};
  const tomorrow=new Date(now); tomorrow.setDate(tomorrow.getDate()+1);
  const first=getLuckyTimes(tomorrow)[0];
  return {...first,minutesUntil:Math.max(0,Math.ceil((first.start-now)/60000))};
}
export function reduceNumber(n){
  let x=Math.abs(Math.trunc(Number(n)||0));
  while(x>9&&!([11,22,33].includes(x))) x=String(x).split("").reduce((a,b)=>a+Number(b),0);
  return x;
}
export function getLifePathNumber(dateStr){
  const [y,m,d]=dateStr.split("-").map(Number);
  return reduceNumber(reduceNumber(m)+reduceNumber(d)+reduceNumber(y));
}
export function getPersonalDayNumber(birthDateStr,date=new Date()){
  const [y,bm,bd]=birthDateStr.split("-").map(Number);
  const cy=date.getFullYear(), cm=date.getMonth()+1, cd=date.getDate();
  const py=reduceNumber(reduceNumber(bm)+reduceNumber(bd)+reduceNumber(cy));
  const pm=reduceNumber(py+cm);
  return reduceNumber(pm+cd);
}
export const NUMEROLOGY_MEANINGS={
  1:{title:"The Pioneer",meaning:"Initiation, independence, leadership. A day to start fresh, act boldly, and plant seeds of will."},
  2:{title:"The Diplomat",meaning:"Cooperation, sensitivity, partnership. A day for harmony, patience, and tending relationships."},
  3:{title:"The Creator",meaning:"Expression, joy, creativity. A day to speak, create, and share your light."},
  4:{title:"The Builder",meaning:"Structure, work, foundation. A day for discipline, order, and steady effort."},
  5:{title:"The Wanderer",meaning:"Change, freedom, sensation. A day of movement, adaptability, and embracing the unexpected."},
  6:{title:"The Nurturer",meaning:"Love, home, responsibility. A day for care, beauty, and service to others."},
  7:{title:"The Seeker",meaning:"Introspection, wisdom, spirit. A day for study, meditation, and inner truth."},
  8:{title:"The Sovereign",meaning:"Power, ambition, material mastery. A day for business, finances, and claiming authority."},
  9:{title:"The Sage",meaning:"Completion, release, compassion. A day to forgive, finish, and let go."},
  11:{title:"The Illuminator",meaning:"Inspiration, intuition, vision. A master day — trust insight and higher knowing."},
  22:{title:"The Master Builder",meaning:"Vision made manifest. A master day for large-scale creation and practical idealism."},
  33:{title:"The Master Teacher",meaning:"Compassionate service and healing. A master day of love in action."}
};
export const COLOR_MEANINGS={
  Gold:"Vitality, sovereignty, confidence and solar radiance.",Yellow:"Clarity, intellect, optimism and communication.",
  Orange:"Creativity, warmth, courage and movement.",Silver:"Reflection, intuition, receptivity and lunar awareness.",
  White:"Purity, reset, protection and spaciousness.","Pearl Grey":"Subtle intuition, emotional neutrality and reflection.",
  Red:"Action, courage, heat and desire.",Scarlet:"Urgency, passion and decisive movement.",Crimson:"Depth, power, vitality and will.",
  Grey:"Neutrality, discernment and mental balance.","Royal Blue":"Wisdom, authority, faith and expansion.",Purple:"Mysticism, sovereignty, imagination and higher learning.",
  Indigo:"Depth, contemplation, discipline and inner sight.",Green:"Growth, harmony, renewal and abundance.","Rose Pink":"Affection, tenderness, beauty and attraction.",
  Emerald:"Prosperity, harmony, renewal and the heart.",Black:"Boundaries, gravity, protection and the unknown.","Deep Indigo":"Discipline, depth, responsibility and contemplation.",
  "Dark Purple":"Mystery, mastery, transformation and spiritual authority.","Electric Blue":"Awakening, innovation and liberation.","Sea Green":"Compassion, flow, dream and surrender."
};
export const CRYSTAL_MEANINGS={
  Citrine:"Solar confidence, abundance and creative vitality.",Sunstone:"Joy, leadership, warmth and personal power.","Tiger's Eye":"Courage, grounded confidence and clear action.",
  Moonstone:"Intuition, cycles, emotional awareness and receptivity.",Selenite:"Clarity, purification and quiet reflection.",Pearl:"Sensitivity, wisdom, emotional softness and lunar grace.",
  "Red Jasper":"Grounding, stamina and courageous action.",Carnelian:"Creative fire, motivation and sensual vitality.",Bloodstone:"Endurance, courage and resilient life force.",
  Aventurine:"Opportunity, optimism and heart-led growth.",Agate:"Stability, balance and calm communication.",Amethyst:"Spiritual insight, sobriety and contemplative wisdom.",
  "Lapis Lazuli":"Truth, wisdom and expressive depth.",Sapphire:"Clarity, loyalty, discipline and higher wisdom.","Rose Quartz":"Compassion, tenderness and relational harmony.",
  Emerald:"Heart wisdom, prosperity and renewal.",Jade:"Harmony, protection, prosperity and balanced growth.",Garnet:"Commitment, vitality, grounding and disciplined desire.",
  Onyx:"Boundaries, steadiness and protective focus.",Hematite:"Grounding, composure and practical strength.",Labradorite:"Intuition, transformation and awakening.",
  Aquamarine:"Calm communication, flow and compassionate clarity.",Obsidian:"Protection, truth, shadow work and transformation."
};
export const formatDate=(date)=>new Date(date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});
export const todayKey=(date=new Date())=>`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
