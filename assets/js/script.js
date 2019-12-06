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
        spanDelete.attr('title', "Cliquez pour supprimer votre tâche");
        $("#list").append(spanDelete);

        //Création d'un bouton déplacer à la fin
        var spanBefore= $("<span></span>").text("F");
        spanBefore.addClass("before");
        spanBefore.attr('title', "Cliquez pour déplacer votre tâche au début");
        $("#list").append(spanBefore);

        //Création d'un bouton déplacer à la fin
        var spanAfeter = $("<span></span>").text("E");
        spanAfeter.addClass("after");
        spanAfeter.attr('title', "Cliquez pour déplacer votre tâche à la fin");
        $("#list").append(spanAfeter);

        //Création d'une checkbox
        var checkTask = $("<input></input>");
        checkTask.attr("type", "checkbox");
        checkTask.addClass("checkbox");
        $(newElt).prepend(checkTask);

        $("#list").append(newElt);
    }

    //Permet de supprimer la tâche lorsque qu'on clique sur la croix rouge
    spanDelete.click(function() {
        $(newElt).remove();
        $(checkTask).remove();
        $(spanBefore).remove();
        $(spanAfeter).remove();
        $(spanDelete).remove();        
    });

    //Permet de déplacer la tâche au début de la liste 
    spanBefore.click(function() {
        $("#list").prepend(newElt);  
        $(newElt).prepend(checkTask);     
        $("#list").prepend(spanAfeter);
        $("#list").prepend(spanBefore);
        $("#list").prepend(spanDelete);
    });

    //Permet de déplacer la tâche à la fin de la liste 
    spanAfeter.click(function() {
        $("#list").append(spanDelete);
        $("#list").append(spanBefore);
        $("#list").append(spanAfeter);
        $(newElt).prepend(checkTask);
        $("#list").append(newElt);       
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
 