$(document).ready(function() {

    infoButtonClickEvent();

    $("#infoButton").click(function(){infoButtonClickEvent();});
    $("#gamesButton").click(function(){gamesButtonClickEvent();});

    $("#mainArea").css("display", "");

});

function infoButtonClickEvent() {
    $("#info").show("blind",'',700);
    $("#games").hide("blind",'',700);
}

function gamesButtonClickEvent() {
    $("#info").hide("blind",'',700);
    $("#games").show("blind",'',700);
}

function productsButtonClickEvent() {

}