const temperatureConverterForm = document.getElementById("temperature-converter-form");
const celciusInput = document.getElementById("celcius-input");
const result = document.getElementById("result");

function convertCelciusToFahrenheit(celcius) {
  //TODO: Implementasi konversi celcius ke fahrenheits (tips: cek rumus.png)
  const fahrenheit = (celcius * (9 / 5)) + 32
  return fahrenheit;
}

function onSubmitForm(event) {
  event.preventDefault();

  const celciusValue = celciusInput.value;

  const fahrenheit = convertCelciusToFahrenheit(celciusValue);

  // Untuk debugging
  // console.log(fahrenheit);

  // TODO: Masukan hasil kalkulasi ke dalam HTML dengan string template literals (tips: cek index.html)
  const resultString = `${celciusValue} Celcius adalah ${fahrenheit} Fahrenheit`
  result.innerHTML = resultString
}

temperatureConverterForm.addEventListener("submit", onSubmitForm);