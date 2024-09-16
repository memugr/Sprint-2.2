// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.

//variables
var cart = [];
var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

    const buyProduct = products.find(product => product.id === id)

    // Check if product is found
    if (buyProduct) {
        
        // Check if the prod. exists in the cart
        const existsProduct = cart.find(product => product.id === id)

        // Increase quantity if exists, otherwise, it adds a new quantity
        if (existsProduct) {
            existsProduct.quantity++
        } else {
            const newProduct = { ...buyProduct, quantity: 1 }
            cart.push(newProduct)
        }

    // Update cart counter
    var countProductElement = document.getElementById('count_product')
    countProductElement.innerText = cart.reduce((total, product) => total + product.quantity, 0)
    console.log(`${buyProduct.name} added to cart.`)
    }

    // Recalculates the total price calling the function (from exercice 3) after updating the cart
    total = calculateTotal()
    totalPriceElement.innerText = total.toFixed(2)
    console.log("Total: " + calculateTotal())
}

// Exercise 2
function cleanCart() {
    //Empty cart
    cart = []

    // Set total price to 0
    total = 0
    console.log('The cart is cleaned.')
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    return cart.reduce((total, product) => total + product.price * product.quantity, 0)
}

var totalPriceElement = document.getElementById('total_price')

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}