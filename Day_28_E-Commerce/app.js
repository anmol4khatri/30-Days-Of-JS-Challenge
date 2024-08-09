let products = [];
let cart = [];

async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        products = data.products;
        displayProducts();
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = products.map(product => `
        <div class="bg-mediumBlue rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <img src="${product.thumbnail}" alt="${product.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${product.title}</h3>
                <p class="text-cream mb-2">${product.description.substring(0, 100)}...</p>
                <div class="flex justify-between items-center">
                    <span class="font-bold">$${product.price.toFixed(2)}</span>
                    <button onclick="addToCart(${product.id})" class="bg-lightBlue text-darkBlue font-bold py-2 px-4 rounded hover:bg-cream transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalQuantity;

    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = cart.map(item => `
        <div class="flex justify-between items-center mb-2">
            <span>${item.title} x ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');

    const cartTotal = document.getElementById('cart-total');
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

document.getElementById('cart-icon').addEventListener('click', () => {
    document.getElementById('cart-modal').classList.remove('hidden');
    document.getElementById('cart-modal').classList.add('flex');
});

document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-modal').classList.add('hidden');
    document.getElementById('cart-modal').classList.remove('flex');
});

document.getElementById('checkout-btn').addEventListener('click', () => {
    document.getElementById('cart-modal').classList.add('hidden');
    document.getElementById('cart-modal').classList.remove('flex');
    document.getElementById('checkout-modal').classList.remove('hidden');
    document.getElementById('checkout-modal').classList.add('flex');
});

document.getElementById('close-checkout').addEventListener('click', () => {
    document.getElementById('checkout-modal').classList.add('hidden');
    document.getElementById('checkout-modal').classList.remove('flex');
});

document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    cart = [];
    updateCartDisplay();
    document.getElementById('checkout-modal').classList.add('hidden');
    document.getElementById('checkout-modal').classList.remove('flex');
});

// Fetch products when the page loads
fetchProducts();