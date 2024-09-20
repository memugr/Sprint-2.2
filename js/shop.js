// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
// Global variables
var cart = [];
var total = 0;
var totalPriceElement = document.getElementById('total_price')
var cartListElement = document.getElementById('cart_list')
var emptyCartElement = document.getElementById('defaultEmptyCart')

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

    // Find a product in the products array using the provided id
    const buyProduct = products.find(product => product.id === id)

    // Check if the product is found
    if (buyProduct) {

        // Check if the prod. exists in the cart
        const existsProduct = cart.find(product => product.id === id)

        // Increase quantity if exists, otherwise, it adds a new quantity 1
        if (existsProduct) {
            existsProduct.quantity++
        } else {
            const newProduct = { ...buyProduct, quantity: 1 }
            cart.push(newProduct)
        }

        // Update cart counter in UI
        var countProductElement = document.getElementById('count_product')
        countProductElement.innerText = cart.reduce((total, product) => total + product.quantity, 0)
        console.log(`${buyProduct.name} added to cart.`)
    }

    // Apply promotions before recalculating total
    applyPromotionsCart()

    // Recalculate total after promotions are applied
    total = calculateTotal()
    totalPriceElement.innerText = total.toFixed(2)
    console.log("Total: " + total)

    // Print the updated cart with promotions and total
    printCart()
}

// Exercise 2
function cleanCart() {
    // Show alert if the cart is empty 
    if (cart.length === 0) {
        window.alert('There are no existing products in your shopping cart, try selecting a product.')
        return
    } else {
        // Ask for confirmation
        let confirmationUser = confirm('Oh! Are you sure you want to empty your shopping cart?')

        if (confirmationUser) {
            // Reset cart array and total
            cart = []
            total = 0

            // Update the UI to reflect the empty cart
            document.getElementById('count_product').innerHTML = 0
            document.getElementById('total_price').innerHTML = total.toFixed(2)
            console.log('The cart is cleaned.')
        }
    }

    //Calls function to reset the cartList to default
    open_modal()
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    // Calculate total price using the discountedPrice after applying promotions
    return cart.reduce((total, product) => total + product.discountedPrice * product.quantity, 0);
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    // Loop through each product in the cart
    for (let index = 0; index < cart.length; index++) {
        const product = cart[index]

        // Check if the any of the products has an offer
        if (product.offer) {

            // Check if the quantity meets the offer requirement (in products.js)
            if (product.quantity >= product.offer.number) {
                // Apply the discount and set the discounted price
                product.discountedPrice = product.price - (product.price * (product.offer.percent / 100))
                console.log('Discount applied for:', product.name)

            } else {
                // No discount applied, reset to original price
                product.discountedPrice = product.price
                console.log('Discount not applicable for:', product.name)
            }

        } else {
            // If no offer, set discountedPrice to the original price
            product.discountedPrice = product.price
        }

        // Additional log the total discount for each product
        const discount = product.price - product.discountedPrice
        console.log(`Discount for ${product.name}: $${discount * product.quantity}`)
    }
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    // Make sure it's empty before calling all the wexisting products
    cartListElement.innerHTML = ''
    emptyCartElement.innerHTML = ''

    // Default message when cart is empty
    if (cart.length === 0) {
        emptyCartElement.innerHTML = '<p><center>Your shopping cart is empty at the moment.</p><center>'
        return
    }

    // Create a row of product every time it's pressed
    cart.forEach((product) => {
        let itemRow = document.createElement('tr')
        itemRow.innerHTML = `
            <td class="text-center">${product.name}</td>
            <td class="text-center">$${product.discountedPrice.toFixed(2)}</td>
            <td class="text-center">${product.quantity}</td>
            <td class="text-center">$${(product.discountedPrice * product.quantity).toFixed(2)}</td>
            <td>
                <button type="button" class="btn btn-outline-success btn-sm rounded-pill px-3" onclick="buy(${product.id})">+</button>
                <button type="button" class="btn btn-outline-danger btn-sm rounded-pill px-3" onclick="removeFromCart(${product.id})">-</button>
            </td>
        `

        //Print the element row in the cartList
        cartListElement.appendChild(itemRow)
    })
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    // Find product by id in the cart
    const indexProduct = cart.findIndex(product => product.id === id)
    const product = cart[indexProduct]

    // Rest quantity if the quantity is greater than 1
    if (product.quantity >= 1) {
        product.quantity--

        // Remove item from the cart if the quantity becomes zero
        if (product.quantity === 0) {
            cart.splice(product, 1)
        }

        // Update cart counter in UI 
        var countProductElement = document.getElementById('count_product')
        countProductElement.innerText = cart.reduce((total, product) => total + product.quantity, 0)
    }

    // Final validation
    if (cart.length === 0) {
        total = 0
        emptyCartElement.innerHTML = '<p><center>Your shopping cart is empty at the moment.</p><center>'
    }

    // Apply promotions before recalculating total
    applyPromotionsCart()

    // Recalculate total after promotions are applied
    total = calculateTotal()
    totalPriceElement.innerText = total.toFixed(2)

    // Print the updated cart with promotions and total
    printCart()
}

function open_modal() {
    // Apply promotions before printing the cart
    applyPromotionsCart()
    printCart()
}