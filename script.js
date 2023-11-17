let numeroDigitado = document.getElementById('numero')
const btnTabuada = document.getElementById('criar')
const tabuada = document.getElementById('tabuada')
const btnLimpar = document.getElementById('limpar')

function MostrarTabuada (e) {
    e.preventDefault();
        let i=1;
        while (i<=10) {
            // let resultado = numeroDigitado*i;
            let lista = document.createElement('p')
            lista.innerHTML = `
                ${numeroDigitado.value} x ${i} = ${Number(numeroDigitado.value * i)}            `
            tabuada.appendChild(lista)
        i++
}
numeroDigitado.value =''
}

function Limpartela() {
    tabuada.innerHTML = ''
}

btnTabuada.addEventListener('click', (btnTabuada) => MostrarTabuada (btnTabuada))
btnLimpar.addEventListener('click', Limpartela)