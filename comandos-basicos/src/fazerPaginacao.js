module.exports = async (conexao) => {
    const dados = await conexao("livros").select().offset(1).limit(2)
    return dados
}