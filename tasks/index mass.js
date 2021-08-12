document.addEventListener('DOMContentLoaded', function () {
    console.clear();
    // Используя функцию, найти последний элемент массива, не изменяя его.
    // let mass = [1,2,3,4,5,6,7,38,943];
    // function theLastOne(mass) {
    //     return mass[mass.length - 1];
    //  }
    // console.log(theLastOne(mass));

    // Создать такую функцию, которая принимала бы массив [1,3,6], а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].

// let mass = [1,3,6];
// function dublicateMassive (){
//     let mass1 = mass.concat(mass);
//     return mass1;
// }
// console.log(dublicateMassive());

// Создать такую функцию, которая принимала бы любое число, а возвращала массив, заполненный числами от 1 до n.

// let number = 5;
// let qwe=[];
// function progression (value){
//     let mass=[];
//     if(number<1){      
//         for(let i = 1;i>=number;i--){
//         mass.push(i);
//         }
//     }  
//      for(let i = 1;i<=number;i++){
//              mass.push(i);
//         }
    
//     return mass;
// }
// console.log(progression(qwe));

// Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба").

// let str = 'екважбигёзд';
// let str1= 'екважб';
// function alph(alpha){
    
//     str=str.split('');
//     for(let i=0 ;i<str.length-1;i++){
//         if(str[i]=='ё'){
//             str[i]='е';
//         }
//     }
//     str=str.sort().reverse();
//     let position= str.indexOf('е');
//     str[position]= 'ё';
//     str=str.join('');
//     return str;
// }
// console.log(alph(str1));


// Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.
// let mass = [ 5, 2, -1, 6, 9, -9, 3];
// let mass1 = [ 55, 2, -21, 46, 9, -9, 3];
// function sortMass(massSort){
//     let temp=0;
//     for(let i = massSort.length-1;i>0;i--){
//         for(let x=0;x<i;x++){
//             if(massSort[x]<massSort[x+1]){
//                 temp=massSort[x];
//                 massSort[x]=massSort[x+1];
//                     massSort[x+1]=temp;   
//             }
//         }
//     }
//     return massSort;
// }
// console.log(sortMass(mass1)); 

// Создать функцию, которая принимает 3 аргумента: любой произвольный массив начальный номер элемента в массиве конечный номер
// Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам
//  (с-по) (getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]), не изменяя исходный массив и не используя циклы.
  
    
// slice с Первого включительно ДО не включительно

// let mass = [ 1, 2, 3, "hello world", 4.12, true ];
// let mass1 = [ 'a', 'б','в','г', 'д', 'е' , 1 ,2 ,3  ];
//  function sliceMass(newMass,x=1,y=4){
 
    // let x = 1;
    //  let y = 4;
//      newMass = newMass.slice( x , y );
//      return newMass;
//  }
//     console.log(sliceMass(mass));
//     console.log(sliceMass.x);
    

// Удвоить элементы массива, не используя циклы.,
// let mass = [ 1,2,3,4,5 ];
//                      mass =mass.concat(mass);
//     mass = mass.map(function multiply(i){
//         return i=i*2; 
//     })
    
//     console.log(mass);

// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.
// let mass = [ 1,2,3,4,5 ];
// let value =mass.splice(2,2);   
// console.log(mass)


// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.
// let mass = [ 1,2,3,4,5 ];
// let value =mass.splice(2,2,'три','четыре');   
// console.log(mass);

// Вставить в произвольный массив любое значение после второго элемента.
// let mass = [ 1,2,3,4,5 ];
// let value =mass.splice(2,0,'ДаблДва');   
// console.log(mass);


// Отсортировать массив массив таким образом, чтобы вначале шли массивы с наименьшей длиной. 
// Создать копию произвольного массив"
// let massSort1 = [[6,4], [1,2,3,4,5] ,[35]];
// let massSort2 = [[1,2,3,4,5] , [6,4] ,[35]];
// let massSort3 = [[6,4] ,[35] ,[1,2,3,4,5]];
// let massCopy = massSort3.slice(0)
// function sortMass(massSlice){
//     let temp=0;
//     for(let i = massSlice.length-1;i>0;i--){
//             for(let x=0;x<i;x++){
//                 if(massSlice[x].length>massSlice[x+1].length){
//                     temp=massSlice[x];
//                     massSlice[x]=massSlice[x+1];
//                     massSlice[x+1]=temp;   
//                 }
//             }
//         }
//         return massSlice;
//     }
    
//     console.log(sortMass(massCopy));    //Работа с копией аргумента
//     console.log(massSort3);
//     console.log(sortMass(massSort3));


// Отсортировать массив объектов по возрастающему количеству ног животных: [ {kind: "tarantula", info: {legs: 8, eyes: 8}},
//  {kind: "french bulldog", info: {legs: 4, eyes: 2}}, 
// {kind: "human", info: {legs: 2, eyes: 2}}, {kind: "lobster", info: {legs: 10, eyes: 2}},

// let creatures =[

//      {kind: "tarantula", 
//         info: {legs: 8, eyes: 8}},

//     {kind: "french bulldog",
//          info: {legs: 4, eyes: 2}}, 

//     {kind: "human",
//          info: {legs: 2, eyes: 2}}, 

//     {kind: "lobster",
//          info: {legs: 10, eyes: 2}}
//     ];

//     function sortMass(massive){
//             let temp=0;
//             for(let i = massive.length-1;i>0;i--){
//                     for(let x=0;x<i;x++){
//                         if(massive[x].info.legs>massive[x+1].info.legs){
//                             temp=massive[x];
//                             massive[x]=massive[x+1];
//                             massive[x+1]=temp;   
//                         }
//                     }
//                 }
//                 return massive;
//             }
            
// console.log(sortMass(creatures))


// Написать функцию, которая принимает массив услуг и два числа, представляющих собой время исполнения услуг, а также возвращает все услуги,
//  находящиеся в диапазоне времени исполнения и отсортированные от меньшего времени исполнения к большему.
// ...... Например, filterServices(services, 20, 60).
const services = [ 
    {service: "service1", executionTime: 56}, 
    {service: "service2", executionTime: 97}, 
    {service: "service3", executionTime: 23},
    {service: "service4", executionTime: 65},
    {service: "service5", executionTime: 2}, 
    {service: "service6", executionTime: 73},
    {service: "service7", executionTime: 82},
    {service: "service8", executionTime: 19},
    {service: "service9", executionTime: 33},
    {service: "service10", executionTime: 42}, 
];
function filterServices(servicesArg,a,b){
    let actualService= [];
        for(let i = 0; i<servicesArg.length; i++){
            if(servicesArg[i]['executionTime']>=a && servicesArg[i]['executionTime']<=b){    
                actualService.push(servicesArg[i]);    
            }
        } 
        i=0  
        let temp=0;
        for(let i = actualService.length-1;i>0;i--){
            for(let x=0;x<i;x++){
                if(actualService[x]['executionTime']>actualService[x+1]['executionTime']){
                    temp=actualService[x]['executionTime'];
                    actualService[x]['executionTime']=actualService[x+1]['executionTime'];
                    actualService[x+1]['executionTime']=temp;   
                }
            }
        }
        return   actualService;         
    }   
console.log(filterServices(services,20,60));


});



