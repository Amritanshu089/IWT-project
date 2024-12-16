
document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll('.product-card .btn');
    const productCards = document.querySelectorAll('.product-card');

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart!');
        });
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.5
    });

    productCards.forEach(card => {
        observer.observe(card);
    });
});
