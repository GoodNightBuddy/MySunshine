"use strict";
// let num = 5; // если переменная "num" раньше не существовала, она создаётся

// alert(num); // 5
// for(let i=0; i<10; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, 1000);
//   } 


// let login;

// message = (login == 'Сотрудник') ? 'Hi' : (login == 'Директор') ? 'Sieg Hail' : '' ? 'No logib' : ''

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// // }
// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';


// let number = prompt('Enter any number', '')
// let num = +number
// if(isNaN(num)) {
//   alert('Enter NUMBER')
// }
// console.log(typeof(num))


// let login = prompt('Enter login', '')
// if (login === 'Admin') {
//   password = prompt('Enter passsword', '')
//   if (password === 'qw') {
//     alert('Hello!')
//   }
//   if (password == null || '') {
//     alert('Cancelled')
//   }
//   if (password !== 'qw' && password !== null) {
//     alert('Incorrect password')
//   }
// }
// if (login == null || '') {
//   alert('Cancell')
// }
// if (login !== 'Admin' && login !== null) {
//   alert('I dont  now you')
// }

// let login = prompt('Enter login', '')
// if (login === 'Admin') {
//   password = prompt('Enter passsword', '')
//   if (password === 'qw') {
//     alert('Hello!')
//   }
//   else if (password == null || password == '' ) {
//     alert('Cancelled')
//   }
//   else {
//     alert('Incorrect password')
//   }
// }
// else if (login == null || login == '') {
//   alert('Cancell')
// }
// else {
//   alert('I dont  now you')
// }


// let login = prompt('Enter login', '')
// if (login === 'admin') {
//   password = prompt('Enter password', '')
//   if (password === 'qw') {
//     alert('Hello!')
//   }
//   else if (password === null || password === '') {
//     alert('Cancell')
//   }
//   else {
//     alert('Incorrect passwrod')
//   }
// }
// else if (login === null || login === '') {
// alert('Cancell')
// }
// else {
//   alert('Incorrect login')
// }

// for (let i = 0; i <= 10; i++) {

//   if (i % 2 == 0 && i !== 0) {

//   alert(i)
//   }
// }

// let i = 0
// while (i < 3) {
//   alert( `number ${i}!` )
//   i++
// }


// do {
//   number = prompt('Enter number >100', '')
//   if (number === null) break
// } while (+number < 100);



// nextPrime:
// for (let i = 2; i <= 10; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );
//   let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
//   }
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

  // let ask = (question, yes, no) =>  confirm(question) ? yes() : no() 

  // ask(
  //   "Вы согласны?",
  //   () => alert("Вы согласились."),
  //   () => alert("Вы отменили выполнение.")
  // )

  // let user = {
  //   name: "John",
  //   age: 30,
  //   isAdmin: true
  // };
  
  // for (let key in user) {
  //   // ключи
  //   alert( key );  // name, age, isAdmin
  //   // значения ключей
  //   alert( typeof(user[key]) ); // John, 30, true
  // }
  

  // let menu = {
  //   width: 200,
  //   height: 300,
  //   title: "My menu"
  // };
  // function multiplyNumeric (obj) {
  //   for (let key in obj) {
  //     if (typeof(obj[key]) == 'number') {
  //       obj[key] *= 2
  //     }
  //     console.log(obj[key])
  //   }
  // }
  // multiplyNumeric (menu)

  // let user = {
  //   name: "Вася"
  // };
  
  // let id = Symbol("id");
  
  // user[id] = 1;
  
  // alert( user[id] );

// let calculator = {
//   read: () =>  {
//     this.num1 = +prompt('Enter number 1', '')
//     this.num2 = +prompt('Enter number 2', '')
//   },
//   sum: () => {
//     return this.num1 + this.num2
//   },
//   mul: () => {
//     return this.num1 * this.num2
//   }
// };
// calculator.read()
// alert(calculator.sum())
// alert(calculator.mul())
// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };
// ladder.up().up().down().showStep()

// let user = {
//   name: "John",

//   toString() {
//     return this.name;
//   }
// };

// alert(user); // toString -> John
// alert(user + 500); // toString -> John500

// let calculator = new Calculator()
// function Calculator () {
//   this.sum = function () {
//     return this.a + this.b;
//   }

//   this.mul = function () {
//     return this.a * this.b;
//   },

