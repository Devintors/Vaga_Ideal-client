import { useState } from "react";

import Axios from "axios";
import Cookies from "js-cookie";

import Imagem_Home from "../img/Imagem_Home.png";

export default function Cadastrar_Se({ Definir_Tela_Atual_De_Login_Cadastro }) {
  const [Input_Nome_Do_Usuario, setInput_Nome_Do_Usuario] = useState("");
  const [Input_Senha_Do_Usuario, setInput_Senha_Do_Usuario] = useState("");

  const Enviar_Dados_De_Cadastro_De_Login_Para_Servidor = () => {
    console.log(Input_Nome_Do_Usuario);
    console.log(Input_Senha_Do_Usuario);

    if (Input_Senha_Do_Usuario !== "" && Input_Nome_Do_Usuario !== "") {
      Axios.post(
        // "https://rvsprice-server.vercel.app/pesquisa-categoria-produto",
        // "http://localhost:5000/pesquisa-categoria-produto",
        "https://zvfmwc2c-5001.brs.devtunnels.ms/cadastrar-usuario",
        { Usuario: Input_Nome_Do_Usuario, Senha: Input_Senha_Do_Usuario },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((Resposta) => {
        if (Resposta.data.resultado == "true") {
          alert("Usuario já existente");
          setInput_Nome_Do_Usuario("");
          setInput_Senha_Do_Usuario("");
          Definir_Tela_Atual_De_Login_Cadastro(true);
        } else {
          console.log(Resposta.data.token);
          setInput_Nome_Do_Usuario("");
          setInput_Senha_Do_Usuario("");
          Cookies.set("token", Resposta.data.token, { expires: 60 });
          Definir_Tela_Atual_De_Login_Cadastro(true);
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
      <form id="create-account-form" class="Criar-conta">
        <div class="geral">
          <div class="esquerda">
            <h1>
              Crie sua conta para adicionar
              <br />
              vagas de emprego
            </h1>
            <img src={Imagem_Home} class="imagem-aguia" alt="" />
          </div>
          <div class="direita">
            <div class="card">
              <h1>CRIAR CONTA</h1>
              <div class="textfield">
                <label for="new-usuario">Usuario</label>
                <input
                  type="text"
                  name="new-usuario"
                  placeholder="Usuario"
                  value={Input_Nome_Do_Usuario}
                  onChange={(e) => {
                    setInput_Nome_Do_Usuario(e.target.value);
                  }}
                  required
                />
              </div>
              <div class="textfield">
                <label for="new-senha">Senha</label>
                <input
                  type="password"
                  id="new-Senhas"
                  name="new-senha"
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
                    Enviar_Dados_De_Cadastro_De_Login_Para_Servidor();
                  }}
                >
                  Registrar
                </button>
                <button
                  class="botao"
                  type="button"
                  onClick={() => {
                    Definir_Tela_Atual_De_Login_Cadastro(true);
                  }}
                >
                  Voltar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
