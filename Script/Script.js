/*Ajouter dans la liste*/
document.body.style.backgroundImage = "url('./images/home.png')";
document.body.style.backgroundImage = "url('./images/home.png')";
/*Récupération de l'élément dans le document*/
let boutonAjouter = document.querySelector("#monBouton");
let input = document.getElementById("champText"); //Input
let toDoList = document.getElementById("todolist"); //ul ok
let ulAF = document.getElementById("listeAFaire"); //ul à faire
let ulEC = document.getElementById("listeEnCours"); //ul en cours
let ulOk = document.getElementById("listeOk"); //ul ok
let titre = document.getElementById("titre");
let burger = document.getElementById("burger");

/*Fonctionnement de 5 bouton-----------------------------*/
document.querySelectorAll(".theme").forEach(function (item) {
  item.addEventListener("click", function (e) {
    let imgUrl, global, ulAFcolor, ulECcolor, ulOkcolor;
    if (e.target.id === "plage") {
      imgUrl = "url('./images/noumea.jpg')";
      global = "rgb(59, 98, 142)";
      ulAFcolor = "rgb(139, 139, 134)";
      ulECcolor = "rgb(232, 217, 199)";
      ulOkcolor = "rgb(158, 177, 170)";
    }
    if (e.target.id === "plitvice") {
      imgUrl = "url('./images/lac.jpg')";
      global = "rgb(156, 198, 147)";
      ulAFcolor = "rgb(138, 171, 133)";
      ulECcolor = "rgb(160, 172, 184)";
      ulOkcolor = "rgb(68, 103, 91)";
    }
    if (e.target.id === "mimosa") {
      imgUrl = "url('./images/mimosa.jpg')";
      global = "rgb(125, 148, 170)";
      ulAFcolor = "rgb(215, 189, 16)";
      ulECcolor = "rgb(115, 102, 35)";
      ulOkcolor = "rgb(168, 172, 44)";
    }
    if (e.target.id === "singapour") {
      imgUrl = "url('./images/singapour.jpg')";
      global = "	rgb(174, 166, 167)";
      ulAFcolor = "	rgb(138, 53, 115)";
      ulECcolor = "	rgb(96, 115, 84)";
      ulOkcolor = "rgb(134, 163, 98)";
    }
    if (e.target.id === "etretat") {
      imgUrl = "url('./images/etretat.jpg')";
      global = "rgb(205, 212, 83)";
      ulAFcolor = "rgb(170, 195, 56)";
      ulECcolor = "rgb(154, 165, 55)";
      ulOkcolor = "rgb(172, 177, 140)";
    }
    if (e.target.id === "guell") {
      imgUrl = "url('./images/guell.jpg')";
      global = "rgb(184, 181, 177)";
      ulAFcolor = "rgb(104, 108, 98)";
      ulECcolor = "rgb(85, 66, 57)";
      ulOkcolor = "rgb(103, 99, 65)";
    }
    document.body.style.backgroundImage = imgUrl;
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = ulAFcolor;
    toDoList.style.backgroundColor = global;
    ulAF.style.backgroundColor = ulAFcolor;
    ulEC.style.backgroundColor = ulECcolor;
    ulOk.style.backgroundColor = ulOkcolor;
    titre.style.color = ulAFcolor;
  });
});

