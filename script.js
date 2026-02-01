const products = [
  { name: "Nothing Phone 2a", price: 15000, rating: 4.8, category: "Electronics", image: "https://m.media-amazon.com/images/I/61oycK5i7qL._AC_UF894,1000_QL80_.jpg" },
  { name: "Macbook M1", price: 50000, rating: 4.2, category: "Electronics", image: "https://helios-i.mashable.com/imagery/reviews/03y8gbj1mqCuexgXxFJ5vyX/hero-image.fill.size_1248x702.v1623391330.jpg" },
  { name: "Airpods", price: 2000, rating: 4.0, category: "Electronics", image: "https://m.media-amazon.com/images/I/51ekvilNtUL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Apple Watch", price: 5000, rating: 3.9, category: "Electronics", image: "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg" },

  { name: "Gucci Bags", price: 20000, rating: 3.2, category: "Clothing", image: "https://runwaycatalog.in/wp-content/uploads/2025/02/Gucci-Handbag-Women-2-2.png.webp" },
  { name: "Allen Solly T-Shirts", price: 600, rating: 4.5, category: "Clothing", image: "https://imagescdn.allensolly.com/img/app/product/8/890209-10761964.jpg" },
  { name: "ZARA Denims", price: 2500, rating: 4.4, category: "Clothing", image: "https://5.imimg.com/data5/ANDROID/Default/2023/5/306606118/VJ/MF/UT/70222664/product-jpeg.jpg" },

  { name: "MAC Foundation", price: 3000, rating: 3.4, category: "Cosmetics", image: "https://prettycosmo.com/cdn/shop/files/MAC_FY24_SFFKaizen_CGIAmbient_Group_GLOBAL_sRGB72.jpg" },
  { name: "Chanel Perfume", price: 15000, rating: 4.0, category: "Cosmetics", image: "https://static.sweetcare.com/img/prd/488/v-638561382441823245/chanel-007909cl_01.webp" },

  { name: "Milton Bottles", price: 1200, rating: 4.8, category: "Home", image: "https://m.media-amazon.com/images/I/81KrnHiiIHL.jpg" },
  { name: "Premium Bedsheets", price: 600, rating: 4.6, category: "Home", image: "https://img.cdnx.in/44159/SKU-0670_0-1710850938363.jpg" }
];

const productContainer = document.getElementById("products");
const sortSelect = document.getElementById("sort");
const categorySelect = document.getElementById("category");


function renderProducts(list) {
  productContainer.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
      <div class="img-box">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="info">
        <h3>${item.name}</h3>
        <p class="price">₹${item.price}</p>
        <span class="rating">⭐ ${item.rating}</span>
        <div class="category">${item.category}</div>
        <button class="btn">Add to Cart</button>
      </div>
    `;

    productContainer.appendChild(card);
  });
}

function updateProducts() {
  let filtered = [...products];

  const selectedCategory = categorySelect.value;
  if (selectedCategory !== "all") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  const sortValue = sortSelect.value;
  switch (sortValue) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "rating-asc":
      filtered.sort((a, b) => a.rating - b.rating);
      break;
    case "rating-desc":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
  }

  renderProducts(filtered);
}
sortSelect.addEventListener("change", updateProducts);
categorySelect.addEventListener("change", updateProducts);

renderProducts(products);
