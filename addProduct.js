function addProduct() {
    window.location.href = 'add-product.html';
}

document.querySelector('.save-btn').addEventListener('click', function() {
    const productName = document.getElementById('product-name').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;
    const description = document.getElementById('description').value;

    if (productName && price && quantity && description) {
        alert('Product saved successfully!');
    } else {
        alert('Please fill in all fields.');
    }
});
