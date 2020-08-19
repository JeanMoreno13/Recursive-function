/*
 * Récupérer tous les id de contrat par récursion. 
 */

var obj = {
    id: "LABONNECHOUPINE",
    type: "DOSSIER",
    nom: "La bonne chopine",
    hasChildren: true,
    children: [{ 
        type: "ETABLISSEMENT", 
        id: 1,
        nom: "Première Chopine",
        hasChildren: true,
        children: [{
          type: "CONTRAT", 
          id: 458,
          nom: "Asterix",
        }, {
          type: "CONTRAT", 
          id: 852,
          nom: "Obelix",
        },{
          type: "CONTRAT", 
          id: 1254,
          nom: "Idéfix"
        }]
      }, {
        type: "ETABLISSEMENT", 
        id: 2,
        nom: "Deuxième Chopine",
        hasChildren: true,
        children: [{
          type: "ETABLISSEMENT",
          id: 3,
          nom: "Troisième sous Chopine",
          hasChildren: true,
          children: [{
            type: "CONTRAT",
            id: 456321,
            nom: "Pédro"
            },{
            type: "CONTRAT",
            id: 87,
            nom: "Joe la frite",
          }],
       }],
      }
    ]};
     
  function LetsGoRecursive() {
    var contrats = [];
  
    var recursiveChildren = function (subitems) {      
      for(var i=0; i < subitems.length; i++){
        if(subitems[i].hasChildren) recursiveChildren(subitems[i].children) // Si l'item à des enfants on appel la function
        if(subitems[i].type == 'CONTRAT') contrats.push(subitems[i].id) // Si l'item a un type Contrat on push son id
      }
    }

    // Tant qu'il y a des enfants on boucle en appelant la méthode recursiveChildren
    var curItem = obj.children;
    while (!!curItem) {
      recursiveChildren(curItem);
      curItem = curItem.children;
    }
    return contrats;
  }
  
  console.log(LetsGoRecursive());