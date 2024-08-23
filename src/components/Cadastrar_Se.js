import Imagem_Home from "../img/Imagem_Home.png";

export default function Cadastrar_Se({ Definir_Tela_Atual_De_Login_Cadastro }) {
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
                  required
                />
              </div>
              <div class="textfield">
                <label for="new-senha">Senha</label>
                <input
                  type="password"
                  id="new-Senhas"
                  name="new-senha"
                  placeholder="Senha"
                  required
                />
              </div>
              <div class="gg">
                <a href="#"></a>
                <button class="botao" type="submit">
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
