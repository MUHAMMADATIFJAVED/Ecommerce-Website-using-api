const productsContainer = document.querySelector('.products-container');

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productCard.appendChild(productImage);

            const productName = document.createElement('h2');
            productName.textContent = product.title;
            productCard.appendChild(productName);

            const productPrice = document.createElement('p');
            productPrice.classList.add('price');
            productPrice.textContent = `$${product.price}`;
            productCard.appendChild(productPrice);

            const addButton = document.createElement('button');
            addButton.textContent = 'Add to Cart';
            addButton.addEventListener('click', () => {
                // Add to cart functionality
                console.log('Add to cart button clicked');
            });
            productCard.appendChild(addButton);

            productsContainer.appendChild(productCard);
        });
    })
    .catch(error => console.error(error));
