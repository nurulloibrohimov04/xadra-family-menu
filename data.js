const UI = {

  uz: {
    home: "Bosh sahifa",
    salads: "Salatlar",
    soups: "Sho‘rvalar",
    dishes: "Taomlar",
    drinks: "Ichimliklar",

    chooseLanguage: "Tilni tanlang",
    ingredients: "Tarkibi",
    recommendation: "Tavsiya",
    matches: "Qaysi taomlar bilan mos?",

    teas: "Choylar",
    soft: "Salqin ichimliklar",
    lemonades: "Limonadlar"
  },


  ru: {
    home: "Главная",
    salads: "Салаты",
    soups: "Супы",
    dishes: "Блюда",
    drinks: "Напитки",

    chooseLanguage: "Выберите язык",
    ingredients: "Состав",
    recommendation: "Рекомендация",
    matches: "С какими блюдами подходит?",

    teas: "Чаи",
    soft: "Прохладительные напитки",
    lemonades: "Лимонады"
  },


  en: {
    home: "Home",
    salads: "Salads",
    soups: "Soups",
    dishes: "Dishes",
    drinks: "Drinks",

    chooseLanguage: "Choose language",
    ingredients: "Ingredients",
    recommendation: "Recommendation",
    matches: "What does it pair with?",

    teas: "Teas",
    soft: "Soft drinks",
    lemonades: "Lemonades"
  }

};


// ==================================================
// XADRA FAMILY — MENU
// ==================================================

