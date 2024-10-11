module.exports = async (conexao) => {
    const dados = conexao("livros").where("autor", "ana").delete()

    return dados
}