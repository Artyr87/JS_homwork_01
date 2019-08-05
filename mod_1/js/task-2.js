'use strict';

const min = 1;
const max = 100;
const value = 50;
let message;

const isInRaange = value > 1 && value < 100;

if (isInRaange) {
    message = "Заказ оформлен, с вами свяжется менеджер";
} 
else {
    message = "На складе недостаточно твоаров!";
}  

console.log (message);