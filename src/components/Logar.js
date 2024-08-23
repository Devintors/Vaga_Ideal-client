import Imagem_Home from "../img/Imagem_Home.png";

export default function Logar({ Definir_Tela_Atual_De_Login_Cadastro }) {
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
                <label for="usuario">Usuario</label>
                <input
                  type="text"
                  name="usuario"
                  placeholder="Usuario"
                  required
                />
              </div>
              <div class="textfield">
                <label for="senha">Senha</label>
                <input
                  type="password"
                  id="Senhas"
                  name="senha"
                  placeholder="Senha"
                  required
                />
              </div>
              <div class="gg">
                <a href="#"></a>
                <button class="botao" type="submit">
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
