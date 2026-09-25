const prompt = require("prompt-sync")()
function tableauAffichage (){
    console.log(" 1- AJOUTER CONDIDAT. ")
    console.log(" 2- Ajouter plusieurs condidat à la fois. ")
    console.log(" 3- Afficher la liste des condidats. ")
    console.log(" 4- Voter pour un condidat. ")
    console.log(" 5- Modifier les informations d'un condidat. ")
    console.log(" 6- Supprimer un condidat. ")
    console.log(" 7- Rechercher des condidats. ")
    console.log(" 8- Statique de voteur. ")
    console.log(" 0- Quitter. ")
}
let  condidats = []

function ajoutercondidat(){
    let cin_ = prompt("CIN: ")
    let nom_ = prompt("NOm : ")
    let prenom_ = prompt("Prenom : ")
    let age_ = prompt("Age : ")
    let partipolitique_ = prompt("Partipolitique : ")
    

    let condidat ={
        Cin : cin_ ,
        Nom : nom_ , 
        Prenom : prenom_ ,
        Age : age_ ,
        partipolitique : partipolitique_ ,
        votes : []
    };
    condidats.push(condidat);
    console.log("condidat Ajoutée : " + prenom_ + " " + nom_)

}


let choix 
do {
    tableauAffichage();
    choix = Number(prompt("tapez votre choix ici : "))
    switch(choix){
        case 1 :
            ajoutercondidat()
            break; 
        case 2 :
            console.log("2")
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

