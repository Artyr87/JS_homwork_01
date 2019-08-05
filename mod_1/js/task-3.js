'use strict';

const ADMIN_PASSWORD = 'qwerty';
let message;
const inputForm = prompt ('your password');

if (inputForm === ADMIN_PASSWORD) {
    message = 'Добро пожаловать';
}
    else if (inputForm === null) {
        message = 'Отменено пользователем';
    }
    else {
        message = 'Доступ запрещен, неверный пароль';
    }
alert(message);