//   this.read = function () {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Accumulator (startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += Number(prompt('Enter any number', ''))
//   }
// }
// let accumulator = new Accumulator(0); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// console.log(accumulator.value); // выведет сумму этих значений
// console.log(typeof(accumulator.value))
 

// do {
//   let a = +prompt('Enter any Number','')
//   console.log(typeof(a))
// }while (typeof(a) == 'number' || a !== 'null');


// function readNumber() {
//   let num;

//   do {
//     num = prompt("Введите число", 0);
//   } while ( !isFinite(num) );

//   if (num === null || num === '') return null;

//   return +num;
// }

// alert(`Число: ${readNumber()}`);

// function random(min, max) {
//   let a;
//   a = min + Math.random() * (max - min);
//   return Math.trunc(a)
// }

// alert( random(1, 5) );
// alert( random(13, 89) );
// alert( random(-1, -5) );



// function checkSpam (str) {
//   let tsr = str.toLowerCase()
//   return tsr.includes('viagra') || tsr.includes('xxx')
// }
// alert(checkSpam('afdasf viaGRa'))

// let str = 'ViaGRa'
// let tsr = str.toLowerCase()
// alert(tsr)

// function truncate (str, maxlength) {
//   let trs
//   if (maxlength < str.length) {
//     trs = str.substr(0, maxlength - 1) + '...'
//     alert(trs)
//   } else alert(str)
// }

// truncate ('123456789', 5)

// function getMaxSubSum(arr) {
//   let maxSum = 0; // если элементов не будет - возвращаем 0

//   for (let i = 0; i < arr.length; i++) {
//     let sumFixedStart = 0;
//     for (let j = i; j < arr.length; j++) {
//       sumFixedStart += arr[j];
//       maxSum = Math.max(maxSum, sumFixedStart);
//     }
//   }

//   return maxSum;
// }

// function camelize (str) {
//   let arr = str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')
//   console.log(arr)
// }


// camelize("background-color");
// camelize("list-style-image");
// camelize("-webkit-transition");

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     if (val < a || val>b){
//       arr.splice(i,1);
//       i--
//     }
//   }
// }
// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); 

// alert( arr ); 


// let arr = [5, 2, 1, -10, 8];

// arr.sort((a,b) => b - a)

// alert( arr ); // 8, 5, 2, 1, -10

// let arr = ["HTML", "JavaScript", "CSS"]
// function copySorted (array) {
//   let arr = array.slice()
//   return arr.sort((a,b) => b - a),
//   console.log(arr)
// }

// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// function Calculator () {
//   this.calculate = function (str) {
//     let string = str.split(' ')
//     console.log(string)
//     if (string[1] === '+') {
//       return (+string[0] + +string[2])
//     }
//     if (string[1] === '-') {
//       return(+string[0] - +string[2])
//     }
// }
  
// }

// function Calculator () {
//   this.methods = {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b
//   }

//   this.calculate = function (str) {
//     let split = str.split(' '),
//     a = +split[0],
//     b = +split[2],
//     op = split[1]
    
//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN
//     }
  
//   return this.methods[op] (a, b)
//   }
//   this.addMethod = function (name, func) {
//     this.methods[name] = func
//   }

// }
// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8



// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// // подсчёт вероятности для всех возможных вариантов
// let count = {
//   '123': 0,
//   '132': 0,
//   '213': 0,
//   '231': 0,
//   '321': 0,
//   '312': 0
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join('')]++;
// }

// // показать количество всех возможных вариантов
// for (let key in count) {
//   alert(`${key}: ${count[key]}`);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// let result = arr.reduce((sum, current) => sum + current, 0);

// alert(result); // 15
// function getAverageAge (arr) {
//   return +=arr.age
// }

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// let set1 = new Set ()
// function unique(arr) {
//   return Array.from(new Set (arr))
// }

// unique(values)

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
// function aclean(arr) {
//   let map = new Map
//   for (let word of arr) {
//     let sorted = word.toLowerCase().split('').sort().join('');
//     map.set(sorted, word)
//   }
//   return Array.from(map.values)
// }
// alert(aclean(arr))

// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();
// console.log(typeof(keys))

// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];

// let readMessage = new WeakSet

