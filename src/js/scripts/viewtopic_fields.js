class ViewtopicFields {
  init() {
    if (document.getElementById('viewtopic_body')) {
      this.moveFields();
    }
  }

  moveFields() {
    function main() {
      const postList = document.querySelectorAll('.viewtopic__post');
     
      postList.forEach(p => {
        const bioField = p.querySelector('.topic-profile-field-biographie');
        const messagesField = p.querySelector('.topic-profile-field-messages');
        const availField = p.querySelector('.topic-profile-field-disponibilite');
        const iconField = p.querySelector('.topic-profile-field-icon');
        const quoteField = p.querySelector('.topic-profile-field-citation');
        const bioTarget = p.querySelector('.viewtopic__bio-container');
        const messagesTarget = p.querySelector('.viewtopic__messages-container');
        const availTarget = p.querySelector('.viewtopic__dispo-container');
        const iconTarget = p.querySelector('.viewtopic__head-icon-container');
        const quoteTarget = p.querySelector('.viewtopic__quote-container');
  
        bioTarget.appendChild(bioField);
        messagesTarget.appendChild(messagesField);
        availTarget.appendChild(availField);
        iconTarget.appendChild(iconField);
        quoteTarget.appendChild(quoteField);
      })
    }

    document.addEventListener('DOMContentLoaded', main);
  }
}

export default new ViewtopicFields();
