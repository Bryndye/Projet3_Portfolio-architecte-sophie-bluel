const parentInstantiate = document.querySelector('.gallery')

fetch('http://localhost:5678/api/works')
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    for(i=0; i< value.length;++i)
    {
        createElement(value[i]);
    }
  })
  .catch(function(err) {
    // Une erreur est survenue
  });

function createElement(objectValue){
    parentInstantiate.innerHTML += '<figure class="box '+objectValue.category.id+'"><img crossorigin="anonymous" src='+objectValue.imageUrl+' alt='+objectValue.title+'><figcaption>'+objectValue.title+'</figcaption></figure>';
  }
