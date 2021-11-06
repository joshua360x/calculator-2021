// import functions and grab DOM elements
import { add, subtract, multiply, divide } from './math-utils.js';


// initialize global state
const addIncrement = document.getElementById('addMany');
const subtractIncrement = document.getElementById('subMany');
const multiplyIncrement = document.getElementById('multiMany');
const divisionIncrement = document.getElementById('divMany');





const addButton = document.getElementById('addButton');
const subButton = document.getElementById('subButton');
const multiButton = document.getElementById('multiButton');
const divButton = document.getElementById('divButton');


const addInput1 = document.getElementById('inputADD1'); 
const addInput2 = document.getElementById('inputADD2'); 

const subInput1 = document.getElementById('inputSUB1'); 
const subInput2 = document.getElementById('inputSUB2'); 

const multiInput1 = document.getElementById('inputMULTI1'); 
const multiInput2 = document.getElementById('inputMULTI2'); 

const divInput1 = document.getElementById('inputDIV1'); 
const divInput2 = document.getElementById('inputDIV2'); 


const answerAdd = document.getElementById('addAnswer'); 
const answerSub = document.getElementById('answerSub'); 
const answerMulti = document.getElementById('answerMulti'); 
const answerDiv = document.getElementById('answerDiv'); 


// set event listeners 
  // get user input
  // use user input to update state 
   // update DOM to reflect the new state



let addCounter = 0;
let subtractCounter = 0;
let multiplyCounter = 0;
let divideCounter = 0;

addButton.addEventListener('click', () => {

  const number1 = +addInput1.value;
  const number2 = +addInput2.value;

  const result = add(number1, number2);

answerAdd.textContent = result;

addCounter++;

addIncrement.textContent = addCounter;




})


subButton.addEventListener('click', () => {

  const number1 = +subInput1.value;
  const number2 = +subInput2.value;

  const result = subtract(number1, number2);

answerSub.textContent = result;


// counter 

subtractCounter++;

subtractIncrement.textContent = subtractCounter;


})


multiButton.addEventListener('click', () => {

  const number1 = +multiInput1.value;
  const number2 = +multiInput2.value;

  const result = multiply(number1, number2);

answerMulti.textContent = result;


multiplyCounter++;

multiplyIncrement.textContent = multiplyCounter;


})


divButton.addEventListener('click', () => {

  const number1 = +divInput1.value;
  const number2 = +divInput2.value;

  const result = divide(number1, number2);

answerDiv.textContent = result;

divideCounter++;

divisionIncrement.textContent = divideCounter;

})









