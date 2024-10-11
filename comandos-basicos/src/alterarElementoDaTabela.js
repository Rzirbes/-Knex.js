module.exports = async (conexao) => {
    await conexao("livros").where("id", 12).update({
        preco: 28.99
    })
}