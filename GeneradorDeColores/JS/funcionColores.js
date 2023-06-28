function generateRandomColor() {
  // Generador de colores tipo pastel rango de(0 a 255)
  var red = Math.floor(Math.random() * 156) + 100;
  var green = Math.floor(Math.random() * 156) + 100;
  var blue = Math.floor(Math.random() * 156) + 100;

  // String para crear los colores!
  var color = "rgb(" + red + ", " + green + ", " + blue + ")";

  return color;
}

function changeButtonColor() {
  // Obtener el elemento para el button
  var button1 = document.getElementById("colorButton1");
  var button2 = document.getElementById("colorButton2");

  // Generador de dos colores aleatorios diferentes
  var color1 = generateRandomColor();
  var color2 = generateRandomColor();

  button1.style.backgroundColor = color1;
  button2.style.backgroundColor = color2;

  // Obtener el código para el elemento H2
  var colorCode1 = document.getElementById("colorCode1");
  var colorCode2 = document.getElementById("colorCode2");

  // Setea el texto y muestra los valores de los colores en el H2
  colorCode1.textContent = color1;
  colorCode2.textContent = color2;
}
function copyColorValue(colorValue) {
  // Crear un elemento de input para copiar el valor del color
  var inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.value = colorValue;
  
  // Agregar el elemento de input al documento
  document.body.appendChild(inputElement);
  
  // Seleccionar el valor del input
  inputElement.select();
  
  // Copiar el valor al portapapeles
  document.execCommand("copy");
  
  // Remover el elemento de input del documento
  document.body.removeChild(inputElement);
  
  // Mostrar una notificación o realizar otra acción para indicar que el valor ha sido copiado
  alert("Valor copiado: " + colorValue);
}
var colorButton1 = document.getElementById("colorButton1");
var colorButton2 = document.getElementById("colorButton2");

colorButton1.addEventListener("click", function() {
  copyColorValue(colorButton1.textContent);
});

colorButton2.addEventListener("click", function() {
  copyColorValue(colorButton2.textContent);
});