// readMessage.add(messages[0])
// readMessage.add(messages[1])
// readMessage.add(messages[2])
// console.log(readMessage)

// alert('Read message from John:' + readMessage.has(messages[1]))
// messages.shift()

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function sumsalaries (obj) {
//   let sum = 0
//   for (let salary of Object.values(obj)) {
//     sum += salary
//   }
//   return sum
// }

// alert (sumsalaries (salaries))

// function count (obj) {
//   let arr = Object.entries(obj)
//   return arr.length
// }

// alert(count(salaries))

// function topSalary(salaries) {
//   let max = 0
//   let maxName = null,
//   for (let [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }
//   return maxName
// }


// let date = new Date(2012, 0, 2)


// function getWeekDay (obj) {
//   let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   return days[obj.getDay()];
// }

// alert(getWeekDay(date))

// function getLocalDay (obj) {
//   let days = [7, 1, 2, 3, 4, 5, 6]
//   return days[obj.getDay()]
// }
// alert(getLocalDay(date))


// function getDateAgo (date, days) {
//   let dateAgo = new Date(date)
//   dateAgo.setDate(date.getDate() - days)
//   return dateAgo
// }

// console.log(getDateAgo(date, 365))

// function getLastDayOfMonth (year, month) {
//   let date = new Date(year, month + 1, 0)
//   return date.getDate()
// }

// console.log(getLastDayOfMonth(2012, 1))

// function getSecondsToday () {
//   let date = new Date()
//   let date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate())
//   alert(Math.trunc((date - date1)/1000))
// }

// getSecondsToday()


// function getSecondsTomorrow () {
//   let today = new Date()
//   let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
//   let diff = tomorrow - today
//   return diff/1000
// }

// alert(getSecondsTomorrow())

// function formatDate (date) {
//   let constDate = new Date(date)
//   let now = new Date()
//   let month = date.getMonth() + 1
//   month = month < 10? '0' + month : month
//   if ((now - constDate) < 1000) {
//     alert('pryamo seychas')
//   }
//   if ((now - constDate) < 60000) {
//     alert(`Proshlo ${(Math.trunc((now-constDate)/1000))} secund`)
//   }
//   if ((now - constDate) < 3600000) {
//     alert(`Proshlo ${(Math.trunc((now-constDate)/60000))} minut`)
//   }
//   else {
//     alert(`Zahodil ${constDate.getDate()}.${month}.${constDate.getFullYear()}`)
//   }
//   console.log(typeof(constDate))
// }

// formatDate(new Date(new Date - 86400 * 1000))


// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//   place: room
// };

// room.occupiedBy = meetup;
// meetup.self = meetup;

// let jsonStr = JSON.stringify(meetup, function replacer (key, value) {
//   return (key != "" && value == meetup) ? undefined : value;

// })

// console.log(jsonStr)



// alert( JSON.stringify(meetup, function replacer(key, value) {
//   alert(`${key}: ${value}`);
//   return (key == 'occupiedBy') ? undefined : value;
// }));

// function sumTo (n) {
//   let sum = 0
//   for (let i = 0; i < (n+1); i++) {
//     sum += i
//   }
//   console.log(sum)
// }

// function sumTo (n) {
//   if ( n == 1) {
//     return 1
//   } else {
//     return n + sumTo(n-1)
//   }
// }

// function sumTo (n) {
//   return n*(n+1)/2

// }

// console.log(sumTo(4))

// function factorial (n) {
//   return (n != 1) ? n * factorial(n-1) : 1;
// }

// console.log(factorial(5))

// function fib (n) {
//   return n <= 1 ? n : fib(n-1) + fib(n-2)
// }

// function fib (n) {
//   let a = 1
//   let b = 1

//   for (let i = 3; i <= n; i++) {
//     let c = a + b
//     a = b
//     b = c
//   }
//   return b
// }
// console.log(fib(7))


// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList (list) {
//   alert(list.value)
//   if (list.next) {
//     printList(list.next)
//   }
// }

// function printList (list) {
//  let tmp = list
//   while(tmp) {
//     alert(tmp.value)
//     tmp = tmp.next
//   }
// }

// printList(list)


// function printListReverse (list) {
//   if (list.next) {
//     printListReverse(list.next)
//   }
//   alert(list.value)
// }

// function printListReverse (list) {
//   let tmp = list
//   let arr = []

//   while (tmp) {
//     arr.push(tmp.value)
//     tmp =tmp.next
//   }
//   arr.reverse()
//   for (let i of arr) {
//     alert(i)
//   }

// }

// printListReverse(list)


// function sumAll (...args) {
//   let sum = 0
//   for (let arg of args) {
//     sum +=arg
//   }
//   console.log(sum)
// }

// sumAll(1, 2, 3, 4)

// let arr1 = [1, 2, 3, 4]
// let arr2 = [5, 6, 7, 8]

// let arr = [0, ...arr1, 14, ...arr2, 88]
// alert(arr)

// let str = 'Zdorov'
// alert(Array.from(str))

// function sum (a) {
//   return function(b) {
//     return a + b
//   }
// }

// alert(sum(1)(2))

// let arr = [1, 2 ,3, 4, 5, 6, 7]

// function inBetween (a, b) {
//   return function (x) {
//     return x >= a && x <=b
//   }
// }

// function inArray (arr) {

//   return function (x) {
//     return arr.includes(x)
//   }
// }
// // alert(arr.filter(inBetween(3, 6)))
// alert(arr.filter(inArray([3, 6])))

// function byField (value) {
//   if (value == 'name') {
//     return (a, b) => a.name > b.name ? 1 : -1
//   }
//   if (value == 'age') {
//     return (a,b) => a.age > b.age ? 1 : -1
//   }
// }

// function byField (field) {
//   return (a, b) => a[field] > b[field] ? 1 : -1
// }

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// users.sort(byField('age'))

// // users.sort((a, b) => a.name > b.name ? 1 : -1);
// alert(users[0].name)
// alert(users[1].name)
// alert(users[2].name)

// function makeArmy() {
//   let shooters = [];

//   for (let i = 0; i < 10; i++) {
//     let shooter = function() { 
//       alert( i );
//     };
//     shooters.push(shooter);
//   }

//   return shooters;
// }

// let army = makeArmy();

// console.log(army[1])
// army[5]



// function inArray (arr) {
//   return function (x) {
//     return arr.includes(x)
//   }
// }

// function makeCounter() {

//   function countar() {
//     return counter.count++;
//   };

//   countar.count = 0;

//   countar.set = value => countar.count = value

//   countar.decrease = () => countar.count--

//   return countar;
// }

// let counter = makeCounter();
// counter.set = function (value) {
//   counter.count = value
// }
// counter.decrease = function () {
//   counter.count--
// }
// counter.set(12)
// counter.decrease()
// alert( counter() ); // 10

// function sum (a) {
//   let currentSum = 0

//   function f (b) {
//     currentSum += b
//     return f
//   }
//   f.toString = function () {
//     return currentSum
//   }
//   return f
// }

// function sum (a) {
//   sum.value = a
//   function f (value2) {
//     sum.value += value2
//     return f
//   }
//   f[Symbol.toPrimitive] = () => sum.value
//   return f
// }

// function sum(value) {
//   sum.count = value;
//   function increase (value2) {
//       sum.count += value2;
//       return increase;
//   }
//   increase[Symbol.toPrimitive] = () => sum.count;
//   return increase;
// }


// alert(sum(1)(2))


// function printNumber (from, to) {
//   const timer = setInterval(function() {
//     if (from === to + 1) {
//         clearInterval(timer)
//     } else {
//     console.log(from++)
//     }
// }, 1000);
// }

// function printNumber (from, to) {

// let timer = setTimeout(function print() {

//   timer = setTimeout(print, 1000)
//   if (from == to) {
//     clearTimeout(timer)
//   }
//     console.log(from++)
// }, 1000)
// }
// printNumber (1, 5)


// function work(a, b) {
//   return a + b
// }

// function spy (func) {
//   function wrapper(...args) {
//     wrapper.calls.push(args)
//     return func.apply(this, arguments)
//   }
//   wrapper.calls = []
//   console.log(wrapper.calls)
//   return wrapper
// }


// work = spy(work)
// alert(work(1,2))
// alert(work(3,5))

// function f(x) {
//   alert(x)
// }

// function delay(f, ms) {
//   return function() {
//     setTimeout(() => f.apply(this, arguments), ms);
//   };
// }

// let f1000 = delay(f, 3000);

// f1000("test");

// function zoom(x) {
//   console.log(x)
// }

// function debounce(func, time) {
  
//   let coolDown = false

//   return function() {
//     if (coolDown) return
//     func.apply(this, arguments)
//     coolDown = true
//     setTimeout(() => coolDown = false, time)
//   }
// }

// let f = debounce(zoom, 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1100); // выполняется
// setTimeout( () => f(5), 1500); // проигнорирован


// function throttle (func, ms) {
//   let coolDown = false
//   throttle.arr = []
//   return function() {
//     if (coolDown) return
//     func.apply(this, arguments)
//     if (!coolDown) {
//       throttle.arr.push(func)
//     }
//     coolDown = true
//     setTimeout(function() {
//       coolDown = false
//       console.log(throttle.arr)
//     })
//   }

// }

// let f1000 = throttle(zoom, 1000)

// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)

// setTimeout(f1000, 2000)

// function askPassword(ok, fail) {
//   let password = prompt('Password?', '')
//   if (password == 'rockstar') ok();
//   else fail()
// }

// let user = {
//   name: 'Vasya',

//   loginOk() {
//     alert(`${this.name} logged in`)
//   },

//   loginFail() {
//     alert(`${this.name} filed to log in`)
//   }
// }

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user))

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };


