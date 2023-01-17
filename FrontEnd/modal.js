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
  let project = document.querySelectorAll('[data-id="'+id+'"]');

  // Envoyer une requête DELETE pour supprimer l'image
  if(tokenIsValid())
  {
    fetch(`http://localhost:5678/api/works/${id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    })
    .then(function(){
      project[0].remove();
      project[1].remove();
    })
    .catch(error => {
      console.error(error);
    });
  }
}


function addProjectDynamic(){
  fetch('http://localhost:5678/api/works')
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(res) {
    createElement(res.slice(-1)[0]);
    createElementEdit(res.slice(-1)[0]);
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
  
  modal.style.display = 'none';
  modalAjout.style.display = 'none';
  modalGallery.style.display = 'block';
}

//Remet par defaut le modal ajout photo
function clearProjectOnModal(){
  let displayImage = document.getElementById("displayImage");
  let selectType = document.querySelector('#contentCenter select');
  let inputName = document.querySelector('#contentCenter input[type=text]');

  displayImage.value = ""; //enleve l'image une fois celle-ci publie
  selectType.value = 'Objets';
  img.style.display = "none";
  inputName.value = null;

  let sectionBeforeChange = document.getElementById("ajoutPhotoBeforeChange");
  sectionBeforeChange.style.display = 'flex';

  let imageInput = document.getElementById("select-image");
  imageInput.value = "";
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
    // ne doit pas post car manque des informations
    return;
  }
  const data = new FormData();
  data.append("image", photoToUpload.files[0]);
  data.append("title", inputName.value);
  data.append("category", id);

  // Envoie du projet au serveur
  fetch(`http://localhost:5678/api/works`, {
      method: 'POST',
      headers: new Headers({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }),
      body: data
    })
    .then(function(){
      addProjectDynamic();
      clearProjectOnModal();
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

let img = document.getElementById("displayImage");
function displayImage() {
  let imageInput = document.getElementById("select-image");
  document.getElementById("ajoutPhotoBeforeChange").style.display = 'none';
  let file = imageInput.files[0];
  img.src = URL.createObjectURL(file);
  img.style.display = "block";
}



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