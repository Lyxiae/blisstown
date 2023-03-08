class Guide {
  init() {
    const mobileButton = document.querySelector('.encyclopedie__menu-btn');

    const navButtons = document.querySelectorAll('.js-tab-opener');
    const anchorButtons = document.querySelectorAll('.anchor-button');

    if (mobileButton) {
      mobileButton.addEventListener('click', this.toggleSideMenu());
    }
    if(navButtons.length > 0) {
      Array.from(navButtons).forEach((button) => {
        button.addEventListener('click', this.toggleManager(button));
      })
    }
    if (anchorButtons.length > 0) {
      Array.from(anchorButtons).forEach((anchor) => {
        anchor.addEventListener('click', this.scrollToAnchor(anchor));
      })
    }
    
    let hash = window.location.hash;
    if (hash && navButtons.length > 0) {
      let curatedHash = hash.substring(1)
      let anchor = document.querySelector(`a[data-anchor=${curatedHash}]`);
      let hashTab = document.querySelector(`a[data-tab=${curatedHash}]`);
      if(hash && anchor) {
        
        let submenu = anchor.parentNode;
          let tabButton = submenu.previousElementSibling;
    
          let associatedTabId = tabButton.getAttribute('data-tab');
          let associatedTab = document.getElementById(`${associatedTabId}`)
    
          submenu.classList.toggle('active');
          tabButton.classList.toggle('active');
          tabButton.parentNode.classList.toggle('active');
          associatedTab.classList.toggle('active');
    
          let linkedElt = document.getElementById(curatedHash);
          linkedElt.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start"});
        
      } else if(hash && hashTab) {
        this.toggleManagerDirect(hashTab);
      } 
    } else {
      if (navButtons[0]) {
        navButtons[0].click();
      }
      
    }
    
  }
  
  toggleManager(button) {
    return () => {
      const sideMenu = document.querySelector('.encyclopedie__right-menu');
    let buttonId = button.getAttribute('data-tab');
    const allTabs = document.getElementsByClassName('js-tab');
    const allButtons = document.getElementsByClassName('js-tab-opener');
    let associatedTab = document.getElementById(`${buttonId}`);
    let submenu = document.querySelector(`.js-tab-submenu[data-section=${buttonId}`);

    for (let tab of allTabs) {
      if (tab.getAttribute('id') !== buttonId) {
        tab.classList.remove('active');
      }
    }
    for (let button of allButtons) {

      if (button.getAttribute('data-tab') !== buttonId) {
        button.classList.remove('active');
        button.parentNode.classList.remove('active');
      }
    }
    associatedTab.classList.add('active');
    button.classList.toggle("active");
    button.parentNode.classList.add('active');
    sideMenu.classList.toggle('active');
      if (submenu) {
        submenu.classList.toggle('active');
      }
    }
  }

  scrollToAnchor(button) {
    return () => {
      const sideMenu = document.querySelector('.encyclopedie__right-menu');
      let buttonAnchor = button.getAttribute('data-anchor');
      let linkedElt = document.getElementById(buttonAnchor);
      if (linkedElt) {
        linkedElt.scrollIntoView({ behavior: "smooth", block: "start", inline: "start"});
        sideMenu.classList.toggle('active');
      }
    }
  }

  toggleManagerDirect(button) {
    let buttonId = button.getAttribute('data-tab');
    const allTabs = document.getElementsByClassName('js-tab');
    const allButtons = document.getElementsByClassName('js-tab-opener');
    let associatedTab = document.getElementById(`${buttonId}`);
    let submenu = document.querySelector(`.js-tab-submenu[data-section=${buttonId}`);

    for (let tab of allTabs) {
      if (tab.getAttribute('id') !== buttonId) {
        tab.classList.remove('active');
      }
    }
    for (let button of allButtons) {

      if (button.getAttribute('data-tab') !== buttonId) {
        button.classList.remove('active');
        button.parentNode.classList.remove('active');
      }
    }
    associatedTab.classList.add('active');
    button.classList.toggle("active");
    button.parentNode.classList.add('active');
      if (submenu) {
        submenu.classList.toggle('active');
      }
  }

  toggleSideMenu() {
    return () => {
      const sideMenu = document.querySelector('.encyclopedie__right-menu');
      sideMenu.classList.toggle('active');
    }
  }

}


export default new Guide();
