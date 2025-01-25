import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Catalogo from "./pages/catalogo";
import Devolucao from "./pages/devolucao";
import Elements from "./pages/elements";
import Fale from "./pages/fale";
import Instrucoes from "./pages/instrucoes";
import Localizacao from "./pages/localizacao";
import Pagamento from "./pages/pagamento";
import Parceiros from "./pages/parceiros";
import Produto1 from "./pages/produto1";
import Produto2 from "./pages/produto2";
import Produto3 from "./pages/produto3";
import Produto4 from "./pages/produto4";
import Produto5 from "./pages/produto5";
import Produto6 from "./pages/produto6";
import Produto7 from "./pages/produto7";
import Produto8 from "./pages/produto8";
import Produto9 from "./pages/produto9";
import Produto10 from "./pages/produto10";
import Produto11 from "./pages/produto11";
import Produto12 from "./pages/produto12";
import Produto13 from "./pages/produto13";
import Produto14 from "./pages/produto14";
import Produto15 from "./pages/produto15";
import Produto16 from "./pages/produto16";
import Produto17 from "./pages/produto17";
import Produto18 from "./pages/produto18";
import Produto19 from "./pages/produto19";
import Produto20 from "./pages/produto20";
import Produto21 from "./pages/produto21";
import Produto22 from "./pages/produto22";
import Produto23 from "./pages/produto23";
import Produto24 from "./pages/produto24";
import Produto25 from "./pages/produto25";
import Produto26 from "./pages/produto26";
import Produto27 from "./pages/produto27";
import Produto28 from "./pages/produto28";
import Produto29 from "./pages/produto29";
import Produto30 from "./pages/produto30";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/devolucao" element={<Devolucao />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/fale" element={<Fale />} />
        <Route path="/instrucoes" element={<Instrucoes />} />
        <Route path="/localizacao" element={<Localizacao />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/p1" element={<Produto1 />} />
        <Route path="/p2" element={<Produto2 />} />
        <Route path="/p3" element={<Produto3 />} />
        <Route path="/p4" element={<Produto4 />} />
        <Route path="/p5" element={<Produto5 />} />
        <Route path="/p6" element={<Produto6 />} />
        <Route path="/p7" element={<Produto7 />} />
        <Route path="/p8" element={<Produto8 />} />
        <Route path="/p9" element={<Produto9 />} />
        <Route path="/p10" element={<Produto10 />} />
        <Route path="/p11" element={<Produto11 />} />
        <Route path="/p12" element={<Produto12 />} />
        <Route path="/p13" element={<Produto13 />} />
        <Route path="/p14" element={<Produto14 />} />
        <Route path="/p15" element={<Produto15 />} />
        <Route path="/p16" element={<Produto16 />} />
        <Route path="/p17" element={<Produto17 />} />
        <Route path="/p18" element={<Produto18 />} />
        <Route path="/p19" element={<Produto19 />} />
        <Route path="/p20" element={<Produto20 />} />
        <Route path="/p21" element={<Produto21 />} />
        <Route path="/p22" element={<Produto22 />} />
        <Route path="/p23" element={<Produto23 />} />
        <Route path="/p24" element={<Produto24 />} />
        <Route path="/p25" element={<Produto25 />} />
        <Route path="/p26" element={<Produto26 />} />
        <Route path="/p27" element={<Produto27 />} />
        <Route path="/p28" element={<Produto28 />} />
        <Route path="/p29" element={<Produto29 />} />
        <Route path="/p30" element={<Produto30 />} />
      </Routes>
    </Router>
  );
}

export default App;
