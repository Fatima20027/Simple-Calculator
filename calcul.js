

let display = document.getElementById('display');

function appendToDisplay(value){
  display.value += value;
}

function clearDisplay(){
  display.value = '';
  gif.src = 'image/Cat Working GIF.gif';
}


function calcResults(){
  try{
    
    let expression = display.value;
    if (!expression) return;
    let result = eval(expression);
    display.value = result;
    return false;
  }catch (error){
    console.error(error.message)
  }
  
}


function deleteDisplay(){
  display.value = display.value.slice(0, -1);
}

//additional functions

const gif = document.querySelector('#gif img');
const resultCalcul = document.querySelector('#result');

resultCalcul.addEventListener('click', function() {
  calcResults();
  gif.src = 'image/Happy Tears Smile GIF.gif';
});


const buttonSound = document.querySelectorAll('button');
const sound = document.querySelector('audio');

function soundOn(){
  sound.play();
}

buttonSound.forEach(button => {
  button.addEventListener('click', soundOn);
});




