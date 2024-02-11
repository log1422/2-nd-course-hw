// задание 1
function getSmallerNumber(a, b) {
    return Math.min(a, b);
}

// Примеры использования функции
console.log(getSmallerNumber(8, 4)); // Вывод: 4
console.log(getSmallerNumber(6, 6)); // Вывод: 6

// задание 2
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

// Примеры использования функции
console.log(checkEvenOrOdd(4)); // Вывод: Число четное
console.log(checkEvenOrOdd(7)); // Вывод: Число нечетное

// задание 3
// задание 3.1
function squareOfNumber(number) {
    console.log(number * number);
}

// Пример использования функции
squareOfNumber(5); // Вывод: 25

// задание 3.2
function squareOfNumber(number) {
    return number * number;
}

// Пример использования функции
let result = squareOfNumber(5);
console.log(result); // Вывод: 25

//задание 4
function checkUserAge() {
    let userAge = prompt("Сколько вам лет?");
    userAge = parseInt(userAge);

    if (userAge < 0) {
        alert("Вы ввели неправильное значение");
    } else if (userAge >= 0 && userAge <= 12) {
        alert("Привет, друг!");
    } else {
        alert("Добро пожаловать!");
    }
}

// Вызов функции для запроса возраста и выполнения логики
checkUserAge();

// задание 5
function multiplyNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}

// Примеры использования функции
console.log(multiplyNumbers(5, 8)); // Вывод: 40
console.log(multiplyNumbers(5, 'abc')); // Вывод: 'Одно или оба значения не являются числом'

// задание 6
function cubeAndReturnString() {
    let userInput = prompt("Введите число:");
    let number = parseFloat(userInput);

    if (!isNaN(number)) {
        let result = Math.pow(number, 3);
        return number + " в кубе равняется " + result;
    } else {
        return 'Переданный параметр не является числом';
    }
}

// Проверка функции для чисел от 0 до 10
for (let i = 0; i <= 10; i++) {
    console.log(cubeAndReturnString(i));
}

// задание 7
// Создание объекта circle1
let circle1 = {
    radius: 5,
    getArea: function () {
        return Math.PI * this.radius ** 2; // Площадь круга
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius; // Периметр окружности
    }
};

// Создание объекта circle2
let circle2 = {
    radius: 8,
    getArea: function () {
        return Math.PI * this.radius ** 2; // Площадь круга
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius; // Периметр окружности
    }
};

// Пример использования методов
console.log(circle1.getArea()); // Вывод площади для circle1
console.log(circle1.getPerimeter()); // Вывод периметра для circle1

console.log(circle2.getArea()); // Вывод площади для circle2
console.log(circle2.getPerimeter()); // Вывод периметра для circle2

const seasons = (monthNumber = Number(prompt("Введите номер мясяца:", "введите число"))) => {
    if (isNaN(monthNumber)) return 'Вы ввели неверные данные';
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            return ('Зима');
        case 3:
        case 4:
        case 5:
            return ('Весна');
        case 6:
        case 7:
        case 8:
            return ('Лето');
        case 9:
        case 10:
        case 11:
            return ('Осень');
        default:
            return ('Неверный номер месяца');
    }
}
