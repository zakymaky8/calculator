let add = function(a, b) {
   return a + b;
}
let subtract = function(a, b) {
   return a - b;
}
let multiply = function(a, b) {
   return a * b;
}
let divide = function(a, b) {
   return a / b;
}
let getPower = function(a, b){
   return a**b;
}
 let num1;
 let sign;
 let num2;

 let operate = function(firstNum,operator,secondNum) {
   if (operator==='+'){
      return add(firstNum,secondNum);
   }
   else if (operator==="-"){
      return subtract(firstNum,secondNum);
   }
   else if (operator==="*"){
      return multiply(firstNum,secondNum);
   }
   else if (operator==="/"){
      return divide(firstNum, secondNum);
   }
   else if(operator==="**"){
      return getPower(firstNum, secondNum);
   }
 }
 
 let numButton = document.querySelectorAll('.num');
 let div = document.getElementById('display');
 let divPop = document.querySelector('.pop');
 let btnArray = Array.from(numButton);
 let point = document.querySelector('#point');
 let dsply=btnArray.map((value)=>{
 num2='';
   value.addEventListener('click',function(e){
      if (div.textContent.length>17 && div.textContent.length<=24){
         div.style.fontSize = '3vw';
      }
      else if (div.textContent.length<17) {
         div.style.fontSize = '4vw';
      }
      else if(div.textContent.length===25) {
         alert(`Stop here! You are not allowed more than ${div.textContent.length}`)
      }
      if (sign!==undefined) {
         divPop.textContent+=+value.textContent;
         num2+=value.textContent;
         num2=+num2;
         div.textContent=+operate(num1,sign,num2);
      }
      else {
         div.textContent+=value.textContent;
      }
      if (div.textContent.includes('.')){
         point.textContent = '';
      }
      else if (!div.textContent.includes('.')) {
         point.textContent = '.';
      }
   })
});

let operators=document.querySelectorAll('.operator');
let operArray = Array.from(operators);

let operatorAction = operArray.map((oprtr)=>{
   oprtr.addEventListener('click', function(){
      num1 = +div.textContent; 
      divPop.textContent = +div.textContent + oprtr.textContent;
      div.textContent=+div.textContent.replace(div.textContent,0);
      sign = oprtr.textContent; 
   })
})
let equal = document.querySelector('button#equal');

equal.addEventListener('click', function(){
   if (num2===undefined) {
      num2 = +div.textContent;
   }
   else if(num2===0 && sign==='/') {
      return div.textContent='Undefined!'
   }
   else if (num2!=='') {
      div.style.fontSize = '6vw';
      div.style.color = 'red';
   }
      div.textContent=operate(num1,sign,num2);
})
let power = document.querySelector('#power');
let body = document.querySelector('body');

let allClear = document.querySelector('#upper1');
let plusMinus = document.querySelector('#upper2');
let percent = document.querySelector('#upper3');
let deletes = document.querySelector('#upper4');

function changeBackground(){
   allClear.style.backgroundColor = 'red'
}
function clearBackground(){
   allClear.style.backgroundColor = 'blue';
}
allClear.addEventListener('click', function(){
   setTimeout(changeBackground,1)
   setTimeout(clearBackground,80)
   div.textContent = '';
   num1='';
   num2='';
   sign=undefined;
   divPop.textContent = '';
   div.style.fontSize = '4vw';
   div.style.color = 'white';
})
plusMinus.addEventListener('click', function(){
   div.textContent *= -1;
})
percent.addEventListener('click', function(){
   div.textContent /= 100;
})
deletes.addEventListener('click', function(){
   div.textContent=div.textContent.slice(0,div.textContent.length-1);
   if (div.textContent===''){
      divPop.textContent = divPop.textContent.slice(0,divPop.textContent.length-1)
   }
   else if(div.textContent===null && divPop.textContent===null) {
      num1=undefined;
      num2=undefined;
      sign=undefined;
   }
})