$(document).ready(function () {

    $("#generar").on("click", function () {
        alert("Handler for `click` called.");
    });
    $.getJSON("https://bioinfobot.github.io/data/2017-05.json")
        .done(function (data) {
            console.log(data)
        });

});

