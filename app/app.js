'use strict';
console.log("Running");

const store = document.querySelector('.store');

// Products Renderer
function renderProducts() {
    products.forEach( (product) => {
        store.innerHTML +=`
        <div class="item">
        <img src="${product.img}" alt="${product.name}">
        <div class="item-dtails">
            <div>
                <div class="item-title"><h3>${product.name}</h3></div>
                <div class="item-price">${product.price}$</div>    
            </div>
            <div class="addToCart" onClick="addToCart(${product.id})">
            <i class="fa-solid fa-cart-arrow-down fa-xl"></i></div>
        </div>
        </div>`
    })
};

renderProducts()

// Show cart function
const overlayEl = document.querySelector('.overlay');
const cartModalEl = document.querySelector('.cart-modal');

function openCloseModal(){
    overlayEl.classList.toggle('hidden');
    cartModalEl.classList.toggle('hidden');
}
// Add to cart function
let cart = [];

function addToCart(id){    
    const item = products.find( (product) => product.id === id );

    if(cart.some((item) => item.id === id)){
        alert("Already there")
    }else{
        cart.push({
            ...item,
            numberOfUnits: 1,
        })
        console.log(cart);        
    }

}