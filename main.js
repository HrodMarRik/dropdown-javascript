const dropdowns = Array.from(document.querySelectorAll(".dropdown-btn"));

dropdowns.forEach((dropdown) => {
    const content = dropdown.nextElementSibling; // Sélectionnez le contenu associé à ce bouton

    dropdown.addEventListener("click", function() {
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
});
