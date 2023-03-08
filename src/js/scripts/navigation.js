class Navigation {
  init() {
    this.dropdownToggler();
    this.newMsg();
    this.mobileMenuToggler();
  }
  dropdownToggler() {
    const dropdownOpeners = document.getElementsByClassName(
      'main-navbar__dropdown-opener'
    );

    Array.from(dropdownOpeners).forEach((item) => {
      item.addEventListener('click', function () {
        item.nextElementSibling.classList.toggle('dropdown-active');
        item.classList.toggle('dropdown-active');
      });

      window.addEventListener('click', function (e) {
        if (
          e.target != item &&
          !e.target.classList.contains('dropdown-active')
        ) {
          item.nextElementSibling.classList.remove('dropdown-active');
          item.classList.remove('dropdown-active');
        }
      });
    });
  }
  newMsg() {
    const newMsgBubble = document.querySelector('.mainmenu .toread-message');
    if (newMsgBubble) {
      const [word, digits] = newMsgBubble.innerText.match(/\D+|\d+/g);
      let bubbleNbr = word;
      newMsgBubble.innerText = bubbleNbr;
    }
  }
  mobileMenuToggler() {
    const mobileMenuButton = document.querySelector('.main-navbar__mobile-burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
      })
    }
  }
}

export default new Navigation();
