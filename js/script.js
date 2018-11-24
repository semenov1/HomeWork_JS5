//Реализовать функцию полного клонирования объекта.
//
//Технические требования:
//
//Написать функцию для рекурсивного полного клонирования объекта (без единой передачи по ссылке, внутренняя вложенность свойств объекта может быть достаточно большой).
//Функция должна успешно копировать свойства в виде объектов и массивов на любом уровне вложенности.
//Использовать синтаксис ES6 для работы с перемеными, функциями и объектами.

let myObj={
    name:'Danil',
    lastName:'Semenov',
    size:{
        weight:80,
        hight:180
    },
    age:30
}

function cloneObject(obj){
    let cloneObj={};
    for(let elem in obj){
        if(typeof(obj[elem])=='object'){
            cloneObj[elem]=cloneObject(obj[elem])
        }else{
            cloneObj[elem]=obj[elem];
        }
    }
    return cloneObj;
}

console.log(cloneObject(myObj));