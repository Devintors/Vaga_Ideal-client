import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";
import Axios from "axios";

import "./style.css";
import "./Estilo_Formulario.css";

export default function Cadastro_De_Vaga() {
  const Navegar = useNavigate();

  const [Visibilidade_Do_Botao, setVisibilidade_Do_Botao] = useState(true);

  const [Cadastro_De_Vaga_Primeiro_Nome, setCadastro_De_Vaga_Primeiro_Nome] =
    useState("");
  const [Cadastro_De_Vaga_Cidade, setCadastro_De_Vaga_Cidade] = useState("");
  const [Cadastro_De_Vaga_Email, setCadastro_De_Vaga_Email] = useState("");
  const [Cadastro_De_Vaga_Celular, setCadastro_De_Vaga_Celular] = useState("");
  const [Cadastro_De_Vaga_Nome_Da_Loja, setCadastro_De_Vaga_Nome_Da_Loja] =
    useState("");
  const [
    Cadastro_De_Vaga_Requisito_Principal,
    setCadastro_De_Vaga_Requisito_Principal,
  ] = useState("");
  const [Cadastro_De_Vaga_Funcao, setCadastro_De_Vaga_Funcao] = useState("");
  const [
    Cadastro_De_Vaga_Horario_Entrada,
    setCadastro_De_Vaga_Horario_Entrada,
  ] = useState("");
  const [Cadastro_De_Vaga_Horario_Saida, setCadastro_De_Vaga_Horario_Saida] =
    useState("");
  const [Cadastro_De_Vaga_Valor_Inicial, setCadastro_De_Vaga_Valor_Inicial] =
    useState("");
  const [Cadastro_De_Vaga_Logo, setCadastro_De_Vaga_Logo] = useState("");
  const [
    Cadastro_De_Vaga_Link_Formulario,
    setCadastro_De_Vaga_Link_Formulario,
  ] = useState("");
  const [Cadastro_De_Vaga_Idade_Inicial, setCadastro_De_Vaga_Idade_Inicial] =
    useState("");

  const Enviar_Dados_De_Cadastro_De_Login_Para_Servidor = () => {
    if (
      Cadastro_De_Vaga_Primeiro_Nome !== "" &&
      Cadastro_De_Vaga_Email !== "" &&
      Cadastro_De_Vaga_Celular !== "" &&
      Cadastro_De_Vaga_Nome_Da_Loja !== "" &&
      Cadastro_De_Vaga_Requisito_Principal !== "" &&
      Cadastro_De_Vaga_Funcao !== "" &&
      Cadastro_De_Vaga_Horario_Entrada !== "" &&
      Cadastro_De_Vaga_Horario_Saida !== "" &&
      Cadastro_De_Vaga_Valor_Inicial !== "" &&
      Cadastro_De_Vaga_Logo !== "" &&
      Cadastro_De_Vaga_Idade_Inicial !== "" &&
      Cadastro_De_Vaga_Cidade !== ""
    ) {
      var Dados_Para_Envio = {
        Primeiro_Nome: Cadastro_De_Vaga_Primeiro_Nome,
        Cidade: Cadastro_De_Vaga_Cidade,
        Email: Cadastro_De_Vaga_Email,
        Celular: Cadastro_De_Vaga_Celular,
        Nome_Da_Loja: Cadastro_De_Vaga_Nome_Da_Loja,
        Requisito_Principal: Cadastro_De_Vaga_Requisito_Principal,
        Vaga: Cadastro_De_Vaga_Funcao,
        Horario_Inicial: Cadastro_De_Vaga_Horario_Entrada,
        Horario_Final: Cadastro_De_Vaga_Horario_Saida,
        Valor_Inicial: Cadastro_De_Vaga_Valor_Inicial,
        Logo: Cadastro_De_Vaga_Logo,
        Link_Formulario: Cadastro_De_Vaga_Link_Formulario,
        Idade_Minima: Cadastro_De_Vaga_Idade_Inicial,
      };
      setVisibilidade_Do_Botao(false);
      Axios.post(
        // "https://rvsprice-server.vercel.app/pesquisa-categoria-produto",
        // "http://localhost:5000/pesquisa-categoria-produto",
        "https://zvfmwc2c-5000.brs.devtunnels.ms/cadastrar-vaga-emprego",
        { Dados_Para_Envio },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((Resposta) => {
        setCadastro_De_Vaga_Primeiro_Nome("");
        setCadastro_De_Vaga_Cidade("");
        setCadastro_De_Vaga_Email("");
        setCadastro_De_Vaga_Celular("");
        setCadastro_De_Vaga_Nome_Da_Loja("");
        setCadastro_De_Vaga_Requisito_Principal("");
        setCadastro_De_Vaga_Funcao("");
        setCadastro_De_Vaga_Horario_Entrada("");
        setCadastro_De_Vaga_Horario_Saida("");
        setCadastro_De_Vaga_Valor_Inicial("");
        setCadastro_De_Vaga_Logo("");
        setCadastro_De_Vaga_Link_Formulario("");
        setCadastro_De_Vaga_Idade_Inicial("");
        setVisibilidade_Do_Botao(true);
        alert(Resposta.data.Resultado);
      });
    } else {
      alert("Existem campos não preenchidos");
    }
  };

  useEffect(() => {
    if (!Cookies.get("token")) {
      alert("Perfil não logado");
      Navegar("/Login");
    }
  }, []);

  return (
    <div className="Corpo_Site">
      <div className="geral_style">
        <nav>
          <div className="logo">
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
          <div className="botao-entrar">
            {Cookies.get("token") ? (
              <button
                onClick={() => {
                  Cookies.remove("token");
                  window.location.reload();
                }}
              >
                Sair
              </button>
            ) : (
              <button
                onClick={() => {
                  Navegar("/Login");
                }}
              >
                Entrar
              </button>
            )}
          </div>
        </nav>

        <div className="container">
          <div className="form-image">
            <img src="/inicio-primeira-tela/img/imagem-inicio.png" alt="" />
          </div>
          <div className="form">
            <form action="#">
              <div className="form-header">
                <div className="title">
                  <h1>Cadastrar </h1>
                </div>
                <div className="login-button">
                  <button
                    onClick={() => {
                      Navegar("/");
                    }}
                  >
                    <span>Home</span>
                  </button>
                </div>
              </div>

              <div className="input-group">
                <div className="input-box">
                  <label htmlFor="firstname">Primeiro Nome:</label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    value={Cadastro_De_Vaga_Primeiro_Nome}
                    onChange={(e) => {
                      setCadastro_De_Vaga_Primeiro_Nome(e.target.value);
                    }}
                    placeholder="Digite seu primeiro nome"
                    required
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="lastname">Cidade:</label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    value={Cadastro_De_Vaga_Cidade}
                    onChange={(e) => {
                      setCadastro_De_Vaga_Cidade(e.target.value);
                    }}
                    placeholder="Digite sua cidade"
                    required
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="email">E-mail:</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={Cadastro_De_Vaga_Email}
                    onChange={(e) => {
                      setCadastro_De_Vaga_Email(e.target.value);
                    }}
                    placeholder="Digite seu e-mail"
                    required
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="number">Celular:</label>
                  <input
                    id="number"
                    type="number"
                    name="number"
                    value={Cadastro_De_Vaga_Celular}
                    onChange={(e) => {
                      setCadastro_De_Vaga_Celular(e.target.value);
                    }}
                    placeholder="(xx) xxxx-xxxx"
                    required
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="Nome_Da_Loja">Nome da loja:</label>
                  <input
                    id="Nome_Da_Loja"
                    type="Nome_Da_Loja"
                    name="Nome_Da_Loja"
                    value={Cadastro_De_Vaga_Nome_Da_Loja}
                    onChange={(e) => {
                      setCadastro_De_Vaga_Nome_Da_Loja(e.target.value);
                    }}
                    placeholder="Digite o nome da loja"
                    required
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="Requisito_Principal">
                    Requisito Principal:
                  </label>
                  <input
                    id="Requisito_Principal"
                    type="Requisito_Principal"
                    name="Requisito_Principal"
                    value={Cadastro_De_Vaga_Requisito_Principal}
                    onChange={(e) => {
                      setCadastro_De_Vaga_Requisito_Principal(e.target.value);
                    }}
                    placeholder="Digite o principal requisito"
                    required
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="Nome_Da_Vaga">Vaga:</label>
                  <input
                    id="Nome_Da_Vaga"
                    type="Nome_Da_Vaga"
                    name="Nome_Da_Vaga"
                    value={Cadastro_De_Vaga_Funcao}
                    onChange={(e) => {
                      setCadastro_De_Vaga_Funcao(e.target.value);
                    }}
                    placeholder="Digite a função da vaga"
                    required
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="Horario_De_Trabalho">Horário:</label>
                  <div className="horario">
                    <input
                      id="Horario_De_Trabalho"
                      type="time"
                      name="Horario_De_Trabalho"
                      value={Cadastro_De_Vaga_Horario_Entrada}
                      onChange={(e) => {
                        setCadastro_De_Vaga_Horario_Entrada(e.target.value);
                      }}
                      placeholder="Digite o nome"
                      required
                    />
                    <input
                      id="Horario_De_Trabalho"
                      type="time"
                      name="Horario_De_Trabalho"
                      value={Cadastro_De_Vaga_Horario_Saida}
                      onChange={(e) => {
                        setCadastro_De_Vaga_Horario_Saida(e.target.value);
                      }}
                      placeholder="Digite o nome"
                      required
                    />
                  </div>
                </div>

                <div className="input-box">
                  <label htmlFor="Valor_Inicial">Valor inicial:</label>
                  <input
                    id="Valor_Inicial"
                    type="Valor_Inicial"
                    name="Valor_Inicial"
                    value={Cadastro_De_Vaga_Valor_Inicial}
                    onChange={(e) => {
                      setCadastro_De_Vaga_Valor_Inicial(e.target.value);
                    }}
                    placeholder="Digite o valor"
                    required
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="Logo">Logo:</label>
                  <input
                    id="Logo"
                    type="file"
                    onChange={(e) => {
                      const Arquivo_Recebido = e.target.files[0];
                      const Leitor_De_Arquivo = new FileReader();

                      Leitor_De_Arquivo.onload = () => {
                        const Imagem_Em_Texto = Leitor_De_Arquivo.result;

                        setCadastro_De_Vaga_Logo(Imagem_Em_Texto);
                      };

                      Leitor_De_Arquivo.readAsDataURL(Arquivo_Recebido);
                    }}
                    required
                    className="file-input"
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="Link_Formulario">Link do formulario:</label>
                  <input
                    id="Link_Formulario"
                    type="Link_Formulario"
                    name="Link_Formulario"
                    value={Cadastro_De_Vaga_Link_Formulario}
                    onChange={(e) => {
                      setCadastro_De_Vaga_Link_Formulario(e.target.value);
                    }}
                    placeholder="Link do formulario"
                  />
                </div>
              </div>

              <div className="gender-inputs">
                <div className="gender-title">
                  <h6>Idade minima:</h6>
                </div>

                <div className="gender-group">
                  <div className="gender-input">
                    <input
                      id="none"
                      type="radio"
                      name="gender"
                      value={14}
                      onChange={(e) => {
                        setCadastro_De_Vaga_Idade_Inicial(e.target.value);
                      }}
                    />
                    <label htmlFor="none">14 anos</label>
                  </div>
                  <div className="gender-input">
                    <input
                      id="female"
                      type="radio"
                      name="gender"
                      value={16}
                      onChange={(e) => {
                        setCadastro_De_Vaga_Idade_Inicial(e.target.value);
                      }}
                    />
                    <label htmlFor="female">16 anos</label>
                  </div>

                  <div className="gender-input">
                    <input
                      id="male"
                      type="radio"
                      name="gender"
                      value={18}
                      onChange={(e) => {
                        setCadastro_De_Vaga_Idade_Inicial(e.target.value);
                      }}
                    />
                    <label htmlFor="male">18 anos</label>
                  </div>

                  <div className="gender-input">
                    <input
                      id="others"
                      type="radio"
                      name="gender"
                      value={24}
                      onChange={(e) => {
                        setCadastro_De_Vaga_Idade_Inicial(e.target.value);
                      }}
                    />
                    <label htmlFor="others">24 anos</label>
                  </div>
                </div>
              </div>

              <div className="continue-button">
                <button
                  style={
                    Visibilidade_Do_Botao
                      ? {}
                      : {
                          backgroundColor: "gray",
                          cursor: "progress",
                        }
                  }
                  type="button"
                  onClick={() => {
                    if (Visibilidade_Do_Botao) {
                      Enviar_Dados_De_Cadastro_De_Login_Para_Servidor();
                    }
                  }}
                >
                  {!Visibilidade_Do_Botao ? (
                    <i className="Aniamcao_De_Girar_Infinita fa-solid fa-spinner"></i>
                  ) : (
                    "Continuar"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

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
