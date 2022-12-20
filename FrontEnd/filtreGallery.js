//recuperer les buttons filtres
//addlistener
//ajouter event par rapprot a http://localhost:5678/api/categories qui a 3 categories
//display none sur les figure qui ont id qui nest pas en recherche actuelle

  function filterSelection(category){
    const listFigure = document.getElementsByClassName('box');
    
    if(category == "all"){
        for(i=0; i<listFigure.length; ++i)
        {
            listFigure[i].style.display = "block";
        }
        return;
    }  
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
            listFigure[i].style.display = "none";
        }
    }
  }
