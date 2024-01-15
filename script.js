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

let c = 2;
let d = 5;
let result = c ** d;
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