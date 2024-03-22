function addFooterNavbar() {
    const footerNavbar = document.createElement('nav');
    footerNavbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark', 'fixed-bottom');
    footerNavbar.innerHTML = '<div class="container-fluid"><span class="navbar-text">© 2024 Pramuditha. All rights reserved.</span></div>';
    document.body.appendChild(footerNavbar);
  }
  addFooterNavbar();