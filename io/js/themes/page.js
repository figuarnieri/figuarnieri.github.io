/*PLUGINS*/
$(function(){
	$('form').validationEngine();
	$('[data-mask]').each(function(e,f){
		$(f).mask(f.getAttribute('data-mask'));
	});
});

/*MAIN*/
$(function(){

});