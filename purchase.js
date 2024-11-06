let productCount = 1;

function addProduct() {
    productCount++;
    const productList = document.getElementById('productList');

    // Create a new div for the product item
    const productItem = document.createElement('div');
    productItem.className = 'product-item';

    // Create the select element
    const select = document.createElement('select');
    select.className = 'product-select';
    select.name = 'product[]';
    select.id = `product${productCount}`;
    select.innerHTML = `
        <option value="" disabled selected>Select product from list</option>
        <option value="product-a">Product A</option>
        <option value="product-b">Product B</option>
        <option value="product-c">Product C</option>
        <option value="product-d">Product D</option>
    `;
    productItem.appendChild(select);

    // Create the quantity input
    const quantityDiv = document.createElement('div');
    quantityDiv.className = 'product-quantity';

    const quantityLabel = document.createElement('label');
    quantityLabel.htmlFor = `quantity${productCount}`;
    quantityLabel.className = 'quantity-label';
    quantityLabel.textContent = 'Quantity:';
    quantityDiv.appendChild(quantityLabel);

    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.id = `quantity${productCount}`;
    quantityInput.name = 'quantity[]';
    quantityInput.className = 'quantity-input';
    quantityInput.min = '1';
    quantityInput.value = '1';
    quantityDiv.appendChild(quantityInput);

    productItem.appendChild(quantityDiv);

    // Create the remove button
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'remove-btn';
    removeButton.textContent = 'Remove';
    removeButton.onclick = function () {
        removeProduct(removeButton);
    };
    productItem.appendChild(removeButton);

    // Append the complete product item to the product list
    productList.appendChild(productItem);
}

function removeProduct(button) {
    // Remove the product item associated with the clicked button
    button.parentElement.remove();
}
