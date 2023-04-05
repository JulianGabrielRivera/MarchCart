// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subTotalEl = product.querySelector(".subtotal span");

  const subTotal = Number(price) * Number(quantity);
  subTotalEl.innerHTML = subTotal;
  return subTotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);

  const products = document.querySelectorAll(".product");
  console.log(products);
  let total = document.querySelector("#total-value span");
  console.log(total);
  let total2 = 0;
  products.forEach((product) => {
    total2 += updateSubtotal(product);
  });
  total.innerHTML = total2.toFixed(2);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  const parent = target.parentNode.parentNode.parentNode;
  console.log(parent);
  const child = target.parentNode.parentNode;
  console.log(child);
  parent.removeChild(child);
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const tbody = document.querySelector("tbody");
  const products = document.querySelectorAll(".product");
  const createProduct = document.querySelector(".create-product");
  const inputs = createProduct.querySelectorAll("input");
  const productName = inputs[0].value;
  const productPrice = inputs[1].value;
  const productClone = products[0].cloneNode(true);
  const productNameSpan = productClone.querySelector(".name span");
  const priceSpan = productClone.querySelector(".price span");
  const quantity = productClone.querySelector(".quantity input");
  const subtotalSpan = productClone.querySelector(".subtotal span");
  const deleteButton = productClone.querySelector(".action button");
  productNameSpan.textContent = productName;
  console.log(productName);
  priceSpan.textContent = productPrice;
  quantity.value = 0;
  subtotalSpan.textContent = 0;
  tbody.appendChild(productClone);
  inputs[0].value = "";
  inputs[1].value = 0;

  deleteButton.addEventListener("click", removeProduct);
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");
  console.log(removeButtons);
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });
  const create = document.querySelector("#create");
  create.addEventListener("click", createProduct);
  //... your code goes here
});
