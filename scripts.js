let currentLang = localStorage.getItem("xadra-lang") || "uz";
let currentRoute = "home";
let previousRoute = "home";

const view = document.getElementById("view");
const backBtn = document.getElementById("backBtn");
const langBtn = document.getElementById("langBtn");
const langLabel = document.getElementById("langLabel");

const langModal = document.getElementById("langModal");
const closeLang = document.getElementById("closeLang");


// ================================
// YORDAMCHI FUNKSIYALAR
// ================================

function t(key) {
  return UI[currentLang][key] || key;
}


function getName(item) {
  return item.name[currentLang] || item.name.uz;
}


function getIngredients(item) {
  return item.ingredients[currentLang] || item.ingredients.uz;
}


function getRecommendation(item) {
  return item.rec[currentLang] || item.rec.uz;
}


function getPrices(item) {
  if (!item.prices) return [item.price];

  return item.prices[currentLang] || item.prices.uz;
}


function setActiveNav(route) {

  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.classList.remove("active");
  });

  const active = document.querySelector(
    `.nav-item[data-route="${route}"]`
  );

  if (active) {
    active.classList.add("active");
  }
}


// ================================
// BOSH SAHIFA
// ================================

function renderHome() {

  currentRoute = "home";

  setActiveNav("home");

  backBtn.style.visibility = "hidden";

  view.innerHTML = `

    <section class="hero">

      <div class="logo-wrap">

        <img
          src="assets/logo.png"
          alt="XADRA FAMILY logo"
          onerror="this.style.display='none'; this.parentElement.innerHTML='✦';"
        >

      </div>

      <h1>XADRA</h1>

      <p>
        FAMILY • OILAVIY MILLIY TAOMLAR
      </p>


      <div class="category-grid">


        <button
          class="category-card"
          onclick="openCategory('salads')">

          <span class="emoji">🥗</span>

          <strong>
            ${t("salads").toUpperCase()}
          </strong>

        </button>


        <button
          class="category-card"
          onclick="openCategory('soups')">

          <span class="emoji">🍲</span>

          <strong>
            ${t("soups").toUpperCase()}
          </strong>

        </button>


        <button
          class="category-card"
          onclick="openCategory('dishes')">

          <span class="emoji">🍽️</span>

          <strong>
            ${t("dishes").toUpperCase()}
          </strong>

        </button>


        <button
          class="category-card"
          onclick="openCategory('drinks')">

          <span class="emoji">🥤</span>

          <strong>
            ${t("drinks").toUpperCase()}
          </strong>

        </button>

      </div>

    </section>

  `;
}


// ================================
// KATEGORIYA NOMLARI
// ================================

function categoryTitle(category) {

  return t(category);
}


// ================================
// MAHSULOT RO‘YXATI
// ================================

function renderProductList(category, title = null) {

  const products = MENU[category] || [];

  view.innerHTML = `

    <section class="section">

      <h1 class="page-title">
        ${title || categoryTitle(category)}
      </h1>

      <div class="ornament">
        ✦ • ✦
      </div>


      <div class="product-list">

        ${
          products.length
            ? products.map(item => productRow(item)).join("")
            : `<p>${currentLang === "uz"
                ? "Hozircha mahsulotlar mavjud emas."
                : currentLang === "ru"
                  ? "Пока нет доступных блюд."
                  : "No products available yet."
              }</p>`
        }

      </div>

    </section>

  `;

  backBtn.style.visibility = "visible";
}


// ================================
// MAHSULOT QATORI
// ================================

function productRow(item) {

  const priceText = item.prices
    ? getPrices(item)[0]
    : item.price;


  return `

    <button
      class="product-row"
      onclick="openProduct('${item.id}')">


      <div class="product-thumb">

        ${item.emoji || "🍽️"}

      </div>


      <div>

        <h3>
          ${getName(item)}
        </h3>

        <p>
          ${priceText}
        </p>

      </div>


      <span class="arrow">
        ›
      </span>

    </button>

  `;
}


// ================================
// KATEGORIYANI OCHISH
// ================================

function openCategory(category) {

  previousRoute = currentRoute;

  currentRoute = category;

  setActiveNav(category);

  if (category === "drinks") {

    renderDrinks();

    return;

  }

  renderProductList(category);
}


// ================================
// ICHIMLIKLAR
// ================================

