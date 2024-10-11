module.exports = async (conexao) => {
    const dados = await conexao
        .select() //seleciona todos os campos
        //.select("titulo")//selecionar um único campo
        //.select(["titulo", "preco"])//selecionar multiplos campos
        .from("livros")
    return dados
}