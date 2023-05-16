// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


findMinimalNum = (num_1 , num_2 , num_3) => {
    if (num_1 < num_2 && num_1 < num_3 ){
        console.log(num_1)
    }
    else if (num_2 < num_1 && num_2 < num_3){
        console.log(num_2)
    }
    else if (num_3 < num_1 && num_3 < num_2){
        console.log(num_3)
    }
    else{
        console.log("error")
    }
}

findMinimalNum(12, 8, 9)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

findMaxNum = (num_1 , num_2 , num_3) => {
    if (num_1 > num_2 && num_1 > num_3 ){
        console.log(num_1)
    }
    else if (num_2 > num_1 && num_2 > num_3){
        console.log(num_2)
    }
    else if (num_3 > num_1 && num_3 > num_2){
        console.log(num_3)
    }
    else{
        console.log("error")
    }
}

findMaxNum(12, 8, 9)


// - створити функцію яка повертає найбільше число з масиву

maxNum = (arr) =>{ // -4, -5, -1, -8
    let max = arr[0] 
    for (let i = 0;  i < arr.length; i++){
        if (arr[i] > max){ 
            max = arr[i]
        }
    }
    return max
}

console.log(maxNum([-4, -5, -1, -8]))



// - створити функцію яка повертає найменьше число з масиву

minNum = (arr) =>{ // -4, -5, -1, -8
    let mim = arr[0] 
    for (let i = 0;  i < arr.length; i++){
        if (arr[i] < mim){ 
            mim = arr[i]
        }
    }
    return mim
}

console.log(minNum([-4, -5, -1, -8]))



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

summation = (arr) =>{
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum+=arr[i]
    }
    return sum
}


console.log(summation([1,2,3,4,5]))




// - Дано натуральное число n. Выведите все числа от 1 до n.
enterNum = (n) =>{  
    for (let i = 1; i < n; i++){ // if you want include n change i<n to i < n+1
        console.log(i)
    }
}
enterNum(10)



// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

twoNumber = (A, B) => {
    if (A   < B){
        for (let i = A; i  < B;  i++){  
            console.log(i)
        }
    }
    else if (A  > B){
        for (let  i = A; i > B; i-- ){
            console.log(i)
        }
    }
    else{
        console.log(A,B)
    }
}
twoNumber(7, 3)



// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

swap = (arr, index) => {
    let temp = arr[index]
    arr[index]= arr[index+1]
    arr[index+1]=temp
    return arr
}

console.log(swap([9,8,0,4], 2))


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


moveZero = (arr) =>{
    let zero = [];
    let noneZero = [];
    for (let i =0; i<arr.length; i++){
        if (arr[i]===0){
            zero.push(arr[i])
        }
        else{
            noneZero.push(arr[i])
        }
    }
    return noneZero.concat(zero);
}


console.log(moveZero([1,0,6,0,3]))

