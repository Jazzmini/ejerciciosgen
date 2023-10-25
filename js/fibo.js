function calcularFibonacci() {
  const inputNumber = document.getElementById("inputNumber").value;
  const output = document.getElementById("output");

  // Verificar si la entrada es un número válido
  const numero = parseInt(inputNumber);
  if (isNaN( numero)|| numero < 1) {
      output.textContent = "Por favor, ingresa un número válido.";
      return;
  }

  // Calcular la serie de Fibonacci
  const fibonacciArray = [0, 1];
  for (let i = 2; i < numero; i++) {
      const nextNumber = fibonacciArray[i - 1] + fibonacciArray[i - 2];
      fibonacciArray.push(nextNumber);
  }

  // Mostrar la serie de Fibonacci en el DOM
  output.textContent = fibonacciArray.join(", ");
}