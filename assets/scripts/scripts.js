
let color_index = 0;
const colors = ['#FFFFFF', '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3']
// jquery stuff
$(document).ready(function () {
    // changing the background color
    $('#background-color-change').click(function () {
        var color = prompt("Please enter a color hex code.", "#393d3f");
        $('#home').css('background-color', color);
    });
});


