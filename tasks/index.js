document.addEventListener('DOMContentLoaded', function () {
    console.clear();
//   Создать функцию multiply, которая будет принимать любое количество чисел и возвращать 
// их произведение: multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль.

// function multiply(...mulMass){
    
//     let multiplyArr = 1;
//     if (mulMass.length ==0){
//         return 0;
//     }
//     for (let i=0; i<mulMass.length;i++){
//         multiplyArr= multiplyArr * mulMass[i]
//     }
//     return multiplyArr;
// }
// console.log(multiply(1,2,3));

// С помощью ри курсе вычислить факториал числа 10.

// function recurs(a) {
//     if (a == 1) {  
//       return 1;  
//     } else {      
//       return a * recurs(a-1);
//     }
//   }
//   console.log(recurs(10)); 

// Создать функцию, которая принимает строку и возвращает перевернутую строку ('test') = 'tset'.

// function reverse(rev){
//     let str=[]
//     let x=1;
//    for(let i = 0;i<rev.length;i++){
//       str[i]= rev[rev.length-x]
//     x++;
//    }
//     return str.join('');

// }
// console.log(reverse('test')); 
// });

// Написать функцию, которая проверяет является ли слово палиндромом


// function pol(str) {
//         str = str.split('');
//         let x = str.length - 1;
//         let rev = [];
//         for ( let i = 0; i < str.length; i++) {
//         rev[i] = str[x];
//         x--;
//         }
//         str=str.join();
//         rev=rev.join();
    

//         if (str === rev) {
        
//         return ('Its polindrome')
        
//         }
        
//         else {
//         return ('Its not polindrome ')
//         } 
//     }
//     console.log(pol('teooet'));

// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
//  где каждый символ разделен пробелом и заменён на значение символа из юникода. ((hello) => "104 101 108 108 111")

// function pol(str) {
//    let rev = [];
//     for (i = 0; i < str.length; i++) {
//         rev[i] = str.charCodeAt(i);
//     }
//    rev= rev.join(' ');
//     return rev
// }
// console.log(pol('hello'));

// Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль ('test') => 't' 'e' 's' 't'


function rec(str) {
    let arr = str.split('');  
        if(!arr[0]) {
          return; 
        } else {
          console.log(arr[0])
          arr.splice(0,1);
          let newString = arr.join('');
          return rec(newString)
        }
    }    
 console.log(rec('test'));
 
});
