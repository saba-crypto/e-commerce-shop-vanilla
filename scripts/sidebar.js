export function renderSidebar() {
  let sidebarHTML = ''
  const sidebarElement = document.querySelector('.sidebar');
  const backgroundElement = document.querySelector('.sidebar-background');
  const links = [
    { link: 'index.html',
      name: 'Home',
      image: '/Images/Icons/home.png',
      external: false
    },{
      link: 'checkout.html',
      name: 'Checkout',
      image: '/images/Icons/checkout.png' ,
      external: false
    },{ 
      link: 'orders.html',
      name: 'Orders History',
      image: '/Images/Icons/orders.png' ,
      external: false
    },{
      link: 'https://www.facebook.com/saba.gochishvili',
      name: 'Facebook',
      image: '/Images/Icons/facebook.png',
      external: true
    },{ 
      link: 'https://www.youtube.com/@sabaGochishvili',
      name: 'YouTube',
      image: '/Images/Icons/youtube.png',
      external: true
    },{
      link: 'https://github.com/saba-crypto',
      name: 'Github',
      image: '/Images/Icons/github.png',
      external: true
    }
  ];
  const path = window.location.pathname;
  let isSelected = ''
  if (path.endsWith('index.html')) {
    isSelected = 'Home'
  } else if (path.endsWith('checkout.html')) {
    isSelected = 'Checkout'
  } else if (path.endsWith('orders.html')) {
    isSelected = 'Orders History'
  }
  links.forEach((link) => {
    let html = `
    <div data-external="${link.external}" data-href="${link.link}" class="link-div ${isSelected === link.name ? 'selected' : ""}">
      <img src="${link.image}" alt="" />
      <p class="link home-link">${link.name}</p>
    </div>
    `
    sidebarHTML += html
  });
  sidebarElement.innerHTML = `
  <div class="title">Sidebar</div>
  ${sidebarHTML}`
  const menuIconElement = document.querySelector('.js-menu-icon');
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
  document.querySelectorAll('.link-div').forEach((link) => {
    link.addEventListener('click', () => {
    const href = link.dataset.href
    const isExternal = link.dataset.external === "true";
    if (!isExternal) {
      window.location.href = href
    } else {
      window.open(href, '_blank')
    }
    })
  });
}