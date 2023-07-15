function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;
    
    try {
      const result = eval(expression);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }