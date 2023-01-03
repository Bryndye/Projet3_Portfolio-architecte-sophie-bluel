const modal = document.getElementById('myModal');
const btns = document.getElementsByClassName('edit');
const span = document.querySelector('.close');
buttonsGetEvent = false;

function generateEventOnDeleteButtons(){
  const deleteButtons = document.querySelectorAll('.delete-icon');
  // console.log(document.getElementById("myModal"));
  console.log(deleteButtons);
  let testArray = [0,1,2,3];
  let iconTest = document.getElementById('deleteIcon');
  // console.log(1);

  // for(let button in testArray)
  // {
  //     console.log(button);

  //     iconTest.addEventListener('click', event => {
  //         // Récupérer l'identifiant de l'image à supprimer
  //         const id = event.target.dataset.id;
  
  //         // Envoyer une requête DELETE pour supprimer l'image
  //         fetch(`http://localhost:5678/api/works/${id}`, {
  //             method: 'DELETE'
  //         })
  //         .then(response => response.json())
  //         .then(data => {
  //             // Récupérer l'élément de grille contenant l'image
  //             let galleryEdit = event.target.closest('.galleryEdit');
  //             let gallery = event.target.closest('.gallery');
  
  //             // Supprimer l'élément de la grille de la page
  //             galleryEdit.parentNode.removeChild(galleryEdit);
  //             gallery.parentNode.removeChild(gallery);
  //         })
  //         .catch(error => {
  //             console.error(error);
  //         });
  //     });
  // }
}
// generateGallery(true);
// generateEventOnDeleteButtons();

// Afficher la fenêtre modale lorsque le bouton est cliqué
btns[2].addEventListener('click', function() {
  modal.style.display = 'block';
  if(buttonsGetEvent)
  {
    generateGallery(true);
    generateEventOnDeleteButtons();
    // console.log(document.querySelectorAll('.delete-icon'));
      return;
  }
  buttonsGetEvent = true;

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