import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Devolucao from "./pages/Devolucao";
import Elements from "./pages/Elements";
import Fale from "./pages/Fale";
import Instrucoes from "./pages/Instrucoes";
import Localizacao from "./pages/Localizacao";
import Pagamento from "./pages/Pagamento";
import Parceiros from "./pages/Parceiros";
import Produto1 from "./pages/Produto1";
import Produto2 from "./pages/Produto2";
import Produto3 from "./pages/Produto3";
import Produto4 from "./pages/Produto4";
import Produto5 from "./pages/Produto5";
import Produto6 from "./pages/Produto6";
import Produto7 from "./pages/Produto7";
import Produto8 from "./pages/Produto8";
import Produto9 from "./pages/Produto9";
import Produto10 from "./pages/Produto10";
import Produto11 from "./pages/Produto11";
import Produto12 from "./pages/Produto12";
import Produto13 from "./pages/Produto13";
import Produto14 from "./pages/Produto14";
import Produto15 from "./pages/Produto15";
import Produto16 from "./pages/Produto16";
import Produto17 from "./pages/Produto17";
import Produto18 from "./pages/Produto18";
import Produto19 from "./pages/Produto19";
import Produto20 from "./pages/Produto20";
import Produto21 from "./pages/Produto21";
import Produto22 from "./pages/Produto22";
import Produto23 from "./pages/Produto23";
import Produto24 from "./pages/Produto24";
import Produto25 from "./pages/Produto25";
import Produto26 from "./pages/Produto26";
import Produto27 from "./pages/Produto27";
import Produto28 from "./pages/Produto28";
import Produto29 from "./pages/Produto29";
import Produto30 from "./pages/Produto30";

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