// askPassword(() => user.login(true), () => user.login(false))
// askPassword(user.login.bind(user, true), user.login.bind(user, false))

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList () {
//   this.students.forEach(student => alert('Our group: ' + student))
//   }
// }

// group.showList()


// function User (name, birthday) {
//   this.name = name,
//   this.birthday = birthday,

//   Object.defineProperty(this, 'age', {
//     get() {
//       let todayYear = new Date().getFullYear()
//       return todayYear - this.birthday.getFullYear()
//     }
//   })

// }

// let John = new User('John', new Date(1995, 6, 1))
// console.log(Object.getOwnPropertyDescriptors(John))
// console.log(John.name)
// console.log(John.age)

// function Rabbit (name) {
//   this.name = name
//   console.log(`I am ${this.name}`)
// }

// let rabbit = new Rabbit('Gena')
// let rabbit2 = rabbit.constructor('Grisha')

// function f(s) {
//   console.log(s)
// }

// Function.prototype.defer = function(ms) {
//   let f = this
//   return function(...args) {
//     setTimeout(() => f.apply(this, args), ms)
//   }
// }

// f.defer(1000)('boba')

// let dictionary = Object.create(null)

// dictionary.toString = Object.toString()
// Object.defineProperty(dictionary, 'toString', {
//   enumerable: false
// })


// dictionary.apple = "Apple"
// dictionary.__proto__ = "Test"



// for (let key in dictionary) {
//   console.log(key)
// }

// console.log(dictionary)

// class Clock {
//   constructor({template}) {
//     this.template = template
//   }

//   render() {
//     let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = this.template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer)
//   }

//   start() {
//     this.render()
//     this.timer = setInterval(()=> this.render(), 1000)
//   }
// }

// let clock = new Clock({template: 'h:m:s'})
// clock.start()

// class Animal {

//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }

//   // ...
// }

// class Rabbit extends Animal {

//   constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//   }

//   // ...
// }

// // теперь работает
// let rabbit = new Rabbit("Белый кролик", 10);
// alert(rabbit.name); // Белый кролик
// alert(rabbit.earLength)
// alert(rabbit.speed)

// class Animal {
//   constructor(name) {
//     this.name = name
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name)
//     this.created = Date.now()
//   }
// }

