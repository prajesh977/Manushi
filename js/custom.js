$(function(){


$('.header-right--information ').off('click').on('click', function(){

if($(this).hasClass('active')){
   $(this).removeClass('active');
}
else{
    $(this).addClass('active');
}
});


$('body').click(function(evt){    
       if(evt.target.id == "navbar-toggler")
         {
         	$('body').append('<div class="overlay"></div>');
		}
		else
		{
			$('.overlay').remove();
		}
	});
});
	
