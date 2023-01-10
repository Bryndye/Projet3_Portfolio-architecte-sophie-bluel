const parentInstantiate = document.querySelector('.gallery')

// fetch('http://localhost:5678/api/works')
//   .then(function(res) {
//     if (res.ok) {
//       return res.json();
//     }
//   })
//   .then(function(value) {
//     for(i=0; i< value.length;++i)
//     {
//         createElement(value[i]);
//     }
//   })
//   .catch(function(err) {
//     // Une erreur est survenue
//   });

window.generateGallery = function(forEdit = false)
{
  fetch('http://localhost:5678/api/works')
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
      if(forEdit)
      {
        for(i=0; i< value.length;++i)
        {
          createElementEdit(value[i]);
        }
      }
      else{
        for(i=0; i< value.length;++i)
        {
          createElement(value[i]);
        }
      }
    })
    .catch(function(err) {
      // Une erreur est survenue
    });
}

generateGallery();

function createElement(objectValue){
  parentInstantiate.innerHTML += '<figure class="box '+objectValue.category.id+'" data-id="'+objectValue.id+'"><img crossorigin="anonymous" src='+objectValue.imageUrl+' alt='+objectValue.title+'><figcaption>'+objectValue.title+'</figcaption></figure>';
}

function createElementEdit(objectValue){
  document.getElementById('galleryEdit').innerHTML += '<figure data-id="'+objectValue.id+'"><button class="delete-icon" onClick="deleteProject('+objectValue.id+')"><i class="fa fa-times"></i></button><img crossorigin="anonymous" src='+objectValue.imageUrl+' alt='+objectValue.title+'><figcaption>éditer</figcaption></figure>';
}
