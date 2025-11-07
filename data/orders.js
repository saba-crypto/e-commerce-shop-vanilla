
export const orders = {
  ordersData: JSON.parse(localStorage.getItem('orders')) || [],
  saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(this.ordersData))
  },
}


