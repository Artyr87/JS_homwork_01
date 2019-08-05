'use strict';

const credits = 23580;

const pricePerDroid = 3000;

let totalPrice ;

const purchaseIssue = prompt ('Haw mani drons you like BY');

    if (purchaseIssue === null) {

        alert ('canceled by user');
    }

totalPrice = purchaseIssue*pricePerDroid;

    if (totalPrice>credits) {

        console.log('you not have many');
    }
    else {

        console.log(`Вы купили ${purchaseIssue} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
    }
    





