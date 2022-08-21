// 22 dias úteis trabalhados descontando o final de semana
// 20 reais a hora
// 8h diárias


/* as variáveis estão sendo declaradas dentro da função pq eu quero os valores no momento em que o botão for clicado
    APENAS qnd clico no botão a função é executada.
    isso impacta o processamento, principalmente em códigos robustos */


// tirar o texto de fundo
let label = document.getElementsByTagName('label')[0];
let input = document.getElementsByTagName('input')[0];

label.onclick = function () {
    label.style.display = 'none'; // info dentro do input some qnd clico dentro da caixinha
    input.focus(); 
}

input.onblur = function () {
    if(!this.value) label.style.display = 'block'
}

let label2 = document.getElementsByTagName('label')[1];
let input2 = document.getElementsByTagName('input')[1];

label2.onclick = function() {
    label2.style.display = 'none';
    input2.focus();
}

input2.onblur = function () {
    if(!this.value) label2.style.display = 'block';
}


const horasDiarias = 8  // alterar a quantidade de horas aqui, caso precise.

const calcularSalario = () => {   // arrow function
   const diasTrabalhados = document.querySelector('#dias').value   // js resgata tudo, não apenas o valor
                                                                    // o value resgata, literalmente, o valor fornecido pelo usuário no input do HTML
    const valorHora = document.querySelector('#salario_hora').value
    const valorDia = valorHora * 8   // 8h de trabalho
    const salarioMes = valorDia * diasTrabalhados
    const salarioTotal = document.querySelector('#salario_total')     // referenciar no salário do HTML
        
        salarioTotal.innerHTML = 'R$ ' + salarioMes.toFixed(2)  // += estou acrescentando ao valor que já existe um novo valor
                                                        // pontuando quantas casas quero dps da vírgula
                                    // += iria repetir o resultado infinitamente, mas só o igual e a concatenação já facilita o processo
}

function calcularValorHora() {
    
    const diasTrabalhados = document.querySelector('#dias').value
    const salarioTotal = document. querySelector('#salario_total').value
    const valorHora = (salarioTotal / diasTrabalhados) / 8  // valor dia
    const salarioHora = document.querySelector('#valor_hora')
    salarioHora.innerHTML = 'R$ ' + valorHora.toFixed(2)
        
}