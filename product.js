const urlParams = new URLSearchParams(window.location.search);
const image = urlParams.get('image');
const name = urlParams.get('name');
const price = urlParams.get("price")
console.log(image, name, price);

const imageBlock = document.getElementById("main-image")
const nameBlock = document.getElementById("name-product")
const priceBlock = document.getElementById("price-product")

imageBlock.src=image
nameBlock.insertAdjacentHTML("afterbegin", name);
priceBlock.insertAdjacentHTML("afterbegin", price);
