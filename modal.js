document.addEventListener('DOMContentLoaded', function() {
    initProductModal();
});

function initProductModal() {
    const productModal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    const closeModal = document.getElementById('closeModal');
    const addToCart = document.getElementById('addToCart');

    function openProductModal(product) {
        modalImage.src = product.image;
        modalTitle.textContent = product.title;
        modalDescription.textContent = product.description;

        // Handle price display (works for both pages)
        if (product.price) {
            modalPrice.textContent = `PRICE: ${product.price}`;
            modalPrice.style.display = 'block';
        } else {
            modalPrice.style.display = 'none';
        }

        productModal.style.display = 'block';
    }

    function closeProductModal() {
        productModal.style.display = 'none';
    }

    const productCards = document.querySelectorAll('.card');

    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't open modal if clicking on links or buttons
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }

            const productImg = this.querySelector('img');
            const productTitle = this.querySelector('.card-title');
            const productDesc = this.querySelector('.card-text');
            const productPrice = this.querySelector('.fw-bold.text-danger');

            const product = {
                image: productImg ? productImg.src : '',
                title: productTitle ? productTitle.textContent : '',
                description: productDesc ? productDesc.textContent : '',
                price: productPrice ? productPrice.textContent.replace('PRICE : ', '') : ''
            };

            openProductModal(product);
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', closeProductModal);
    }

    window.addEventListener('click', function(event) {
        if (event.target === productModal) {
            closeProductModal();
        }
    });

    if (addToCart) {
        addToCart.addEventListener('click', function() {
            alert('Produkt byl přidán do košíku!');
            closeProductModal();
        });
    }
}