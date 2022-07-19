let q1_input = document.getElementById('q1')
let q2_input = document.getElementById('q2')
let trabalho_input = document.getElementById('trabalho')
let calcular = document.getElementById('calcular')
let rendimento;
let imprimir = document.getElementById('imprimir')

calcular.addEventListener('click', ()=>{
    q1 = q1_input.value
    q2 = q2_input.value
    trabalho = trabalho_input.value

    if(q1 != '' && q2 != ''){
        rendimento = ((q1-q2)/q1)*100
        imprimir.innerHTML=`O rendimento é de ${rendimento}%`
    }
    else if(q1 != '' && trabalho != ''){
        rendimento = (trabalho/q1)*100
        imprimir.innerHTML=`O rendimento é de ${rendimento}%`
    }
    else if(q2 != '' && trabalho != ''){
        rendimento = (trabalho/(trabalho-q2))*100
        imprimir.innerHTML=`O rendimento é de ${rendimento}%`
    }
    else{
        imprimir.innerHTML=`Precisamos de mais informações`
    }
})