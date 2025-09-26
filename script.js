// Example Product Data
const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest 5G smartphone with powerful features.",
    price: "$499",
    image: "https://via.placeholder.com/400x250?text=Smartphone"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    description: "Noise-cancelling over-ear wireless headphones.",
    price: "$149",
    image: "https://via.placeholder.com/400x250?text=Headphones"
  },
  {
    id: 3,
    name: "Smart Watch",
    description: "Track health, fitness, and notifications easily.",
    price: "$199",
    image: "https://via.placeholder.com/400x250?text=Smart+Watch"
  },
  {
    id: 4,
    name: "Gaming Laptop",
    description: "High-performance laptop for gaming and work.",
    price: "$999",
    image: "https://via.placeholder.com/400x250?text=Gaming+Laptop"
  },
  {
    id: 5,
    name: "HP Laptop",
    description: "High-performance laptop forCoding and work.",
    price: "$979",
    image: "https://via.placeholder.com/400x250?text=Gaming+Laptop"
  },
  {
    id: 6,
    name: "oppo Mobile",
    description: "High-performance and relaible.",
    price: "$959",
    image: "https://via.placeholder.com/400x250?text=Gaming+Laptop"
  },
  {
    id: 7,
    name: "vivo Mobile",
    description: "clearity and best quality.",
    price: "$888",
    image: "https://via.placeholder.com/400x250?text=Gaming+Laptop"
  },
  {
    id: 8,
    name: "real me Mobile",
    description: "High-performance and relaible",
    price: "$979",
    image: "https://via.placeholder.com/400x250?text=Gaming+Laptop"
  },
  {
    id: 9,
    name: "usha fan",
    description: "low cost,and affortable",
    price: "$679",
    image: "https://via.placeholder.com/400x250?text=Gaming+Laptop"
  },
  {
    id: 9,
    name: "swati fan",
    description: "low cost,and affortable",
    price: "$679",
    image: "https://via.placeholder.com/400x250?text=Gaming+Laptop"
  }
];

// Load Products Dynamically
const container = document.getElementById("product-container");

products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="price">${product.price}</div>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    </div>
  `;

  container.appendChild(card);
});

// Add to Cart Function
function addToCart(productName) {
  alert(`${productName} has been added to your cart!`);
}
