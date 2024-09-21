// JavaScript for handling the cart

let cart = [];
let totalPrice = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Select all add-to-cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPriceElement = document.getElementById('total-price');

    // Add click event to each button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.parentElement;
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.querySelector('h3').innerText;
            const productPrice = parseFloat(productElement.querySelector('p').innerText.replace('$', ''));
            
            // Add product to cart array
            cart.push({ id: productId, name: productName, price: productPrice });

            // Update cart UI
            updateCartUI();

            // Update cart count
            cartCount.innerText = cart.length;
        });
    });

    // Function to update cart UI
    function updateCartUI() {
        cartItemsContainer.innerHTML = '';
        totalPrice = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.innerText = `${item.name} - $${item.price}`;
            cartItemsContainer.appendChild(li);
            totalPrice += item.price;
        });

        totalPriceElement.innerText = totalPrice.toFixed(2);
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Thank you for your purchase!');
            cart = [];
            updateCartUI();
            cartCount.innerText = 0;
        } else {
            alert('Your cart is empty.');
        }
    });
});