// let rabbit = new Rabbit('White rabbit')
// alert(rabbit.name)

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// class ExtendedClock extends Clock {
//   start(precision) {
//     super.render()
//     super.timer = setInterval(() => this.render(), precision);
//   }
// }

// let clock = new ExtendedClock({template: 'h:m:s'})
// clock.start(2000)

// class PowerArray extends Array {
//   isEmpty() {
//     return this.length === 0
//   }

//   // static get [Symbol.species]() {
//   //   return Array
//   // }

// }

// let arr = new PowerArray (1, 5, 10, 20, 50)

// let filtered = arr.filter(item => item >= 10)
// console.log(filtered)
// console.log(filtered.isEmpty())


// let sayMixIn = {
//   say(phrase) {
//     alert(phrase)
//   }
// }

// let sayHiMixin = {
//   __proto__: sayMixIn,

//   sayHi() {
//     super.say(`Hello ${this.name}`)
//   },

//   sayBye() {
//     super.say(`Bye ${this.name}`)
//   }

// }

// class User {
//   constructor(name) {
//     this.name = name
//   }
// }

// Object.assign(User.prototype, sayHiMixin)

// let user = new User('Leo')
// user.sayHi()

// let json = '{"age": 30}'

// try {
//   let user = JSON.parse(json)
  
