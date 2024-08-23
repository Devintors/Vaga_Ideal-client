import "./StylePadrao.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import Login_Cadastro from "./pages/Login_Cadastro/Login_Cadastro";
import Vagas_Abertas from "./pages/Vagas_Abertas/Vagas_Abertas";
import Cadastro_De_Vaga from "./pages/Cadastro_De_Vaga/Cadastro_De_Vaga";
import Not_Found from "./pages/Not_Found/Not_Found";

export default function CorpoSite() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Vagas-Abertas" element={<Vagas_Abertas />} />
        <Route path="/Abrir-Vaga" element={<Cadastro_De_Vaga />} />
        <Route path="/Login" element={<Login_Cadastro />} />
        <Route path="*" element={<Not_Found />} />
      </Routes>
    </BrowserRouter>
  );
}
