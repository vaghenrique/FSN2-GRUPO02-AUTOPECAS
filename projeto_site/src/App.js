import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import home from "./pages/home";
import catalogo from "./pages/catalogo";
import devolucao from "./pages/devolucao";
import elements from "./pages/elements";
import fale from "./pages/fale";
import instrucoes from "./pages/instrucoes";
import localizacao from "./pages/localizacao";
import pagamento from "./pages/pagamento";
import parceiros from "./pages/parceiros";
import produto1 from "./pages/produto1";
import produto2 from "./pages/produto2";
import produto3 from "./pages/produto3";
import produto4 from "./pages/produto4";
import produto5 from "./pages/produto5";
import produto6 from "./pages/produto6";
import produto7 from "./pages/produto7";
import produto8 from "./pages/produto8";
import produto9 from "./pages/produto9";
import produto10 from "./pages/produto10";
import produto11 from "./pages/produto11";
import produto12 from "./pages/produto12";
import produto13 from "./pages/produto13";
import produto14 from "./pages/produto14";
import produto15 from "./pages/produto15";
import produto16 from "./pages/produto16";
import produto17 from "./pages/produto17";
import produto18 from "./pages/produto18";
import produto19 from "./pages/produto19";
import produto20 from "./pages/produto20";
import produto21 from "./pages/produto21";
import produto22 from "./pages/produto22";
import produto23 from "./pages/produto23";
import produto24 from "./pages/produto24";
import produto25 from "./pages/produto25";
import produto26 from "./pages/produto26";
import produto27 from "./pages/produto27";
import produto28 from "./pages/produto28";
import produto29 from "./pages/produto29";
import produto30 from "./pages/produto30";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/catalogo" element={<catalogo />} />
        <Route path="/devolucao" element={<devolucao />} />
        <Route path="/elements" element={<elements />} />
        <Route path="/fale" element={<fale />} />
        <Route path="/instrucoes" element={<instrucoes />} />
        <Route path="/localizacao" element={<localizacao />} />
        <Route path="/pagamento" element={<pagamento />} />
        <Route path="/parceiros" element={<parceiros />} />
        <Route path="/p1" element={<produto1 />} />
        <Route path="/p2" element={<produto2 />} />
        <Route path="/p3" element={<produto3 />} />
        <Route path="/p4" element={<produto4 />} />
        <Route path="/p5" element={<produto5 />} />
        <Route path="/p6" element={<produto6 />} />
        <Route path="/p7" element={<produto7 />} />
        <Route path="/p8" element={<produto8 />} />
        <Route path="/p9" element={<produto9 />} />
        <Route path="/p10" element={<produto10 />} />
        <Route path="/p11" element={<produto11 />} />
        <Route path="/p12" element={<produto12 />} />
        <Route path="/p13" element={<produto13 />} />
        <Route path="/p14" element={<produto14 />} />
        <Route path="/p15" element={<produto15 />} />
        <Route path="/p16" element={<produto16 />} />
        <Route path="/p17" element={<produto17 />} />
        <Route path="/p18" element={<produto18 />} />
        <Route path="/p19" element={<produto19 />} />
        <Route path="/p20" element={<produto20 />} />
        <Route path="/p21" element={<produto21 />} />
        <Route path="/p22" element={<produto22 />} />
        <Route path="/p23" element={<produto23 />} />
        <Route path="/p24" element={<produto24 />} />
        <Route path="/p25" element={<produto25 />} />
        <Route path="/p26" element={<produto26 />} />
        <Route path="/p27" element={<produto27 />} />
        <Route path="/p28" element={<produto28 />} />
        <Route path="/p29" element={<produto29 />} />
        <Route path="/p30" element={<produto30 />} />
      </Routes>
    </Router>
  );
}


export default App;
