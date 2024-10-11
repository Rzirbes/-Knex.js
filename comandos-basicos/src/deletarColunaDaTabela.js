module.exports = async (conexao) => {
    const dados = await conexao.schema.alterTable("pessoas", (tabela) => {
        tabela.dropColumn("estaEmDia")
    });

    return dados
}