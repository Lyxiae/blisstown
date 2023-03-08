/*Fonction pour créer le message*/
function creationMessage(fichePres) {
  let champCaractere;
  generateTraits();

  function generateTraits() {
    let data = [
      fichePres.presTrait1,
      fichePres.presTrait6,
      fichePres.presTrait2,
      fichePres.presTrait7,
      fichePres.presTrait3,
      fichePres.presTrait8,
      fichePres.presTrait4,
      fichePres.presTrait9,
      fichePres.presTrait5,
      fichePres.presTrait10,
    ];
    let html = ``;
    for (el of data) {
      if (el.value != '' && el.value != ' ') {
        if (el.classList.contains('defaut')) {
          html += `<div class="f-pres__adj f-pres__adj--negative">${el.value}</div>`;
        }
        if (el.classList.contains('quali')) {
          html += `<div class="f-pres__adj f-pres__adj--positive">${el.value}</div>`;
        }
      }
    }
    champCaractere = html;
  }
  let crimeButton = document.querySelector('a[data-section="crime"]');
  let alterationButton = document.querySelector('a[data-section="alteration"]');
  fichePres.titre.value = fichePres.subject.value;

  fichePres.message.value = `<div class="fiche f-pres ${fichePres.groupe.value}"> <div class="fiche__identity-section"> <div class="fiche__head"> <div class="fiche__name">${fichePres.presNom.value}</div><div class="fiche__icon-container"> <img class="fiche__icon f-pres__icon" src="${fichePres.presAvatarImg.value}"/> </div></div><div class="fiche__idblock"><div class="fiche__nickname">${fichePres.presNick.value}</div><div class="fiche__identity"> <div class="fiche__field"> <p class="fiche__field-label">Age</p><p class="fiche__field-content">${fichePres.presAge.value}</p></div><div class="fiche__field"> <p class="fiche__field-label">Genre</p><p class="fiche__field-content">${fichePres.presGenre.value}</p></div><div class="fiche__field"> <p class="fiche__field-label">Origine</p><p class="fiche__field-content">${fichePres.presOrigine.value}</p></div><div class="fiche__field"> <p class="fiche__field-label">Métier</p><p class="fiche__field-content">${fichePres.presMetier.value}</p></div><div class="fiche__field"> <p class="fiche__field-label">Allégeance</p><p class="fiche__field-content">${fichePres.presAllegeance.value}</p></div><div class="fiche__field"> <p class="fiche__field-label">Relation au Bliss</p><p class="fiche__field-content">${fichePres.presRelBliss.value}</p></div><div class="fiche__field--resume f-pres__field--resume"> <p class="fiche__field-label">Résumé</p><p class="fiche__field-content"> ${fichePres.presResume.value}</p></div></div><div class="f-pres__physical"><div class="fiche__field"> <p class="fiche__field-label">Silhouette</p><p class="fiche__field-content">${fichePres.presSilhouette.value}</p></div><div class="fiche__field"> <p class="fiche__field-label">Peau</p><p class="fiche__field-content">${fichePres.presPeau.value}</p></div><div class="fiche__field"> <p class="fiche__field-label">Cheveux</p><p class="fiche__field-content">${fichePres.presCheveux.value}</p></div><div class="fiche__field"> <p class="fiche__field-label">Yeux</p><p class="fiche__field-content"> ${fichePres.presYeux.value}</p></div><div class="fiche__field"> <p class="fiche__field-label">Signes distinctifs</p><p class="fiche__field-content"> ${fichePres.presSigne.value}</p></div></div></div></div><div class="fiche__section f-pres__char-section"> <div class="f-pres__qualificatives"> ${champCaractere}</div><div class="f-pres__fields-container"> <div class="fiche__field fiche__field--trivia"> <p class="fiche__field-label">Trivia</p><p class="fiche__field-content fiche__field-content--bordered"> ${fichePres.presTrivia.value}</p></div><div class="fiche__field fiche__field--peurs"> <p class="fiche__field-label">Peurs</p><p class="fiche__field-content fiche__field-content--bordered"> ${fichePres.presPeur.value}</p></div><div class="fiche__field fiche__field--fiertes"> <p class="fiche__field-label">Fiertés</p><p class="fiche__field-content fiche__field-content--bordered"> ${fichePres.presFierte.value}</p></div><div class="fiche__field fiche__field--objectif"> <p class="fiche__field-label">Objectif(s)</p><p class="fiche__field-content fiche__field-content--bordered"> ${fichePres.presObjectif.value}</p></div></div><div class="f-pres__fields-container"> <div class="f-pres__jauges"> <div class="f-pres__jauge-block"> <div class="f-pres__jauge-labels"> <span class="f-pres__jauge-label">Chaos</span> <span class="f-pres__jauge-label">Ordre</span> </div><div class="f-pres__jauge-container"> <div class="f-pres__jauge" style="width: ${fichePres.presOrdre.value}%"></div></div></div><div class="f-pres__jauge-block"> <div class="f-pres__jauge-labels"> <span class="f-pres__jauge-label">Introversion</span> <span class="f-pres__jauge-label">Extraversion</span> </div><div class="f-pres__jauge-container"> <div class="f-pres__jauge" style="width: ${fichePres.presIntroversion.value}%"></div></div></div><div class="f-pres__jauge-block"> <div class="f-pres__jauge-labels"> <span class="f-pres__jauge-label">Réflexion</span> <span class="f-pres__jauge-label">Emotion</span> </div><div class="f-pres__jauge-container"> <div class="f-pres__jauge" style="width: ${fichePres.presEmotion.value}%"></div></div></div><div class="f-pres__jauge-block"> <div class="f-pres__jauge-labels"> <span class="f-pres__jauge-label">Sérieux</span> <span class="f-pres__jauge-label">Frivolité</span> </div><div class="f-pres__jauge-container"> <div class="f-pres__jauge" style="width: ${fichePres.presSerieux.value}%"></div></div></div><div class="f-pres__jauge-block"> <div class="f-pres__jauge-labels"> <span class="f-pres__jauge-label">Egocentrisme</span> <span class="f-pres__jauge-label">Altruisme</span> </div><div class="f-pres__jauge-container"> <div class="f-pres__jauge" style="width: ${fichePres.presAltruisme.value}%"></div></div></div><div class="f-pres__jauge-block"> <div class="f-pres__jauge-labels"> <span class="f-pres__jauge-label">Clairvoyance</span> <span class="f-pres__jauge-label">Bliss</span> </div><div class="f-pres__jauge-container"> <div class="f-pres__jauge" style="width: ${fichePres.presBliss.value}%"></div></div></div></div><div class="fiche__field fiche__field--reputation"> <p class="fiche__field-label">Réputation & rumeurs</p><p class="fiche__field-content"> <span class="icon icon--chatbox"></span> <span class="f-pres__text" >${fichePres.presRumeurs.value}</span > </p></div></div><div class="f-pres__fields-wrapper"> <div class="fiche__field fiche__field--anecdote"> <p class="fiche__field-label">En une anecdote</p><p class="fiche__field-content fiche__field-content--bordered"> ${fichePres.presAnecdote.value}</p></div><div class="fiche__field fiche__field--situation"> <p class="fiche__field-label">Situation actuelle</p><p class="fiche__field-content fiche__field-content--bordered"> ${fichePres.presSituation.value}</p></div></div></div>${crimeButton.dataset.active==="true" ? `<div class="fiche__section f-pres__add-section"> <div class="f-pres__add-title-block"> <div class="f-pres__add-title">Crime</div><div class="f-pres__add-title-info">${fichePres.presCrime.value}</div></div><div class="f-pres__add-text"> ${fichePres.presCrimeDesc.value}</div></div>` : ''}${alterationButton.dataset.active==="true" ? `<div class="fiche__section f-pres__add-section"> <div class="f-pres__add-title-block"> <div class="f-pres__add-title">Alteration</div><div class="f-pres__add-title-info">${fichePres.presAlterationTitle.value}</div></div><div class="f-pres__add-text"> ${fichePres.presAlterDesc.value}</div></div>` : ''}<div class="fiche__icon-section townie"> <div class="fiche__icon-section-title">${fichePres.presPseudo.value}</div><div class="fiche__icon-section-icon-block"> <img src="${fichePres.presHrpAvatarImg.value}" class="fiche__icon-section-icon"/> </div><div class="fiche__icon-section-text f-pres__icon-section-text"> <span class="fiche__question" >Comment avez vous trouvé le forum ?</span > <br/> ${fichePres.presHrpQuestion.value}</div></div></div>`;
}

const sectionButtons = document.querySelectorAll('.form-button--add-section');
const closeSectionButtons = document.querySelectorAll('.form-button--remove-section');

sectionButtons.forEach((button) => {
  button.addEventListener('click', function () {
    const sectionToShow = document.querySelector(
      `.form-section--${button.dataset.section}`
    );
    sectionToShow.classList.remove('form-section--hidden');
    button.classList.add('button--disabled');
    button.dataset.active = 'true';
  });
});

closeSectionButtons.forEach((button) => {
  button.addEventListener('click', function () {
    let sectionButton = document.querySelector(`.form-button--add-section[data-section=${button.dataset.section}]`);
    const sectionToHide = document.querySelector(
      `.form-section--${button.dataset.section}`
    );
    sectionToHide.classList.add('form-section--hidden');
    sectionButton.classList.remove('button--disabled');
    sectionButton.dataset.active = 'false';
  });
});
