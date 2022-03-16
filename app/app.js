'use strict'; console.log("Running");

const store = document.querySelector('.store');
const overlayEl = document.querySelector('.overlay');
const cartModalEl = document.querySelector('.cart-modal');
const modalItemsEl = document.querySelector('.modal-items');
const totalPriceEl = document.getElementById('totalPrice');
const numberInCart = document.getElementById('numberInCart');

// Products Renderer
function renderProducts() {
    products.forEach( (product) => { 
        store.innerHTML +=`
        <div class="item" id="${product.id}">
        <div class="heart" id="heart" onclick="heart(${product.id})">❤</div>
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

// Open/Close cart-modal function
function openCloseModal(){
    overlayEl.classList.toggle('hidden');
    cartModalEl.classList.toggle('hidden');
}

// Add to cart function
let cart = [];
function addToCart(id){    
    const item = products.find( (product) => product.id === id );

    if(cart.some((item) => item.id === id)) changeNumberOfUnits("plus", id);
    else{cart.push({...item, numberOfUnits: 1})}

    updateCart()
}

// remove from the cart
function removeIemFromCart(id){
    cart = cart.filter((item) => item.id !== id);
    updateCart();
}

function updateCart(){
    renderCartItems();
    renderSubtotal();
}
function renderSubtotal() {
    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    })

    totalPriceEl.innerHTML = `Total: ${totalPrice}$`
    numberInCart.innerHTML = `${totalItems}`
}


// in-cart items renderer
function renderCartItems(){
    modalItemsEl.innerHTML = `
    <tr class="table-head">
        <th></th>
        <th>Product</th>
        <th>Qty</th>
        <th>Price</th>
        <th>Actions</th>    
    </tr>`;

    cart.forEach( (item) => {
        modalItemsEl.innerHTML +=`
            <tr>
                <th><div class="img-container"><img src="${item.img}" alt="${item.name}"></div></th>
                <th>${item.name}</th>

                <th>
                <div class="quantity">
                    <div class="plusMinus" onclick="changeNumberOfUnits('minus', ${item.id})">&#8722;</div>
                    <div>${item.numberOfUnits}</div>
                    <div class="plusMinus" onclick="changeNumberOfUnits('plus', ${item.id})">&#43;</div>           
                </div>
                </th>

                <th>${item.price}$</th>
                <th><div class="btn btn-danger" onClick="removeIemFromCart(${item.id})">&#10005;</div></i></th>    
            </tr>`
        })
}

// change number of units function
function changeNumberOfUnits(action, id){
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;

        if(item.id === id){
            if(action === "minus" && numberOfUnits > 1) numberOfUnits--
            else if (action === "plus") numberOfUnits++
        }

        return {...item, numberOfUnits}
    })

    updateCart();
}

// like items
function heart(id) {
    document.getElementById(`${id}`).firstElementChild.classList.toggle('liked');
}
