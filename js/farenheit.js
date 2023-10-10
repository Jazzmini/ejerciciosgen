function convertirTemperatura() {
  let temperaturaCelsius = parseFloat(document.getElementById("celsius").value);
  let resultadoDiv = document.getElementById("resultado");

  if (isNaN(temperaturaCelsius)) {
    resultadoDiv.innerHTML = "<p>Por favor, ingrese un número válido.</p>";
    return;
  }

  const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
  const temperaturaKelvin = temperaturaCelsius + 273.15;

  resultadoDiv.innerHTML = `
    <p>Grados Kelvin: ${temperaturaKelvin.toFixed(2)}</p>
    <p>Grados Fahrenheit: ${temperaturaFahrenheit.toFixed(2)}</p>`;
}