module.exports = async (conexao) => {
    const dados = await conexao("pessoas").insert([
        {
            nome: "Maria",
            estaEmDia: true,
        },
        {
            nome: "Paulo",
            estaEmDia: true,
        },
        {
            nome: "Ricardo",
            estaEmDia: true,
        },
        {
            nome: "Magali",
            estaEmDia: true,
        },
    ])

    return dados
}