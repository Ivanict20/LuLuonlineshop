document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelectorAll(".cart-item");

    cartItems.forEach((item) => {
        const decreaseBtn = item.querySelector(".decrease-btn");
        const increaseBtn = item.querySelector(".increase-btn");
        const quantitySpan = item.querySelector(".quantity");

        let quantity = parseInt(quantitySpan.textContent);

        increaseBtn.addEventListener("click", () => {
            quantity++;
            quantitySpan.textContent = quantity;
        });

        decreaseBtn.addEventListener("click", () => {
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
            }
        });
    });

    document.querySelector(".checkout-btn").addEventListener("click", () => {
        alert("Proceeding to checkout...");
    });
});