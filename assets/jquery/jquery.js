//Permet d'ajouter une tâche lorsque l'on clique sur le boutton ajouter
$("#button-add").click(function() {
    var taskName = prompt("Entrez votre tâche :");

    //Tant qu'il n'y a pas de tâche entrer, on continue de demander
    if(taskName == ""){
        taskName = prompt("Entrez votre tâche :");
    }
    else{
        // Créer et ajouter une tâche au DOM
        var newElt = $("<li></li>").text(taskName);
        newElt.addClass("task");

        //Création d'un bouton supprimé
        var spanDelete = $("<span></span>").text("X");
        spanDelete.addClass("delete");
        $("#list").append(spanDelete);

        //Création d'une checkbox
        var checkTask = $("<input></input>");
        checkTask.attr("type", "checkbox");
        checkTask.addClass("checkbox");
        $("#list").append(checkTask);

        $("#list").append(newElt);
    }

    //Permet de supprimer la tâche lorsque qu'on clique sur la croix rouge
    spanDelete.click(function() {
        $(newElt).remove();
        $(checkTask).remove();
        $(spanDelete).remove();
    });

    //Valider une tâche ou non
    checkTask.click(function(){
        if($(this).prop("checked") == true){
            $(newElt).css({"text-decoration": "line-through"});
        }
        else{
            $(newElt).css({"text-decoration": "none"});
        }
    });    
});
