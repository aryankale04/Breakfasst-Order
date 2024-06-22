document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total');

    let total = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const foodItem = button.closest('.food-item');
            const price = parseInt(foodItem.dataset.price);
            const itemName = foodItem.querySelector('p').textContent.split(' - ')[0];

            total += price;
            totalPriceElement.textContent = total;

            const cartItem = document.createElement('p');
            cartItem.textContent = `${itemName} - ₹${price}`;
            cartItemsContainer.appendChild(cartItem);

            if (cartItemsContainer.children[0].textContent === 'No items in the cart.') {
                cartItemsContainer.removeChild(cartItemsContainer.children[0]);
            }
        });
    });
});
