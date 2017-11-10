
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// function makeGrid(rows, columns) {



function makeGrid(){
    //variables set using JQuery
    var row = $('#input_height').val();
    var column = $('#input_width').val();
    // nested for loop that adds rows and then columns
        for (var i = 0; i < row; i++) {
            $('#pixel_canvas').append('<tr id=rows></tr>');
            for (var c = 0; c <= column; c++) {
                $('tr:last').append('<td id=columns></td>');
            };
        };
}
// event listener that changes the color of the cell when clicked on
$('#pixel_canvas').on('click', function(evt){
    var color = $('#colorPicker').val();
    $(evt.target).css('background', color);
});
//
makeGrid();




    // $('#input_height').change(function(){
    //     var val = $(this).val();
    //     $('#input_height[value="1"]').val(value);
    // });





