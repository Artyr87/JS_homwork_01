'use strict';

let input;

let total = 0;
Prompt(); 

function Prompt() {
    if ( input === null  ) { // проверка кнопки .
        alert (`Общая сумма чисел равна ${total}`)
    } else {
        if (!input) {
            input = prompt('Введите число');
            total = Number(input);
           
            
            Prompt();
        } else {
            console.log('works');
            input = prompt('Введите число');
            total += Number(input);
            

            Prompt();
        }
        
    } 
}







