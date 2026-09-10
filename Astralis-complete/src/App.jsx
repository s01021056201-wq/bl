import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import NatalChart from "./pages/NatalChart";
import Learn from "./pages/Learn";
import PageNotFound from "./pages/PageNotFound";

export default function App(){
  const basename=import.meta.env.BASE_URL.replace(/\/$/,"") || "/";
  return <BrowserRouter basename={basename}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/chart" element={<NatalChart/>}/>
      <Route path="/learn" element={<Learn/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  </BrowserRouter>;
}