const modal = document.getElementById('myModal');
const galleryEdit = document.getElementById('galleryEdit');
const btns = document.getElementsByClassName('edit');
const span = document.querySelector('.close');
const gallery = document.querySelector('.gallery');
buttonsGetEvent = false;

function generateEventOnDeleteButtons(){
  const deleteButtons = document.querySelectorAll('.delete-icon');
  console.log(deleteButtons[0]);

  for(i = 0; i < deleteButtons.length; i++)
  {
    deleteButtons[0].addEventListener('click', event => {
      // Récupérer l'identifiant de l'image à supprimer
      const id = event.target.dataset.id;
      const elements = document.querySelectorAll('[data-id="1"]');
  
      // Supprimer l'élément de la grille de la page
      galleryEdit.removeChild(elements[0]);
      gallery.removeChild(elements[1]);
      console.log("Its working");
      // Envoyer une requête DELETE pour supprimer l'image
      // fetch(`http://localhost:5678/api/works/${id}`, {
      //   method: 'DELETE',
      //   headers: new Headers({
      //     'Authorization': `Bearer ${localStorage.getItem('token')}`
      //   })
      // })
      // .then(response => response.json())
      // .then(data => {
      //   // Récupérer l'élément de grille contenant l'image
      //   let galleryEdit = event.target.closest('.galleryEdit');
      //   let gallery = event.target.closest('.gallery');
  
      //   // Supprimer l'élément de la grille de la page
      //   galleryEdit.removeChild(galleryEdit);
      //   galleryEdit.removeChild(gallery);
      //   console.log("Its working");
      // })
      // .catch(error => {
      //   console.error(error);
      // });
    });
  }
}
generateGallery(true);
setTimeout(function() {
  const deleteButtons = document.querySelectorAll('.delete-icon');
}, 1000); // attendre 1 seconde avant d'exécuter le code

// Afficher la fenêtre modale lorsque le bouton est cliqué
btns[2].addEventListener('click', function() {
  modal.style.display = 'block';
  if(buttonsGetEvent)
  {;
      return;
  }
  buttonsGetEvent = true;
  generateEventOnDeleteButtons();
});

// Fermer la fenêtre modale lorsque la croix est cliquée
span.onclick = function() {
    modal.style.display = 'none';
}
  
// Fermer la fenêtre modale lorsque l'utilisateur clique en dehors de la fenêtre modale
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
}