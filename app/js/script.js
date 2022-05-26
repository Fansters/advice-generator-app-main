'use strict';

const resultDiv = document.querySelector('#results');
const resultsBtn = document.querySelector('#data');
const idHead = document.querySelector('h3');


resultsBtn.addEventListener('click', () => {
   getAdvice();
})

window.onload = () => {
   getAdvice();
}

function getAdvice() {
   fetch('https://api.adviceslip.com/advice').then(response => {
      return response.json();
   }).then(adviceData => {
      const adviceObj = adviceData.slip;
      console.log(adviceObj);
      resultDiv.innerHTML = `<p>“${adviceObj.advice}”</p>`
      idHead.innerHTML = `Advice #${adviceObj.id}`
   }).catch(error => {
      console.log(error);
   })
}


