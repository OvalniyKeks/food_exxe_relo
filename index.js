// бургерменю
const menu = document.getElementById("services")
console.log(menu)
const buttonMenu = document.getElementById("menu-button")
if (buttonMenu) {
    buttonMenu.addEventListener('click', function () {
        menu.style.top = '0'
    })
}
// кнопка закрытия меню
const buttonClose = document.getElementById("menu-button-close")
if (buttonClose) {
    buttonClose.addEventListener('click', function () {
        menu.style.top = '-100%'
    })
}
// форма бронирования
const feedbackModal = document.getElementById("social")
console.log(menu)
// кнопка закрытия формы бронирования
const buttonCloseFeedback = document.getElementById("button-close-feedback")
if (buttonCloseFeedback) {
    buttonCloseFeedback.addEventListener('click', function () {
        feedbackModal.style.top = '-100%'
    })

}

// кнопки открытия формы
const buttonsReservation = document.querySelectorAll(".button-reservation")
console.log(buttonsReservation)
if (buttonsReservation) {
    buttonsReservation.forEach((button) => {
        console.log(button)
        button.addEventListener('click', function () {
            feedbackModal.style.top = '0'
        })
    })
}


// список товаров
const products = [
    {
        image: "assets/Rectangle 57.svg",
        name: "Яичница-глазунья из трех яиц",
        price: "250"
    },
    {
        image: "assets/Rectangle 57 (1).svg",
        name: "Омлет из трех яиц",
        price: "250"
    },
    {
        image: "assets/Rectangle 57 (2).svg",
        name: "Домашние сырники",
        price: "490"
    },
    {
        image: "assets/Rectangle 57 (3).svg",
        name: "Блины",
        price: "190"
    },
    {
        image: "assets/Rectangle 57 (4).svg",
        name: "Каша с ягодами и кедровыми орехами",
        price: "450"
    },
    {
        image: "assets/Rectangle 57 (5).svg",
        name: "Скрэмбл",
        price: "290"
    },
    {
        image: "assets/Rectangle 57 (6).svg",
        name: "Яйцо Бенедикт с лососем",
        price: "850"
    },
    {
        image: "assets/Rectangle 57 (7).svg",
        name: "Яйцо Бенедикт с беконом",
        price: "650"
    },
    {
        image: "assets/Rectangle 57 (8).svg",
        name: "Гречневая каша с авокадо, яйцом пашот и пармезаном",
        price: "490"
    },
    {
        image: "assets/Rectangle 57 (9).svg",
        name: "Кобб-салат с лососем",
        price: "650"
    },
    {
        image: "assets/Rectangle 57 (10).svg",
        name: "Кобб-салат с креветками",
        price: "690"
    }

]
// общий блок товаров
function promiseFor() {
  return new Promise(function (resolve, reject) {
    setCard()
    resolve()
  })
}
function setCard() {

    const blockProducts = document.querySelector('.food-images')
    console.log(blockProducts)
    for (const product of products) {
        const element = ` <div class="breakfast product-card">
                <img class="image-breakfast" src="${product.image}">
                <p class="food-name">${product.name}</p>
                <div class="food-caption">
                    <span class="food-price">${product.price}₽</span>
                    <span class="food-button">В корзину</span>
                </div>
            </div>`
        blockProducts.insertAdjacentHTML("afterbegin", element);
    }

}
async function setProduct() {
    await promiseFor()


    //добавляем клик на карточку товара
    const productsCard = document.querySelectorAll(".product-card")
    console.log(productsCard)
    if (productsCard) {
        productsCard.forEach((card) => {
            console.log(card)
            card.addEventListener('click', function () {
                console.log(card)
            })
        })
    }
}
setProduct() 
