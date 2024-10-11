module.exports = async (conexao) => {
    const dados = await conexao("livros").insert([
        {
            titulo: "Livro verde",
            autor: "Ana",
            edicao: 2,
            preco: 2.99,
        },
        {
            titulo: "Livro Vermelho",
            autor: "Ana",
            edicao: 3,
            preco: 3.99,
        },
        {
            titulo: "Livro Amarelo",
            autor: "Ana",
            edicao: 5,
            preco: 4.99,
        },
    ])

    return dados
}