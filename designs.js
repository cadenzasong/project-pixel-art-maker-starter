// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	var numRows = $('#input_height').val();
	var numColumns = $('#input_width').val();
	console.log(numRows);
	console.log(numColumns);

	var table = $('#pixel_canvas');
	table.attr('align', 'center');
	$('#pixel_canvas_grid').remove();
	var tableBody = $("<tbody id='pixel_canvas_grid'></tbody>");
	var row = $('<tr></tr>');
	for (var c = 0; c < numColumns; ++c) {
		row.append($('<td></td>'));
	}
	for (var r = 0; r < numRows; ++r) {
		tableBody.append(row.clone());
	}
	table.append(tableBody);
}

$(makeGrid);

$('#sizePicker').on('submit', function(evt) {
	evt.preventDefault(); // to stop the form from submitting
	makeGrid();
});

$( '#pixel_canvas' ).on( 'click', 'td', function() {
	var color = $('#colorPicker').val();
	$(this).attr('bgcolor', color);
});
