function changeImage(thumbnail) {
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = thumbnail.src;
}

document.addEventListener("DOMContentLoaded", () => {
    const addToCartButton = document.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
        const quantity = document.getElementById('quantity').value;
        alert(`Added ${quantity} item(s) to your cart!`);
    });
});
