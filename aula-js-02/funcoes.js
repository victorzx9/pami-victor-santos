function SomaSimples () {
    return 3 + 4
}

console.log(SomaSimples())

function SomaComParametros(n1, n2) {
    return n1 + n2
}

console.log(SomaComParametros(3, 4))
console.log(SomaComParametros(10, 4))

//Função anônima
//Arrow Function
const Potencia = (n, e) => {
    console.log(`${n} elevado a ${e} é ${Math.pow(n, e)}`)
}

Potencia(3,2)

// Função que calcule a média do aluno e exiba o resultado
// media >= 6,00 = Aprovado
// media >= 4,00|| < 6,00 = Recuperação
// media < 4,00 = Reprovado

function CalcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    if (media >= 6.00) {
        return `Aprovado ${media.toFixed(2)}`;
        } else if (media >= 4.00 && media < 6.00) {
            return `Recuperação ${media.toFixed(2)} `;
        } else (media <4.00)
            return `Reprovado ${media.toFixed(2)}`;
        }

console.log(CalcularMedia(5.00, 6.00, 5.00))