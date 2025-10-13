

let display = document.getElementById('display');

function appendToDisplay(value){
  display.value += value;
}

function clearDisplay(){
  display.value = '';
}


function calcResults(){
  let expression = display.value;
  let result = eval(expression);
  display.value = result;
}


function deleteDisplay(){
  display.value = display.value.slice(0, -1);
}

