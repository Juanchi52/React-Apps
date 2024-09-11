const prefijos=[93,83,11,15]
const validador = (valor) => {
    const inicio = Number(valor.substring(0,2))
    const evaluar = prefijos.indexOf(inicio)
    return evaluar >=0 && valor.length >=9 && valor.length <=10
}

export default validador