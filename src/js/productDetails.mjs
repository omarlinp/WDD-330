import {setLocalStorage} from "./utils.mjs"
import {findProductById} from "./productData.mjs"

let product = {};

export default async function productDetails(productId) {
    
    product = await findProductById(productId);

    renderProductDetails();

    document.getElementById("addToCart").addEventListener("click",addToCart());
}
function addToCart(product) {
  setLocalStorage("so-cart", product);
}

function renderProductDetails() {
    document.querySelector("#productName").innerHTML = product.Brand.Name;
    document.querySelector("#productNameWithoutBrand").innerHTML = product.NameWithoutBrand;
    document.querySelector("#productImage").src = product.Images.PrimaryLarge;
    document.querySelector("#productImage").alt = product.Name;
    document.querySelector("#productFinalPrice").innerHTML = product.FinalPrice;
    document.querySelector("#productColor").innerHTML = product.Colors[0].ColorName;
    document.querySelector("#productDescription").innerHTML = product.DescriptionHtmlSimple
    document.querySelector("#addToCart").dataset.id =product.id;
}