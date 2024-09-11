var input = document.getElementById("result");
// let currentInput = '';
// let operator = '';

// function appendNumber(number) {
//     currentInput += number;
//     updateResult();
// }

// function appendOperator(op) {
//     if (currentInput !== '') {
//         operator = op;
//         currentInput += op;
//         updateResult();
//     }
// }

// function calculate() {
//     if (operator && currentInput !== '') {
//         try {
//             const calculatedResult = eval(currentInput);
//             currentInput = calculatedResult.toString();
//             updateResult();
//             operator = '';
//         } catch (error) {
//             currentInput = 'Error';
//             updateResult();
//         }
//     }
// }

 function clearResult() {
     currentInput = '';
     operator = '';
     updateResult();
 }

 function deleteLastChar() {
     if (currentInput !== '') {
         currentInput = currentInput.slice(0, -1);
        updateResult();
 }
 }
//  function appendDecimal() {
//      if (!currentInput.includes('.')) {
//          currentInput += '.';
//          updateResult();
//      }
//  }

//  function updateResult() {
//      result.value = currentInput;
//  }

function handleclick(value) {
    if (input.innerHTML == 0) input.innerHTML = value
    else input.innerHTML += value
}

function sum(){
    input.innerHTML =  eval(input.innerHTML)
}
