/* Guide « profils Facebook supplémentaires » — JustiLoi SAS, licence MIT.
   Tout se passe dans le navigateur : aucune réponse n'est enregistrée ni envoyée. */
(function () {
  "use strict";
  var bouton = document.getElementById("voir"), sortie = document.getElementById("resultat");
  if (!bouton || !sortie) return;
  function val(nom) { var x = document.querySelector('input[name="' + nom + '"]:checked'); return x ? x.value : ""; }
  function ligne(texte, ancre) {
    var li = document.createElement("li"), a = document.createElement("a");
    a.href = "#" + ancre; a.textContent = texte; li.appendChild(a); return li;
  }
  bouton.addEventListener("click", function () {
    var q1 = val("q1"), q2 = val("q2"), q3 = val("q3");
    sortie.textContent = "";
    var titre = document.createElement("h3"), p = document.createElement("p"), ol = document.createElement("ol");
    if (!q1 || !q2 || !q3) {
      titre.textContent = "Répondez aux 3 questions pour voir votre résultat.";
      sortie.appendChild(titre); sortie.hidden = false; return;
    }
    if (q1 === "non") {
      titre.textContent = "Vous n'êtes probablement pas concerné(e).";
      p.textContent = "Seuls les comptes qui ont un profil supplémentaire reçoivent cet e-mail. Votre profil principal n'est pas touché. Par précaution, vous pouvez quand même vérifier l'accès de votre profil principal à vos Pages.";
      ol.appendChild(ligne("Vérifier vos Pages et vos outils", "e-pages"));
    } else {
      titre.textContent = "Votre profil principal ne risque rien. Voici vos gestes, avant le 14 décembre 2026 :";
      if (q2 !== "non") ol.appendChild(ligne(q2 === "oui" ? "Urgent : donner vos groupes à votre profil principal"
                                                          : "Vérifier si ce profil administre un groupe, et le donner à votre profil principal", "e-groupes"));
      if (q3 === "oui") ol.appendChild(ligne("Exporter vos informations (photos, messages…)", "e-export"));
      ol.appendChild(ligne("Retrouver vos contacts depuis votre profil principal", "e-contacts"));
      ol.appendChild(ligne("Par précaution : vérifier vos Pages et vos outils", "e-pages"));
      p.textContent = "Cliquez sur chaque geste pour voir comment faire.";
    }
    sortie.appendChild(titre); sortie.appendChild(p); sortie.appendChild(ol);
    sortie.hidden = false;
    sortie.scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
