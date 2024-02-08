// задание 1
let str = "js";
let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); // Выведет: JS
// задание 2
function searchStart(array, str) {
    let result = array.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
    return result;
}

// Пример использования функции
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // ['кошка', 'комар']
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []

// задание 3
let number = 32.58884;
let roundedDown = Math.floor(number);
console.log(roundedDown); // Выведет: 32
let roundedUp = Math.ceil(number);
console.log(roundedUp); // Выведет: 33
let roundedClosest = Math.round(number);
console.log(roundedClosest); // Выведет: 33

// задание 4
let numbers = [52, 53, 49, 77, 21, 32];

// Находим наименьшее и наибольшее числа в массиве
let minNumber = Math.min(...numbers);
let maxNumber = Math.max(...numbers);

// Выводим результат в консоль
console.log("Наименьшее число:", minNumber);
console.log("Наибольшее число:", maxNumber);

// задание 5
function randomFromOneToTen() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

// Вызываем функцию для генерации и вывода случайного числа от 1 до 10
randomFromOneToTen();

// задание 6
function getRandomArrNumbers(num) {
    const length = Math.floor(num / 2); // Вычисляем длину массива
    let result = [];
    for (let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * (num + 1))); // Генерируем случайное число от 0 до переданного числа и добавляем его в массив
    }
    return result;
}

// Примеры использования функции
console.log(getRandomArrNumbers(7)); // Пример 1
console.log(getRandomArrNumbers(12)); // Пример 2

// задание 7
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Пример использования функции
let randomNum = getRandomNumberInRange(5, 10);
console.log(randomNum);
{
// задание 8
let currentDate = new Date().toLocaleString();
console.log(currentDate);
}
{
// задание 9
let currentDate = new Date();
let futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log("Текущая дата:", currentDate.toLocaleString());
console.log("Дата через 73 дня:", futureDate.toLocaleString());
}

// задание 10
{
    function formatDateRussian(date) {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const dateStr = Дата (`${dayOfMonth} ${month} ${year} - это ${dayOfWeek}`);
    const timeStr = Время (`${hours}:${minutes}:${seconds}`);
    return dateStr + '\n' + timeStr;
}
// Пример использования функции
const currentDate = new Date();
console.log(formatDateRussian(currentDate));
}

// задание 11
function seasonsBtn() {
    
    let words = ['яблоко', 'груша', 'дыня', 'виноград', 'персик', 'апельсин', 'мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert(words);

    let wordsfirst = prompt (`Назовите первое слово`);
    let wordsLast = prompt (`Назовите последнее слово`);

    if (wordsfirst === words [0] && wordsLast === words[words.length- 1])
    {
        alert `Это правильный ответ!`;

    } else if (wordsfirst === words[0] || wordsLast === words[words.length - 1]) {
        alert `А счастье было так близко!`;                             
    } 
    else {
    alert `Вы не угадали!`;
        }
    }
    