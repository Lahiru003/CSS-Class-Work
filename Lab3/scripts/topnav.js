document.addEventListener("DOMContentLoaded", function() {
    createNavbar();
  });
  
  function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark');
  
    const containerFluid = document.createElement('div');
    containerFluid.classList.add('container-fluid');
  
    const brandLink = document.createElement('a');
    brandLink.classList.add('navbar-brand');
    brandLink.href = '#';
    brandLink.textContent = 'LAB 3';
  
    const togglerButton = document.createElement('button');
    togglerButton.classList.add('navbar-toggler');
    togglerButton.type = 'button';
    togglerButton.setAttribute('data-bs-toggle', 'collapse');
    togglerButton.setAttribute('data-bs-target', '#navbarNavAltMarkup');
    togglerButton.setAttribute('aria-controls', 'navbarNavAltMarkup');
    togglerButton.setAttribute('aria-expanded', 'false');
    togglerButton.setAttribute('aria-label', 'Toggle navigation');
  
    const togglerIcon = document.createElement('span');
    togglerIcon.classList.add('navbar-toggler-icon');
  
    togglerButton.appendChild(togglerIcon);
  
    const navbarCollapse = document.createElement('div');
    navbarCollapse.classList.add('collapse', 'navbar-collapse');
    navbarCollapse.id = 'navbarNavAltMarkup';
  
    const navbarNav = document.createElement('div');
    navbarNav.classList.add('navbar-nav');
  
    const navLinks = [
      { href: 'index.html', text: 'Home', active: true },
      { href: 'product.html', text: 'Products', active: false },
      { href: 'services.html', text: 'Services', active: false },
      { href: 'about.html', text: 'About Us', active: false },
      { href: 'contact.html', text: 'Contact Us', active: false },
      { href: 'LOGIN.html', text: 'Login', active: false },
      { href: 'blog.html', text: 'Blog', active: true }
    ];
  
    navLinks.forEach(linkData => {
      const link = document.createElement('a');
      link.classList.add('nav-link');
      link.href = linkData.href;
      link.textContent = linkData.text;
      if (linkData.active) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
      navbarNav.appendChild(link);
    });
  
    navbarCollapse.appendChild(navbarNav);
    containerFluid.appendChild(brandLink);
    containerFluid.appendChild(togglerButton);
    containerFluid.appendChild(navbarCollapse);
    navbar.appendChild(containerFluid);
  
    document.body.appendChild(navbar);

    // Add the navbar to the top of the body
    document.body.insertBefore(navbar, document.body.firstChild);
  }
  