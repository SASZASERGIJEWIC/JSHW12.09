// Вычислите сумму чисел массива, используя метод reduce().

// const arr = [1, 2, 3, 4];
// const sum = arr.reduce((acc, el) => {
//   return acc + el;
// }, 0);
// console.log(sum);

// Вычислите произведение чисел массива, используя метод reduce().

// const arr = [1, 2, 3, 4, 5];
// const product = arr.reduce((acc, el) => {
//   return acc * el;
// }, 1);
// console.log(product);

// Преобразуйте массив строк в одну строку с помощью метода reduce().

// const arr = ["my", "name", "is", "Sasha"];
// const string = arr.reduce((acc, el) => {
//   return acc + " " + el;
// });
// console.log(string);

// Подсчитайте количество отрицательных значения в массив, используя метод reduce().

// const arr = [1, -2, 3, -4, 5, -22];
// const minNum = arr.reduce((acc, el) => {
//   if (el < 0) {
//     return acc + 1;
//   } else {
//     return acc;
//   }
// }, 0);
// console.log(minNum);

// Найдите максимальное значение в массиве, используя метод reduce().

// const arr = [1, 2, 3, 4, 5];
// const max = arr.reduce((acc, el) => {
//   return Math.max(acc, el);
// });
// console.log(max);

// Найдите минимальное значение в массиве, используя метод reduce().

// const arr = [1, 2, 3, 4, 5];
// const min = arr.reduce((acc, el) => {
//   return Math.min(acc, el);
// });
// console.log(min);

// Вычислите среднее значение массива чисел, используя метод reduce().

// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((acc, el) => {
//   return acc + el;
// }, 0);
// const average = sum / arr.length;
// console.log(average);

// Сведите массив массивов в один массив с помощью метода reduce().

// const arr = [[1], [2], [3], [4], [5]];
// const sum = arr.reduce((acc, el) => {
//   return acc.concat(el);
// }, []);
// console.log(sum);

// Подсчитайте количество слов в предложении, используя метод reduce().

// const sentence = "предложение предложение предложение";
// const count = sentence.split(" ").reduce((acc, el) => {
//   return el ? acc + 1 : acc;
// }, 0);
// console.log(count);

// Удалите повторяющиеся значения из массива с помощью метода reduce().

// const arr = [1, 9, 7, 10, 33, 5, 3, 23, 5, 7, 6, 2, 1, 2, 3, 4, 5];
// const newArr = arr.reduce((acc, el) => {
//   acc.includes(el) ? null : acc.push(el);
//   return acc;
// }, []);
// console.log(newArr);

// Вычислите факториал числа, используя метод reduce().

// Удалите ложные значения из массива с помощью метода reduce().
// const arr = [undefined, "", null, 1, 0, true, "hello", false];
// const filter = arr.reduce((acc, el) => {
//   if (el) {
//     acc.push(el);
//   }
//   return acc;
// }, []);
// console.log(filter);

// Подсчитайте, сколько раз определенное слово появляется в предложении, используя метод reduce().

// const sentence = "новое предложение предложение это предложение новое";
// const word = "предложение";
// const wordCount = sentence.split(" ").reduce((acc, el) => {
//   if (el.toLowerCase() === word.toLowerCase()) {
//     return acc + 1;
//   } else {
//     return acc;
//   }
// }, 0);
// console.log(`слоыо "${word}" появляется ${wordCount} раза.`);
