class Dices {
  init() {
    const dices = [
      {
        'stoneBelt': 'Dé Stone Belt'
      },
      {
        'nevadaHell': 'Dé Nevada Hell'
      },
      {
        'blissHeights': 'Dé Bliss Heights'
      },
      {
        'peripherie': 'Dé Périphérie'
      },
      {
        'hyperloop': 'Dé Hyperloop'
      },
      {
        'souterrains': 'Dé Souterrains'
      },
      {
        'providencePark': 'Dé Providence'
      },
    ];
    
    const stoneBelt = [
      {
        'title': 'Titre 1',
        'text': 'Vla la situation stoneBelt 1',
      },
      {
        'title': 'Titre 2',
        'text': 'Vla la situation stoneBelt 2',
      },
      {
        'title': 'Titre 3',
        'text': 'Vla la situation stoneBelt 3',
      },
      {
        'title': 'Titre 4',
        'text': 'Vla la situation stoneBelt 4',
      },
      {
        'title': 'Titre 5',
        'text': 'Vla la situation stoneBelt 5',
      }
    ]

    const nevadaHell = [
      {
        'title': 'Vla la situation nevada 1',
        'text': 'Vla la situation nevada 1',
      },
      {
        'title': 'Vla la situation nevada 2',
        'text': 'Vla la situation nevada 2',
      },
      {
        'title': 'Vla la situation nevada 3',
        'text': 'Vla la situation nevada 3',
      },
      {
        'title': 'Vla la situation nevada 4',
        'text': 'Vla la situation nevada 4',
      },
      {
        'title': 'Vla la situation nevada 5',
        'text': 'Vla la situation nevada 5',
      }
    ]
    const blissHeights = [
      {
        'title': 'Vla la situation nevada 1',
        'text': 'Vla la situation nevada 1',
      },
      {
        'title': 'Vla la situation nevada 2',
        'text': 'Vla la situation nevada 2',
      },
      {
        'title': 'Vla la situation nevada 3',
        'text': 'Vla la situation nevada 3',
      },
      {
        'title': 'Vla la situation nevada 4',
        'text': 'Vla la situation nevada 4',
      },
      {
        'title': 'Vla la situation nevada 5',
        'text': 'Vla la situation nevada 5',
      }
    ]
    const peripherie = [
      {
        'title': 'Vla la situation nevada 1',
        'text': 'Vla la situation nevada 1',
      },
      {
        'title': 'Vla la situation nevada 2',
        'text': 'Vla la situation nevada 2',
      },
      {
        'title': 'Vla la situation nevada 3',
        'text': 'Vla la situation nevada 3',
      },
      {
        'title': 'Vla la situation nevada 4',
        'text': 'Vla la situation nevada 4',
      },
      {
        'title': 'Vla la situation nevada 5',
        'text': 'Vla la situation nevada 5',
      }
    ]
    const hyperloop = [
      {
        'title': 'Vla la situation nevada 1',
        'text': 'Vla la situation nevada 1',
      },
      {
        'title': 'Vla la situation nevada 2',
        'text': 'Vla la situation nevada 2',
      },
      {
        'title': 'Vla la situation nevada 3',
        'text': 'Vla la situation nevada 3',
      },
      {
        'title': 'Vla la situation nevada 4',
        'text': 'Vla la situation nevada 4',
      },
      {
        'title': 'Vla la situation nevada 5',
        'text': 'Vla la situation nevada 5',
      }
    ]
    const souterrains = [
      {
        'title': 'Vla la situation nevada 1',
        'text': 'Vla la situation nevada 1',
      },
      {
        'title': 'Vla la situation nevada 2',
        'text': 'Vla la situation nevada 2',
      },
      {
        'title': 'Vla la situation nevada 3',
        'text': 'Vla la situation nevada 3',
      },
      {
        'title': 'Vla la situation nevada 4',
        'text': 'Vla la situation nevada 4',
      },
      {
        'title': 'Vla la situation nevada 5',
        'text': 'Vla la situation nevada 5',
      }
    ]
    const providencePark = [
      {
        'title': 'Vla la situation nevada 1',
        'text': 'Vla la situation nevada 1',
      },
      {
        'title': 'Vla la situation nevada 2',
        'text': 'Vla la situation nevada 2',
      },
      {
        'title': 'Vla la situation nevada 3',
        'text': 'Vla la situation nevada 3',
      },
      {
        'title': 'Vla la situation nevada 4',
        'text': 'Vla la situation nevada 4',
      },
      {
        'title': 'Vla la situation nevada 5',
        'text': 'Vla la situation nevada 5',
      }
    ]

    const situations = {
      'stoneBelt': stoneBelt,
      'nevadaHell': nevadaHell,
    }

    let posts = document.querySelectorAll('.viewtopic__post-body');

    if (document.getElementById('viewtopic_body')) {
      this.parsePosts(posts, dices, situations);
    }
    
  }
  parsePosts(posts, dices, situations) {
    posts.forEach((post) => {
      dices.forEach((dice) => {
        if (post.innerText.includes(Object.values(dice)[0])) {
          let diceKey = Object.keys(dice)[0];
          let diceNumber = parseInt(post.innerText.match(/\d/g)[0]);
          post.innerHTML = `<div class="dice-block">
          <div class="dice-block__title">${situations[diceKey][diceNumber].title}</div>
          <div class="dice-block__text">${situations[diceKey][diceNumber].text}</div>
          </div>`; 
        }
      })
    })
  }
}

export default new Dices();
