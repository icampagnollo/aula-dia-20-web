function analisarIMCs ()
{
    var terminou = false
    var pessoasComIMCMaior30 = 0
    var totalpessoas = 0
    var somaIMCS = 0

    while(terminou == false)
    {
        totalpessoas++
        var peso = parsefloat (prompt('Qual seu peso?'))
        var altura = parsefloat(prompt('Qual sua altura?'))
        var imc = peso / altura ** 2
        somaIMCS += imc
        if (imc > 30) pessoasComIMCMaior30++
        alert('Peso da pessoa =' + imc)
        var desejaTerminar = prompt('Deseja Terminar? (S)im ou (N)ão')
        if (desejaTerminar == 'S' || desejaTerminar == 's')
        {
            terminou = true
            var mediaIMCs = (somaIMCS / totalpessoas).toFixed(2)
            alert(`Programa finalizado
            Quantidade de pessoas com IMC > 30: ${pessoasComIMCMaior30}
            Quantidade de pessoas avaliadas: ${totalpessoas}
            Média dos IMCs: ${mediaIMCs}
        `)
        }
    }
}