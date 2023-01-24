
  function filterSelection(category){
    // récupère les projets créés sur la page
    const listFigure = document.getElementsByClassName('box');
    
    // Si le filtre "all" est appliqué, tous les projets sont affichés
    if(category == "all"){
        for(i=0; i<listFigure.length; ++i)
        {
            listFigure[i].style.display = "block";
        }
        return;
    }  
    // Si le filtre != "all", affichés les projets avec la même catégorie (int)
    for(i=0; i<listFigure.length; ++i)
    {
        listFigure[i].style.display = "none";
        if(listFigure[i].className == "box "+ category)
        {
            //listFigure[i].add("show");
            listFigure[i].style.display = "block";
        }
        else
        {
            // Ne pas afficher les projets qui n'ont pas la même catégorie
            listFigure[i].style.display = "none";
        }
    }
  }
