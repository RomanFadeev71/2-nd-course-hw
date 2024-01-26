let x = 10;
alert(x);
x = 20;
alert(x);

let release = alert(`Выпуск первого айфона 29 июня 2007 года`);
let creator = alert(`Брендан Эйх`);

let a = 10;
let b = 2;
alert(a + b)
alert(a - b)
alert(a * b)
alert(a / b)

let n = 2;
let d = 5;
let result = n ** d;
alert(result);

let e = 9;
let t = 2;
let newresult = e % t;
alert(newresult);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = Number(prompt(`Сколько вам лет?`));
alert(age);

let user = {
    name: "Roman",
    age: 26,
    isAdmin: true,
};

user["cityofresidence"] = "Moscow";

user[age] = 27;

delete user["cityofresidence"];

let info = prompt("Какую информацию хотите узнать о пользователе?")
alert(user[info]);

let userName = prompt("Как вас зовут?");
alert(`Привет,${userName}!`);


/* Домашня работа 2.3*/

let password = `1234`;

let input = prompt("Введите пароль");

if (input === password) {
    alert(`Пароль введен верно`);

} else {
    alert(`Пароль введен неверно`);
}

let c = 0; Number(prompt(`Введите число`));

if (c > 0 && c < 10) {
    alert(`Верно`);
} else {
    alert(`Неверно`);
};

let r = 101;
let u = 80;

if (r > 100 || u > 100) {
    alert(`Верно`);
} else {
    alert(`Неверно`);
};

let h = 2;
let j = 5;

alert(Number(h) + Number(j));

let monthNumber = 12;

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        alert(`Зима`);
        break;
    case 3:
    case 4:
    case 5:
        alert(`Весна`);
        break;
    case 6:
    case 7:
    case 8:
        alert(`Лето`);
        break;
    case 9:
    case 10:
    case 11:
        alert(`Осень`);
}