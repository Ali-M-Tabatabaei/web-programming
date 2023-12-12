let products = [
    { name: 'Product 1', price: '100', category: 'Electronics', color: 'Black' },
    { name: 'Product 2', price: '200', category: 'Electronics', color: 'White' },
    { name: 'Product 3', price: '150', category: 'Fashion', color: 'Red' },
    { name: 'Product 4', price: '300', category: 'Fashion', color: 'Blue' },
    { name: 'Product 5', price: '250', category: 'Home', color: 'Green' },
    { name: 'Product 6', price: '350', category: 'Home', color: 'Yellow' },
    { name: 'Product 7', price: '400', category: 'Automobile', color: 'Blue' },
    { name: 'Product 8', price: '450', category: 'Electronics', color: 'Grey' },
    { name: 'Product 9', price: '500', category: 'Fashion', color: 'White' },
    { name: 'Product 10', price: '550', category: 'Home', color: 'Black' },
    { name: 'Product 11', price: '600', category: 'Fashion', color: 'Blue' },
    { name: 'Product 12', price: '650', category: 'Automobile', color: 'Red' },
    { name: 'Product 13', price: '700', category: 'Electronics', color: 'Black' },
    { name: 'Product 14', price: '750', category: 'Fashion', color: 'White' },
    { name: 'Product 15', price: '1000', category: 'Game', color: 'Lime' },
];

let categoryFilter = document.getElementById('categoryFilter');
let priceFilter = document.getElementById('priceFilter');
let colorFilter = document.getElementById('colorFilter');

function clearFilters() {
    categoryFilter.value = '';
    priceFilter.value = '';
    colorFilter.value = '';
    filterProducts();
}

function filterProducts() {
    let filteredProducts = products;
    if (categoryFilter.value) filteredProducts = filteredProducts.filter(p => p.category === categoryFilter.value);
    if (priceFilter.value) filteredProducts = filteredProducts.filter(p => p.price === priceFilter.value);
    // console.log(typeof(p.price))
    if (colorFilter.value) filteredProducts = filteredProducts.filter(p => p.color === colorFilter.value);
    displayProducts(filteredProducts);
}


function displayProducts(products) {
    let productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(p => {
        let productElement = document.createElement('div');
        // productElement.innerText = `${p.name} - ${p.price} - ${p.category} - ${p.color}`;
        productElement.innerHTML = `<div class="card" style="width:400px">
        <img class="card-img-top" src="product.jpg" alt="Card image" style="width:100%">
        <div class="card-body" style="background-color: ${p.color}; opacity: 90%;">
          <h4 class="card-title">${p.name}</h4>
          <p class="card-text">price: ${p.price} <br> category: ${p.category} <br> color: ${p.color}</p>
        </div>
      </div>`
        productList.appendChild(productElement);
    });
}


let categories = [...new Set(products.map(p => p.category))];
let prices = [...new Set(products.map(p => p.price))];
let colors = [...new Set(products.map(p => p.color))];

categories.forEach(c => categoryFilter.innerHTML += `<option value="${c}">${c}</option>`);
prices.forEach(p => priceFilter.innerHTML += `<option value="${p}">${p}</option>`);
colors.forEach(c => colorFilter.innerHTML += `<option value="${c}">${c}</option>`);

filterProducts();
