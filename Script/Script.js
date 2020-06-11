/**
 * Exercice Le Bocal Academy 2020 : HTML, CSS, JS et DOM
 * Script.js - Gestion des tâches dans les diffrentes listes et des thèmes d'affichage / Management of tasks in different lists and display themes
 */

/*Affichage par défaut du document - Default document view*/
document.body.style.backgroundImage = "url('./images/home.png')";
document.body.style.backgroundImage = "url('./images/home.png')";

/*Récupération de l'élément dans le document - Retrieving items from the document*/
let addButton = document.querySelector("#monBouton");
let input = document.getElementById("champText");
let toDoList = document.getElementById("todolist");
let ulAF = document.getElementById("listeAFaire");
let ulEC = document.getElementById("listeEnCours");
let ulOk = document.getElementById("listeOk");
let title = document.getElementById("titre");
let burger = document.getElementById("burger");

/*Gestion des thèmes - Themes management*/
document.querySelectorAll(".theme").forEach(function (item) {
  item.addEventListener("click", function (e) {
    let imgUrl, global, ulAFColor, ulECcolor, ulOkcolor;
    if (e.target.id === "plage") {
      imgUrl = "url('./images/noumea.jpg')";
      global = "rgb(59, 98, 142)";
      ulAFColor = "rgb(139, 139, 134)";
      ulECColor = "rgb(232, 217, 199)";
      ulOkColor = "rgb(158, 177, 170)";
    }
    if (e.target.id === "plitvice") {
      imgUrl = "url('./images/lac.jpg')";
      global = "rgb(156, 198, 147)";
      ulAFColor = "rgb(138, 171, 133)";
      ulECColor = "rgb(160, 172, 184)";
      ulOkColor = "rgb(68, 103, 91)";
    }
    if (e.target.id === "mimosa") {
      imgUrl = "url('./images/mimosa.jpg')";
      global = "rgb(125, 148, 170)";
      ulAFColor = "rgb(215, 189, 16)";
      ulECColor = "rgb(115, 102, 35)";
      ulOkColor = "rgb(168, 172, 44)";
    }
    if (e.target.id === "singapour") {
      imgUrl = "url('./images/singapour.jpg')";
      global = "	rgb(174, 166, 167)";
      ulAFColor = "	rgb(138, 53, 115)";
      ulECColor = "	rgb(96, 115, 84)";
      ulOkColor = "rgb(134, 163, 98)";
    }
    if (e.target.id === "etretat") {
      imgUrl = "url('./images/etretat.jpg')";
      global = "rgb(205, 212, 83)";
      ulAFColor = "rgb(170, 195, 56)";
      ulECColor = "rgb(154, 165, 55)";
      ulOkColor = "rgb(172, 177, 140)";
    }
    if (e.target.id === "guell") {
      imgUrl = "url('./images/guell.jpg')";
      global = "rgb(184, 181, 177)";
      ulAFColor = "rgb(104, 108, 98)";
      ulECColor = "rgb(85, 66, 57)";
      ulOkColor = "rgb(103, 99, 65)";
    }
    document.body.style.backgroundImage = imgUrl;
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundColor = ulAFcolor;
    toDoList.style.backgroundColor = global;
    ulAF.style.backgroundColor = ulAFcolor;
    ulEC.style.backgroundColor = ulECcolor;
    ulOk.style.backgroundColor = ulOkcolor;
    title.style.color = ulAFcolor;
  });
});

/*Création des élements à inserer dans la première liste - Creation of the elements to be inserted in the first list*/
addButton.addEventListener("click", function () {
  //Création des éléments -  Creation of the elements
  let liAFaire = document.createElement("li");
  let champSaisie = document.createElement("text");
  let imgSup = document.createElement("img");
  let imgModif = document.createElement("img");
  let imgTransfert = document.createElement("img");
  let imgOk = document.createElement("img");

  //Attribut - Attribut
  champSaisie.innerText = input.value;
  imgSup.setAttribute("src", "./images/poubelle.svg");
  imgSup.setAttribute("height", "20");
  imgSup.setAttribute("width", "20");
  imgSup.setAttribute("title", "Supprimer");
  imgSup.addEventListener("click", function (e) {
    liAFaire.remove();
  });

  imgModif.setAttribute("src", "./images/modifier.svg");
  imgModif.setAttribute("height", "20");
  imgModif.setAttribute("width", "20");
  imgModif.setAttribute("title", "Modifier");
  imgModif.addEventListener("click", function () {
    let libelle = champSaisie.innerText;
    nouvText = prompt("Veuillez modifier la tâche :", libelle);
    champSaisie.innerText = nouvText;
  });

  imgTransfert.setAttribute("src", "./images/transfert.svg");
  imgTransfert.setAttribute("height", "20");
  imgTransfert.setAttribute("width", "20");
  imgTransfert.setAttribute("title", "Transférer dans la liste en cours");
  imgTransfert.addEventListener("click", function () {
    let liEnCours = liAFaire;
    imgTransfert.remove();
    imgModif.remove();
    imgSup.remove();
    liEnCours.appendChild(imgOk);
    liEnCours.appendChild(imgModif);
    liEnCours.appendChild(imgSup);
    ulEC.appendChild(liEnCours);
  });

  imgOk.setAttribute("src", "./images/transfert.svg");
  imgOk.setAttribute("height", "20");
  imgOk.setAttribute("width", "20");
  imgOk.setAttribute("title", "Tâche terminée");
  imgOk.addEventListener("click", function () {
    let liOk = liAFaire;
    imgOk.remove();
    imgModif.remove();
    ulOk.appendChild(liOk);
  });

  //Rattachement des éléments dans li - Attaching items to li
  liAFaire.appendChild(champSaisie);
  liAFaire.appendChild(imgTransfert);
  liAFaire.appendChild(imgModif);
  liAFaire.appendChild(imgSup);
  //Rattachement de li dans ul- Attachment of li into ul
  ulAF.appendChild(liAFaire);
  //Réinitialisation de la valeur - value reset
  input.value = "";
});
