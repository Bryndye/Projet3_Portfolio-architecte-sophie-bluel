const modal = document.getElementById('myModal');
const modalGallery = document.getElementById('modal-gallery');
const modalAjout = document.getElementById('modal-ajout');

const gallery = document.querySelector('.gallery');
const galleryEdit = document.getElementById('galleryEdit');
const btns = document.getElementsByClassName('edit');

const closeSpan = document.querySelector('.close');
const backSpan = document.querySelector('.back');
const ajoutBtn = document.getElementById('modal-ajoutBtn');

buttonsGetEvent = false;

function deleteProject(id){
  let parent = document.querySelectorAll('[data-id="'+id+'"]');
  console.log(parent);

  // Envoyer une requête DELETE pour supprimer l'image
  if(tokenIsValid())
  {
    fetch(`http://localhost:5678/api/works/${id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    })
    .then(res => function(){
      parent[0].parentNode.removeChild(parent[0]);
      parent[1].parentNode.removeChild(parent[1]);
    })
    .catch(error => {
      console.error(error);
    });
  }
}

function uploadProject(){
  let photoToUpload = document.querySelector('#contentCenter input[type=file]');
    // Récupérer les infos de la categorie et transformer en int pour envoie api
  let selectType = document.querySelector('#contentCenter select');
  let id;
  switch (selectType.value) {
    case 'Objets':
      id = 1;
      break;
    case 'Appartements':
      id = 2;
      break;
    case 'Hotels & restaurants':
      id = 3;
      break;
    default:
      id = 0;
  }
  let inputName = document.querySelector('#contentCenter input[type=text]');
  // si un des inputs est vide, on ne peut pas upload le projet
  if(photoToUpload.value == null || id == 0 || inputName.value == null)
  {
    console.log('stop !');
    return;
  }
  // Envoie du projet au serveur
  fetch(`http://localhost:5678/api/works`, {
      method: 'POST',
      headers: new Headers({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }),
      body: {
        "image " : photoToUpload.value,
        "id" : id,
        "title" : inputName.value,
      }
    })
    .catch(error => {
      console.error(error);
    });
}

generateGallery(true);
// Initialiser le modal avec la gallerie en premier
modalAjout.style.display = 'none';
modalGallery.style.display = 'block';
backSpan.style.display = 'none';

document.querySelector('#contentCenter input[type=submit]').onclick  = function()
{
  uploadProject();
};

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
closeSpan.onclick = function() {
    modal.style.display = 'none';
    modalAjout.style.display = 'none';
    modalGallery.style.display = 'block';
}

// Revenir sur la gallerie du modal
backSpan.onclick = function() {
  modalAjout.style.display = 'none';
  modalGallery.style.display = 'block';
  backSpan.style.display = 'none';
}

// Aller sur la page ajout photo du modal
ajoutBtn.onclick = function() {
  modalAjout.style.display = 'block';
  modalGallery.style.display = 'none';
  backSpan.style.display = 'block';
}

// Fermer la fenêtre modale lorsque l'utilisateur clique en dehors de la fenêtre modale
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
}