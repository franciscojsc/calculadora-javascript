window.onload = function () {
   
    function calcularValores(valor) {
        var calcularValor;
        calcularValor = eval(document.formulario.tela.value);
        document.formulario.tela.value = calcularValor;
    }

    function passarValorTela(str) {
        document.formulario.tela.value += str;
    }

    function limparUltimoSinal() {
        var valorArmazenado = document.formulario.tela.value;
        var aux = valorArmazenado.substring(0, valorArmazenado.length - 1)
        document.formulario.tela.value = aux;
    }

    function limparTela() {
        document.formulario.tela.value = 0;
    }

}