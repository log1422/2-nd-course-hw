// задание 1
let a = 10;
alert(a);
a = 20;
alert(a);
// задание 2
let firstIphone = 2007;
alert(`Год выпуска первого айфона ${firstIphone}`);
// задание 3
let bestJsMan = "Брендан Эйх";
alert(`${bestJsMan}-создатель Js`);
// задание 4
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
// задание 5
let f = 2;
let j = 5;
result2 = f ** j
alert(`Результат возведения в степень ${result2}`);
// задание 6
a = 9;
b = 2;
alert(`Находим остаток от деления ${a / b}`);
// задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
// задание 8
let age = Number(prompt("Сколько Вам лет?"));
alert(age);
// задание 9-9,4
let user = {
  name: "Джек Лондон",
  age: 27,
  isAdmin: true
}
user["city of residence"] = "Сан-Франциско";
user.age = 31;
delete user["city of residence"];
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info])
// задание 10
let names = (prompt("Хай друг, как тебя зовут?"));
let greeting = `Привет ${names}!`;
alert(greeting);
let city = (prompt("А из какого города?"));
let hi = `Ну что-же, приветствуем тебя ${names} из славного города ${city}`
alert(hi)
// Дополнительные задания 
// задание 1
const film = {
  name: 'Вратарь галактики',
  year: 2020,
  filmmaker: 'Джаник Файзиев',
  genre: 'приключения, фантастика',
  description: '2071 год. Галактические войны разрушили Луну и изменили климат на Земле. Москва — в тропических лесах, а Нью-Йорк покрылся льдом. Над Москвой возвышается огромный инопланетный корабль-стадион, на котором проходят зрелищные межгалактические соревнования по космоболу — игре, объединившей в себе спорт и гладиаторские бои. За матчами следит вся галактика. Играть в космобол могут только атлеты — те, кто наделен необыкновенными способностями и может ими управлять. Космобол обожают все, кроме Антона, самого обычного парня, который всего лишь мечтает найти работу, чтобы вылечить больную маму. Но однажды у него обнаруживают сверхспособности и принимают в сборную. Теперь он игрок в космобол. Антон ещё не подозревает, какая роль уготована ему судьбой в этом матче, и что финальная игра станет сражением за Землю.',
}
alert(`${film.name} ${film.year} ${film.filmmaker} ${film.genre} ${film.description}`)

// задание 2
const car = {
  brand:'Mitsubishi',
  model:'Lancer',
  year: 2005,
  color: 'green',
  mileage: 95000,
}
car['owner'] = 'Mitsubishi motors'
car['year'] = 2007
delete car['mileage']

