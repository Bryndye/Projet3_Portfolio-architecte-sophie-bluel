const modal = document.getElementById('myModal');
const galleryEdit = document.getElementById('galleryEdit');
const btns = document.getElementsByClassName('edit');
const span = document.querySelector('.close');
const gallery = document.querySelector('.gallery');
buttonsGetEvent = false;

function deleteProject(id){
  let parent = document.querySelectorAll('[data-id="'+id+'"]');
  console.log(parent);
  parent[0].parentNode.removeChild(parent[0]);
  parent[1].parentNode.removeChild(parent[1]);

  // Envoyer une requête DELETE pour supprimer l'image
  if(tokenIsValid())
  {
    fetch(`http://localhost:5678/api/works/${id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    })
    .catch(error => {
      console.error(error);
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
  {
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