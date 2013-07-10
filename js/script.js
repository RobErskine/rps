$(function () {
 effect.click(function () {
     effect.toggleClass("drop", 8000);
    //return false;
 });
});

//since we're going to be using #user a lot, lets put it in a variable so the js doesn't need to look for it in the dom everytime a button is clicked

var effect = $("#effect");
var user = $("#user");

    $("#input div:first-child").on("click", function () {
        rps('red');
    });

    $("#input div:nth-child(2)").on("click", function () {
        rps('blue');
    });

    $("#input div:last-child").on("click", function () {
        rps('pink');
    });

function rps(color){ // instead of writing this function out 3 times, we can use an argument
    user.css("background",color);
    // you can put math in here as well
}
