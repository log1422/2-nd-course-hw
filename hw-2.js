
let a = 10;
alert(a);
a = 20;
alert(a);

let firstIphone = 2007;
alert(`Год выпуска первого айфона ${firstIphone}`);

let bestJsMan = "Брендан Эйх";
alert(`${bestJsMan}-создатель Js`);


let b = 10;
let c = 2;
let sum = b + c;
let dif = b - c;
let product = b * c;
let quotient = b / c;
result = b / c;
alert(
  `Сумма ${sum}\nРазность ${dif}\nПроизведение ${product}\nЧастное ${quotient}`
);

let d = 10;
let e = 2;
alert(
  `Сумма ${d + e}\nРазность ${d - e}\nПроизведение ${d * e}\nЧастное ${d / e}`
);


let f = 2;
let j = 5;
alert(`Возводим в степень ${f ** j}`);


a = 9; 
b = 2;
alert(`Находим остаток от деления ${a / b}`);


let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age=Number (prompt("Сколько Вам лет?"));
alert (age);


let user={name:"Джек Лондон",
age: 27,
isAdmin: true}
user["city of residence"]="Сан-Франциско";
user.age=31;
delete user["city of residence"];
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert (user[info])

let names= (prompt("Хай друг, как тебя зовут?"));
let greeting= `Привет ${names}!`;
alert (greeting);
let city= (prompt ("А из какого города?"));
let hi= `Ну что-же, приветствуем тебя ${names} из славного города ${city}`
alert (hi)



