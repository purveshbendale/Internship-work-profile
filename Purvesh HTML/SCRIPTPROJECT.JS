function checkLogin(){
if(localStorage.getItem("isLoggedIn") !== "true"){
window.location.href = "login.html";
}
}

function addToWishlist(product){

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

wishlist.push(product);

localStorage.setItem("wishlist", JSON.stringify(wishlist));

alert("Added to Wishlist ❤️");
}

function addToCart(product){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

alert("Added to Cart 🛒");
}

function showProductDetails(product){

const data = encodeURIComponent(JSON.stringify(product));

window.location.href = "details.html?data=" + data;
}

function getProductFromURL(){

const params = new URLSearchParams(window.location.search);

const data = params.get("data");

return JSON.parse(decodeURIComponent(data));
}

function logout(){

localStorage.removeItem("isLoggedIn");

alert("Logged out successfully!");

window.location.href = "login.html";
}