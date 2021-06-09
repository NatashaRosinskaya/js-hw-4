//Задание 1
let arr = [1, 2, 3, 4, 5],
    arrNumber = arr.length;
for (let i = 0; i < arrNumber; i++){
    console.log(arr[i]);
}

//Задание 2
let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7],  
    arrNumber2 = arr2.length;
    for (let i = 0; i < arrNumber2; i++){
        if (arr2[i] > '-10' && arr2[i] < '-3')
        console.log(arr2[i]);
        
}

//Задание 3
let arr3 = [],
    result = 0;
for (let i = 23; i <= 57; i++){
    arr3.push(i);
    result +=i;
    
    
} console.log(arr3);
  console.log(result);

let a = 22,
    arr3a = [];
while (a < 57) {
    a++;
    arr3a.push(a);
} console.log(arr3a);

//Задание 4
let arr4 = ['10', '20', '30', '50', '235', '3000'],
    arrNumber4 = arr4.length;
    
for (let i = 0; i < arrNumber4; i++){
    let numStr = String(arr4[i]);
    let number = numStr[0];
   if (number == 1 || number == 2 || number == 5){
   }console.log(numStr);
}

//Задание 5
let arr5 = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    arrNumber5 = arr5.length;
for (let i = 0; i < arrNumber5; i++){        
    if (arr5[i] == 'Суббота' || arr5[i] == 'Воскресенье'){
        document.write('<b>' + arr5[i] + '</b>' + '<br>');
    } else{
        document.write(arr5[i] + '<br>');
    }
}
//Задание 6 (??)
let arr6 = ['Карандаш', 'Ручка', 'Ластик', 'Точилка'];
arr6.push('Пенал');
console.log(arr6);
arr6[arr6.length] = 'Фломастер';
console.log(arr6);

//Задание 7 (функция с урока)
let arr7 = [],
    c
for (;;) {
    c = +prompt('Введите число');
    if (c == ""){
        break
    }
    if (!isNaN(c)){
        arr7.push(c);
    };   

}   console.log (arr7);
    arr7.sort();
    console.log(arr7);
    arr7.sort(function (a,b){
        return a - b;    
    })
    console.log(arr7);

//Задание 8
let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
    arr8.reverse();
console.log(arr8);
    
    let d = arr8.length - 1;
    while (d >= 1){
    d--;    
    }console.log(arr8);

//Задание 9 (не работает!)
let arr9 = [5, 9, 21, , , 9, 78, , , , 6],
    arrNumber9 = arr9.length,
    counter = 0;
    console.log (arr9);
    for(i = 0; i < arrNumber9; i++){

        if(arr9[i] ==""){
            counter++;
        } 
    } console.log(counter);

//Задание 10