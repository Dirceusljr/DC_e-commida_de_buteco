let numeroDigitado = document.getElementById('numero')
const btnTabuada = document.getElementById('criar')
const tabuada = document.getElementById('tabuada')

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
}}

btnTabuada.addEventListener('click', (btnTabuada) => MostrarTabuada (btnTabuada))