document.addEventListener('DOMContentLoaded', function () {
    console.clear();
    
    //    В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре"
    // В этом примере регулярное выражение работает следующим образом:
    //  «Взять все символы без пробелов (\ S), стоящие в начале строки (^) или после любого символа пробела (\ s) и преобразовать их в верхний регистр (toUpperCase)».
     
    // Взять все символы без пробелов (\ S), 
    // стоящие в начале строки (^) или после любого символа пробела (\ s) и преобразовать их в верхний регистр (toUpperCase)»


    
    // let str = 'Я стану крутым программистом';
    //  function capitalize(str) {
    //     return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
       
    //    }
    //    console.log(capitalize(str));
   
   
    // Вычислить факториал числа 9 (факториал числа - это произведение всех натуральных чисел от 1 до n включительно. например, 2! = 21 или 6! = 654321) .

    // let i=1;
    // let fk=1;
    // for (i=1;i<10;i++){
    //     fk*=i
    // }
    // console.log(fk);



    // Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"
// let string = "Просветление наступит через:";
// for( let i = 10; i > 0; i--){
//     if(i==1){
//         string += ' ' + i
//     }
//    else  string += ' ' + i + ','
// }
// console.log(string);

// Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.
// for( let i = 1; i < 20; i++){
//     if(i%2!=0){
//         console.log(i);   
//     }
// }

// На основе строки 
// "теперь я мастер циклов javascript" создать новую строку, где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы
// let string='теперь я мастер циклов javascript';
let str = 'теперь я мастер циклов javascript';
// str = str.replace(' ','');
     function capitalize(str) {
        return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
       }
    let lngt = str.length;
      
     for(let i = 0; i<lngt ;i++ ){
        if(capitalize(str)[i]==' ')
           str = capitalize(str).replace(' ','');
       }
    
    console.log(capitalize(str));
    console.log(str)

});