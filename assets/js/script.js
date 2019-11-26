//Permet d'ajouter une tâche lorsque l'on clique sur le boutton ajouter
document.querySelector("#button-add").addEventListener("click", function () {
    var nomTache = prompt("Entrez votre tâche :");

    // Créer et ajouter un élément au DOM
    var newElt = document.createElement("li"); // Création d'un élément li
    newElt.textContent = nomTache; // Définition de son contenu textuel
    document.getElementById("liste").appendChild(newElt); // Insertion du nouvel élément

    //Permet de modifier la tâche lorsque l'on clique dessus ou de supprimer la tâche
    newElt.addEventListener("click", function (e) {
        alert("Pour modifier votre tâche, tapez du texte.\n\nPour la supprimer ne mettez aucun texte !")
        var nouveauNom = prompt("Modifiez votre tâche :", e.target.textContent);
        if(nouveauNom === ""){
            alert("Vous avez supprimer votre tâche !")
            // Suppression de l'élément
            document.getElementById("liste").removeChild(newElt);
        }
        else{
            e.target.textContent = nouveauNom;
        }
    });
});