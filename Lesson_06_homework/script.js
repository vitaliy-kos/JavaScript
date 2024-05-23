// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3^3 степени

function toCube(num) {
    return num*num*num
}
console.log(toCube(2) + toCube(3))

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const countPercent = (num) => num * 0.87;

let inp = prompt("Введите число")
if (!Number.parseInt(inp)) {
    console.log("Значение задано неверно")
} else {
    console.log(`Размер заработной платы за вычетом налогов равен ${countPercent(inp)}`)
}

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const getNum = () => prompt("Введите число");
const getMax = (arr) => {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i] 
    }
    return max
}

let first = getNum(),
    second = getNum(),
    third =  getNum(),
    arr = [first, second, third]

console.log(getMax(arr));

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sum = (num1, num2) => num1 + num2
const diff = (num1, num2) => num1 > num2 ? num1 - num2 : num2 - num1
const multiplication = (num1, num2) => num1 * num2
const division = (num1, num2) => num1 / num2

console.log(sum(2, 6))
console.log(diff(2, 6))
console.log(multiplication(2, 6))
console.log(division(2, 6))