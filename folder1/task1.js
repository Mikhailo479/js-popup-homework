// Завдання 1: Оголошення змінних
var str = "Hello"; // рядок
var num = 42; // число
var bool = false; // буль
var nul = null; // null
var undef; // undefined

console.log(str);
console.log(num);
console.log(bool);
console.log(nul);
console.log(undef);

// Завдання 2: Конкатенація радків
var person1 = "Alice";
var person2 = "Bob";
var greeting = "Hello, " + person1 + " and " + person2 + "!";
console.log(greeting);

// Завдання 3: Вік і повнолітність
var age = 20; // вік
var isAdult = age >= 18; // повнолітність
console.log(age);
console.log(isAdult);

// Завдання 4: Площа та об'єм

// 4.1: Площа кола
var radius = 5;
var areaCircle = Math.PI * radius * radius; // площа
console.log(areaCircle.toFixed(2));

// 4.2: Площа прямокутника
var length = 10;
var width = 4;
var areaRectangle = length * width;
console.log(areaRectangle.toFixed(2));

// 4.3: Об'єм циліндра
var cylinderRadius = 3;
var height = 7;
var volumeCylinder = Math.PI * cylinderRadius * cylinderRadius * height;
console.log(volumeCylinder.toFixed(2));
