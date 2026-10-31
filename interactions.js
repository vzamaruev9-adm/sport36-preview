
// =====================================
// СПОРТ 36 — ИНТЕРАКТИВНОСТЬ
// =====================================

// Все 11 разделов министерства

const sections = [
    {
        id: "appointment",
        icon: "📋",
        title: "Записаться на прием к министру спорта",
        description: "Запись на прием к министру физической культуры и спорта Воронежской области."
    },
    {
        id: "projects",
        icon: "📂",
        title: "Проекты",
        description: "Информация о проектах Министерства спорта Воронежской области."
    },
    {
        id: "ranks",
        icon: "🥇",
        title: "Разряды и категории",
        description: "Информация о спортивных разрядах и квалификационных категориях."
    },
    {
        id: "gto",
        icon: "📝",
        title: "Готов к труду и обороне",
        description: "Информация о комплексе ГТО и выполнении нормативов."
    },
    {
        id: "federations",
        icon: "🤝",
        title: "Спортивным федерациям",
        description: "Информация для спортивных федераций Воронежской области."
    },
    {
        id: "services",
        icon: "📄",
        title: "Услуги Министерства спорта",
        description: "Информация о государственных услугах Министерства спорта."
    },
    {
        id: "survey",
        icon: "📊",
        title: "Опрос удовлетворенности",
        description: "Оценка качества работы Министерства спорта."
    },
    {
        id: "my_sport",
        icon: "📱",
        title: "«Мой спорт»",
        description: "Информация о цифровом сервисе «Мой спорт»."
    },
    {
        id: "infrastructure",
        icon: "🏟️",
        title: "Спортивная инфраструктура области",
        description: "Информация о спортивных объектах Воронежской области."
    },
    {
        id: "school_clubs",
        icon: "🏫",
        title: "Школьные спортивные клубы",
        description: "Информация о школьных спортивных клубах."
    },
    {
        id: "svo",
        icon: "🎖️",
        title: "Участникам СВО и их семьям",
        description: "Информация о спортивных программах для участников СВО и их семей."
    }
];


// Получаем элементы страницы

const homePage = document.getElementById("home-page");
const detailPage = document.getElementById("detail-page");

const sectionGrid = document.getElementById("section-grid");
const searchInput = document.getElementById("search-input");
const emptyMessage = document.getElementById("empty-message");

const detailIcon = document.getElementById("detail-icon");
const detailTitle = document.getElementById("detail-title");
const detailDescription = document.getElementById("detail-description");

const backButton = document.getElementById("back-button");
const appointmentButton = document.getElementById("appointment-button");


// Проверяем, что необходимые элементы существуют

if (
    !homePage ||
    !detailPage ||
    !sectionGrid ||
    !searchInput ||
    !emptyMessage
) {
    console.error("СПОРТ 36: не найдены необходимые элементы HTML.");
}


// Создаём карточки разделов

function renderSections(list) {
    sectionGrid.replaceChildren();

    list.forEach(section => {
        const card = document.createElement("button");
        card.className = "section-card";
        card.type = "button";

        const icon = document.createElement("span");
        icon.className = "card-icon";
        icon.textContent = section.icon;

        const title = document.createElement("span");
        title.className = "card-title";
        title.textContent = section.title;

        const description = document.createElement("span");
        description.className = "card-description";
        description.textContent = section.description;

        const arrow = document.createElement("span");
        arrow.className = "card-arrow";
        arrow.textContent = "→";

        card.append(icon, title, description, arrow);

        card.addEventListener("click", () => {
            openSection(section.id);
        });

        sectionGrid.appendChild(card);
    });

    emptyMessage.hidden = list.length !== 0;
}


// Открываем выбранный раздел

function openSection(sectionId) {
    const section = sections.find(item => item.id === sectionId);

    if (!section) {
        return;
    }

    detailIcon.textContent = section.icon;
    detailTitle.textContent = section.title;
    detailDescription.textContent = section.description;

    homePage.hidden = true;
    detailPage.hidden = false;

    window.scrollTo(0, 0);
}


// Возвращаемся на главную

function showHome() {
    detailPage.hidden = true;
    homePage.hidden = false;

    window.scrollTo(0, 0);
}


// Поиск по разделам

searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    const filteredSections = sections.filter(section =>
        section.title.toLowerCase().includes(query)
    );

    renderSections(filteredSections);
});


// Кнопка «Назад»

backButton.addEventListener("click", showHome);


// Быстрая запись на приём

appointmentButton.addEventListener("click", () => {
    openSection("appointment");
});


// Первоначально отображаем все 11 карточек

renderSections(sections);

console.log("СПОРТ 36: загружено разделов:", sections.length);