//   if (!user.name) {
//     throw new SyntaxError('Information is not complete')
//   }
// }

// catch(e) {
//   console.log(e.message)
//   console.log(e.name)
//   console.log(e.stack)
// }

// class MyError extends Error {
//   constructor(message) {
//     super(message)
//     this.name = this.constructor.name
//   }
// }

// class ValidationError extends MyError {}

// class PropertyrequiredError extends ValidationError {
//   constructor(property) {
//     super('No property ' + property)
//     this.property = property
//   }
// }

// class ReadError extends Error {
//   constructor(message, cause) {
//     super(message)
//     this.cause = cause
//   }
// }



// function validateUser(user) {
//   if (!user.name) {
//     throw new PropertyrequiredError('name')
//   }

//   if (!user.age) {
//     throw new PropertyrequiredError('age')
//   }
// }

// function readUser(json) {
//   let user

//   try {
//     user = JSON.parse(json)
//   }

//   catch(err) {
//     if(err instanceof SyntaxError) {
//       throw new ReadError('Syntax error: ', err)
//     }
//     else {
//       throw err
//     }
//   }

//   try {
//     validateUser(user)
//   }
//   catch {
//     if (err instanceof ValidationError) {
//       throw new ReadError("Validation eror " + err)
//     }
//     else {
//       throw err
//     }
//   }
// }

// try {
//   readUser('{bad json}')
// }

// catch(e) {
//   if (e instanceof ReadError) {
//     console.log(e)
//     console.log('Initial error ' + e.cause)
//   }
//   else {
//     throw e
//   }
// }

// class FormatError extends SyntaxError {
//   constructor(message) {
//     super(message)
//     this.name = 'FormatError'
//   }
// }

// let err = new FormatError('Format error')

// console.log(err.message)
// console.log(err.name)
// console.log(err.stack)

// console.log(err instanceof FormatError)
// console.log(err instanceof SyntaxError)


// function loadScript(src, callback) {
//   let script = document.createElement('script')
//   script.src = src

//   script.onload = () => callback(null, script)
//   script.onerror = () => callback(new Error(`Failed load script ${src}`))

//   document.head.append(script)
// }


// function delay(ms) {
//   return new Promise (resolve => setTimeout (resolve, ms))
// }


// delay(3000).then(() => alert('Resolve fo three seconds'))

// let MomIsHappy = true

// let willIGetNewPhone = new Promise (
//   function (resolve, reject) {
//     if (MomIsHappy) {
//       let phone = {
//         brand: 'Samsung',
//         color: 'gray'
//       }
//       resolve(phone)
//     }
//     else {
//       let reason = new Error('Mom is not happy')
//       reject(reason)
//     }
//   }
// )




// let showOff = function (phone) {
//   return new Promise (
//     function (resolve, reject) {
//       let message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone`
//       resolve(message)
//     }
//   )
// }

// let showOff = function (phone) {
//   let message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone`
//   return Promise.resolve(message)
// }

// let askMom = function () {
//   willIGetNewPhone
//     .then(showOff)
//     .then(function (fulfilled) {
//       console.log(fulfilled);
//     })
//     .catch(function (error) {
//       console.log(error.message)
//     })
// }


// askMom()

// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://api.github.com/users/jeresig'
// ];

// let requests = urls.map(url => fetch(url))

// Promise.all(requests)
//   .then(responses => responses.forEach(
//     response => alert(`${response.url} : ${response.status}`)
//   ))


// let loadScriptPromise = function (src) {
//   return new Promise((resolve, reject) => {
//     loadScript(src, (err, script) => {
//       if (err) reject(err)
//       else resolve(script)
//     })
//   })
// }

// class HttpError extends Error {
//   constructor (response) {
//     super(`${response.staus} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response
//   }
// }