/*Sur click bouton "Ajouter" : ajoute une tache et un bouton*/
boutonAjouter.addEventListener("click", function () {
  /*Création des TAG*/
  let liAFaire = document.createElement("li"); //li
  let champSaisie = document.createElement("text"); //Champ de saisie
  let imgSup = document.createElement("img"); //ajouter une image supprimer
  let imgModif = document.createElement("img"); //ajouter une image modifier
  let imgTransfert = document.createElement("img"); //ajouter une image transférer
  let imgOk = document.createElement("img"); //ajouter une image terminée
  /*Attribution des texte*/
  champSaisie.innerText = input.value; //Ajouter la valeur du input dans le champs texte

  /*Attribution des images svg*/
  imgSup.setAttribute("src", "./images/poubelle.svg");
  imgSup.setAttribute("height", "20");
  imgSup.setAttribute("width", "20");
  imgSup.setAttribute("title", "Supprimer");

  imgModif.setAttribute("src", "./images/modifier.svg");
  imgModif.setAttribute("height", "20");
  imgModif.setAttribute("width", "20");
  imgModif.setAttribute("title", "Modifier");

  imgTransfert.setAttribute("src", "./images/transfert.svg");
  imgTransfert.setAttribute("height", "20");
  imgTransfert.setAttribute("width", "20");
  imgTransfert.setAttribute("title", "Transférer dans la liste en cours");

  imgOk.setAttribute("src", "./images/transfert.svg");
  imgOk.setAttribute("height", "20");
  imgOk.setAttribute("width", "20");
  imgOk.setAttribute("title", "Tâche terminée");

  /*Rattachement des objets dans la li*/
  liAFaire.appendChild(champSaisie); // Ajouter le champ de saisie dans le li
  liAFaire.appendChild(imgTransfert); // Ajouter le bouton suppression dans le li
  liAFaire.appendChild(imgModif); // Ajouter le bouton suppression dans le li
  liAFaire.appendChild(imgSup); // Ajouter le bouton suppression dans le li

  /*Ajouter un évenement qui supprime le bouton et son parent*/
  imgSup.addEventListener("click", function (e) {
    liAFaire.remove(); // en se supprimant lui même, il supprime ses enfants
  });

  /*Ajouter un évenement sur le bouton modifier le texte*/
  imgModif.addEventListener("click", function () {
    let libelle = champSaisie.innerText;
    nouvText = prompt("Veuillez modifier la tâche :", libelle);
    champSaisie.innerText = nouvText;
  });

  /*Ajouter un évenement pour envoyer le texte vers liste en cours*/
  imgTransfert.addEventListener("click", function () {
    /*Renvoie dans la liste en cours*/
    let liEnCours = liAFaire;
    imgTransfert.remove();
    imgModif.remove();
    imgSup.remove();
    liEnCours.appendChild(imgOk); // Ajouter le bouton suppression dans le li
    liEnCours.appendChild(imgModif); // Ajouter le bouton suppression dans le li
    liEnCours.appendChild(imgSup); // Ajouter le bouton suppression dans le li
    ulEC.appendChild(liEnCours);
  });
  /*Ajouter un évenement pour envoyer le texte vers liste terminée*/
  imgOk.addEventListener("click", function () {
    /*Renvoie dans la liste terminée*/
    let liOk = liAFaire;
    imgOk.remove();
    imgModif.remove();
    ulOk.appendChild(liOk);
  });

  ulAF.appendChild(liAFaire); // Ajouter la li dans l'ul
  input.value = ""; // Réinitialisation de la valeur
});

/*Clic sur le bouton pour changer le background-image*/

/*Pour mémoire*/
//let bontonSup = document.createElement("button"); //bonton pour supprimer
//let bontonModif = document.createElement("button"); //bonton pour modifier
//let bontonTransf = document.createElement("button"); //bonton pour transférer

//bontonModif.innerText = "MODIFIER"; //Ajoute un texte au bouton transfert
//bontonTransf.innerText = "EN COURS"; //Ajoute un texte au bouton transfert
//bontonSup.innerText = "SUPPRIMER"; //Ajoute un texte au bouton supprimer

//liAFaire.appendChild(bontonModif); // Ajouter le bouton modification dans le li
//liAFaire.appendChild(bontonTransf); // Ajouter le bouton transfert en cours dans le li
//liAFaire.appendChild(bontonSup); // Ajouter le bouton suppression dans le li

/*Ajouter un évenement qui supprime le bouton et son parent*/
/*bontonSup.addEventListener("click", function (e) {
    liAFaire.remove(); // en se supprimant lui même, il supprime ses enfants
  });*/

/*Ajouter un évenement sur le bouton modifier le texte
  bontonModif.addEventListener("click", function () {
    let libelle = champSaisie.innerText;
    nouvText = prompt("Veuillez modifier la tâche :", libelle);
    champSaisie.innerText = nouvText;
  });*/

/*Ajouter un évenement pour envoyer le texte vers liste en cours
  bontonTransf.addEventListener("click", function () {
    //Renvoie dans la liste en cours
    let liEnCours = liAFaire;
    bontonTransf.remove();
    ulEC.appendChild(liEnCours);
  });*/
