$(document).ready(function() {

    $("p").click(function(){
        $("p").css('color', 'red');
    });

    $("h2").hover(function(){
        $("h2").css('background-color', 'lightblue'); 
    });

    $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black"); 
    });

    $(".bottom_button").mouseleave(function(){
        $("body").css( "background-color", "#eee"); 
    });

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


}); 
