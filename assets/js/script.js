//Permet d'ajouter une tâche lorsque l'on clique sur le boutton ajouter
document.querySelector("#button-add").addEventListener("click", function () {
    var taskName = prompt("Entrez votre tâche :");


    // Créer et ajouter une tâche au DOM
    var newElt = document.createElement("li"); // Création d'un élément li
    newElt.classList.add("task"); //Création d'une classe
    newElt.textContent = taskName; // Définition de son contenu textuel
    
    //Création d'un bouton supprimé
    let spanDelete = document.createElement("span");
    spanDelete.classList.add("delete");
    spanDelete.textContent="X";
    document.getElementById("list").appendChild(spanDelete);

    //Création d'une checkbox
    var checkTask = document.createElement("INPUT");
    checkTask.setAttribute("type", "checkbox");
    checkTask.classList.add("checkbox");
    document.getElementById("list").appendChild(checkTask);

    document.getElementById("list").appendChild(newElt); // Insertion de la nouvelle tâche
    
    //Valider une tâche ou non
    var checkBox = document.getElementsByClassName("checkbox");
    var text = document.getElementsByClassName("task");
    if (checkBox.checked == true){
        text.style.visibility = "hidden";
    } else {
        text.style.visibility = "visible";
    }
    
    //Permet de modifier la tâche lorsque l'on clique dessus
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
