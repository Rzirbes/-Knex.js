module.exports = async (conexao) => {
    const dados = await conexao("livros")
        .select()
        //.where("preco", "<", "5.00") //seleciona pelo resultado da expressão
        //.where("autor", "Ana")//Seleciona pelo valor exato de uma coluna
        .where({
            edicao: 2,
            autor: "Fulano"
        })
    return dados
}