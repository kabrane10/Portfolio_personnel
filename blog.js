// 1. Je récupère tous les boutons "Voir détails"
const boutons = document.querySelectorAll(".voir");

boutons.forEach((btn) => {
    btn.addEventListener("click", function () {

        //2 Je récupère le texte_long correspondant au bouton
        const parentDiv = btn.closest(".div");
        const texteLong = parentDiv.querySelector(".texte_long");

        // On bascule l'affichage
        if (texteLong.style.display === "block") {
            texteLong.style.display = "inline";
            btn.textContent = "Masquer";
        } else {
            texteLong.style.display = "block";
            btn.textContent = "Voir détails";
        }
    });
});
