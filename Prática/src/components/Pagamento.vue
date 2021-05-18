<template>
  <div>
    <header class="header">
      <div class="navbar">
        <div class="links">
          <a href="#">A PLATAFORMA</a>
          <a href="#">PLANOS</a>
          <a href="#">FAQ</a>
          <a href="#">SERVIÇOS</a>
          <a href="#">SOBRE NÓS</a>
          <a href="#">CONTATO</a>
        </div>
        <div class="buttons">
          <button type="button" class="login">LOGIN</button>
          <button type="button" class="assineAgora">Assine agora</button>
        </div>
      </div>
      <div class="pagamento">
        <h1>Pagamento</h1>
        <p>
          Tenha acesso ao melhor portal de informações do mercado lácteo do
          Brasil. <br />Tudo o que você precisa para tomar as melhores decisões
          em seu negócio!
        </p>
      </div>
    </header>
    <div class="cardsDados">
      <div class="dadosPessoais">
        <h3 class="titleDados">Confirme seus dados</h3>
        <form class="formDados">
          <div class="label">
            <label
              for="nome"
              :class="!$v.form.nome.required && submitted ? 'error' : ''"
              >Nome</label
            ><br />
            <input
              type="text"
              class="input"
              id="nome"
              name="nome"
              :class="!$v.form.nome.required && submitted ? 'inputError' : ''"
              v-model="$v.form.nome.$model"
              required
            /><br />
            <div
              class="error campoErro"
              v-if="!$v.form.nome.required && submitted"
            >
              Campo obrigatório
            </div>
          </div>

          <div class="label">
            <label
              :class="!$v.form.email.required && submitted ? 'error' : ''"
              for="email"
              >E-mail</label
            ><br />
            <input
              type="email"
              id="email"
              class="input"
              name="email"
              :class="!$v.form.email.required && submitted ? 'inputError' : ''"
              v-model="$v.form.email.$model"
              required
            /><br />
            <div
              class="error campoErro"
              v-if="!$v.form.email.required && submitted"
            >
              Campo obrigatório
            </div>
          </div>

          <div class="label">
            <label
              :class="!$v.form.cpf.required && submitted ? 'error' : ''"
              for="cpf"
              >CPF</label
            ><br />
            <input
              type="text"
              class="input"
              id="cpf"
              name="cpf"
              :class="!$v.form.cpf.required && submitted ? 'inputError' : ''"
              v-model="$v.form.cpf.$model"
              required
            /><br />
            <div
              class="error campoErro"
              v-if="!$v.form.cpf.required && submitted"
            >
              Campo obrigatório
            </div>
          </div>
          <div class="camposLado">
            <div class="label">
              <label
                :class="!$v.form.telefone.required && submitted ? 'error' : ''"
                for="telefone"
                >Telefone</label
              ><br />
              <input
                type="text"
                class="input"
                id="telefone"
                name="telefone"
                :class="
                  !$v.form.telefone.required && submitted ? 'inputError' : ''
                "
                v-model="$v.form.telefone.$model"
                required
              /><br />
              <div
                class="error campoErro"
                v-if="!$v.form.telefone.required && submitted"
              >
                Campo obrigatório
              </div>
            </div>

            <div class="label lado">
              <label
                :class="!$v.form.cep.required && submitted ? 'error' : ''"
                for="cep"
                >CEP</label
              ><br />

              <input
                type="text"
                class="input"
                id="cep"
                name="cep"
                :class="!$v.form.cep.required && submitted ? 'inputError' : ''"
                v-model="$v.form.cep.$model"
                required
              /><br />
              <div
                class="error campoErro"
                v-if="!$v.form.cep.required && submitted"
              >
                Campo obrigatório
              </div>
            </div>
          </div>
          <div class="label">
            <label
              :class="!$v.form.endereco.required && submitted ? 'error' : ''"
              for="endereco"
              >Endereco</label
            ><br />
            <input
              type="text"
              class="input"
              id="endereco"
              name="endereco"
              :class="
                !$v.form.endereco.required && submitted ? 'inputError' : ''
              "
              v-model="$v.form.endereco.$model"
              required
            /><br />
            <div
              class="error campoErro"
              v-if="!$v.form.endereco.required && submitted"
            >
              Campo obrigatório
            </div>
          </div>
          <div class="camposLado">
            <div class="label">
              <label
                :class="!$v.form.numero.required && submitted ? 'error' : ''"
                for="numero"
                >Número</label
              ><br />
              <input
                type="text"
                class="input"
                id="numero"
                name="numero"
                :class="
                  !$v.form.numero.required && submitted ? 'inputError' : ''
                "
                v-model="$v.form.numero.$model"
                required
              /><br />
              <div
                class="error campoErro"
                v-if="!$v.form.numero.required && submitted"
              >
                Campo obrigatório
              </div>
            </div>
            <div class="label lado">
              <label for="complemento">Complemento</label><br />
              <input
                type="text"
                class="input"
                id="complemento"
                name="complemento"
                v-model="$v.form.complemento.$model"
                required
              /><br />
            </div>
          </div>
        </form>
      </div>
      <hr />
      <div class="dadosPagamento">
        <h3 class="titleDados">Pagamento</h3>
        <h4>Plano selecionado: Mensal</h4>
        <div class="label">
          <label
            :class="!$v.form.nomeCartao.required && submitted ? 'error' : ''"
            for="nomeCartao"
            >Nome no cartão de crédito</label
          ><br />
          <input
            type="text"
            class="input"
            id="nomeCartao"
            name="nomeCartao"
            :class="
              !$v.form.nomeCartao.required && submitted ? 'inputError' : ''
            "
            v-model="$v.form.nomeCartao.$model"
            required
          /><br />
          <div
            class="error campoErro"
            v-if="!$v.form.nomeCartao.required && submitted"
          >
            Campo obrigatório
          </div>
        </div>
        <div class="label">
          <label
            :class="!$v.form.numCartao.required && submitted ? 'error' : ''"
            for="numCartao"
            >Número do cartão</label
          ><br />
          <input
            type="text"
            class="input"
            id="numCartao"
            name="numCartao"
            :class="
              !$v.form.numCartao.required && submitted ? 'inputError' : ''
            "
            v-model="$v.form.numCartao.$model"
            required
          /><br />
          <div
            class="error campoErro"
            v-if="!$v.form.numCartao.required && submitted"
          >
            Campo obrigatório
          </div>
        </div>
        <div class="camposLado">
          <div class="label">
            <label
              :class="
                !$v.form.validadeCartao.required && submitted ? 'error' : ''
              "
              for="validadeCartao"
              >Validade (MM/YY)</label
            ><br />
            <div>
              <input
                type="date"
                id="validadeCartao"
                name="validadeCartao"
                class="input"
                :class="
                  !$v.form.validadeCartao.required && submitted
                    ? 'inputError'
                    : ''
                "
                v-model="$v.form.validadeCartao.$model"
                required
              /><br />
            </div>

            <div
              class="error campoErro"
              v-if="!$v.form.validadeCartao.required && submitted"
            >
              Campo obrigatório
            </div>
          </div>
          <div class="label lado">
            <label
              :class="!$v.form.codCartao.required && submitted ? 'error' : ''"
              for="codCartao"
              >Código de segurança</label
            ><br />
            <input
              type="text"
              class="input"
              id="codCartao"
              name="codCartao"
              :class="
                !$v.form.codCartao.required && submitted ? 'inputError' : ''
              "
              v-model="$v.form.codCartao.$model"
              required
            /><br />
            <div
              class="error campoErro"
              v-if="!$v.form.codCartao.required && submitted"
            >
              Campo obrigatório
            </div>
          </div>
        </div>
        <button type="submit" class="submit" @click="submit">FINALIZAR</button>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";

