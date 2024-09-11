import { useState } from "react";

import Axios from "axios";
import Cookies from "js-cookie";

import Imagem_Home from "../img/Imagem_Home.png";

export default function Logar({ Definir_Tela_Atual_De_Login_Cadastro }) {
  const [Input_Nome_Do_Usuario, setInput_Nome_Do_Usuario] = useState("");
  const [Input_Senha_Do_Usuario, setInput_Senha_Do_Usuario] = useState("");

  const Enviar_Dados_De_Login_Para_Validacao_No_Servidor = () => {
    console.log(Input_Nome_Do_Usuario);
    console.log(Input_Senha_Do_Usuario);

    if (Input_Senha_Do_Usuario !== "" && Input_Nome_Do_Usuario !== "") {
      Axios.post(
        // "https://rvsprice-server.vercel.app/pesquisa-categoria-produto",
        // "http://localhost:5000/pesquisa-categoria-produto",
        "https://zvfmwc2c-5001.brs.devtunnels.ms/validar-login",
        { Usuario: Input_Nome_Do_Usuario, Senha: Input_Senha_Do_Usuario },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((Resposta) => {
        if (Resposta.data.erro) {
          console.log(Resposta.data.erro);
          alert("Usuario ou senha incorretos");
        } else {
          Cookies.set("token", Resposta.data.token);
          console.log(Resposta.data.token);
          Definir_Tela_Atual_De_Login_Cadastro(false);
        }
      });
    } else {
      if (Input_Senha_Do_Usuario == "" && Input_Nome_Do_Usuario == "") {
        alert("Campos não preenchidos");
      } else if (Input_Senha_Do_Usuario == "") {
        alert("Senha não preenchida");
      } else if (Input_Nome_Do_Usuario == "") {
        alert("Nome não preenchido");
      }
    }
  };

  return (
    <div>
      <form id="login-form">
        <div class="geral">
          <div class="esquerda">
            <h1>
              Faça login e adicione
              <br />
              vagas de emprego
            </h1>
            <img src={Imagem_Home} class="imagem-aguia" alt="" />
          </div>
          <div class="direita">
            <div class="card">
              <h1>LOGIN</h1>
              <div class="textfield">
                <label htmlFor="usuario">Usuario</label>
                <input
                  type="text"
                  name="usuario"
                  id="usuario"
                  placeholder="Usuario"
                  value={Input_Nome_Do_Usuario}
                  onChange={(e) => {
                    setInput_Nome_Do_Usuario(e.target.value);
                  }}
                  required
                />
              </div>
              <div class="textfield">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  value={Input_Senha_Do_Usuario}
                  onChange={(e) => {
                    setInput_Senha_Do_Usuario(e.target.value);
                  }}
                  placeholder="Senha"
                  required
                />
              </div>
              <div class="gg">
                <a href="#"></a>
                <button
                  class="botao"
                  type="button"
                  onClick={() => {
                    Enviar_Dados_De_Login_Para_Validacao_No_Servidor();
                  }}
                >
                  Entrar
                </button>
                <button
                  class="botao"
                  type="button"
                  onClick={() => {
                    Definir_Tela_Atual_De_Login_Cadastro(false);
                  }}
                >
                  Criar conta
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
