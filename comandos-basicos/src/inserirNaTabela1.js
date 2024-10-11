module.exports = async (conexao) => {
    const dados = await conexao.insert({
        titulo: "Livro legal",
        autor: "Fulano",
        edicao: 2,
        preco: 2.99
    }).into("livros")

    return dados
}