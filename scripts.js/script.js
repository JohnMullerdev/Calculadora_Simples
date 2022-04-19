function calcular(n1, n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n1 = parserFloat(document.getElementById("n2").value)

    Selector = document.getElementById("selector").value

    switch(Selector){
        case'+':
            calculo = (n1 + n2)
            document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} + ${n2} é = ${calculo}`
            break
            
            case '-':
            calculo = (n1 - n2)
            document.getElementById("resultado").innerHTML = `O resultado da subtração de ${n1} - ${n2} é = ${calculo}`
            break

            case '/':
                calculo = (n1 / n2)
                if(Number.isNaN(calculo)){
                document.getElementById("resultado").innerHTML = `Insira um divisivel válido!` 
                } else { document.getElementById("resultado").innerHTML = `O resultado da divisao de ${n1} / ${n2} é = ${calculo}`
            break
                }
                
    }
}