const { randomUUID } = require("crypto");
const produtos = require("./produtos.json");
const knex = require("./config/bd");

const teste = produtos.map(async (e) => {
  e["IDEMPRESA"] = "ff228977-fca8-4bb6-83fa-51470e77a505";

  e["NOME"] = e.NOMEPRODUTO;
  e["VALORVENDA"] = e.VALORVENDA1;
  e["COD_BARRAS"] = e.CODBARRA;
  e["Ncm"] = e.NCMSH;
  e["TIPO"] = 'ALUGUEL';
  e["TipoPeca"] = 0;
  e["VALORALUGUEL"] = 0.00;

  console.log(e.COD_BARRAS);

  delete e.DATACADASTRO;
  delete e.ALIQCOFINS;
  delete e.ALIQPIS;
  delete e.CODPRODUTOFORNECEDOR;
  delete e.COMISSAO;
  delete e.CSTPISCONFIS;
  delete e.ENCARGOSPRODUTOS;
  delete e.ESTOQUEMANUAL;
  delete e.EXTIPI;
  delete e.FLAGBAIXAESTMT;
  delete e.FLAGDECIMALREND;
  delete e.FRETEPRODUTO;
  delete e.ICMS;
  delete e.IDCLASSIFICACAO;
  delete e.IDCST;
  delete e.IDGRUPOCATEGORIA;
  delete e.IDLOTE;
  delete e.IDMARCA;
  delete e.IDMOEDA;
  delete e.IDSTATUS;
  delete e.IDUNIDADE;
  delete e.IPI;
  delete e.LOCALIZACAO;
  delete e.MARGEMLUCRO;
  delete e.MULTAREND;
  delete e.OBSERVACAO;
  delete e.PESO;
  delete e.PORCENCARGOS;
  delete e.PORCFRETE;
  delete e.PORCMARGEMLUCRO;
  delete e.PORCVENDA2;
  delete e.PORCVENDA3;
  delete e.QUANTIDADEMINIMA;
  delete e.VALORCUSTOFINAL;
  delete e.VALORCUSTOINICIAL;
  delete e.VALORVENDA2;
  delete e.VALORVENDA3;
  delete e.CODBARRA;
  delete e.NCMSH;
  delete e.VALORVENDA1;
  delete e.NOMEPRODUTO;
  delete e.IDPRODUTO;

  const restorno = await knex("produtos")
    .insert(e)
    .where("IDEMPRESA", "=", "32871961-1dac-444f-8963-7be72d95b18d");

  return e;
});
