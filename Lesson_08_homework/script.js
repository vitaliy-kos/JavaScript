// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 10; i++) {
    if (i === 0) console.log(`${i} - это ноль`)
    else console.log(`${i} - ${i%2==0 ? 'четноe' : 'нечетноe'} число`);
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

let arr = [1, 2, 3, 4, 5, 6, 7]
arr = arr.filter((number) => number !== 4 && number !== 5 )

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

let array = []

for (let i = 0; i < 5; i++) {
    array.push(Math.round(Math.random() * 10))
}

const sum = (arr) => arr.reduce((cur, num) => cur + num)
const min = (arr) => arr.reduce((cur, num) => cur < num ? cur : num)
const hasThree = (arr) => arr.filter((num) => num === 3).length > 0

console.log(array)
console.log(sum(array))
console.log(min(array))
console.log(hasThree(array))

// * Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 1; i <= 20; i++) {
    console.log("x".repeat(i));
}