const products = [
  {
    name: `MALM`,
    description: `High bed frame/2 storage boxes, Queen`,
    amount: 356,
    ratings: 4.5,
    type: `storage`,
    color: `black`,
    total_ratings: `26`,
    images: [
      `img/bed-large/black.webp`,
      `img/bed-mobile/black.webp`,
      `img/bed-large/black-2.webp`,
      `img/bed-mobile/black-2.webp`,
    ],
    alt: `Black large bed with storage`,
  },
  {
    name: `HEMNES`,
    description: `Bed frame, Queen`,
    amount: 578,
    ratings: 5,
    type: `storage`,
    color: `white`,
    total_ratings: `81`,
    images: [
      `img/bed-large/white.webp`,
      `img/bed-mobile/white.webp`,
      `img/bed-large/white-2.webp`,
      `img/bed-mobile/white-2.webp`,
    ],
    alt: `White bed without storage`,
  },
  {
    name: `SOMBRE`,
    description: `Upholstered bed frame, Queen`,
    amount: 159,
    ratings: 2,
    type: `full`,
    color: `grey`,
    total_ratings: `6`,
    images: [
      `img/bed-large/grey.webp`,
      `img/bed-mobile/grey.webp`,
      `img/bed-large/grey-2.webp`,
      `img/bed-mobile/grey-2.webp`,
    ],
    alt: `Grey large bed with storage`,
  },
  {
    name: `KQITE`,
    description: `Bed frame, Full`,
    amount: 492,
    ratings: 4,
    type: `full`,
    color: `beige`,
    total_ratings: `47`,
    images: [
      `img/bed-large/beige.webp`,
      `img/bed-mobile/beige.webp`,
      `img/bed-large/beige-2.webp`,
      `img/bed-mobile/beige-2.webp`,
    ],
    alt: `Beige large bed with storage`,
  },
  {
    name: `IOSEU`,
    description: `High bed, Twin`,
    amount: 156,
    ratings: 3.5,
    type: `twin`,
    color: `white`,
    total_ratings: `9`,
    images: [
      `img/bed-large/twin-white-2.webp`,
      `img/bed-mobile/twin-white-2.webp`,
      `img/bed-large/twin-white.webp`,
      `img/bed-mobile/twin-white.webp`,
    ],
    alt: `White twin bed with storage`,
  },
  {
    name: `NIESTA`,
    description: `Metal frame bed, Twin`,
    amount: 98,
    ratings: 1,
    type: `twin`,
    color: `black`,
    total_ratings: `3`,
    images: [
      `img/bed-large/metal-2.webp`,
      `img/bed-large/metal-2.webp`,
      `img/bed-large/twin-metal.webp`,
      `img/bed-mobile/twin-metal.webp`,
    ],
    alt: `Metal twin bed without storage`,
  },
  {
    name: `KLAIR`,
    description: `Low Profile Platform Bed, Twin`,
    amount: 234,
    ratings: 5,
    type: `twin`,
    color: `black`,
    total_ratings: `89`,
    images: [
      `img/bed-large/blue-twin.webp`,
      `img/bed-mobile/blue-twin.webp`,
      `img/bed-large/blue-twin-2.webp`,
      `img/bed-mobile/blue-twin-2.webp`,
    ],
    alt: `Blue colored twin bed`,
  },
  {
    name: `BUSHWICK`,
    description: `Full bunk bed`,
    amount: 657,
    ratings: 3,
    type: `kids`,
    color: `grey`,
    total_ratings: `23`,
    images: [
      `img/bed-large/kids-2.webp`,
      `img/bed-mobile/kids-2.webp`,
      `img/bed-large/kids.webp`,
      `img/bed-mobile/kids.webp`,
    ],
    alt: `Kids bed with storage`,
  },
  {
    name: `ARROW`,
    description: `Twin over full bunk bed`,
    amount: 356,
    ratings: 4,
    type: `kids`,
    color: `white`,
    total_ratings: `12`,
    images: [
      `img/bed-large/kids-white.webp`,
      `img/bed-mobile/kids-white.webp`,
      `img/bed-large/kids-white-2.webp`,
      `img/bed-mobile/kids-white-2.webp`,
    ],
    alt: `White colored kids bed`,
  },
];

const allFilters = {
  type: [],
  color: [],
  ratings: 0,
};

const filterProducts = (products) => {
  let filteredArray = products;

  if (allFilters.type.length > 0) {
    filteredArray = products.filter(function (product) {
      return allFilters.type.join().includes(product.type);
    });
  }

  if (allFilters.color.length > 0) {
    filteredArray = filteredArray.filter(function (product) {
      return allFilters.color.join().includes(product.color);
    });
  }

  if (allFilters.ratings > 0) {
    filteredArray = filteredArray.filter(function (product) {
      return product.ratings >= allFilters.ratings;
    });
  }

  getProducts(filteredArray);
};

