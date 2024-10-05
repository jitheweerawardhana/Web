function numberEqual() {
    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;
    const total = parseInt(num1) + parseInt(num2);
    document.getElementById('result').innerText = total;
  }