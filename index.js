
var done_items = {
	color : "gray",
	textDecoration: "line-through"
}
var not_done_items = {
	color : "#666666",
	textDecoration: "none"
}

$('ul').on('click','li',function(){
	if ($(this).css("color")==="rgb(128, 128, 128)") {
		$(this).css(not_done_items);
	} else {
		$(this).css(done_items);
	}
});

$('ul').on('click','span',function(e){
	$(this).parent().fadeOut('500',function(){
		$(this).remove();
	});
	e.stopPropagation();
})



$('input').keypress(function(event){
		if(event.keyCode === 13){
			var todo_item = $(this).val();
			$('ul').append("<li><span><i class='fa fa-trash'></i></span> "+todo_item+"</li>");
			$(this).val("");
		}
		
})
$('.fa-plus').on('click', function(){
	$('input').fadeToggle(200);
})