// async function loadJson(url) {
//   let response = await fetch(url)
//   if (response.status == 200) {
//     let json = response.json()
//     return json
//   } else {
//   throw new HttpError(response);
//   }
// }

// async function demoGithubUser() {
//   let user
//   while (true) {
//     let name = prompt("Введите логин?", "iliakan");

//     try {
//       let user = await loadJson(`https://api.github.com/users/${name}`)
//       break
//     }
//     catch(err) {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//       } else {
//         throw err;
//       } 
//     }
//   }
//   alert(`Полное имя: ${user.name}.`)
//   return user

// }



// function* generateSequence(start, end) {
//   for(let i = start; i <= end; i++)
//   yield i
// }

// function* generatePasswordCodes() {
//   yield* generateSequence(48, 57)

//   yield* generateSequence(65, 90)

//   yield* generateSequence(97, 122)
// }
// let str = ''

// for(let code of generatePasswordCodes()) {
//   str += String.fromCharCode(code)
// }

// console.log(str)

// function* gen() {
//   let ask1 = yield "2 + 2 = ?";

//   alert(ask1); // 4

//   let ask2 = yield "3 * 3 = ?"

//   alert(ask2); // 9
// }

// let generator = gen();

// alert( generator.next().value ); // "2 + 2 = ?"

// alert( generator.next().value ); // "3 * 3 = ?"

// alert( generator.next().done )

// function* pseudoRandom(seed) {
//   let value = seed

//   while(true) {
//     value = value * 16807 % 2147483647
//     yield value
//   }
// }

// let gen = pseudoRandom(1)

// alert(gen.next().value)
// alert(gen.next().value)
// alert(gen.next().value)
// alert(gen.next().value)


// let range = {
//   from: 1,
//   to: 5,

//   async *[Symbol.asyncIterator]() {
//     for(let value = this.from; value <= this.to; value++) {

//       await new Promise(resolve => setTimeout(resolve, 1000));

//       yield value;
//     }
//   }
// };

// (async () => {
//   for await (let value of range) {
//     alert(value)
//   }
// })

// let names = [
//   new Promise(resolve => resolve('1')),
//   new Promise(resolve => resolve('2')),
//   new Promise(resolve => resolve(3))
// ]

// let showNames = async () => {
//   for await (let name of names) {
//     console.log(name)
//   }
// }

// showNames()

// let dictionary = {
//   'Hello' : 'Hola',
//   'Bye' : 'Adios'
// }

// dictionary = new Proxy(dictionary, {
//   get(target, phrase) {
//     if(phrase in target) {
//       return target[phrase]
//     } else {
//       return phrase
//     }
//   }
// })


// console.log(dictionary['Hello'])
// console.log(dictionary['Hi'])

// let user = {
//   name: 'John'
// }

// function wrap(target) {
//   return new Proxy(target, {
//     get(target, prop, reciever) {
//       if(prop in target) {
//         return Reflect.get(target, prop, reciever)
//       }else {
//         throw new Error(`No such property exist : ${prop}`)
//       }
//     }
//   })
// }


// user = wrap(user)
// console.log(user.name)
// console.log(user.age)

// let person = {
//   name: 'Adolf',
//   age: 1488,
//   position: 'Furrer'
// }


// person = new Proxy(person, {
//   get(target, prop) {
//     console.log(`Getting property: ${prop}`)
//     if(!(prop in target)) {
//       return prop
//         .split('_')
//         .map(part => target[part])
//         .join(' ')
//     }
//     return target[prop]
//   },

//   set(target, prop, value) {
//     if(prop in target) {
//       target[prop] = value
//     }else{
//       throw new Error(`No such property in ${target}`)
//     }
//   }
// })

// const withDefaultValue = (target, defaultValue = 0) => {
//   return new Proxy(target, {
//     get: (obj, prop) => (prop in obj) ? obj[prop] : defaultValue
//   })
// }

 

// const withHiddensProps = (target, prefix = '_') => {
//   return new Proxy(target, {
//     has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
//     ownKeys: obj => Reflect.ownKeys(obj)
//       .filter(property => !property.startsWith(prefix)),
//     get: (obj, prop, reciever) => (prop in reciever) ? obj[prop] : void 0,

//   })
// }

