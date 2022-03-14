'use strict';
console.log("Running");

const addToCartBTN = document.getElementsByClassName('addToCart');
const cart = document.getElementById('cart');

for(let i = 0; i < addToCartBTN.length; i++){
    addToCartBTN[i].addEventListener('click', addToCart())
}

function addToCart(){

}