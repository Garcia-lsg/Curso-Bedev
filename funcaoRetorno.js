const calculaIdade = (ano, mes) => {
    const anoAtual = new Date().getFullYear()
    const mesAtual = new Date().getMonth() + 1

    
    const idadeAproximada = anoAtual - ano

    if (mesAtual >= mes) {
        return idadeAproximada
    }

    return idadeAproximada - 1
}

console.log(`Eu tenho ${calculaIdade(1997, 2)} anos`)