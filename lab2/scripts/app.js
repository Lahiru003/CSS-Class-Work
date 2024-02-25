
// author Pramuditha 
// lAB 2 css
// date 2/24/2024 -->

document.addEventListener("DOMContentLoaded", function() {
  // Initialize the content for different sections
  setContent('p.hometext', "Welcome to Pramuditha's Lab2 Homepage!");
  setContent('p.carousel-description', "Dive into the realms of music, cinema, and storytelling with my top picks. Feel the emotive power of The Weeknd's melodies, journey through the epic narrative of The Dark Knight, and get hooked on the suspenseful twists of Prison Break. These favorites of mine offer not just entertainment, but an escape into worlds of profound emotions and gripping tales.");
  setContent('.about-me p', "I'm an aspiring web developer with a passion for creating sleek, user-friendly websites. While I'm relatively new to the field, I bring a fresh perspective and an eagerness to learn and grow with every project. When I'm not coding or staying up-to-date with the latest web technologies, I enjoy diving into the competitive world of gaming. Valorant is my go-to game, where I love the thrill of strategizing with my team and sharpening my reflexes in fast-paced matches. It's not just a game; it's a way to connect with friends and unwind after a fulfilling day of work.");

  // Services Page Content
  setContent('#programming p', "Offering tailored programming solutions that fit your business needs...");
  setContent('#web-design p', "Offering tailored programming solutions that fit your business needs. Specializing in developing high-quality, maintainable code for a variety of applications.");
  setContent('#mobile-development p', "Building intuitive and performant mobile applications for iOS and Android platforms. Ensuring applications deliver on both functionality and design.");


  modifyNavbarLinks();


  addFooterNavbar();

  handleContactFormSubmission();
});

$(document).ready(function() {
  $('#loginForm').submit(handleLoginFormSubmission);
  $('#registerForm').submit(handleRegisterFormSubmission);
});

function setContent(selector, content) {
  const element = document.querySelector(selector);
  if (element) {
      element.textContent = content;
  }
}

function modifyNavbarLinks() {
  const productsLink = document.querySelector('a.nav-link[href="product.html"]');
  if (productsLink) {
      productsLink.textContent = "Interests";
      productsLink.setAttribute('href', 'product.html');
  }

  const navbarNav = document.querySelector('.navbar-nav');
}

function addFooterNavbar() {
  const footerNavbar = document.createElement('nav');
  footerNavbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark', 'fixed-bottom');
  footerNavbar.innerHTML = '<div class="container-fluid"><span class="navbar-text">© 2024 Pramuditha. All rights reserved.</span></div>';
  document.body.appendChild(footerNavbar);
}

function handleContactFormSubmission() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;
          console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
          setTimeout(function() {
              window.location.href = 'index.html';
          }, 3000);
      });
  }
}
//Lab2//////lab2///////lab2////////////lab2
function handleLoginFormSubmission(event) {
  event.preventDefault();

  var username = $('#username').val();

  var existingUsername = $('.navbar-nav .navbar-text.username');

  if (!existingUsername.length) {
    var navbarText = $('<span class="navbar-text mx-3 username">').text(username);

    $('.navbar-nav .nav-link[href="contact.html"]').after(navbarText);
  } else {
    existingUsername.text(username);
  }
  //dynamic navbar
  $('.navbar-nav .nav-link[href="login.html"]').text('Logout');
}
// handling
function handleRegisterFormSubmission(e) {
  e.preventDefault();
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var email = $('#email').val();
  var password = $('#password').val();
  var confirmPassword = $('#confirmPassword').val();
  var errorMessage = '';
  if (firstName.length < 2 || lastName.length < 2) errorMessage += "Name must be at least 2 characters long.<br>";
  if (email.length < 8 || !email.includes('@')) errorMessage += "Email must be valid.<br>";
  if (password.length < 6) errorMessage += "Password must be at least 6 characters long.<br>";
  if (password !== confirmPassword) errorMessage += "Passwords must match.<br>";
  if (errorMessage) {
      $('#ErrorMessage').html(errorMessage).removeClass('hidden');
  } else {
      var user = new User(firstName, lastName, "", email, password);
      console.log(user);// no output for user.username 
      $('#registerForm')[0].reset();
      $('#ErrorMessage').addClass('hidden').empty();
  }
}

function User(firstName, lastName, username, email, password) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.username = username;
  this.email = email;
  this.password = password;
}
