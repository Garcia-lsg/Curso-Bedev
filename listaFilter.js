const produtos = [
    {
        nome: 'Coxão Mole',
        qtd: '1 KG',
        preco: 'R$ 37,00'
    },
    {
        nome: 'Picanha',
        qtd: '1 KG',
        preco: 'R$ 57,00'
    },
    {
        nome: 'Pacuzinho',
        qtd: '1 KG',
        preco: 'R$ 32,00'
    },
    {
        nome: 'Coxão Duro',
        qtd: '1 KG',
        preco: 'R$ 30,00'
    },
]

const termo = 'picanha'

const produtosFiltrados = produtos.filter((produto) => {
    return (
        produto.nome.toLowerCase().includes(termo.toLocaleLowerCase())
        || produto.qtd.toLowerCase().includes(termo.toLocaleLowerCase())
        || produto.preco.toLowerCase().includes(termo.toLocaleLowerCase())
    )

})

console.log(produtosFiltrados)