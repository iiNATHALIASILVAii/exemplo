/*
  Elabore um programa para um cinema, onde o usuario possa digitar o titulo e a duração de um filme em minutos.
  Exiba o titulo do silme e converta a duração para horas e minutos.

*/

function calcularTempofilme() {
  // Entrada de dados
  let filme = document.getElementById("filme").value;
  let duracaoInput = document.getElementById("duracao").value;

  // Pegando elementos pro paragrafo de resultado
  let resultadoTexto = document.getElementById("resultadoTexto");

  // Validação da entrada
  if (filme === "" || duracao === "") {
    // Na primeira versão, eu estava escrevendo document.getElementById("resultadoTexto").textContent
    // repetidamente em cada linha que precisava atualizar o resultado.
    // Isso funciona, mas não é eficiente e deixa o código mais longo e difícil de ler.
    resultadoTexto.textContent = "Todos os campos devem ser preenchidos";
    return;
  }

  // Conversão da entrada
  let duracao = parseFloat(duracaoInput);

  if (isNaN(duracao)) {
    resultadoTexto.textContent =
      "Por favor, insira um tempo de duração valido.";
    return;
  }
  if (duracao <= 0) {
    resultadoTexto.textContent = "A duração do filme deve ser maior que zero";
  }

  // Processamento
  let duracaoHoras = Math.floor(duracao / 60); // Pra pegar apenas a parte inteira da horas
  let duracaoMinutos = duracao % 60; // Pra pegar o restante como minutos

  // Saída
  // eu usei ' mas js não le isso
  // ajustei pra ``
  // Ao usar a crase, o JavaScript entende que tudo que está dentro de ${} deve ser substituído pelo valor da variável ou pelo resultado da expressão.
  resultadoTexto.textContent = `O filme "${filme}" tem ${duracaoHoras} hora(s) e ${duracaoMinutos} minuto(s) de duração.`;
}

// Botão Limpar
document.getElementById("limpar").addEventListener("click", function () {
  document.getElementById("filme").value = "";
  document.getElementById("duracao").value = "";
  document.getElementById("resultadoTexto").textContent = "";
});
