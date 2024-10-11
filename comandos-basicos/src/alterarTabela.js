module.exports = async (conexao) => {
    await conexao.schema.alterTable("pessoas", (tabela) => {

        tabela.renameColumn("nome", "nomeCompleto");

    });
    await conexao.schema.alterTable("pessoas", (tabela) => {

        tabela.string("nomeCompleto", 100).alter();

        tabela.integer("anoNascimento");
    });
}