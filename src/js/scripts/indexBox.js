class IndexBox {
  init() {
    this.insertWelcome();
  }
  insertWelcome() {
    const elToAdd = document.createElement('div');
    const target = document.getElementById('communication');
    elToAdd.innerHTML =
      `<div class="forum__welcome" id="welcome-block">
      <h2 class="forum__title forum__title--secondary">Welcome to blisstown</h2>
      <p class="forum__subdescription">
        BlissTown est un forum RPG centré sur un univers aux thématiques diverses et parfois difficiles, allant d’événements surnaturel potentiellement violents, horrifiques, aux intrigues de gangs. Il est interdit aux joueurs de moins de 18 ans.
      </p>
      <div class="forum__description-links">
        <a href="https://lyxiae.com/blisstown/guide.html" class="button button--primary-plain">Guide</a>
        <a href="https://blisstown.forumactif.com/h1-listings" class="button button--secondary-plain">Avatars & Masterlist</a>
        <a href="https://blisstown.forumactif.com/t43-progression#66" class="button button--secondary-plain">Progression de l'intrigue</a>
      </div>
    </div>`;
    if (target) {
      target.after(elToAdd);
    }
  }
}

export default new IndexBox();
