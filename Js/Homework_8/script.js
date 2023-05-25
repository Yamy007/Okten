
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone){
    this.id = id; 
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}




// створити пустий масив, наповнити його 10 об'єктами new User(....)
let Users = [
    new User(1, "yamy", "lincoln", "yamy19007@gmail.com", "+48502411321"),
    new User(2, "test_1", "lincoln", "yamy109007@gmail.com", "+48502411344"),
    new User(3, "test_2", "lincoln", "test_119007@gmail.com", "+48502411321"),
    new User(4, "test_3", "lincoln", "test_129007@gmail.com", "+48502411321"),
    new User(5, "test_4", "lincoln", "test_139007@gmail.com", "+48502411321"),
    new User(6, "test_5", "lincoln", "test_149007@gmail.com", "+48502411321"),
    new User(7, "test_6", "lincoln", "test_159007@gmail.com", "+48502411321"),
    new User(8, "test_7", "lincoln", "test_169007@gmail.com", "+48502411321"),
    new User(9, "test_8", "lincoln", "test_179007@gmail.com", "+48502411321"),
    new User(10, "test_9", "lincoln", "test_189007@gmail.com", "+48502411321"),
]
console.log('Users :', Users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(Users.filter(x =>x.id %2 ===0))


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(Users.sort((a,b)=> a.id - b.id))

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client{
    constructor(id,name,surname,email,phone,order){
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}

let client_1 = new Client(1, "yamy","lincoln", "yamy19007@gmail.com", "+48502412145", ['apple', 'bear'])
console.log(client_1)


// створити пустий масив, наповнити його 10 об'єктами Client
clients = [
    new Client(1, "yamy","lincoln", "yamy19007@gmail.com", "+48502412145", ['apple', 'bear']),
    new Client(2, "test_1","lincoln1", "yamy129007@gmail.com", "+485024121451", ['apple', 'bear']),
    new Client(3, "test_2","lincoln2", "yamy139007@gmail.com", "+485024121452", ['apple', 'bear',"wine"]),
    new Client(4, "test_3","lincoln3", "yamy149007@gmail.com", "+485024121453", ['apple', 'bear',]),
    new Client(5, "test_4","lincoln4", "yamy159007@gmail.com", "+485024121454", ['apple', ]),
    new Client(6, "test_5","lincoln5", "yamy169007@gmail.com", "+485024121455", ['apple', 'bear','tomato','pasta']),
    new Client(7, "test_6","lincoln6", "yamy179007@gmail.com", "+485024121456", ['apple', 'bear']),
    new Client(8, "test_7","lincoln7", "yamy189007@gmail.com", "+485024121457", ['apple', 'bear']),
    new Client(9, "test_8","lincoln8", "yamy199007@gmail.com", "+485024121458", ['apple', 'bear']),
    new Client(10, "test_8","lincoln9", "yamy1999007@gmail.com", "+485024121459", ['apple', 'bear'])
]


console.log(clients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort((a,b)=>a.order -b.order))

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



function Car(model, producer, year, maxSpeed, volume ){
    this.model = model
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.volume = volume
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function (){
        console.log(`model - ${this.model}\nproducer - ${this.producer}\nyear - ${this.year}\nvolume - ${this.volume}`)
    }
    this.increaseMaxSpeed = function(newSpeed){
        this.maxSpeed +=newSpeed
    }
    this.changeYear = function(newValue){
        this.year = newValue
    }
    this.addDriver = function(id, name, expirence){
        this.idDriver = id
        this.nameDriver = name
        this.expirenceDriver = expirence
    }

}

let car_1 = new Car('audi','China',2019,200, 5)
console.log(car_1)
car_1.increaseMaxSpeed(20)
console.log(car_1)
car_1.changeYear(2020)
console.log(car_1)
car_1.addDriver(1,'vasya',5)
console.log(car_1)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інцформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



class  Car_1{
    constructor(model, producer, year, maxSpeed, volume){
        this.model = model
        this.producer = producer
        this.year = year
        this.maxSpeed = maxSpeed
        this.volume = volume
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info(){
        console.log(`model - ${this.model}\nproducer - ${this.producer}\nyear - ${this.year}\nvolume - ${this.volume}`)
    }
    increaseMaxSpeed(newSpeed){
        this.maxSpeed +=newSpeed
    }
    changeYear(newValue){
        this.year = newValue
    }
    addDriver(id, name, expirence){
        this.idDriver = id
        this.nameDriver = name
        this.expirenceDriver = expirence
    }
}



car_2 = new Car_1('BVM','Germany',2018,180, 6)

console.log(car_2)
car_2.increaseMaxSpeed(20)
console.log(car_2)
car_2.changeYear(2020)
console.log(car_2)
car_2.addDriver(1,'vasya',5)
console.log(car_2)








// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Popelychka(name, age,  feetSize){
    this.name = name
    this.age = age
    
    this.feetSize = feetSize
}

let arrayPopel = [
    new Popelychka('Joana', 18, 36 ),
    new Popelychka('Joana_1', 18, 37 ),
    new Popelychka('Joana_2', 19, 38 ),
    new Popelychka('Joana_3', 20, 39 ),
    new Popelychka('Joana_4', 21, 40 ),
    new Popelychka('Joana_5', 22, 41 ),
    new Popelychka('Joana_6', 23, 42 ),
    new Popelychka('Joana_7', 24, 43 ),
    new Popelychka('Joana_8', 25, 44 ),
    new Popelychka('Joana_9', 26, 45 ),
]



// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince{
    constructor(name, age,  feetSize){
        this.name = name
        this.age = age

        this.feetSize = feetSize
    }
}


// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let prince = new Prince('Vasya', 25, 37)

for (const popel of arrayPopel) {
    if(popel.feetSize === prince.feetSize){
        console.log(popel)
    }
}


// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findPopel   =  arrayPopel.find(value => б.feetSize === prince.feetSize)

console.log(findPopel)