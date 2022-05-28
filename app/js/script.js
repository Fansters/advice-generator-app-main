'use strict';

const resultDiv = document.querySelector('#results');
const idHead = document.querySelector('h3');
const btnContainer = document.querySelector('.content__btn');



btnContainer.addEventListener('click', () => {
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
      resultDiv.innerHTML = `<p>“${adviceObj.advice}”</p>`
      idHead.innerHTML = `Advice #${adviceObj.id}`
   }).catch(error => {
      console.log(error);
   })
}


