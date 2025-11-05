import { products } from "./products.js"
export const cart = {
 cartItems: JSON.parse(localStorage.getItem('cart')) || [],
  addToCart(productId) {
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        matchingItem = cartItem
      }
    });
    if (matchingItem) {
      matchingItem.quantity++
    } else {
      this.cartItems.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1'
      })
    }
    this.saveToStorage()
  },
  removeFromCart(productId) {
    let newCart = []
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem)
      }
    });
    this.cartItems = newCart
    this.saveToStorage()
  },
  saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems))
  },
  updateCartQuantity(productId, value) {
    if (value > 0 && value < 500) {
      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId === productId) {
          cartItem.quantity = Number(value)
        }
      })
    }
    this.saveToStorage()
  },
  calculateTotalCartQuantity() {
    let totalCartQuantity = 0;
    cart.cartItems.forEach((cartItem) => {
      totalCartQuantity += cartItem.quantity
    });
    return totalCartQuantity;
  },
  changeDeliveryOptionId(productId, deliveryOptionId) {
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        cartItem.deliveryOptionId = deliveryOptionId
      }
    });
    this.saveToStorage()
  }
}
