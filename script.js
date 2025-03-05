const products = [
  { id: 1, name: 'lamp', price: 2600, image: 'product1.jpg' },
  { id: 2, name: 'teddy bear', price: 2000, image: 'product 2.jpg' },
  { id: 3, name: 'customised gifts', price: 2500, image: 'product3.jpg' },
  { id: 4, name: 'case cover', price: 800, image: 'product4.jpg' },
  { id: 5, name: 'Handbag', price: 15000, image: 'product5.jpg' }
];

const cart = [];

function displayProducts() {
  const productContainer = document.querySelector('.product-list');
  productContainer.innerHTML = '';
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(productElement);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    displayCart();
  }
}

function displayCart() {
  const cartContainer = document.querySelector('.cart-items');
  cartContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <h4>${item.name}</h4>
      <p>$${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartContainer.appendChild(cartItem);
    total += item.price;
  });

  const totalPriceElement = document.createElement('div');
  totalPriceElement.className = 'total-price';
  totalPriceElement.innerHTML = `<h3>Total: $${total}</h3>`;
  cartContainer.appendChild(totalPriceElement);

  const checkoutButton = document.getElementById('checkout');
  if (cart.length > 0) {
    checkoutButton.disabled = false;
  } else {
    checkoutButton.disabled = true;
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  displayCart();
}

document.getElementById('checkout').addEventListener('click', () => {
  const total = cart.reduce((sum, item) => sum + item.price, 0); // Calculate the total value
  alert(`Total value of your cart is $${total}`);
});

displayProducts();
