import { useNavigate } from "react-router-dom";

import "./style.css";

export default function Not_Found() {
  const Navegar = useNavigate();

  return (
    <div
      className="Corpo_Site"
      onClick={() => {
        Navegar("/");
      }}
    >
      <div className="Pagina_Nao_Encontrada">
        <h1>Pagina não encontrada</h1>
        <br />
        <h1>
          <i className="fa-regular fa-face-frown"></i>
        </h1>
        <button>Home</button>
      </div>
    </div>
  );
}
