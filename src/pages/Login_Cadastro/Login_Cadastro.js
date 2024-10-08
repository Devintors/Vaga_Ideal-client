import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

import "./style.css";
import "./Estilo_Login_Cadastro.css";

import Logar from "../../components/Logar";
import Cadastrar_Se from "../../components/Cadastrar_Se";

export default function Login_Cadastro() {
  const Navegar = useNavigate();

  const [Tela_Atual_De_Login_Cadastro, setTela_Atual_De_Login_Cadastro] =
    useState(true);

  useEffect(() => {
    if (Cookies.get("token")) {
      alert("Você já está logado");
      Navegar("/");
    }
  }, [Tela_Atual_De_Login_Cadastro]);

  return (
    <div className="Corpo_Site">
      <div class="geral_style">
        <nav>
          <div class="logo">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 418.000000 86.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,86.000000) scale(0.100000,-0.100000)"
                fill="white"
                stroke="none"
              >
                <path d="M764 528 c-77 -182 -141 -336 -143 -341 -2 -5 7 -7 20 -5 19 2 31 22 68 115 l46 113 157 0 156 0 48 -115 c41 -98 51 -115 70 -115 l23 0 -28 68 c-225 540 -256 612 -270 612 -5 0 -71 -149 -147 -332z m216 96 c36 -86 65 -160 65 -165 0 -5 -60 -11 -132 -13 -91 -2 -133 1 -133 8 0 15 124 325 130 326 3 0 34 -70 70 -156z" />
                <path d="M37 833 c58 -150 285 -658 294 -658 11 0 296 640 298 668 1 5 -8 7 -20 5 -17 -2 -43 -57 -147 -305 -70 -166 -129 -299 -133 -295 -3 4 -61 141 -130 304 -110 263 -127 298 -146 298 -17 0 -21 -4 -16 -17z" />
                <path d="M1525 791 c-166 -41 -263 -226 -210 -406 13 -48 28 -70 79 -121 51 -51 73 -66 121 -79 71 -21 219 -16 278 9 l37 16 0 135 c0 128 -1 135 -20 135 -19 0 -20 -7 -20 -125 0 -147 3 -143 -124 -152 -113 -8 -172 12 -243 82 -40 41 -55 65 -69 110 -46 160 31 319 176 362 47 14 68 14 140 4 47 -6 95 -14 108 -17 27 -8 32 22 5 30 -81 23 -199 31 -258 17z" />
                <path d="M2068 484 c-110 -267 -123 -305 -105 -302 16 2 30 26 61 103 l41 100 141 3 142 3 43 -106 c36 -88 47 -105 65 -105 20 0 11 24 -105 302 -76 180 -133 304 -142 305 -10 2 -52 -88 -141 -303z m206 84 c31 -75 56 -139 56 -142 0 -3 -54 -6 -120 -6 -86 0 -120 3 -120 12 0 23 114 288 121 280 4 -4 32 -69 63 -144z" />
                <g fill="#ff0000" stroke="none">
                  <path d="M2600 235 c0 -193 2 -225 15 -225 13 0 15 32 15 225 0 193 -2 225 -15 225 -13 0 -15 -32 -15 -225z" />
                  <path d="M2797 413 c-4 -3 -7 -96 -7 -205 l0 -198 63 -1 c169 -3 223 20 262 114 48 116 -20 256 -141 286 -47 12 -167 15 -177 4z m191 -28 c79 -33 115 -91 115 -180 0 -118 -69 -184 -193 -184 -96 -1 -90 -14 -90 195 l0 184 65 0 c37 0 82 -7 103 -15z" />
                  <path d="M3264 411 c-2 -2 -4 -94 -4 -203 l0 -198 100 0 c60 0 100 4 100 10 0 6 -35 10 -85 10 l-85 0 0 95 0 95 69 0 c39 0 73 5 76 10 4 6 -22 10 -69 10 l-76 0 0 80 0 80 80 0 c50 0 80 4 80 11 0 10 -176 10 -186 0z" />
                  <path d="M3602 222 c-45 -109 -82 -201 -82 -205 0 -4 4 -7 8 -7 5 0 22 32 37 70 l28 70 97 0 97 0 27 -70 c15 -38 34 -70 41 -70 8 0 -18 75 -73 205 -47 113 -88 205 -91 205 -4 0 -43 -89 -89 -198z m131 55 c20 -50 37 -95 37 -99 0 -5 -36 -8 -80 -8 -44 0 -80 3 -80 7 0 14 73 193 79 193 3 0 23 -42 44 -93z" />
                  <path d="M3960 215 l0 -205 105 0 c63 0 105 4 105 10 0 6 -38 10 -95 10 l-95 0 0 195 c0 123 -4 195 -10 195 -6 0 -10 -75 -10 -205z" />
                </g>
              </g>
            </svg>
          </div>
          <div class="botao-entrar">
            <button
              onClick={() => {
                Navegar("/");
              }}
            >
              Home
            </button>
          </div>
        </nav>

        {Tela_Atual_De_Login_Cadastro ? (
          <Logar
            Definir_Tela_Atual_De_Login_Cadastro={
              setTela_Atual_De_Login_Cadastro
            }
          />
        ) : (
          <Cadastrar_Se
            Definir_Tela_Atual_De_Login_Cadastro={
              setTela_Atual_De_Login_Cadastro
            }
          />
        )}

        <footer>
          <p>&copy; 2024 Meu TCC. Todos os direitos reservados.</p>
          <p>
            <a href="#">Política de Privacidade</a> |{" "}
            <a href="#">Termos de Serviço</a> |<a href="#">Contato</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
