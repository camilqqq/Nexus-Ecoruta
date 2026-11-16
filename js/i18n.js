document.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("language-selector");
    if (!selector) return;
    
    // Obtener idioma guardado o usar español por defecto
    const savedLang = localStorage.getItem("selectedLang") || "es";
    selector.value = savedLang;
    changeLanguage(savedLang);

    selector.addEventListener("change", (event) => {
        const lang = event.target.value;
        localStorage.setItem("selectedLang", lang);
        changeLanguage(lang);
    });
});

function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === "INPUT" && element.hasAttribute("placeholder")) {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}