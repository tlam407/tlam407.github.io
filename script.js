// Retrieve cart data from localStorage or initialize an empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to cart button event listeners
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const productId = event.target.dataset.id;

    // Check if the product is already in the cart
    const productExists = cart.find(item => item.id === productId);
    if (productExists) {
        alert('Product is already in the cart.');
        return;
    }

    // Add the product to the cart
    const product = {
        id: productId,
        name: event.target.parentNode.querySelector('h3').textContent,
        price: event.target.parentNode.querySelector('p').textContent
    };
    cart.push(product);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart.');
}

// Update the cart count in the header
const cartCount = document.createElement('span');
cartCount.classList.add('cart-count');
cartCount.textContent = cart.length;
document.querySelector('header').appendChild(cartCount);
