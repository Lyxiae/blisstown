class ProfileviewFields {
  init() {
    if (document.querySelector('.profileview')) {
      this.moveFields();
    }
  }

  moveFields() {
    function main() {
        const messagesTarget = document.querySelector('.profileview__messages-container');
        const availTarget = document.querySelector('.profileview__avail-container');
        const iconTarget = document.querySelector('.profileview__head-icon-container');
        const hrpTarget = document.querySelector('.profileview__hrp-fields');
        
        const messagesField = document.querySelector('.profileview__field--messages');
        const availField = document.querySelector('.profileview__field--disponibilite');
        const iconField = document.querySelector('.profileview__field--icon');
        const contactField = document.querySelector('.profileview__field--contact-via');
        const playerField = document.querySelector('.profileview__field--joue-par');
        const accountsField = document.querySelector('.profileview__field--autres-comptes');
        

        const hrpFields = [contactField, playerField, accountsField];
  
        messagesTarget.appendChild(messagesField);
        availTarget.appendChild(availField);
        iconTarget.appendChild(iconField);

        hrpFields.forEach((field) => {
          hrpTarget.appendChild(field);
        });

    }

    document.addEventListener('DOMContentLoaded', main);
  }
}

export default new ProfileviewFields();
