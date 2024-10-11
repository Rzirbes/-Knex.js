module.exports = async (conexao) => {

    await conexao.schema.dropTableIfExists("livros")
}