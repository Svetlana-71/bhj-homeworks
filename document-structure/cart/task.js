const cartProducts = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');

products.forEach(product => {
  const quantityControlDecrease = product.querySelector('.product__quantity-control_dec');
  const quantityControlIncrease = product.querySelector('.product__quantity-control_inc');
  const quantityValue = product.querySelector('.product__quantity-value');
  const productId = product.getAttribute('data-id');
  const productImage = product.querySelector('.product__image');
  quantityControlDecrease.addEventListener('click', () => {
    if (parseInt(quantityValue.textContent, 10) > 1) {
      quantityValue.textContent = `${parseInt(quantityValue.textContent, 10) - 1}`;
    }
  });
  quantityControlIncrease.addEventListener('click', () => {
    quantityValue.textContent = `${parseInt(quantityValue.textContent, 10) + 1}`;
  });
  const addToCartButton = product.querySelector('.product__add');
  addToCartButton.addEventListener('click', () => {
    const cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
    if (cartProduct) {
      const cartProductQuantity = parseInt(cartProduct.querySelector('.cart__product-count').textContent, 10);
      cartProduct.querySelector('.cart__product-count').textContent = `${cartProductQuantity + parseInt(quantityValue.textContent, 10)}`;
    } else {
      const cartProductElement = document.createElement('div');
      cartProductElement.classList.add('cart__product');
      cartProductElement.setAttribute('data-id', productId);
      cartProductElement.innerHTML = `
        <img class="cart__product-image" src="${productImage.src}">
        <div class="cart__product-count">${quantityValue.textContent}</div>
      `;
      cartProducts.appendChild(cartProductElement);
    }
  });
});
 

  

 


















  

 


 








 



 























 


 

 








