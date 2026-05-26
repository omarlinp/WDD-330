import {GetParam} from "./utils.mjs";

const productId = GetParam("product");
console.log(productId);


// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}


