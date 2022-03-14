'use strict';
console.log("Running");

const store = document.querySelector('.store');

// Products Renderer
function renderProducts() {
    products.forEach( (product) => {
        store.innerHTML +=
        `
        <div class="item">
        <img src="${product.img}" alt="${product.name}">
        <div class="item-dtails">
            <div>
                <div class="item-title"><h3>${product.name}</h3></div>
                <div class="item-price">${product.price}$</div>    
            </div>
            <div class="addToCart"><i class="fa-solid fa-cart-arrow-down fa-xl"></i></div>
        </div>
        </div>
        `
    } )
}

renderProducts()











const cart = document.getElementById('cart');
const numberInCart = document.getElementById('numberInCart');
const addToCartBTN = document.getElementsByClassName('addToCart');

let itemsInCartNumber = 0;

for(let i = 0; i < addToCartBTN.length; i++){
    addToCartBTN[i].addEventListener('click', () => {addToCart()})
}

function addToCart() {
    itemsInCartNumber++
    numberInCart.innerHTML = itemsInCartNumber;
}