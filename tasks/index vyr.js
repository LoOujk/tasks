document.addEventListener('DOMContentLoaded', function () {
    console.clear();
// Записать в коротком виде:

        // let a = a + 5;      a+=5;
        // let b = b * 15;     b*=15;    
        // let c = c - 3;      c-=3;4
        // let d = d % 2;      d%=2;
        // let k = a + k;      k+=a;
        // let l = l * b;      l*=b;
        // let m = m * 3 * k;  m*=3*k 

// Возвести переменную в куб, используя краткую запись.

    //  z=z**3 или z**=3;  ????????

//  Если переменная равна “маленький”, присвоить ей значение “большой”, иначе “маленький”. Сделать тоже самое, используя тернарный оператор.
    // let value = 'маленький';
    // if (value == 'маленький'){
    //     value ='большой';
    // }
    // else {
    //     value = 'маленький'
    // };
    // console.log(value);
                                                        // ниясна
//    let value = 'маленький' ;
//      value = value=='маленький' ? 'большой'  : 'маленький' ;
//     console.log(value);
    // Записать условие, используя условный оператор if: если переменная меньше нуля: присвоить ей строку
    // “меньше нуля” если переменная равна нулю: присвоить 1 если больше нуля:
    //  используя краткую запись, умножить переменную на 10 Сделать тоже самое, используя тернарный оператор
    
    // let value = 10;

    if (value <0){
        value = 'меньше нуля';
    }
       else if(value == 0) {
            value = 1;
        }
        // value>1 ? value*=10 : console.log();
        
        else if (value>0){
            value*=10
        }

        console.log(value)


        // value = value < 0 ? value = 'меньше нуля' : value === 0 ? value = 1 : value *= 10

    // ИСПОЛЬЗУЯ СВИТЧ КЕЙС ЗАПИСАТЬ СЛЕДУЮЩИЕ УСЛОВИЕ:
    // if(a == 'котик') {
    //     console.log('котик');
    //   } else if(a == 'собака') {
    //     console.log('собака');
    //   } else if(a == 'хомячок') {
    //     console.log('хомячок');
    //   } else {
    //     console.log('неизвестное науке животное');
    //   }

        // let a = 'котик';
        // switch(a){
        //     case 'котик':
        //         console.log('котик');
        //         break;
        //     case 'собака':
        //         console.log('собака');
        //         break;
        //     case 'хомячок':
        //         console.log('хомячок');
        //         break;
        //     default:
        //         console.log('неизвестное науке животное');

        // }

        // Чему равен x в каждом из примеров, объясните почему:            или ищет  первое тру ,  и выводит последние как и фолз
                                                                        //  если и ,то фолз первый
            // let x = 0 || 'строка';  Строка
            // let x = 1 && 'строка';  строка потому что оба тру и тут последнее
            // let x = null || 1; 1
            // let x = null && 1; null
            // let x = 1 && null; null
            // let x = null || 0 || 1; 1
            // let x = null && 0 && 1;   null
});