const MENU = {


  // ==================================================
  // SALATLAR
  // ==================================================

  salads: [

    {
      id: "achchiq-chuchuk",
      emoji: "🥗",

      name: {
        uz: "Achchiq-chuchuk",
        ru: "Аччик-чучук",
        en: "Achchiq-chuchuk Salad"
      },

      price: "24 000 so‘m",

      ingredients: {
        uz: "Pomidor, rayhon, piyoz.",
        ru: "Помидоры, базилик, лук.",
        en: "Tomatoes, basil and onion."
      },

      rec: {
        uz: "Deyarli barcha ovqat bilan tanavvul qilish uchun.",
        ru: "Подходит практически ко всем блюдам.",
        en: "A great choice to enjoy with almost any dish."
      }
    },


    {
      id: "bahor",
      emoji: "🥒",

      name: {
        uz: "Bahor salat",
        ru: "Весенний салат",
        en: "Spring Salad"
      },

      price: "20 000 so‘m",

      ingredients: {
        uz: "Kefir qatiq, bodring, ko‘katlar.",
        ru: "Кефирный йогурт, огурцы, зелень.",
        en: "Kefir yogurt, cucumber and fresh herbs."
      },

      rec: {
        uz: "Asosan xamirli ovqatlar bilan tanavvul qilish uchun.",
        ru: "Особенно хорошо сочетается с блюдами из теста.",
        en: "Especially recommended with dough-based dishes."
      }
    },


    {
      id: "olive",
      emoji: "🥗",

      name: {
        uz: "Olive",
        ru: "Оливье",
        en: "Olivier Salad"
      },

      price: "35 000 so‘m",

      ingredients: {
        uz: "Qaynatilgan sabzi, kartoshka va tuxum, halol kolbasa, ko‘k no‘xat va mayonez.",
        ru: "Отварные морковь, картофель и яйца, халяльная колбаса, зелёный горошек и майонез.",
        en: "Boiled carrot, potato and eggs, halal sausage, green peas and mayonnaise."
      },

      rec: {
        uz: "Ovqat so‘ng yaqinlar bilan birgalikda tanavvul qilib o‘tirish uchun zo‘r tanlov!",
        ru: "Отличный выбор, чтобы насладиться салатом после еды вместе с близкими!",
        en: "A great choice to enjoy together with family and friends after a meal!"
      }
    },


    {
      id: "rukkola",
      emoji: "🥬",

      name: {
        uz: "Rukkola",
        ru: "Руккола",
        en: "Arugula Salad"
      },

      price: "49 000 so‘m",

      ingredients: {
        uz: "Rukkola ko‘kati, salat bargi, bulg‘or qalampiri, aroid sous va kedr yong‘og‘i.",
        ru: "Руккола, листья салата, болгарский перец, соус и кедровые орехи.",
        en: "Arugula, lettuce leaves, bell pepper, sauce and pine nuts."
      },

      rec: {
        uz: "Ovqatdan oldin oshqozonni biroz chalg‘itib turish uchun 😉",
        ru: "Отличный вариант перед основным блюдом 😉",
        en: "A great choice before the main course 😉"
      }
    },


    {
      id: "sezar",
      emoji: "🥗",

      name: {
        uz: "Sezar",
        ru: "Цезарь",
        en: "Caesar Salad"
      },

      price: "65 000 so‘m",

      ingredients: {
        uz: "Salat bargi, karam barglari, tovuq go‘shti, xrustka va mayonez.",
        ru: "Листья салата, капустные листья, куриное мясо, хрустящие добавки и майонез.",
        en: "Lettuce, cabbage leaves, chicken, crispy toppings and mayonnaise."
      },

      rec: {
        uz: "Ovqatdan oldin oshqozonni biroz chalg‘itib turish uchun.",
        ru: "Хороший выбор перед основным блюдом.",
        en: "A good choice before the main course."
      }
    }

  ],


  // ==================================================
  // SHO‘RVALAR
  // ==================================================

  soups: [

    {
      id: "koza",
      emoji: "🍲",

      name: {
        uz: "KO‘ZA sho‘rva",
        ru: "Суп КОЗА",
        en: "KOZA Soup"
      },

      price: "61 000 so‘m",

      ingredients: {
        uz: "Mol go‘shti, qo‘y go‘shti, sabzi, kartoshka, sarimsoq piyoz, oddiy piyoz va qo‘shimcha ziravorlar.",
        ru: "Говядина, баранина, морковь, картофель, чеснок, лук и специи.",
        en: "Beef, lamb, carrot, potato, garlic, onion and spices."
      },

      rec: {
        uz: "Yog‘li yoki quyuq ovqatlar o‘rniga tavsiya qilinadi. Sho‘rvaning sabzavotlar bilan hosil qiladigan umumiy ta’mi sizga zavq berishi aniq.",
        ru: "Рекомендуется вместо жирных или густых блюд. Насыщенный вкус мяса и овощей подарит настоящее удовольствие.",
        en: "Recommended as an alternative to rich or heavy dishes. The combination of meat and vegetables creates a delicious, satisfying taste."
      }
    },


    {
      id: "tushonka",
      emoji: "🍲",

      name: {
        uz: "TUSHONKA sho‘rva",
        ru: "Суп ТУШОНКА",
        en: "TUSHONKA Soup"
      },

      price: "66 000 so‘m",

      ingredients: {
        uz: "Mol go‘shti, qo‘y go‘shti, lavr bargi, sarimsoq piyoz, oddiy piyoz va qo‘shimcha ziravorlar.",
        ru: "Говядина, баранина, лавровый лист, чеснок, лук и специи.",
        en: "Beef, lamb, bay leaf, garlic, onion and spices."
      },

      rec: {
        uz: "Sergo‘sht suyuq ovqat tanavvul qilishni istasangiz, bu ajoyib tanlov.",
        ru: "Отличный выбор, если хочется наваристого мясного супа.",
        en: "An excellent choice if you want a rich and meaty soup."
      }
    }

  ],


  // ==================================================
  // TAOMLAR
  // ==================================================

  dishes: [

    {
      id: "halim",
      emoji: "🍲",

      name: {
        uz: "Halim",
        ru: "Халим",
        en: "Halim"
      },

      prices: {
        uz: [
          "Portsiyа — 64 000 so‘m",
          "0.7 portsiyа — 54 000 so‘m",
          "1 kg — 128 000 so‘m"
        ],

        ru: [
          "Порция — 64 000 сум",
          "0.7 порции — 54 000 сум",
          "1 кг — 128 000 сум"
        ],

        en: [
          "Portion — 64,000 UZS",
          "0.7 portion — 54,000 UZS",
          "1 kg — 128,000 UZS"
        ]
      },

      ingredients: {
        uz: "Lahm mol go‘shti, bug‘doy, yog‘, saryog‘, tuz va boshqa ziravorlar.",
        ru: "Нежная говядина, пшеница, масло, сливочное масло, соль и специи.",
        en: "Tender beef, wheat, oil, butter, salt and spices."
      },

      rec: {
        uz: "Kaloriyaga boy va to‘yimli!",
        ru: "Калорийное и очень сытное блюдо!",
        en: "Rich in calories and very filling!"
      }
    },


    {
      id: "norin",
      emoji: "🍜",

      name: {
        uz: "Norin",
        ru: "Норин",
        en: "Norin"
      },

      prices: {
        uz: [
          "Portsiyа — 49 000 so‘m",
          "0.7 portsiyа — 39 000 so‘m",
          "1 kg — 124 000 so‘m"
        ],

        ru: [
          "Порция — 49 000 сум",
          "0.7 порции — 39 000 сум",
          "1 кг — 124 000 сум"
        ],

        en: [
          "Portion — 49,000 UZS",
          "0.7 portion — 39,000 UZS",
          "1 kg — 124,000 UZS"
        ]
      },

      ingredients: {
        uz: "Xamir, ot go‘shti, o‘simlik moyi va ziravorlar.",
        ru: "Тесто, конина, растительное масло и специи.",
        en: "Dough, horse meat, vegetable oil and spices."
      },

      rec: {
        uz: "Norinni albatta qazi bilan yeyish kerak 😉!",
        ru: "Норин обязательно стоит попробовать с казы 😉!",
        en: "Norin is best enjoyed with qazi 😉!"
      }
    },


    {
      id: "jiz",
      emoji: "🥩",

      name: {
        uz: "Jiz",
        ru: "Джиз",
        en: "Jiz"
      },

      prices: {
        uz: [
          "100 g — 42 000 so‘m",
          "1 kg — 420 000 so‘m"
        ],

        ru: [
          "100 г — 42 000 сум",
          "1 кг — 420 000 сум"
        ],

        en: [
          "100 g — 42,000 UZS",
          "1 kg — 420,000 UZS"
        ]
      },

      ingredients: {
        uz: "Mol va qo‘y go‘shti, yog‘, zira, kashnich va tuz.",
        ru: "Говядина и баранина, жир, зира, кориандр и соль.",
        en: "Beef and lamb, fat, cumin, coriander and salt."
      },

      rec: {
        uz: "Go‘shtxo‘rlar uchun eng zo‘r tanlov! 😉",
        ru: "Лучший выбор для любителей мяса! 😉",
        en: "The perfect choice for meat lovers! 😉"
      }
    }

  ],


  // ==================================================
  // ICHIMLIKLAR
  // ==================================================

  drinks: [

    {
      id: "green-tea",
      emoji: "🍵",
      group: "teas",

      name: {
        uz: "Ko‘k choy",
        ru: "Зелёный чай",
        en: "Green Tea"
      },

      price: "5 000 so‘m",

      ingredients: {
        uz: "Ko‘k choy.",
        ru: "Зелёный чай.",
        en: "Green tea."
      },

      rec: {
        uz: "Milliy taomlar bilan tanavvul qilish uchun.",
        ru: "Отлично подходит к национальным блюдам.",
        en: "Perfect with traditional dishes."
      }
    },


    {
      id: "black-tea",
      emoji: "🍵",
      group: "teas",

      name: {
        uz: "Qora choy",
        ru: "Чёрный чай",
        en: "Black Tea"
      },

      price: "5 000 so‘m",

      ingredients: {
        uz: "Qora choy.",
        ru: "Чёрный чай.",
        en: "Black tea."
      },

      rec: {
        uz: "Istalgan vaqtda tanavvul qilish uchun.",
        ru: "Подходит для любого времени.",
        en: "Suitable for any time."
      }
    },


    {
      id: "fruit-tea",
      emoji: "🍵",
      group: "teas",

      name: {
        uz: "Mevali choy",
        ru: "Фруктовый чай",
        en: "Fruit Tea"
      },

      price: "35 000 so‘m",

      ingredients: {
        uz: "Mevalar va choy.",
        ru: "Фрукты и чай.",
        en: "Fruits and tea."
      },

      rec: {
        uz: "Yengil va xushbo‘y ichimlik istaganlar uchun.",
        ru: "Для тех, кто предпочитает лёгкий и ароматный напиток.",
        en: "For those who prefer a light and aromatic drink."
      }
    },


    {
      id: "cola",
      emoji: "🥤",
      group: "soft",

      name: {
        uz: "Kola 1,5 L",
        ru: "Кола 1,5 л",
        en: "Cola 1.5 L"
      },

      price: "18 000 so‘m",

      ingredients: {
        uz: "Gazlangan salqin ichimlik.",
        ru: "Газированный прохладительный напиток.",
        en: "Carbonated soft drink."
      },

      rec: {
        uz: "Taomlar bilan sovutilgan holda tanavvul qilish uchun.",
        ru: "Лучше всего подавать охлаждённой к блюдам.",
        en: "Best served chilled with meals."
      }
    },


    {
      id: "mohito",
      emoji: "🍹",
      group: "lemonades",

      name: {
        uz: "Moxito klassik",
        ru: "Мохито классический",
        en: "Classic Mojito"
      },

      price: "45 000 so‘m",

      ingredients: {
        uz: "Yalpiz, limon, laym, shakar va gazlangan suv.",
        ru: "Мята, лимон, лайм, сахар и газированная вода.",
        en: "Mint, lemon, lime, sugar and sparkling water."
      },

      rec: {
        uz: "Issiq kunlarda salqinlanish uchun ajoyib tanlov.",
        ru: "Отличный выбор для освежения в жаркий день.",
        en: "A refreshing choice for a hot day."
      }
    },


    {
      id: "mango-marakuya",
      emoji: "🍹",
      group: "lemonades",

      name: {
        uz: "Mango-marakuya",
        ru: "Манго-маракуйя",
        en: "Mango Passion Fruit"
      },

      price: "50 000 so‘m",

      ingredients: {
        uz: "Mango, marakuya va limonad.",
        ru: "Манго, маракуйя и лимонад.",
        en: "Mango, passion fruit and lemonade."
      },

      rec: {
        uz: "Shirin va tropik ta’mni yoqtiruvchilar uchun.",
        ru: "Для любителей сладкого и тропического вкуса.",
        en: "For lovers of sweet and tropical flavors."
      }
    }

  ]

};
