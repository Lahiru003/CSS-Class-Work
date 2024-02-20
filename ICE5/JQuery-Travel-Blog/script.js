$(document).ready(function () {
  console.log("jQuery is running!");
  // Injecting an H1 header into the header HTML element with an id of "header"
  $("#header").html("<h1>Welcome to our Travel Blog!</h1>");

  // Create Navigation Bar
  const categories = ["Beaches", "Mountains", "Cities", "Forests", "Deserts"];
  let navContent = "<ul>";
  $.each(categories, function (index, category) {
    // console.log(index);
    // console.log(category);
    navContent += `<li onclick="loadCategoryContent('${category}')">${category}</li>`;
  });
  navContent += "</ul>";
  $("#navbar").html(navContent);

  window.loadCategoryContent = function (category) {
    console.log("loadCategoryContent function ran!");
    console.log(category);
    let content = `<h2>${category}</h2>`;
    content += `<div class="carousel" id="${category.toLowerCase()}-carousel"></div>`;
    $("#content").html(content);

    populateCarousel(category.toLowerCase());
  };

  const categoryImages = {
    beaches: [
      { alt: "Beach Sunset", src: "images/beach1.jpg" },
      { alt: "Sandy Shore", src: "images/beach2.jpg" },
      { alt: "Marina Resort", src: "images/beach3.jpg" },
    ],
    mountains: [
      { alt: "Mountain Range", src: "images/mountain1.jpg" },
      { alt: "Snowy Peak", src: "images/mountain2.jpg" },
      { alt: "Hiking Trail", src: "images/mountain3.jpg" },
    ],
    cities: [
      { alt: "New York", src: "images/city2.jpg" },
      { alt: "Konoha village", src: "images/konoha.jpg" },
      { alt: "Gotham city", src: "images/gotham.jpg" },
    ],
    forests: [
      { alt: "Mountain Forest", src: "images/mountain1.jpg" },
      { alt: "Snowy Forest", src: "images/mountain2.jpg" },
      { alt: "Hiking Forest", src: "images/mountain3.jpg" },
    ],
    deserts: [
      { alt: "Sandy Dunes", src: "images/sandy.jpg" },
      { alt: "Desert Sunset", src: "images/sunset.jpg" },
      { alt: "Oasis", src: "images/oasis.jpg" },
    ]
  };
  
  // category = beaches
  function populateCarousel(category) {
    console.log("populate carousel ran!");
    const images = categoryImages[category];

    // [].forEach(), [].map() -> 2 Array Iterator Method
    let carouselContent = images
      .map((image, index) => {
        return `<div class="carousel-item ${index == 0 ? "active" : ""}">
      <div class="image" style="background-image: url('${image.src}')">
      </div>
      <p>${image.alt}</p>
      </div>
      `;
      })
      .join("");

    $(`#${category}-carousel`).html(carouselContent);

    $(`#${category}-carousel`).append(`
    <button class="carousel-control prev" onclick="moveCarousel('${category}', -1)">&lt;</button>
    <button class="carousel-control next" onclick="moveCarousel('${category}', 1)">&gt;</button>
    `);
  }

  window.moveCarousel = function (category, direction) {
    debugger;
    let items = $(`#${category}-carousel .carousel-item`);

    let activeIndex = items.index(items.filter(".active"));

    let newIndex = activeIndex + direction;

    if (newIndex >= items.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = items.length - 1;
    }
    items.removeClass("active");
    items.eq(newIndex).addClass("active");
  };
   // Dynamically add content to the Footer
   $("#footer").html(`<p>My favorite category would be the Beaches. The beauty of the sunset over the ocean, the calming sound of waves and the breeze make it an ideal place for relaxation and reflection.</p>`);
});

// ICE 5 Tasks:
// 1.Populate Cities, Forests & Deserts
// 2. Add 3 images to the Cities & Deserts (Optionally, you may add images for the rest of the categories)
// 3. Dynamically add content to the Footer using jQuery. The content should include a short description of your favorite category/place and why.

// DUE Monday February 19th at 11:59 PM
