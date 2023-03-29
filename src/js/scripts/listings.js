class Listings {
  init() {
    // Get members data from sessionStorage

    const loader = document.querySelector('.listings__loader');
    const tabs = document.querySelectorAll('.listings__tab-wrapper');
    const filterButtons = document.querySelectorAll('.listings__filter-button');
    // Generate listings
    if (document.getElementById('listing-avatars')) {
      if (!sessionStorage.getItem('membersJSON')) {
        setTimeout(() => {
          let data = JSON.parse(sessionStorage.getItem('membersJSON'));

          this.generateAvatars(data);
          this.generateMasterlist(data);
          loader.classList.remove('active');
          tabs.forEach((tab) => {
            tab.classList.add('loaded');
          });

          const buttons = document.querySelectorAll('.listings__menu-item');
          buttons.forEach((button) => {
            button.addEventListener('click', this.toggleListings(button));
          });
        }, 1000);
      } else {
        let data = JSON.parse(sessionStorage.getItem('membersJSON'));
        loader.classList.remove('active');

        this.generateAvatars(data);
        this.generateMasterlist(data);
        tabs.forEach((tab) => {
          tab.classList.add('loaded');
        });

        const buttons = document.querySelectorAll('.listings__menu-item');
        buttons.forEach((button) => {
          button.addEventListener('click', this.toggleListings(button));
        });
        // filterButtons.forEach((button) => {
        //   button.addEventListener(
        //     'click',
        //     this.filterGroup(button, filterButtons)
        //   );
        // });
      }
    }
  }
  generateAvatars(data) {
    const container = document.getElementById('listing-avatars');
    let avatarsList = [];
    let hash = Object.create(null);
    let grouped = [];

    for (let [key, user] of Object.entries(data)) {
      if (user['Feat'] && user['group']) {
        avatarsList.push({
          avatar: user['Feat'],
          userId: key,
          username: user["Nom d'utilisateur"],
        });
      }
    }

    // Sort avatars list alphabetically and divide in letters sub-array
    avatarsList
      .sort(function (a, b) {
        return a.avatar.localeCompare(b.avatar, undefined, {
          numeric: true,
          sensitivity: 'base',
        });
      })
      .forEach(function (a) {
        var key = a.avatar[0].toLowerCase();
        if (!hash[key]) {
          hash[key] = [];
          grouped.push(hash[key]);
        }
        hash[key].push(a);
      });

    // Create avatar listing block that will contain generated list
    let avatarListing = document.createElement('div');
    avatarListing.classList.add('listings__list');

    grouped.forEach((list) => {
      // Create title block with current letter and append to listing block
      let titleElement = document.createElement('div');
      titleElement.classList.add('listings__section-title');
      titleElement.innerText = list[0].avatar.slice(0, 1);
      avatarListing.appendChild(titleElement);
      // Loop through sub-arrays to create list item with data anbd append do listing block.
      list.forEach((item) => {
        let listElement = document.createElement('div');
        listElement.classList.add('listings__list-element');
        listElement.innerHTML = `${item.avatar} • <a href="/u${item.userId}">${item.username}</a>`;
        avatarListing.appendChild(listElement);
      });
    });

    container.appendChild(avatarListing);
  }

  generateMasterlist(data) {
    const container = document.getElementById('listing-master');
    let charactersList = [];

    for (let [key, user] of Object.entries(data)) {
      if (user["Nom d'utilisateur"] && user['group']) {
        charactersList.push({
          group: user['group'],
          work: user['Métier'],
          userId: key,
          username: user["Nom d'utilisateur"],
          biographie: user['Biographie'],
          fiche: user['Fiche de présentation'],
          bliss: user['Bliss'],
          carnet: user['Carnet'],
          reseaux: user['Réseaux'],
          icon: user['Icon'],
        });
      }
    }

    // Create avatar listing block that will contain generated list
    let masterListing = document.createElement('div');
    masterListing.classList.add('listings__master-list-list');

    charactersList.forEach((character) => {
      let characterBlock = document.createRange().createContextualFragment(`
      <div class="listings__master-item ${character.group}">
        <div class="listings__master-head ${character.group}"><a href="/u${character.userId}">${character.username}</a></div>
        <div class="listings__user-icon"><img src="${character.icon}" alt=${character.username} /></div>
        <div class="listings__user-infos">
          <div class="listings__info-label">Métier</div>
          <div class="listings__info">${character.work}</div>
          <div class="listings__info-label">Bliss</div>
          <div class="listings__info">${character.bliss}</div>
          <div class="listings__info-label">Biographie</div>
          <div class="listings__info listings__info--bio">${character.biographie}</div>
          <div class="listings__user-links">
            <a href="${character.fiche}" class="listings__user-link">Fiche</a>
            <a href="${character.carnet}" class="listings__user-link">Carnet</a>
            <a href="${character.reseaux}" class="listings__user-link">Réseaux</a>
          </div>
        </div>
      </div>
      `);

      masterListing.appendChild(characterBlock);
    });

    container.appendChild(masterListing);
  }

  toggleListings(button) {
    return () => {
      let tabId = button.dataset.tab;
      let tab = document.getElementById(tabId).parentNode;
      let allTabs = document.querySelectorAll('.listings__tab-wrapper');
      let allButtons = document.querySelectorAll('.listings__menu-item');
      allTabs.forEach((item) => {
        if (
          item.querySelector('.listings__tab-content').id !== tabId &&
          item.classList.contains('active')
        ) {
          item.classList.remove('active');
        } else if (item.querySelector('.listings__tab-content').id === tabId) {
          item.classList.add('active');
        }
      });

      allButtons.forEach((btn) => {
        btn.classList.remove('active');
      });

      button.classList.add('active');
    };
  }

  filterGroup(button, allButtons) {
    return () => {
      const masterlistItems = document.querySelectorAll(
        '.listings__master-item'
      );
      allButtons.forEach((btn) => {
        if (btn.classList.contains('active') && btn !== button) {
          btn.classList.remove('active');
        }
      });
      if (button.classList.contains('active')) {
        button.classList.remove('active');
        masterlistItems.forEach((item) => item.classList.remove('hidden'));
      }
      if (button.classList.contains('listings__filter-button--all')) {
        button.classList.add('active');
        masterlistItems.forEach((item) => {
          item.classList.contains('hidden')
            ? item.classList.remove('hidden')
            : false;
        });
      } else {
        button.classList.add('active');
        masterlistItems.forEach((item) => {
          if (
            !item.firstElementChild.classList.contains(button.dataset.group)
          ) {
            item.classList.add('hidden');
          }
          if (
            item.firstElementChild.classList.contains(button.dataset.group) &&
            item.classList.contains('hidden')
          ) {
            item.classList.remove('hidden');
          }
        });
      }
    };
  }
}

export default new Listings();
