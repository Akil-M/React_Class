const menuItems = [
  { id: 1, name: "Margherita Pizza", price: 299, image: "images/pizza.jpg" },
  { id: 2, name: "Veg Burger", price: 149, image: "images/burger.jpg" },
  { id: 3, name: "Fried Chicken", price: 249, image: "images/chicken.jpg" },
  { id: 4, name: "Pasta Alfredo", price: 199, image: "images/pasta.jpg" },
  { id: 5, name: "French Fries", price: 99, image: "images/fries.jpg" },
  { id: 6, name: "Chocolate Shake", price: 120, image: "images/shake.jpg" },
];

const cart = [];

const menuDiv = document.getElementById("menu");
const cartItemsUl = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");
const cartDiv = document.getElementById("cart");

function renderMenu() {
  menuItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;
    menuDiv.appendChild(card);
  });
}

function addToCart(id) {
  const item = menuItems.find(m => m.id === id);
  cart.push(item);
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  cartItemsUl.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button onclick="removeFromCart(${index})" style="background:red;color:white;border:none;border-radius:3px;padding:4px 8px;cursor:pointer;">X</button>
    `;
    cartItemsUl.appendChild(li);
  });
  totalPriceEl.innerText = total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Order placed successfully! 🎉\nThank you for ordering.");
  cart.length = 0;
  renderCart();
  toggleCart();
}

function toggleCart() {
  cartDiv.classList.toggle("open");
}

renderMenu();
