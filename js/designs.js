// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// function makeGrid(rows, columns) {

$(function() {
    var row = 5;
    var column = 5;
    for (var i = 0; i <= row; i++) {
        $('#pixel_canvas').append('<tr id=rows></tr>');
        for (var c = 0; c <= column; c++) {
            $('tr:last').append('<td id=columns></td>');
        }
    }
});




