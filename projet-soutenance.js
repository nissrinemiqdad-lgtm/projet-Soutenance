const prompt = require("prompt-sync")()
function tableauAffichage (){
    console.log(" 1- AJOUTER CaNDIDAT. ")
    console.log(" 2- Ajouter plusieurs candidat à la fois. ")
    console.log(" 3- Afficher la liste des candidats. ")
    console.log(" 4- Voter pour un candidat. ")
    console.log(" 5- Modifier les informations d'un candidat. ")
    console.log(" 6- Supprimer un candidat. ")
    console.log(" 7- Rechercher des candidats. ")
    console.log(" 8- Statique de voteur. ")
    console.log(" 0- Quitter. ")
}
let  candidats = []

function ajoutercandidat(){
    let cin_ = prompt("CIN: ")
    let nom_ = prompt("NOm : ")
    let prenom_ = prompt("Prenom : ")
    let age_ = prompt("Age : ")
    let partipolitique_ = prompt("Partipolitique : ")
    

    let candidat ={
        Cin : cin_ ,
        Nom : nom_ , 
        Prenom : prenom_ ,
        Age : age_ ,
        partipolitique : partipolitique_ ,
        votes : []
    };
    candidats.push(candidat);
    console.log("condidat Ajoutée : " + prenom_ + " " + nom_)

}
function ajouter_Plus_Candidats(){
    let reponse = prompt("voulez-vous ajouter un candidat ? (oui/non)")
    while(reponse === "oui"){
        ajoutercandidat()
        reponse = prompt("voulez-vous ajouter un autre candidat ? ")
        
    }
}


let choix 
do {
    tableauAffichage();
    choix = Number(prompt("tapez votre choix ici : "))
    switch(choix){
        case 1 :
            ajoutercandidat()
            break; 
        case 2 :
            ajouter_Plus_Candidats()
            break;
        case 3 :
            console.log("3")
            break;
        case 4:
            console.log("4")
            break;
        case 5:
            console.log("5")
            break;
        case 6:
            console.log("6")
            break;
        case 7 :
            console.log("7")
            break;
        case 8 :
            console.log("8")
            break; 
       
    }
}
while(choix != 0);

