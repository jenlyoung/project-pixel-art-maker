
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid(){

    // set the variable to the user input when "submit" clicked
    $('input[type="submit"]').on('click', (function() {
        // removes previous user input for table size
        $("tr").detach();

        var row = $('#input_height').val();
        var column = $('#input_width').val();

    //  nested for loop that adds rows and then columns
        for (var i = 0; i < row; i++) {
            $('#pixel_canvas').append('<tr id=rows></tr>');
            for (var c = 0; c < column; c++) {
                $('tr:last').append('<td id=columns></td>');
            };
        };
    // prevents the grid from disappearing
        event.preventDefault();
    }));

    //event listener that changes the color of the cell when clicked on
    $('#pixel_canvas').on('click', function(evt){
        var color = $('#colorPicker').val();
        $(evt.target).css('background', color);
    });

    // clear the user input so that only one grid shows up at a time
    // $(function(){
    //     $("#pixel_canvas").remove();
    // });
};


//
makeGrid();








