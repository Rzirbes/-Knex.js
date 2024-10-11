module.exports = async (conexao) => {
    const dados = await conexao("livros").select().first().where("autor", "Fulano")
    
    return dados
}