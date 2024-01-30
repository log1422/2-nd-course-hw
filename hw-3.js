// задание 1
let password = 'мой секретный пароль';
let userPassword = prompt('Введите пароль');

if (userPassword === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}
// задание 2
let c = 5; // Выберем любое число для переменной c

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
// задание 3
let d = 80; // Любое число для переменной d
let e = 120; // Любое число для переменной e

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
// задание 4
let a = '2';
let b = '3';
let num = Number(a) + Number(b);
alert(num);
// задание 5
let monthNumber = 12; // Номер месяца для определения сезона

// Проверка условия, при котором программа не будет выполняться
if (monthNumber > 12) {
    console.log('Ошибка: номер месяца больше 12. Пожалуйста, введите корректный номер месяца.');
} else {
    // Используем оператор switch для определения сезона по номеру месяца
    switch(monthNumber) {
        case 1:
        case 2:
        case 12:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
        default:
            console.log('Неверный номер месяца');
    }
}

// задание 7
let input = prompt("Пожалуйста, введите любое число"); // Запрашиваем у пользователя ввести любое число

if (isNaN(input)) { // Проверяем, является ли введенное значение числом
    alert("Вы ввели не число. Пожалуйста, введите корректное число.");
} else {
    let number = Number(input); // Приводим строку к числу

    if (number % 2 === 0) { // Проверяем, является ли число четным
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
}

// задание 8
let clientOS = 1; // Предположим, что клиент использует Android (1 — Android, 0 — iOS)

if (clientOS === 0) { // Если клиент использует iOS
    console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS === 1) { // Если клиент использует Android
    console.log("Установите версию приложения для Android по ссылке");
} else {
    console.log("Не удалось определить операционную систему");
}

