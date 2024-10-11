const knexfile = require("../knexfile")
const knex = require("knex")(knexfile)

const criatTabela = require("../src/criarTabela")
const desafioTabelaPessoas = require("../src/desafioCriarTabela")
const excluirTabela = require("../src/deletarTabela")
const inserirNaTabela1 = require("../src/inserirNaTabela1")
const inserirNaTabela2 = require("../src/inserirNaTabela2")
const inserirNaTabela3 = require("../src/inserirNaTabela3")
const selecionarDaTabela1 = require("../src/selecionarDaTabela1")
const selecionarDaTabela2 = require("../src/selecionarDaTabela2")
const selecionarDaTabela3 = require("../src/selecionarDaTabela3")
const fazerPaginacao = require("../src/fazerPaginacao")
const selecionarPrimeiroElemento = require("../src/selecionarPrimeiroElemento")
const deletarDaTabela = require("../src/deletarDaTabela")
const desafioCriarTabela = require("../src/desafioCriarTabela")
const desafioResposta = require("../src/desafioResposta")
const inserirDadosNaTabelaPessoa = require("../src/inserirDadosNaTabelaPessoa")
const deletarColunaDaTabela = require("../src/deletarColunaDaTabela")
const alterarTabela = require("../src/alterarTabela")

async function contaElementos(nomeTabela) {
    const resposta = await knex.raw(`SELECT COUNT(*) as qtde FROM ${nomeTabela}`)
    return resposta[0][0].qtde
}

test("Deve criar Tabela", async () => {
    await criatTabela(knex)
    const tabelaExiste = await knex.schema.hasTable("livros")
    expect(tabelaExiste).toBe(true)
})
test("Deve criar a Tabela Pessoas", async () => {
    await desafioCriarTabela(knex)
    const tabelaExiste = await knex.schema.hasTable("pessoas")
    expect(tabelaExiste).toBe(true)
})

test("Deve deletar tabela", async () => {
    await excluirTabela(knex)
    const tabelaExiste = await knex.schema.hasTable("livros")
    expect(tabelaExiste).toBe(false)
})

test("Deve inserir um elemento na tabela", async () => {
    const dados = await inserirNaTabela1(knex)
    console.log(dados)
    expect(dados).toBeInstanceOf(Array)
    expect(dados).toHaveLength(1)
})

test("Deve inserir um outro elemento na tabela", async () => {
    const dados = await inserirNaTabela2(knex)
    console.log(dados)
    expect(dados).toBeInstanceOf(Array)
    expect(dados).toHaveLength(1)
})
test("Deve inserir três elementos na tabela", async () => {
    const qtdeAntes = await contaElementos("livros")
    console.log(qtdeAntes)
    await inserirNaTabela3(knex)
    const qtdeDepois = await contaElementos("livros")
    console.log(qtdeDepois)
    expect(qtdeDepois).toBe(qtdeAntes + 3)
})
test("Deve inserir três elementos na tabela pessoas", async () => {
    const qtdeAntes = await contaElementos("pessoas")
    console.log(qtdeAntes)
    await inserirDadosNaTabelaPessoa(knex)
    const qtdeDepois = await contaElementos("pessoas")
    console.log(qtdeDepois)
    expect(qtdeDepois).toBe(qtdeAntes + 4)
})

test("Deve selecionar elementos da tabela", async () => {
    const dados = await selecionarDaTabela1(knex)
    console.log(dados)
    expect(dados).toBeInstanceOf(Array)
})
test("Deve selecionar elementos da tabela com where", async () => {
    const dados = await selecionarDaTabela2(knex)
    console.log(dados)
    expect(dados).toBeInstanceOf(Array)
})
test("Deve selecionar outros elementos da tabela com where", async () => {
    const dados = await selecionarDaTabela3(knex)
    console.log(dados)
    expect(dados).toBeInstanceOf(Array)
})
test("Deve trazer umas página de dados", async () => {
    const dados = await fazerPaginacao(knex)
    console.log(dados)
    expect(dados).toBeInstanceOf(Array)
})
test("Deve trazer apenas o primeiro elemento", async () => {
    const dados = await selecionarPrimeiroElemento(knex)
    console.log(dados)
    expect(dados).toBeInstanceOf(Object)
})
test("Deve deletar elementos da tabela", async () => {
    const dados = await deletarDaTabela(knex)
    console.log(dados)
    expect(dados).toBeGreaterThan(0)
})
test("Deve alterar elementos da tabela", async () => {
    const valorAntes = await knex("livros").select().first()
    await alterarElementoDaTabela(knex)
    const valorDepois = await knex("livros").select().first()
    expect(valorAntes.prec).not.toBe(valorDepois.preco)
})

test("Criar tabela pessoas", async () => {
    await desafioResposta(knex)
    const tabelaexiste = await knex.schema.hasTable("pessoas")
    const elementos = await knex("pessoas").select()
    expect(tabelaexiste).toBe(true)
    expect(elementos).toHaveLength(4)
})

test("Deve delketar a coluan estaEmDia", async () => {
    const colunaExisteAntes = await knex.schema.hasColumn("pessoas", "estaEmDia")
    const dados = await deletarColunaDaTabela(knex)
    console.log(dados)
    const colunaExisteDepois = await knex.schema.hasColumn("pessoas", "estaEmDia")
    expect(colunaExisteAntes).toBe(true)
    expect(colunaExisteDepois).toBe(false)

})

test("deve Alterar estrutura da tabela pessoas", async () => {
    const colunaNomeExistia = await knex.schema.hasColumn("pessoas", "nome");
    const colunaNomeCompletoExistia = await knex.schema.hasColumn("pessoas", "nomeCompleto");
    const colunaAnoExistia = await knex.schema.hasColumn("pessoas", "anoNascimento");

    await alterarTabela(knex);

    const colunaNomeExiste = await knex.schema.hasColumn("pessoas", "nome");
    const colunaNomeCompletoExiste = await knex.schema.hasColumn("pessoas", "nomeCompleto");
    const colunaAnoExiste = await knex.schema.hasColumn("pessoas", "anoNascimento");

    expect(colunaNomeExistia).toBe(true);
    expect(colunaNomeCompletoExistia).toBe(false);
    expect(colunaAnoExistia).toBe(false);
    expect(colunaNomeExiste).toBe(false);
    expect(colunaNomeCompletoExiste).toBe(true);
    expect(colunaAnoExiste).toBe(true);
});



afterAll(() => {
    knex.destroy()
})