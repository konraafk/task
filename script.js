// const task1 = (arr) =>{
//     return arr.map((el)=> el + `${5}` )
// }
// console.log(task1(['cola','fanta','sprite']));

// const arr = [1,2,3]
// const newArr = arr.reduce((acc,rec,idx,array) => {
//     return acc + rec
// })
// console.log(newArr);

// const arr = ['cola', 'fanta', 'sprite']
// const newArr = arr.filter((el) => !el.includes('s'))
// console.log(newArr);
    
    // const task = (el) =>  {
    //     return a + b
    // }
    // console.log(task(2,4));

// const task = (arr) => {
//     return typeof arr 
// } 
// console.log(task(true));

// const arr = [12,true, 'atra']
// const newArr = arr.filter((el) => typeof el === 'string' )
// console.log(newArr);

// const obj = {
//     name:'izat',
//     age:20,
//     gender:'male'
// }
// console.log(obj.name);

// let task = ((num) => {
//     if( num < 0 ){
//         return 'Negative'
//     }else if( num > 0){
//         return 'Positive'
//     }else{
//     return 'Zero'
//     }
// })
// console.log(task(0));

// const a = 2 + 1
// switch (a){
//    case 3 :
//     console.log('Маловато');
//     case 5 :
//     console.log('Больше');
//     case 4 :
//     console.log('Норма');
// }
// console.log(a);


// Task 1
// Напишите функцию, которая принимает два массива чисел и возвращает массив чисел, которые есть в обоих массивах. Значения должны быть уникальны

// Input: [1,2,3,4,5], [1,12,3,8,5]
// Output: [1,3,5]


// const task1 = (arr1, arr2) =>{
//     const val = [...arr1, ...arr2]
//    return val.filter((el, index) => val.indexOf(el) !== index )
// }
// console.log(task1([1,2,3,4,5], [1,12,3,8,5]));

// const a = '1'
// const b = 1
// console.log(a===b);


// Task 2
// Напишите функцию, которая принимает массив объектов и возвращает объект с ключами взятыми из полей token и значения объекта. Каждый объект соедржит уникальный ключ в token

// Input: [{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}]
// Output: {'1': {token: 1}, '2':{token: 2, value:23}, '3':{token: 3, name:'superman'}, '4': {token: 4}}


// Task 3
// Напишите функцию, которая принимает массив строк и возвращает объект с ключом - строка и значением - количество повторений этой строки в первом объекте

// Input: ['a','b', 'a']
// Output: {a:2, b:1}

// const task3 = (arr) => {
//         return arr.reduce((accumulator,currentValue,index) => {
//             return {
//                 ...accumulator,
//                 [`${index+1}`]:currentValue
//             }
//         },{})
//     }
//     console.log(task3(['a','b', 'a']));


// Task 4
// Напишите функцию, которая принимает массив массивов и возвращает одноранговый массив

// Input: [['ab','abc'],['abcd']]
// Output: ['ab','abc','abcd']


// const task4 = (arr) => {
//     return arr.flat()
// }
// console.log(task4([['ab','abc'],['abcd']]));


// Task 5
// Напишите функцию, которая принимает объект и возвращает массив массивов состоящих из двух элементов ключ, значение

// Input: {a:1,b:2}
// Output: [['a',1], ['b',2]]


// Task 6
// Напишите функцию, которая принимает массив значений и возвращаетт массив без дупликатов
// Input: [true, false, true,true]
// Output: [true, false]

// const task6 = (arr) => {
//     return arr.filter((el) => el === 'false' || el === 'true').map((el) => el < 2)
// }
// console.log(task6([true, false, true,true]));


// Task 7
// Напишите функцию, которая принимает имя поля, ключ и массив объектов и возвращает массив элементов у которых в заданном поле, есть значение ключа

// Input: 'title', 'hello', [{title:'hello world', rating: 1}, {title:'not a helloo', rating: 5}, {title:'new World', rating: 0}]
// Output: [{title:'hello world', rating: 1}, {title:'not a helloo', rating: 5}]
// Input: 'title', 'hellol', [{title:'hello world', rating: 1}, {title:'not a helloo', rating: 5}, {title:'new World', rating: 0}]
// Output: []



// const task12 = (arr) => {
//     return arr.split('').map((el))
// }
// console.log(task12(['abrac']));

// const remove = () => {
// const val = document.querySelector('.result').innerHTML 
// document.querySelector('.result').innerHTML = Number(val) -1
// }

// document.querySelector('.remove').addEventListener('click', remove)
// const add = () => {
//     const val = document.querySelector('.result').innerHTML  
//     document.querySelector('.result').innerHTML = Number(val) +1
//     }
    
//     document.querySelector('.add').addEventListener('click', add)


// const val  = () => {
//    setInterval(()=>{
//     const date = new Date()
//     document.querySelector('.val').innerHTML = date.toLocaleTimeString()
    

//    },1000 ) 
// }
// val()

// const test = () => {
//     alert('hello')
// }
// test()




// const task = (str) => {
//     return str.split
// }
 
const task = (str) => {
    return   str.split(',').map((el)=>{
           return `${el}(${el.length})`
           }).join(',')
   }
   console.log(task('hello,world,abra,carabfa,re,wrewer,rwer'))
