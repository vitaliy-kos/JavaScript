// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = +prompt("Введите первое число:")
let num2 = +prompt("Введите второе число:")

if (num1 <= 1 && num2 >= 3) console.log("Условие выполнено!")
else console.log("Условие НЕ выполнено!")

// Задание 2
// Перепишите код к тернарному оператору
// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

let test = true;
console.log(test === true ? '+++' : '---')

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = 20,
    decade = day / 10

if (decade <= 1) console.log("Первая декада")
else if (decade <= 2) console.log("Вторая декада")
else if (decade > 2) console.log("Третья декада")

// Задание 4
// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.
// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"
// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"
// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"
// Уточнение: пользователь всегда вводит корректное положительное целое число.

let input = +prompt("Введите положительное целое число:")

if (input <= 0 ) {
    console.log("Введенное число не является положительным.")
} else if (!Number.isInteger(input)) {
    console.log("Введенное число не является целым.")
} else {
    number = input % 1000
    let digit1 = number % 10,
        digit10 = parseInt(number % 100 / 10),
        digit100 = parseInt(number % 1000 / 100)

    console.log(`В числе ${input} количество сотен: ${digit100}, десятков: ${digit10}, единиц: ${digit1}`);
}