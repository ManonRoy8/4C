//Permet d'ajouter une tâche lorsque l'on clique sur le boutton ajouter
document.querySelector("#button-add").addEventListener("click", function () {
<<<<<<< HEAD
    var Taskname = prompt("Entrez votre tâche :");
    // Créer et ajouter un élément au DOM
    var newElt = document.createElement("li"); // Création d'un élément li
    newElt.textContent = Taskname; // Définition de son contenu textuel
    let spanDelete = document.createElement("span");
    spanDelete.classList.add("delete");
    spanDelete.textContent="X";
    newElt.appendChild(spanDelete);
    document.getElementById("list").appendChild(newElt); // Insertion du nouvel élément
    //Permet de modifier la tâche lorsque l'on clique dessus ou de supprimer la tâche
    newElt.addEventListener("click", function (e) {
        alert("Pour modifier votre tâche, tapez du texte.")
        var taskModif = prompt("Modifiez votre tâche :", e.target.textContent);
        taskModif.appendChild(spanDelete);
        /*if(taskModif === ""){
            alert("Vous avez supprimer votre tâche !")
            // Suppression de l'élément
            document.getElementById("list").removeChild(newElt);
        }
        else{*/
            e.target.textContent = taskModif;
        /*}*/
    });
    //Permet de supprimer la tâche lorsque qu'on clique sur la croix rouge
    spanDelete.addEventListener("click", function (e) {
        // Suppression de l'élément
        document.getElementById("list").removeChild(newElt);
=======
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
>>>>>>> f1510dc0b49c7fd417f525490f0653662528915d
    });
});