// let furrer = withHiddensProps({
//   name: 'Adolf',
//   surname: 'Hitler',
//   _age: 1488
// })

// const userData = [
//   {id: 1, name: 'John', job: 'teacher', age: 57},
//   {id: 2, name: 'Pete', job: 'killer', age: 35},
//   {id: 3, name: 'Stipe', job: 'firefighter', age: 34},
//   {id: 4, name: 'Daniel', job: 'coach', age: 42},
// ]

// const IndexArray = new Proxy(Array, {
//   construct(target, [args]) {
//     const index = {}
//     args.forEach(item => index[item.id] = item)
//     return new Proxy(new target(...args), {
//       get(arr, prop) {
//         switch(prop) {
//           case 'push': return item => {
//             index[item.id] = item
//             arr[prop].call(arr, item)
//           }
//           case 'findById': return id => index[id]
//           default: return arr[prop]
//         }
        
//       }
//     })
//   }
// })

// const users = new IndexArray(userData)

// function makeObservable(target) {
//   return new Proxy(target, {
//     set(target, prop, value) {
//         console.log(`SET property ${prop} = ${value}`)
//         return target[prop] = value
      
//     }
//   })
// }

// let user = {}

// user = makeObservable(user)

// user.name = 'John'
// console.log(user.name)


// let x = prompt('Enter arithmetic expression')


// console.log(eval(x))


// function curry(f) {
//   return function(a) {
//     return function(b) {
//       return f(a,b)
//     }
//   }
// }

// function sum(a, b) {
//   return a + b;
// }

// let carriedSum = curry(sum)
// console.log(carriedSum(1)(2))






// function curry(f) { 
//   return function(a) {
//     return function(b) {
//       return f(a, b);
//     };
//   };
// }

// function sum(a, b) {
//   return a + b;
// }

// let carriedSum = curry(sum);

// console.log( carriedSum(1)(2) );


// let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

// let sort = new Intl.Collator(undefined, {sensitivity: 'base'})

// let sortedAnimals = animals.sort(sort.compare)

// console.log(sortedAnimals)

// alert(location.href)
// if (confirm('Go to Wikipedia?')) {
//   location.href = 'https://wikipedia.org'
// }

// function showAdditions (num) {
//   let number = String(num)
//   for (let dec of number) {
//     console.log(dec)
//   }
  
  
//   console.log(number.length)
// }

// // showAdditions(123)

// function addNull(cifra) {
//   for (let i = 0; i < cifra; i++) {
//     let str = '0'
//     let str1 =+ str
//     console.log(str1)
//     return str1
//   }
  
// }

// console.log('0' + '0' + '0')
// addNull(4)


// let num;
// let list = []

// do {
//   num = prompt("Введите число, большее 100?", 0);
//   list.push(num)
//   console.log(list)
// } while (num);


// let data = {
//   "Рыбы": {
//     "форель": {},
//     "лосось": {}
//   },

//   "Деревья": {
//     "Огромные": {
//       "секвойя": {},
//       "дуб": {}
//     },
//     "Цветковые": {
//       "яблоня": {},
//       "магнолия": {}
//     }
//   }
// };

// let container = document.getElementById('container')


// function createTree(container, obj) {
//   container.append(createTreeDom(obj))
// }

// function createTreeDom (obj) {
//   if (!Object.keys(obj).length) return

//   let ul = document.createElement('ul')

//   for (let key in obj) {
//     let li = document.createElement('li')
//     li.innerHTML = key

//     let childrenUl = createTreeDom(obj[key])
//     if (childrenUl) {
//       li.append(childrenUl)
//     }

//     ul.append(li)
    
//   }
//   return ul
// }

// createTree(container, data)

// showAdditions(456); // "400+50+6"
// showAdditions(8274); // "8000+200+70+4"
// showAdditions(15040); // "10000+5000+40"


// let nullArr = ['', ]
// let sum = ''
// for (let i = 0; i < 10; i++) {
//   sum = sum + '0'
//   nullArr.unshift(sum)
// }
// console.log(nullArr)

// function showAdditions (num) {
//   let str = []
//   let arr = Array.from(num.toString())
//   for (let i = 0; i <= arr.length -1; i++) {
//     str.push(arr[i] + nullArr[arr.length - i] + ' ')
    
//   }
//   console.log(str)
  
// }

// showAdditions(228)











































