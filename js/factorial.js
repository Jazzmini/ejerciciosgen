function calculateFactorial() {
  let input = prompt("Por favor, ingresa un número para calcular su factorial:");
  let num = parseFloat(input);

  if (!isNaN(num)) {
    if (num < 0) {
      showError("No se puede calcular el factorial de un número negativo.");
    } else if (Number.isInteger(num)) {
      let factorial = 1;
      for (let i = 1; i <= num; i++) {
        factorial *= i;
      }
      showResult(`El factorial de ${num} es ${factorial}.`);
    } else {
      showError("El número ingresado no es un número entero.");
    }
  } else {
    showError("Entrada inválida. Por favor, ingresa un número válido.");
  }
}

function showResult(message) {
  const resultContainer = document.getElementById("result");
  resultContainer.textContent = message;
}

function showError(message) {
  const errorContainer = document.getElementById("error");
  errorContainer.textContent = message;
}