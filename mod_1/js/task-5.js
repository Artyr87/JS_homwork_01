// const China = 100; // const Chile = 250; // const Australia = 170; // const India = 80;  // const Jamaica = 120;
'use strict';

const China = 1;
const Chile = 2;
const Australia = 3;
const India = 4;
const Jamaica = 5;

const promtLabel = `Укажите страну доставки! ${China} - Китай, ${Chile} - Чили, ${Australia} - Австралия, ${India} - Индия, ${Jamaica} - Ямайка`;

let userChouse = prompt(promtLabel);

let message;

if (userChouse === null) {
    message = 'очень жаль';
} else {
    userChouse = Number(userChouse); 
}

switch (userChouse) {
    case China :
        message = 'Доставка в [China] будет стоить [100] кредитов';
        break;

    case Chile :
        message =  'Доставка в [Chile] будет стоить [250] кредитов';
        break;

    case Australia :
        message = 'Доставка в [Australia] будет стоить [170] кредитов';
        break;

    case India:
        message =  'Доставка в [India] будет стоить [80] кредитов';
        break;

    case Jamaica:
        message = 'Доставка в [Jamaika] будет стоить [120] кредитов';
        break;

    default:
        message = 'В вашей стране доставка не доступна';   
}
console.log (message);