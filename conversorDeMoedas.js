var valortxt = document.getElementById("valor");
var valorNaTela = document.getElementById("valorConvertido");
function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmRealNumerico = valorEmDolarNumerico * 5.08;
  console.log(valorEmRealNumerico);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmRealNumerico;
  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterParaEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valor);
  var valorRealNumerico = valorEmEuroNumerico * 5.54;
  var elementoValorEuro = document.getElementById("valorConvertidoEuro");
  var valorConvertidoEuro = "O resultado em real é R$ " + valorRealNumerico;
  elementoValorEuro.innerHTML = valorConvertidoEuro;
}
// 1 - adicionar outras moedas para converter.
// 2 - conversor de quilômetros para anos luz e verificar o tempo que demora para ir de um estrela a outra.
// 3 - conversor de temperatura entre fahrenheits, kelvins e celsius.
// 4 - adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoins.
