




// nombre essais nbRestant
function NbRestant() {

  var nbRestant = document.getElementById('nb-restant').textContent;
  var retraitRestant = nbRestant - 1;
  document.getElementById('nb-restant').textContent = retraitRestant;

  var nbEssais = document.getElementById("select-essais").value;
  if(retraitRestant == "0"){
    var finGameScoreVous = document.getElementById('score-vous').textContent;
    var finGameScoreOrdi = document.getElementById('score-ordi').textContent;
    document.getElementById('display-game').style.height="0";
    document.getElementById('fin-game').style.display="block";

    if(finGameScoreVous > finGameScoreOrdi){
      document.getElementById('text-fin-game').textContent="bravo, vous avez gagné";
      document.getElementById('text-fin-game').style.color="green";
      document.getElementById('victoire').style.display="block";
      document.getElementById('start').textContent="Rejouer";
      document.getElementById('fin-vous').textContent=parseInt(finGameScoreVous) + 1;
      document.getElementById('fin-ordi').textContent=finGameScoreOrdi;
    }else{
      document.getElementById('text-fin-game').textContent="Désoler, vous avez perdu";
      document.getElementById('text-fin-game').style.color="red";
      document.getElementById('defaite').style.display="block";
      document.getElementById('start').textContent="Rejouer";
      document.getElementById('fin-vous').textContent=finGameScoreVous;
      document.getElementById('fin-ordi').textContent=parseInt(finGameScoreOrdi) + 1;
    }
    //alert("finie");
    document.getElementById("select-essais").disabled = false;
  }

}

// incemente scrore
function score(resultScore) {

  if(resultScore == "vous"){
    NbRestant();
    var valueScoreVous = document.getElementById('score-vous').textContent;
    var addScore = parseInt(valueScoreVous) + 1;
    document.getElementById('score-vous').textContent = addScore;
  }else if (resultScore == "ordi") {
    NbRestant();
    var nbRestant = document.getElementById('nb-restant').textContent;
    var retraitRestant = nbRestant - 1;
    var valueScoreOrdi = document.getElementById('score-ordi').textContent;
    var addScore = parseInt(valueScoreOrdi) + 1;
    document.getElementById('score-ordi').textContent = addScore;

  }else{

  }
}

// creation div result icons
function affiche(vous, ordi) {

  if (document.getElementById('divVous')){
      document.getElementById('divVous').remove();
  }
  if (document.getElementById('divOrdi')){
      document.getElementById('divOrdi').remove();
  }

  var divVous = document.createElement("div");
  divVous.id = "divVous";
  divVous.setAttribute("class","outil-insert " + itemShifumi[vous][1]);

  var imgVous = document.createElement("img");
  imgVous.setAttribute("src",itemShifumi[vous][2]);

  divVous.appendChild(imgVous);

  var divOrdi = document.createElement("div");
  divOrdi.id = "divOrdi";
  divOrdi.setAttribute("class","outil-insert " + itemShifumi[ordi][1]);

  var imgOrdi = document.createElement("img");
  imgOrdi.setAttribute("src",itemShifumi[ordi][2]);

  divOrdi.appendChild(imgOrdi);

  var partyVous = document.getElementById("party-vous");
  partyVous.appendChild(divVous);

  var partyOrdi = document.getElementById("party-ordi");
  partyOrdi.appendChild(divOrdi);

}


// reponse hasard ordi
function hasard(cch) {

  var minNumberType = 1;
  var maxNumberType = 8;

  nIdType = Math.floor(Math.random() * (maxNumberType + 1) + minNumberType);



  if (nIdType === 1 || nIdType === 4 || nIdType === 7) {
    document.getElementById('partyText').textContent = "";
    affiche(cch, 0);

      if(cch === "1"){
        document.getElementById('partyText').style.backgroundColor = "rgba(125, 178, 9, 0.97)";
        document.getElementById('partyText').textContent = "Gagné : Votre feuille recouvre sa pierre";
        score("vous");
      }else if (cch === "2") {
        document.getElementById('partyText').style.backgroundColor = "rgba(213, 73, 48, 0.97)";
        document.getElementById('partyText').textContent = "Perdu : sa pierre casse votre ciseaux";
        score("vous");
      }else{
        document.getElementById('partyText').style.backgroundColor = "rgba(93, 90, 90, 0.97)";
        document.getElementById('partyText').textContent = "égalité";
        score("egal");
      }



  }

  if (nIdType === 2 || nIdType === 5 || nIdType === 8) {
    document.getElementById('partyText').textContent = "";
    affiche(cch, 1);

        if(cch === "0"){
          document.getElementById('partyText').style.backgroundColor = "rgba(213, 73, 48, 0.97)";
          document.getElementById('partyText').textContent = "Perdu : Sa feuille recouvre votre pierre";
          score("ordi");
        }else if (cch === "2") {
          document.getElementById('partyText').style.backgroundColor = "rgba(125, 178, 9, 0.97)";
          document.getElementById('partyText').textContent = "Gagné : Votre ciseaux coupe sa feuille";
          score("vous");
        }else{
          document.getElementById('partyText').style.backgroundColor = "rgba(93, 90, 90, 0.97)";
          document.getElementById('partyText').textContent = "égalité";
          score("egal");
        }


  }

  if (nIdType === 3 || nIdType === 6 || nIdType === 9) {
    document.getElementById('partyText').textContent = "";
    affiche(cch, 2);

      if(cch === "0"){
        document.getElementById('partyText').style.backgroundColor = "rgba(125, 178, 9, 0.97)";
        document.getElementById('partyText').textContent = "Gagné : votre pierre casse son ciseaux";
        score("vous");
      }else if (cch === "1") {
        document.getElementById('partyText').style.backgroundColor = "rgba(213, 73, 48, 0.97)";
        document.getElementById('partyText').textContent = "Perdu : Son ciseaux coupe votre feuille";
        score("ordi");
      }else{
        document.getElementById('partyText').style.backgroundColor = "rgba(93, 90, 90, 0.97)";
        document.getElementById('partyText').textContent = "égalité";
        score("egal");
      }


  }

}


function choixUtil() {

  var cch = this.id;
  hasard(cch);
}

// demarrage
function startFn() {
  document.getElementById("select-essais").disabled = true;
  document.getElementById('fin-game').style.display="none";
  document.getElementById("display-game").style.height = "auto";
  if (document.getElementById('divVous')){
      document.getElementById('divVous').remove();
  }
  if (document.getElementById('divOrdi')){
      document.getElementById('divOrdi').remove();
  }
  document.getElementById('score-vous').textContent = "0";
  document.getElementById('score-ordi').textContent = "0";
  document.getElementById('partyText').textContent = "";
  var nbEssais = document.getElementById("select-essais").value;
  document.getElementById('nb-restant').textContent = nbEssais;

  var choixOutil = document.getElementsByClassName('outil');
  for (var i = 0; i < choixOutil.length; i++) {
    choixOutil[i].addEventListener("click",choixUtil);
  }


}




var btnShifum = document.getElementById("start");
btnShifum.addEventListener("click",startFn);
