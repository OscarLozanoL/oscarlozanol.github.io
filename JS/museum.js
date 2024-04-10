$(document).ready(function () {

    $("#generar").on("click", function () {
        alert("Handler for `click` called.");
    });
    $.getJSON("https://oscarlozanol.github.io/resources/museums.json")
        .done(function (data) {
            console.log(data)
        });

});