const filterOptions = () => {
  let filters = document.querySelector(`.filter-options-large`);
  if (!filters) {
    return;
  }
  filters.addEventListener(`input`, function (event) {
    event.preventDefault();
    let filterName = event.target.name;
    let filterValue = event.target.value;
    let checked = event.target.checked;

    if (filterName === `type`) {
      if (checked) {
        allFilters.type.push(filterValue);
      } else {
        allFilters.type.pop(filterValue);
      }
    } else if (filterName === `color`) {
      if (checked) {
        allFilters.color.push(filterValue);
      } else {
        allFilters.color.pop(filterValue);
      }
    } else if (filterName === `rating`) {
      if (!event.target.disabled) {
        allFilters.ratings = Number(filterValue);
      }
    }

    filterProducts(products);
  });
};

filterOptions();

const fullStar = `<span class="material-icons-round star-rate"> star </span>`;
const starBorder = `<span class="material-icons-round star-rate"> star_border </span>`;
const halfStar = `<span class="material-icons-round star-rate"> star_half </span>`;

const filterButtonClick = () => {
  let filterButton = document.querySelector(`a.main-button.dialog`);
  if (!filterButton) {
    return;
  }
  filterButton.addEventListener(`click`, (event) => {
    let overlay = document.querySelector(`.overlay`);
    overlay.style.visibility = "visible";
    overlay.style.opacity = 1;
  });

  let closeButton = document.querySelector(`a.close`);

  closeButton.addEventListener(`click`, (event) => {
    let overlay = document.querySelector(`.overlay`);
    overlay.style.visibility = "hidden";
    overlay.style.opacity = 0;
  });
};

filterButtonClick();

const getProducts = (products) => {
  let section = document.querySelector("#results");
  if (!section) {
    return;
  }
  section.innerHTML = ``;

  if (products.length == 0) {
    section.innerHTML = `<h1>Sorry, no products found.</h1>`;
    let pagination = document.querySelector(".pagination");
    pagination.style = "display:none";
  }

  products.forEach((product) => {
    let index = 0;
    let stars = [];

    if (Number.isInteger(product.ratings)) {
      while (index < product.ratings) {
        stars.push(fullStar);
        index++;
      }
    } else {
      while (index < Math.floor(product.ratings)) {
        stars.push(fullStar);
        index++;
      }
      stars.push(halfStar);
    }
    let starLength = stars.length;

    while (starLength < 5) {
      stars.push(starBorder);
      starLength++;
    }

    let starString = stars.join(``);
    const article = document.createElement(`article`);
    article.classList.add(`product`);
    article.innerHTML = `
  <header>
    <a href="product.html">
      <div class="image-container">
        <img
          class="product"
          srcset="
            ${product.images[0]}  1920w,
            ${product.images[0]}   960w,
            ${product.images[1]}  480w
          "
          sizes="(min-width: 1920px) 500px,
        (min-width: 800px) 500px,
        480px"
          src="${product.images[0]}"
          alt="${product.alt}"
        />
        <img
          class="product-2"
          srcset="
            ${product.images[3]} 1920w,
            ${product.images[3]}  960w
          "
          sizes="(min-width: 1920px) 500px,
          (min-width: 800px) 500px,
          480px"
          src="${product.images[3]}"
          alt="${product.alt}"
        />
      </div>
    </a>

    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <data value="${product.amount}"><strong>$${product.amount}.00</strong></data>
    <div class="ratings">
      ${starString}
      <span class="total-ratings">(${product.total_ratings} ratings)</span>
    </div>
  </header>

  <footer class="product-footer">
    <button type="button" class="main-button add-cart">
      <span class="material-icons-round"> add_shopping_cart </span> Add
      to Cart
    </button>
    <button type="button" class="main-button add-wishlist">
      <span class="material-icons-round add-fav">favorite_border</span>
      Add to wishlist
    </button>
  </footer>`;

    section.appendChild(article);
  });
};

const sortProducts = () => {
  let sort = document.querySelector(`#sort`);
  if (!sort) {
    return;
  }
  sort.addEventListener("change", (event) => {
    let selectedSortOption = event.target.value;
    if (selectedSortOption == `high`) {
      products.sort(
        (firstItem, secondItem) => secondItem.amount - firstItem.amount
      );
    } else if (selectedSortOption == `low`) {
      products.sort(
        (firstItem, secondItem) => firstItem.amount - secondItem.amount
      );
    } else if (selectedSortOption == `ratings`) {
      products.sort(
        (firstItem, secondItem) => secondItem.ratings - firstItem.ratings
      );
    } else {
      getProducts(products);
    }
    filterProducts(products);
  });
};

getProducts(products);
sortProducts();

let navToggle = document.querySelector(`#toggle-menu`);
let menu = document.querySelector(`.menu`);
let closeIcon = document.querySelector(`.close-icon`);
let menuIcon = document.querySelector(`.menu-icon`);

navToggle.addEventListener(`click`, (event) => {
  let menu = document.getElementById(`menu`);

  if (!menu.style.display || menu.style.display === `none`) {
    menu.style.display = `block`;
    closeIcon.style.display = `block`;
    menuIcon.style.display = `none`;
  } else {
    menu.style.display = `none`;
    closeIcon.style.display = `none`;
    menuIcon.style.display = `block`;
  }
});

const showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0) return;

  let dots = document.getElementsByClassName("img-bg");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};

let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};
