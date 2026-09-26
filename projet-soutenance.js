const prompt = require("prompt-sync")()
function tableauAffichage (){
    console.log("****************** MENU ******************")
    console.log(" 1- AJOUTER CANDIDAT. ")
    console.log(" 2- Ajouter plusieurs candidat à la fois. ")
    console.log(" 3- Afficher la liste des candidats. ")
    console.log(" 4- Voter pour un candidat. ")
    console.log(" 5- Modifier les informations d'un candidat. ")
    console.log(" 6- Supprimer un candidat. ")
    console.log(" 7- Rechercher des candidats. ")
    console.log(" 8- Statique de voteur. ")
    console.log(" 0- Quitter. ")
    console.log("******************************************")
}
let  candidats = [{Cin : "AE147852" ,
     Nom : "LALLA" , 
     Prenom : "NISSRINE" ,
     Age : 35 ,
     Partipolitique : "LES OLIVES" ,
     votes : ['h' , 'g' , 'j' , 'e'  ]
    },
    {Cin : "DF123654",
     Nom : "jojoo" , 
     Prenom : "Houda" ,
     Age : 55 ,
     Partipolitique : "LES OLIVES" ,
     votes : ['k' , 1 , 'g', 'l' , 'm' ]

    },{ Cin : "hj123",
     Nom : "Lola" , 
     Prenom : "ACHRAF" ,
     Age : 37 ,
     Partipolitique : "LES OLIVES" ,
     votes : [ 'b' , 'c' ,'d' ]

    },{
        Cin : "lm12345",
     Nom : "alawi" , 
     Prenom : "khadija" ,
     Age : 44 ,
     Partipolitique : "LES OLIVES" ,
     votes : [4 , 44 , 'e', 'a' , 'M' ]

    },{
        Cin : "LK1478",
     Nom : "kela" , 
     Prenom : "mariam" ,
     Age : 25 ,
     Partipolitique : "LES OLIVES" ,
     votes : ['q' , 's' , 'x']

    },{
        Cin : "as15998",
     Nom : "lam" , 
     Prenom : "Achraf" ,
     Age : 20 ,
     Partipolitique : "Machi so9k" ,
     votes : ['ù' , 15 , 20 ]

    }]

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
        Partipolitique : partipolitique_ ,
        votes : []
    };
    candidats.push(candidat);
    console.log("condidat Ajouté : " + prenom_ + " " + nom_)

}
function ajouter_Plus_Candidats(){
    let reponse 
    do{
        ajoutercandidat()
        reponse = prompt("voulez-vous ajouter un autre candidat ? ")
        
    }while(reponse === "oui" || reponse === "OUI")
}
function affichage_Des_candidats(candidat,index){
    console.log("#candidat " + (index+1) + " : ");
    console.log("Cin : " + candidat.Cin);
    console.log("Nom : " + candidat.Nom);
    console.log("Prénom : " + candidat.Prenom);
    console.log("Age : " + candidat.Age);
    console.log("Partipolitique : " + candidat.Partipolitique);
    console.log("Nomber de Votes : " + candidat.votes.length);
    console.log("____________________________");
}
function afficher_candidat_listes_normal(){
    if(candidats.length === 0){
        console.log("Aucun candidat")
        return ;
    }
    for(let i =0 ; i<candidats.length ; i++){
        affichage_Des_candidats(candidats[i],i);
    }
}

function affichage_par_tri(){
    let vote_candidat =[]
    for(let i=0; i<candidats.length;i++){
        vote_candidat[i]=candidats[i]
    }
    for(let i=0;i<vote_candidat.length;i++){
        for(let j =i+1;j<vote_candidat.length;j++){
            if(vote_candidat[j].votes.length > vote_candidat[i].votes.length){
                let temporail = vote_candidat[i] ;
               vote_candidat[i]=vote_candidat[j];
               vote_candidat[j]=temporail
            }

        }
    }
 for(let i =0;i<vote_candidat.length;i++){
    affichage_Des_candidats(vote_candidat[i],i);
 }
}

