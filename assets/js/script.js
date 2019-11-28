//Permet d'ajouter une tâche lorsque l'on clique sur le boutton ajouter
document.querySelector("button").addEventListener("click", function () {
    var taskName = prompt("Entrez votre tâche :");

    // Créer et ajouter un élément au DOM
    var newElt = document.createElement("li"); // Création d'un élément li
    newElt.textContent = taskName; // Définition de son contenu textuel

    //Création d'un bouton supprimé
    let spanDelete = document.createElement("span");
    spanDelete.classList.add("delete");
    spanDelete.textContent="X";
    document.getElementById("list").appendChild(spanDelete);

    document.getElementById("list").appendChild(newElt); // Insertion du nouvel élément

    //Permet de modifier la tâche lorsque l'on clique dessus ou de supprimer la tâche
    newElt.addEventListener("click", function (e) {
        alert("Pour modifier votre tâche, tapez du texte.")
        var taskModif = prompt("Modifiez votre tâche :", e.target.textContent);
        e.target.textContent = taskModif;
    });

    //Permet de supprimer la tâche lorsque qu'on clique sur la croix rouge
    spanDelete.addEventListener("click", function (e) {
        // Suppression de l'élément
        document.getElementById("list").removeChild(newElt);
        document.getElementById("list").removeChild(spanDelete);
    });

});