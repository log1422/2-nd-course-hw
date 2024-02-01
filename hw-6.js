// задание 1
let arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 10) {
        break;
    }
    console.log(arr[i]);
}

// задание 2
let arrai = [1, 5, 4, 10, 0, 3];
let index = arrai.indexOf(4); // Ищем индекс числа 4 в массиве

console.log(index); // Этот код выведет индекс числа 4 в массиве

// задание 3
let arrayss = [1, 3, 5, 10, 20];
let result = arrayss.join(' '); // Объединяем элементы массива через пробел

console.log(result); // Этот код выведет элементы массива через пробел

// задание 4
let multiArray = []; // Создаем пустой многомерный массив

for (let i = 0; i < 3; i++) {
    // Создаем каждый вложенный массив
    let nestedArray = [];
    for (let j = 0; j < 3; j++) {
        // Добавляем единицы во вложенный массив
        nestedArray.push(1);
    }
    // Добавляем вложенный массив в основной многомерный массив
    multiArray.push(nestedArray);
}

console.log(multiArray); // Выводим полученный многомерный массив

// задание 5
let arrays = [1, 1, 1]; // Исходный массив
array.push(2, 2, 2); // Добавляем значения 2, 2, 2 в конец массива

console.log(arrays); // Выводим получившийся массив

// задание 6
let array = [9, 8, 7, 'a', 6, 5]; // Исходный массив
let sortedArray = array.filter(item => typeof item === 'number').sort(); // Отфильтровываем и сортируем только числа
console.log(sortedArray); // Выводим получившийся массив

// задание 7
let numbers = [9, 8, 7, 6, 5]; // Заданный массив чисел
let userGuess = prompt('Попробуйте угадать число из массива'); // Запрашиваем у пользователя ввести число

if (numbers.includes(parseInt(userGuess))) { // Проверяем, содержится ли введенное значение в массиве
    alert('Угадал');
} else {
    alert('Не угадал');
}

// задание 8
let str = 'abcdef'; // Заданная строка
let reversedStr = str.split('').reverse().join(''); // Разбиваем строку на массив символов, затем меняем порядок элементов в массиве и объединяем их обратно в строку

console.log(reversedStr); // Выводим обратную строку в консоль

// задание 9
let initialArray = [
    [1, 2, 3],
    [4, 5, 6]
]; // Заданный двумерный массив
let flattenedArray = initialArray[0].concat(initialArray[1]); // Используем метод concat для объединения элементов в один массив

console.log(flattenedArray); // Выводим полученный одномерный массив в консоль

// задание 10
// Создаем массив с произвольными числами от 1 до 10
let cod = [];
for (let i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random() * 10) + 1);
}

// Перебираем массив с помощью цикла for и выводим сумму текущего и следующего элементов
for (let i = 0; i < cod.length - 1; i++) {
    let currentElement = cod[i];
    let nextElement = cod[i + 1];
    let totalSum = currentElement + nextElement;
    console.log(`Сумма ${currentElement} и ${nextElement} равна ${totalSum}`);
}

// задание 11
function squareArrayElements(arr) {
    return arr.map(number => number * number);
}

// Пример использования функции
let inputArray = [1, 2, 3, 4, 5];
let squaredArray = squareArrayElements(inputArray);
console.log(squaredArray); // Выводит: [1, 4, 9, 16, 25]

// задание 12
function getLengthWords(arr) {
    return arr.map(word => word.length);
}

// Пример использования функции
let words = ['слово', '', 'слог', 'длинное предложение', 'буква'];
let wordLengths = getLengthWords(words);
console.log(wordLengths); // Выводит: [5, 0, 4, 19, 5]

// задание 13
function filterPositive(array) {
    return array.filter(number => number < 0);
}

// Пример использования функции
console.log(filterPositive([-1, 0, 5, -10, 56])); // Выводит: [-1, -10]
console.log(filterPositive([-25, 25, 0, -1000, -2])); // Выводит: [-25, -1000, -2]

// задание 14
let originalArray = [];
let evenNumbersArray = [];

// Генерируем массив из 10 значений при помощи Math.random() в диапазоне от 0 до 10
for (let i = 0; i < 10; i++) {
    originalArray.push(Math.floor(Math.random() * 11));
}

// Находим все четные значения и добавляем их в новый массив evenNumbersArray
evenNumbersArray = originalArray.filter(number => number % 2 === 0);

// Выводим исходный массив и массив с четными значениями в консоль
console.log("Исходный массив:", originalArray);
console.log("Массив с четными значениями:", evenNumbersArray);

// задание 15
let cat = [];
let sum = 0;

// Генерируем массив из 6 значений при помощи Math.random() в диапазоне от 1 до 10
for (let i = 0; i < 6; i++) {
    cat.push(Math.floor(Math.random() * 10) + 1);
}

// Суммируем все значения в массиве
for (let i = 0; i < cat.length; i++) {
    sum += cat[i];
}

// Находим среднее арифметическое
let average = sum / cat.length;

console.log("Сгенерированный массив:", cat);
console.log("Среднее арифметическое:", average);