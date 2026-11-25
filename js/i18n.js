document.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("language-selector");
    if (!selector) return;

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
    if (typeof translations === "undefined" || !translations[lang]) return;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang][key]) {
            if (element.tagName === "INPUT" && element.hasAttribute("placeholder")) {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
        const key = element.getAttribute("data-i18n-html");
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    document.dispatchEvent(new CustomEvent("ecoruta:langChanged", { detail: { lang } }));
}