
function makeGrid() {

    // set the variable to the user input when "submit" clicked
    $('input[type="submit"]').on('click', (function () {
        const row = $('#input_height').val();
        const column = $('#input_width').val();

        // removes previous user input for table size
        $('tr').detach();
        
        // nested for loop that adds rows and then columns
        for (let i = 0; i < row; i++) {
            $('#pixel_canvas').append('<tr id=rows></tr>');
            for (let c = 0; c < column; c++) {
                $('tr:last').append('<td id=columns></td>');
            }
        }
        // prevents the grid from disappearing
        event.preventDefault();
    }));

    //event listener that changes the color of the cell when clicked on
    $('#pixel_canvas').on('click', function (evt) {
        const color = $('#colorPicker').val();
        $(evt.target).css('background', color);
    })
}

makeGrid();








