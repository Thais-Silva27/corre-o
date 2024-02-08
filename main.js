$(document).ready(function () { 
    const ListadeTarefas = $("Lista-de-Tarefas");
    const DigiteTarefa = $("Digite-Tarefa");

    ListadeTarefas.submit(function (event) {
    event.preventDefault();

    const ListadeTarefas = $("Digite-Tarefa").val();

    DigiteTarefa.append("<li>" + ListadeTarefas + "</li>");

$("Digite-Tarefa").val("");
    });

    ListadeTarefas.on("onclick", "li", function () {
$(this).toggleClass("completed");
    });
});



















