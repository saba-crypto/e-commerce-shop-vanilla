import { cart } from "../../data/cart.js"
export function renderCheckoutHeader() {
 document.querySelector('.js-checkout-header').innerHTML = `
 <section class="left-side">
    <img
      class="header-image menu-icon js-menu-icon"
      src="/Images/Icons/menu.png"
      alt=""
    />
    <p class="home-button js-home-link">Home</p>
  </section>

  <section class="middle-side">
    <h1 class="page-title">Checkout(${cart.calculateTotalCartQuantity()} items)</h1>
  </section>

  <section class="right-side">
    <button class="track-orders-button js-track-orders">Track Orders</button>
    <button class="log-in-button">Log In</button>
    <div class="profile-photo-div">
      <img
        class="header-image profile-photo"
        src="/Images/IMG_2176.jpg"
        alt=""
      />
      <div class="tooltip">
        <p class="first-name">
          <img
            class="identity-icon"
            src="/Images/Icons/user.png"
            alt=""
          />First name: Saba
        </p>
        <p class="last-name">
          <img
            class="identity-icon"
            src="/Images/Icons/user.png"
            alt=""
          />Last name: Gochishvili
        </p>
        <p class="number">
          <img
            class="identity-icon"
            src="/Images/Icons/telephone.png"
            alt=""
          />
          Phone number: 2910291-1921
        </p>
        <p class="address">
          <img
            class="identity-icon"
            src="/Images/Icons/pin.png"
            alt=""
          />Address: white house
        </p>
      </div>
    </div>
    </div>
  </section>
 `
 document.querySelector('.js-track-orders').addEventListener('click', () => {
    window.location.href = 'orders.html'
 });
 document.querySelector('.js-home-link').addEventListener('click', () => {
    window.location.href = 'index.html'
  }); 
  const menuIconElement = document.querySelector('.js-menu-icon')
  const backgroundElement = document.querySelector('.js-sidebar-bg')
  const sidebarElement = document.querySelector('.js-sidebar')
  if (menuIconElement) {
    menuIconElement.addEventListener('click', () => {
      sidebarElement.classList.add('reveal')
      backgroundElement.classList.add('reveal-bg')
    });
  }
  if (backgroundElement) {
    backgroundElement.addEventListener('click', () => {
      sidebarElement.classList.remove('reveal')
      backgroundElement.classList.remove('reveal-bg')
    })
  };
}