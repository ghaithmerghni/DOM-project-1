
function updateTotal() {
  let total = 0;
  const products = document.querySelectorAll(".card-body");

  products.forEach((product) => {
    const unitPrice = parseFloat(
      product.querySelector(".unit-price").textContent.replace("$", "")
    );
    const quantity = parseInt(product.querySelector(".quantity").textContent);
    total += unitPrice * quantity;
  });

  document.querySelector(".total").textContent = total + " $";
}

document.querySelectorAll(".fa-plus-circle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantitySpan = btn.parentElement.querySelector(".quantity");
    quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
    updateTotal();
  });
});

document.querySelectorAll(".fa-minus-circle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantitySpan = btn.parentElement.querySelector(".quantity");
    let current = parseInt(quantitySpan.textContent);
    if (current > 0) {
      quantitySpan.textContent = current - 1;
      updateTotal();
    }
  });
});

document.querySelectorAll(".fa-trash-alt").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".card-body").remove();
    updateTotal();
  });
});

document.querySelectorAll(".fa-heart").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
    if (btn.classList.contains("liked")) {
      btn.style.color = "red";
    } else {
      btn.style.color = "black";
    }
  });
});
