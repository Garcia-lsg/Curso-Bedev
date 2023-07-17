const lista = [
    {
        nome: 'Lucas',
        sobrenome: 'Garcia',
    },
    {
        nome: 'Gabrielly',
        sobrenome: 'Mansour',
    },
    {
        nome: 'Pedro',
        sobrenome: 'Garcia',
    },
    {
        nome: 'Ayla',
        sobrenome: 'Garcia',
    }
]

const listaNova = lista.map((item) => {
    return `${item.nome} ${item.sobrenome}`
})

console.log(listaNova)