console.log('1.Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.');

function arithmetic(arr) {
    let amountInt = 0;
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            amountInt += 1;
            summ += arr[i];
        }
    }
    let result = summ / amountInt;
    console.log(result);
    return result;
}

arithmetic([2, 3, true, undefined, 'gfdgf', 5]);

console.log('2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.');

let x = prompt('введите X');
let znak = prompt('введите znak');
let y = prompt('введите Y');


function doMath (x, znak, y) {
if (~znak.search(/[^+\-*/%^]/) || znak.length !==1) return 'Error';
return eval(x + znak.replace('^', '*') + y)
}
console.log(doMath(x,znak,y));


console.log('3.Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.');

let arrLength = prompt('введите длину основного массива');
let length = prompt('введите длину внутренних массивов');

let arr = new Array(+arrLength).fill(0).map((_, ind)=> new Array(+length).fill(0).map((_, i) => prompt('введите значение для елемента [i] во внутренний подмассив')));
console.log('Ваш массив: '  + arr.map(subArr => '\n' + subArr ))


console.log('4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. \'func(" hello world", [\'l\', \'d\'])\' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.');

let string = prompt('введите строку');
let del = prompt('введите символы которые нужно убрать из строки');


function deleteSymbol(str, del) {
    let newStr = '';
    for (let i = 0; i < string.length; i++)
        if (!del.includes(string[i])) {
            newStr += string[i];
        }
    return newStr;
}

console.log(deleteSymbol(string, del));

