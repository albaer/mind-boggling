$(document).ready(function() {
  window.currentBoard = myBoard.shakeBoard();
    for (i = 0; i < 16; i++) {
      $("#cell"+i).append(currentBoard[i])
    };
	$("#shake").on("click", function(event) {
		event.preventDefault();
    // $("#board_container").effect("shake", 80);
		$("td").empty();
		window.currentBoard = myBoard.shakeBoard();

		for (i = 0; i < 16; i++) {
			$("#cell"+i).append(currentBoard[i])
		};
	});

  $("#user_word_input").on("submit", function(event) {
    event.preventDefault();
    $("td").removeClass("found");
    var target = $('input[name=target_word]').val().toUpperCase();
    $('input[name=target_word]').val('');
    boggle = new Solver(window.currentBoard, target);
    var path = boggle.solve();
    if (path.length > 0) {
    $.each(path, function(index, position){
      $("#cell"+position).addClass("found");
    });
    window.setTimeout(function() {
      $("td").removeClass("found");
    }, 300);

  } else {
    $("#user_word_input").effect("shake", {distance: 4, times: 2}, 150);
  };
  });
});
