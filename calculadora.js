function calculadora() {

    const operacao = Number(prompt('Bem vindo a minha Calculadora Online! \n Digite a operação: \n 1 - Adição (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão (/) \n 5 - Módulo (%) \n 6 - Potenciação (**) '));

    if (!operacao || operacao >= 7) {
        alert('Erro! - Digite uma opção válida!');
        calculadora();
    } else {
        let valor1 = Number(prompt('Digite o primeiro valor: \n'));
        let valor2 = Number(prompt('Digite o segundo valor: \n'));
        let result;
        if (!valor1 || !valor2) {
            alert('Erro! - Digite valores válidos!');
            calculadora();
        } else {
            function soma() {
                result = valor1 + valor2;
                alert(`${valor1} + ${valor2} = ${result}`);
                nova_operacao();
            }

            function subtracao() {
                result = valor1 - valor2;
                alert(`${valor1} - ${valor2} = ${result}`);
                nova_operacao();
            }

            function multiplicacao() {
                result = valor1 * valor2;
                alert(`${valor1} * ${valor2} = ${result}`);
                nova_operacao();
            }

            function divisao() {
                result = valor1 / valor2;
                alert(`${valor1} / ${valor2} = ${result}`);
                nova_operacao();
            }

            function modulo() {
                result = valor1 % valor2;
                alert(`O módulo de ${valor1} divido por ${valor2} é = ${result}`);
                nova_operacao();
            }

            function pot() {
                result = valor1 ** valor2;
                alert(`${valor1} elevado a ${valor2} = ${result}`);
                nova_operacao();
            }
        }
    }

    function nova_operacao() {
        let opcao = Number(prompt('Deseja fazer uma nova operação: \n 1 - Sim \n 2 - Não'));
        if (!opcao || opcao >= 3) {
            alert('Erro! - Digite um valor válido!')
            nova_operacao(); 
        } else {
            if (opcao == 1) {
                calculadora();
            } else {
                alert('Obrigado por usar minha calculadora!');
            }
        }
    }
    switch (operacao) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisao();
            break;
        case 5:
            modulo();
            break;
        case 6:
            pot();
            break;
    }
}

calculadora();
