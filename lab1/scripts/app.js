
// author Pramuditha Jayasuriya 
// lAB 1 css
// date 2/5/2024


document.addEventListener("DOMContentLoaded", function() {
  // Home Page Content
  const homeTextContent = "Welcome to Pramuditha's Lab1 Homepage!";
  const homeTextElement = document.querySelector('p.hometext');
  if (homeTextElement) {
      homeTextElement.textContent = homeTextContent;
  }

  // Carousel Description Content
  const carouselDescriptionContent = "Dive into the realms of music, cinema, and storytelling with my top picks. Feel the emotive power of The Weeknd's melodies, journey through the epic narrative of The Dark Knight, and get hooked on the suspenseful twists of Prison Break. These favorites of mine offer not just entertainment, but an escape into worlds of profound emotions and gripping tales.";
  const carouselDescriptionElement = document.querySelector('p.carousel-description');
  if (carouselDescriptionElement) {
      carouselDescriptionElement.textContent = carouselDescriptionContent;
  }

  // About Me Page Content
  const aboutMeContent = "I'm an aspiring web developer with a passion for creating sleek, user-friendly websites. While I'm relatively new to the field, I bring a fresh perspective and an eagerness to learn and grow with every project. When I'm not coding or staying up-to-date with the latest web technologies, I enjoy diving into the competitive world of gaming. Valorant is my go-to game, where I love the thrill of strategizing with my team and sharpening my reflexes in fast-paced matches. It's not just a game; it's a way to connect with friends and unwind after a fulfilling day of work.";
  const aboutMeElement = document.querySelector('.about-me p');
  if (aboutMeElement) {
      aboutMeElement.textContent = aboutMeContent;
  }

  // Services Page Content
  // Content for Custom Programming Service
const programmingServiceText = "Offering tailored programming solutions that fit your business needs. Specializing in developing high-quality, maintainable code for a variety of applications.";

const webDesignServiceText = "Crafting engaging and responsive website designs that provide a seamless user experience across all devices. Focusing on aesthetic appeal and usability.";

const mobileDevelopmentServiceText = "Building intuitive and performant mobile applications for iOS and Android platforms. Ensuring applications deliver on both functionality and design.";
  const programmingServiceElement = document.querySelector('#programming p');
  const webDesignServiceElement = document.querySelector('#web-design p');
  const mobileDevelopmentServiceElement = document.querySelector('#mobile-development p');

  if (programmingServiceElement) {
      programmingServiceElement.textContent = programmingServiceText;
  }
  if (webDesignServiceElement) {
      webDesignServiceElement.textContent = webDesignServiceText;
  }
  if (mobileDevelopmentServiceElement) {
      mobileDevelopmentServiceElement.textContent = mobileDevelopmentServiceText;
  }

  // Navbar Link Modifications
  const productsLink = document.querySelector('a.nav-link[href="product.html"]');
  if (productsLink) {
      productsLink.textContent = "Interests";
      productsLink.setAttribute('href', 'product.html'); 
  }

  const navbarNav = document.querySelector('.navbar-nav');
  if (navbarNav) {
      const hrLink = document.createElement('a');
      hrLink.classList.add('nav-link');
      hrLink.href = "index.html"; 
      hrLink.innerHTML = '<i class="fa fa-users"></i> Human Resources';
      const contactLink = document.querySelector('a.nav-link[href="contact.html"]');
      navbarNav.insertBefore(hrLink, contactLink);
  }

  // Add Fixed Bottom Navbar
  const currentYear = new Date().getFullYear();
  const footerNavbar = document.createElement('nav');
  footerNavbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark', 'fixed-bottom');
  footerNavbar.innerHTML = `
      <div class="container-fluid">
          <span class="navbar-text">
              © ${currentYear} Pramuditha. All rights reserved.
          </span>
      </div>
  `;
  document.body.appendChild(footerNavbar);
});



//for submisssion
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); //avoid refresh

      // Get the form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Output the user’s information to the console
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

      // Start a timer. After 3 seconds redirect
      setTimeout(function() {
          window.location.href = 'index.html';
      }, 3000);
  });
});