import { required } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],

  data() {
    return {
      submitted: false,
      form: {
        nomeCartao: "",
        numCartao: "",
        validadeCartao: "",
        codCartao: "",
        nome: "",
        email: "",
        cpf: "",
        telefone: "",
        cep: "",
        endereco: "",
        numero: "",
        complemento: "",
      },
    };
  },
  validations: {
    form: {
      nomeCartao: { required },
      numCartao: { required },
      validadeCartao: { required },
      codCartao: { required },
      nome: { required },
      email: { required },
      cpf: { required },
      telefone: { required },
      cep: { required },
      endereco: { required },
      numero: { required },
      complemento: { required },
    },
  },
  methods: {
    submit() {
      console.log(this.form);
      this.submitted = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 35vh;
  background-image: url("../assets/header.png");
  padding: 10px;
}
.navbar {
  border-bottom: 1px solid white;
  height: 5vh;
  font-size: 1rem;
  display: flex;
  align-items: center;
  font: 14px;
  margin: 0 auto;
}
.links {
  margin: auto;
  text-align: center;
  margin-right: 5vw;
}
a {
  color: white;
  margin: 10px;
  text-decoration: none;
}

.buttons {
  float: right;
  margin-right: 25vw;
  font-family: OpenSans ExtraBold;
}
.login,
.assineAgora:hover {
  margin-right: 2vw;
  background-color: #215273;
  height: 43px;
  width: 106px;
  border-radius: 10px;
  border: 0;
  color: white;
}
.assineAgora,
.login:hover {
  margin-right: 2vw;
  background-color: #fff;

  height: 43px;
  width: 106px;
  border-radius: 10px;
  border: 0;
  color: #215273;
}
.pagamento {
  text-align: center;
  color: white;
  margin: 10vh auto;
}
.titleDados {
  font-size: 30px;
  color: #215273;
}
h4 {
  color: #215273;
}
.cardsDados {
  background-color: #fff;
  margin: 10vh auto;
  padding: 0vh 10vh 10vh 10vh;
  border: 10px;
  width: 50vw;
  display: flex;
  text-align: left;
  box-shadow: 0px 0px 10px 1px gray;
}
.dadosPessoais {
  width: 40%;
}
.dadosPagamento {
  width: 40%;
}

.label {
  margin-top: 3vh;
}
.error {
  color: red;
}
.campoErro {
  font-size: 0.75rem;
}

.inputError {
  border: 1px solid red !important;
}
.submit {
  margin-top: 4vh;
  float: right;
  background-color: #55c595;
  color: white;
  height: 3rem;
  width: 6rem;
  font-size: 14px;
  border-radius: 5px;
  border: 0;
  box-shadow: 0px 0px 10px 1px gray;
  cursor: pointer;
}
.input {
  height: 2rem;
  background-color: #f5f5f5;
  border: 0.2px;
  border-radius: 2px;
  width: 100%;
}
.mes {
  width: 2rem;
}
.ano {
  width: 2rem;
}
.camposLado {
  display: flex;
}
.lado {
  margin-left: 2rem;
}
</style>
