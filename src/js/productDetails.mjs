import { setLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

let product={};
export async function productDetails(productId) {
    product = await  findProductById(productId);
    
    renderProductDetails(product);

    document.getElementById("addToCart").addEventListener("click", addProductToCart);
}

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}

function renderProductDetails(product) {
    document.getElementById("productName").innerText = product.name;
    document.getElementById("productModel").innerText = product.model;
    document.getElementById("productImage").src = product.image;
    document.getElementById("productImage").alt = product.name;
    document.getElementById("productPrice").innerText = product.FinalPrice;
    document.getElementById("productColor").innerText = product.color[0].ColorName;
    document.getElementById("productDescription").innerText = product.DescriptionHtmlSimple;
    document.getElementById("addToCart").dataset.id = product.id;
}


// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
