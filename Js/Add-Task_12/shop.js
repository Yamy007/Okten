// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)



// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)

const connectData = () =>{
    let data = localStorage.getItem('data')
    if (data){
        data = JSON.parse(data)

    }
    else{
        data = []
    }
    return data
}
let data = connectData()//[]

console.log(data)




const postData = (data) =>{
    localStorage.setItem('data', JSON.stringify(data))
}


let form = document.form



form.onsubmit = (e) =>{
    e.preventDefault()
    let name = form.name.value
    let count = form.count.value
    let price = form.price.value
    let img = form.img.value
    data.push({name:name, count:count, price:price, img:img})
    postData(data)
    console.log("ok")
}


// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар


