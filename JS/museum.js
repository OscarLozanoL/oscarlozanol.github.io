$(document).ready(function () {

    $("#generar").on("click", function () {
        alert("Handler for `click` called.");
    });
    var newjson = $.getJSON("https://oscarlozanol.github.io/resources/museums.json")
        .done(function (data) {
            console.log(data)
        };

});

