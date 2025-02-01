// Exécuter le code une fois le DOM entièrement chargé
$(document).ready(function () {
  // Gérer les clics sur les titres de l'accordéon
  $(".accordion-header").click(function () {
    // Ouvre ou ferme le contenu correspondant au titre cliqué
    $(this).next(".accordion-content").slideToggle();

    // Ajoute ou enlève la classe "active" pour faire tourner l'icône
    $(this).toggleClass("active");

    // Ferme les autres sections ouvertes et réinitialise leur icône
    $(this).parent().siblings().find(".accordion-content").slideUp();
    $(this).parent().siblings().find(".accordion-header").removeClass("active");
  });
});
