const { randomUUID } = require("crypto");
const clientes = require("./cliente.json");
const knex = require("./config/bd");

async function migrar() {
  const dados = [];

  for await (var cliente of clientes) {
    console.log(cliente.COMPLEMENTO1);
    const obj = {
      IDEMPRESA: "ff228977-fca8-4bb6-83fa-51470e77a505",
      NOME: "",
      CPF_CNPJ: "",
      ENDERECO: "",
      COMPLEMENTO: "",
      BAIRRO: "",
      CELULAR: "",
      EMAIL: "",
      DATANASCIMENTO: "2022-01-01",
    };

    obj.NOME = cliente.NOME.replace(/[^\w\s]/gi, '');
    obj.CPF_CNPJ = cliente.CPF == ".   .   -" ? cliente.CNPJ : cliente.CPF;
    obj.ENDERECO = cliente.ENDERECO1.replace(/[^\w\s]/gi, '');
    obj.COMPLEMENTO = cliente.COMPLEMENTO1.toString().replace(/[^\w\s]/gi, '');
    obj.BAIRRO = cliente.BAIRRO1.replace(/[^\w\s]/gi, '');
    obj.CELULAR = cliente.TELEFONE1;
    obj.EMAIL = cliente.EMAILCLIENTE;
    obj.DATANASCIMENTO = cliente.DATANASCIMENTOCLIENTE = "2022-01-01".split(" ")[0].split(".").reverse().join("-");

    dados.push(obj);

  }
  await knex.table("cliente").insert(dados);
  console.log("finalizado")
}

migrar();

// // const teste = cliente.map(async (e) => {
// //   e["IDEMPRESA"] = "32871961-1dac-444f-8963-7be72d95b18d";

// //   e["CPF_CNPJ"] = e.CPF || e.CNPJ;
// //   e["ENDERECO"] = e.ENDERECO1;
// //   e["NUMERO"] = e.NUMEROENDER;
// //   e["COMPLEMENTO"] = e.COMPLEMENTO1;
// //   e["BAIRRO"] = e.BAIRRO1;
// //   e["CELULAR"] = e.TELEFONE1;
// //   e["EMAIL"] = e.EMAILCLIENTE;
// //   e["DATANASCIMENTO"] = e.DATANASCIMENTOCLIENTE;

// //   console.log(e.COD_BARRAS);

// //   delete e.APELIDO;
// //   delete e.CONTATO;
// //   delete e.DATACADASTRO;
// //   delete e.TELEFONE2;
// //   delete e.FAX;
// //   delete e.RAMAL;
// //   delete e.IE;
// //   delete e.CEP1;
// //   delete e.ENDERECO2;
// //   delete e.COMPLEMENTO2;
// //   delete e.CIDADE2;
// //   delete e.CEP2;
// //   delete e.REFERENCIA1;
// //   delete e.TELEFONEREFERENCIA1;
// //   delete e.FLAGSERASA;
// //   delete e.FLAGSPC;
// //   delete e.FLAGTELECHEQUE;
// //   delete e.FLAGBLOQUEADO;
// //   delete e.REFERENCIA2;
// //   delete e.TELEFONEREFERENCIA2;
// //   delete e.RENDACLIENTE;
// //   delete e.CREDITOCLIENTE;
// //   delete e.IDCLASSIFICACAO;
// //   delete e.IDTIPOREGIAO;
// //   delete e.IDPROFISSAOATIVIDADE;
// //   delete e.IDTRANSPORTADORA;
// //   delete e.IDFUNCIONARIO;
// //   delete e.EMPREGOCLIENTE;
// //   delete e.ENDERECOEMPREGOCLIENTE;
// //   delete e.TELEFONEEMPREGOCLIENTE;
// //   delete e.CARGOCLIENTE;
// //   delete e.ESTADOCIVIL;
// //   delete e.NATURALIDADE;
// //   delete e.CONJUGE;
// //   delete e.DATANASCCONJUGE;
// //   delete e.CPFCONJUGE;
// //   delete e.RGCONJUGE;
// //   delete e.RENDACONJUGE;
// //   delete e.EMPREGOCONJUGE;
// //   delete e.DATAADMISSAOCONJUGE;
// //   delete e.CARGOCONJUGE;
// //   delete e.TELEFONCONJUGE;
// //   delete e.FILIACAO;
// //   delete e.NOMECONTATO;
// //   delete e.ATENDIDOCONTATO;
// //   delete e.DATARETORNOCONTATO;
// //   delete e.DETALHESCONTATO;
// //   delete e.COD_MUN_IBGE;
// //   delete e.CPF;
// //   delete e.CNPJ;
// //   delete e.ENDERECO1;
// //   delete e.COMPLEMENTO1;
// //   delete e.NUMEROENDER;
// //   delete e.BAIRRO1;
// //   delete e.TELEFONE1;
// //   delete e.EMAILCLIENTE;
// //   delete e.DATANASCIMENTOCLIENTE;
// //   delete e.UF2;

// //   const restorno = await knex("cliente")
// //     .insert(e)
// //     .where("IDEMPRESA", "=", "32871961-1dac-444f-8963-7be72d95b18d");
// //   console.log(restorno);

// //   return e;
// });
