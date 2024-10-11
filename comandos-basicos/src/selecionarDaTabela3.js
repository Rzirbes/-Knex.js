module.exports = async (conexao) => {
    const dados = await conexao("livros")
        .select()
        .whereNot("id", 5)
        // .whereIn("id", [32, 45, 44, 8, 5, 3, 1])
        // .whereNotIn("id", [32, 45, 44, 8, 5, 3, 1])
        // .whereBetween("preco", [3, 5])
        // .whereNotBetween("preco", [3, 5])
        // .whereNull("preco")
        // .whereNotNull("preco")
        // .andWhere("preco", ">", "3.00")
        .orWhere("preco", ">", "3.00")
    return dados
}