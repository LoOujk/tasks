// console.log(document.head);
// console.log(document.body);




// все дочерние элементы body
// for (let child of document.body.childNodes) {      
//     console.log( child );
// }



// первый div и все его дочерние узлы 

//  let mass=document.body.children;
//  console.log(mass[0]);

// let arr = document.querySelector('div')
// console.log(arr);



// вывести все дочерние узлы в консоль 
// let mass=document.body.children;
// let arr = mass[0].querySelectorAll('p')
// console.log(arr);

// let arr1 = document.querySelector('div')
// console.dir(arr1.innerHTML)



// вывести все дочерние узлы в консоль кроме первого
let mass=document.body.children;
let arr = mass[0].querySelectorAll('p')

let child = []
let k=0
for(i=1;i<arr.length;i++){
   if(k<arr.length-1) {
    child[k]=arr[i]
    k++
   }
}

console.log(child)