function renderDrinks() {

  currentRoute = "drinks";

  setActiveNav("drinks");

  backBtn.style.visibility = "visible";


  const groups = [
    {
      id: "teas",
      key: "teas"
    },

    {
      id: "soft",
      key: "soft"
    },

    {
      id: "lemonades",
      key: "lemonades"
    }
  ];


  let html = `

    <section class="section">

      <h1 class="page-title">
        ${t("drinks")}
      </h1>

      <div class="ornament">
        ✦ • ✦
      </div>

  `;


  groups.forEach(group => {

    const products = MENU.drinks.filter(
      item => item.group === group.id
    );


    if (!products.length) return;


    html += `

      <h2 class="sub-title">
        ${t(group.key)}
      </h2>

      <div class="product-list">

        ${products
          .map(item => productRow(item))
          .join("")}

      </div>

    `;

  });


  html += `</section>`;


  view.innerHTML = html;
}


// ================================
// MAHSULOTNI TOPISH
// ================================

function findProduct(id) {

  const allProducts = [
    ...MENU.salads,
    ...MENU.soups,
    ...MENU.dishes,
    ...MENU.drinks
  ];

  return allProducts.find(
    item => item.id === id
  );
}


// ================================
// MAHSULOT SAHIFASI
// ================================

function openProduct(id) {

  const item = findProduct(id);

  if (!item) return;


  previousRoute = currentRoute;

  currentRoute = "product";


  setActiveNav(null);

  backBtn.style.visibility = "visible";


  const prices = getPrices(item);


  view.innerHTML = `

    <section class="detail">


      <div class="detail-image">

        ${item.emoji || "🍽️"}

      </div>


      <div class="detail-card">


        <h1 class="detail-title">

          ${getName(item)}

        </h1>


        <div>

          ${
            prices
              .map(price => `
                <span class="price">
                  ${price}
                </span>
              `)
              .join("<br>")
          }

        </div>


        <div class="info-box">

          <h4>
            ${t("ingredients")}
          </h4>

          <p>
            ${getIngredients(item)}
          </p>

        </div>


        <div class="info-box">

          <h4>
            ${t("recommendation")}
          </h4>

          <p>
            ${getRecommendation(item)}
          </p>

        </div>


      </div>

    </section>

  `;
}


// ================================
// TILNI O‘ZGARTIRISH
// ================================

function changeLanguage(lang) {

  if (!UI[lang]) return;


  currentLang = lang;

  localStorage.setItem(
    "xadra-lang",
    lang
  );


  langLabel.textContent =
    lang.toUpperCase();


  document.documentElement.lang =
    lang;


  updateStaticTexts();


  closeLanguageModal();


  if (currentRoute === "home") {

    renderHome();

  }

  else if (currentRoute === "drinks") {

    renderDrinks();

  }

  else if (currentRoute === "product") {

    renderHome();

  }

  else {

    renderProductList(currentRoute);

  }

}


// ================================
// STATIK MATNLAR
// ================================

function updateStaticTexts() {

  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key =
        element.getAttribute("data-i18n");

      element.textContent =
        t(key);

    });

}


// ================================
// TIL OYNASI
// ================================

function openLanguageModal() {

  langModal.classList.remove("hidden");

}


function closeLanguageModal() {

  langModal.classList.add("hidden");

}


langBtn.addEventListener(
  "click",
  openLanguageModal
);


closeLang.addEventListener(
  "click",
  closeLanguageModal
);


langModal.addEventListener(
  "click",
  event => {

    if (
      event.target === langModal
    ) {

      closeLanguageModal();

    }

  }
);


document
  .querySelectorAll(".language-option")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        changeLanguage(
          button.dataset.lang
        );

      }
    );

  });


// ================================
// ORQAGA QAYTISH
// ================================

backBtn.addEventListener(
  "click",
  () => {

    if (currentRoute === "product") {

      if (previousRoute === "drinks") {

        renderDrinks();

      }

      else if (
        MENU[previousRoute]
      ) {

        renderProductList(
          previousRoute
        );

      }

      else {

        renderHome();

      }

      return;

    }


    renderHome();

  }
);


// ================================
// PASTKI NAVIGATSIYA
// ================================

document
  .querySelectorAll(".nav-item")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const route =
          button.dataset.route;


        if (route === "home") {

          renderHome();

        }

        else {

          openCategory(route);

        }

      }
    );

  });


// ================================
// BOSHLANG‘ICH HOLAT
// ================================

langLabel.textContent =
  currentLang.toUpperCase();

document.documentElement.lang =
  currentLang;

renderHome();
