
function generateEventOnDeleteButtons(){
    const deleteButtons = document.querySelectorAll('.delete-icon');
    console.log(deleteButtons.length);
    // console.log(deleteButtons.length);
    let testArray = [0,1,2,3];
    let iconTest = document.getElementById('deleteIcon');
    // console.log(iconTest);

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
generateEventOnDeleteButtons();