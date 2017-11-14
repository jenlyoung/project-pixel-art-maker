const table = $('#pixel_canvas');

function makeGrid() {

    // set the variable to the user input when "submit" clicked
    const row = $('#input_height').val();
    const column = $('#input_width').val();

    table.children().detach();

    // nested for loop that adds rows and then columns
    for (let i = 0; i < row; i++) {
        table.append('<tr></tr>');
        for (let c = 0; c < column; c++) {
            $('tr:last').append('<td></td>');
        }
    }
}

// event listener that calls madeGrid() when the "submit" button is clicked
$('input[type="submit"]').on('click', (function () {
    makeGrid();
    // prevents the grid from disappearing
    event.preventDefault();
}));

// event listener that changes the color of the cell when clicked on
table.on('click', function (evt) {
    const color = $('#colorPicker').val();
    $(evt.target).css('background', color);
})










