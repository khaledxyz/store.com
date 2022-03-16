'use strict'; console.log("Running");

const store = document.querySelector('.store');

const overlayEl = document.querySelector('.overlay');
const cartModalEl = document.querySelector('.cart-modal');
const modalItemsEl = document.querySelector('.modal-items');

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

    updateCart();
}

// update cart
function updateCart(){
    renderCartItems();
}

// cart renderer
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
        modalItemsEl.innerHTML +=
        `
            <tr>
                <th><div class="img-container"><img src="${item.img}" alt="${item.name}"></div></th>
                <th>${item.name}</th>
                <th><input type="number" id="quantity" name="quantity" min="1" value="${item.numberOfUnits}"></th>
                <th>${item.price}$</th>
                <th><div class="btn btn-danger">&#10005;</div></i></th>    
            </tr>
        `
    })
}
