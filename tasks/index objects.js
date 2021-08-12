// Создать объект с полем 'notebook' равным 'MacBook'
// Добавить в объект из предыдущей задачи поле 'price', равное 1500 и поле currensy, равная 'dollar'
// Добавить поле details, которое будет содержать объект с полями model и color (значения этих полей задайте сами) Вернуться к содержанию



document.addEventListener('DOMContentLoaded', function () {
    console.clear();
    const  note = {
        notebook: 'Macbook',
        price: 1500,
        currently: 'dollar',
        'details':{
            color: 'white',
            model : 'ZuperKeksiki',
        },
    };
   
    console.log(note);
});