function affichage_par_Partipolitique(){
    let partirechercher = prompt("écrivez le nom de la partipolitique à rechercher...")
    let trouverparti = false ;
    for(let i =0; i< candidats.length; i++){
        if(candidats[i].Partipolitique == partirechercher ){
            affichage_Des_candidats(candidats[i],i)
            trouverparti = true;
        }
    }
    if( trouverparti === false){
        console.log("Aucun résultat trouver concernant cette partipolitique ")
    }
}
function menu2 (){
      console.log("1-afficher tous les candidats")
     console.log("2-afficher par nombre de votes")
     console.log("3-afficher uniquement les candidats d'un parti")
     console.log("0-Revenir au menu principal")
}

function voter_sur_candidat(){
    if(candidats.length === 0){
        console.log("Aucun candidat enregistrer a cette ");
        return;
    }
    let cinElecteur = prompt("Entrez votre CIN pour votez ... ")
    for(let i = 0; i<candidats.length; i++){
        for(let j=0;j<candidats[i].votes.length; j++){
            if(candidats[i].votes[j] === cinElecteur){
                console.log("déja voté!") 
             return;
            }
        }
    }    

    console.log("véréfication OK , vous pouvez voter ")
    for(let k=0 ; k<candidats.length;k++){
    affichage_Des_candidats(candidats[k],k);}
    let cinCandidat = prompt("saissez CIN de candidat pour voter ")
    let candidatAtrouver = null ;

    for(let i=0 ; i<candidats.length;i++){
        if(candidats[i].Cin === cinCandidat){
            candidatAtrouver = candidats[i]
            break;
        }
    }
    if(candidatAtrouver === null){
        console.log("Vérification échoue : candidat introuvable")
    }
    else{
        let voteur = candidatAtrouver.votes.length
        candidatAtrouver.votes[voteur] = cinElecteur
        console.log("vote ajoutée avec succée pour : " + candidatAtrouver.Prenom + " " + candidatAtrouver.Nom )
    }
}

function modifiercandidat(){
    if(candidats.length === 0){
        console.log("AUCUN candidat à modifier.");
        return;
    }
    

    console.log("-------LISTE DES CANDIDATS--------")
    afficher_candidat_listes_normal()
    let cin = prompt("ajouter CIN du candidat : ")
    let index = -1;
    for(let i = 0 ; i<candidats.length ;i++){
        if(candidats[i].Cin === cin ){
            index = i
            break;

        }
    }
    if(index === -1){
        console.log("Vérification échoue : candidat introuvable ! ")
        return;
    }
    console.log("Verification OK : " + candidats[index].Prenom + " " +candidats[index].Nom);
    console.log("1- MODIFIER LA PARTIPOLITIQUE ")
    console.log("2- MODIFIER L'Àge")
    let choix = Number(prompt("que voulez-vous modifier ?"))
    if(choix === 1){
        let nouveau_partipolitique = prompt("Entrer la nouvelle partipolitique ... ")
        candidats[index].Partipolitique = nouveau_partipolitique
        console.log("PARTIPOLITIQUE modifier avec succée")
    }
    else if (choix === 2){
        let nouveau_Age = prompt("Enter le nouveau Age ici ... ")
        candidats[index].Age = nouveau_Age
        console.log("Age modifier avec succée ...!")
    }
    else {
        console.log("CHOIX INTROUVABLE ! merci d'entrer un nouveau choix ... ")
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
            menu2();
             let choix_ = Number( prompt("tapez votre choix_ : ") );
            switch (choix_ ){
                case 1 :
                    afficher_candidat_listes_normal()
                    break;
                case 2 :
                    affichage_par_tri()
                    break;
                case 3 :
                    affichage_par_Partipolitique()
                    break;
            }
            break;

        case 4:
            voter_sur_candidat()
            break;

        case 5:
            modifiercandidat()
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

