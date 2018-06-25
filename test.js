// 'use strict';

// (function (){
//     for(i = 0; i < 10; i++){
//         console.log(i);
//     }
// })()
// console.log('after counter:',i);

const numbers = [1,3,4,-4,-5]
const filtered =  numbers.filter(n => n >= 0 );
console.log(filtered)