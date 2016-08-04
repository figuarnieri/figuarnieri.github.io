var date = new Date()
, year = date.getFullYear()
, month = date.getMonth()
, init = new Date(year, month-1, 1)
, over = new Date(year, month, 0)
, monthBeforeOver = new Date(year, month, 0)
, monthAfterInit = new Date(year, month+1, 1)
, weekDay = null
, getWeek = function(e){
	return new String(e).substring(0,3);
}
, createCalendar = function(){
	$('#calendar').addClass('cf').html('<div class="calendar-week"></div><div class="calendar-days"></div>');
	console.log(monthAfterInit);
	/*DIAS DA SEMANA*/
	for(j=0;j<7;j++){
		var week = j==0 ? 'Sun' : j==1 ? 'Mon' : j==2 ? 'Tue' : j==3 ? 'Wed' : j==4 ? 'Thu' : j==5 ? 'Fri' : 'Sat'
		, weekDay = week=='Sun' ? 'Dom' : week=='Mon' ? 'Seg' : week=='Tue' ? 'Ter' : week=='Wed' ? 'Qua' : week=='Thu' ? 'Qui' : week=='Fri' ? 'Sex' : 'Sab'
		;
		$('#calendar .calendar-week').append('<div class="col-week ta-c">'+weekDay+'</div>');
	}
	for(j=0;j<7;j++){
		var week = j==0 ? 'Sun' : j==1 ? 'Mon' : j==2 ? 'Tue' : j==3 ? 'Wed' : j==4 ? 'Thu' : j==5 ? 'Fri' : 'Sat'
		, weekInit = getWeek(init)
		, weekOver = getWeek(over)
		, weekDay = week=='Sun' ? 'Dom' : week=='Mon' ? 'Seg' : week=='Tue' ? 'Ter' : week=='Wed' ? 'Qua' : week=='Thu' ? 'Qui' : week=='Fri' ? 'Sex' : 'Sab'
		;
		$('#calendar .calendar-days').append('<div class="col-week ta-c" data-week="'+week+'">'+weekDay+'</div>');
		$('[data-week="'+weekInit+'"]:first').addClass('enabled').text(init.getDate()).prevAll('[data-week]');
	}
	$('#calendar .calendar-days .enabled:first').prev().text(monthBeforeOver.getDate()).addClass('col-disabled')
	/*COMPLETE MES ATUAL*/
	for(var i=2;i<=over.getDate();i++){
		var j = i%7
		, week = j==0 ? 'Sun' : j==1 ? 'Mon' : j==2 ? 'Tue' : j==3 ? 'Wed' : j==4 ? 'Thu' : j==5 ? 'Fri' : 'Sat'
		, lastEnabled = $('#calendar .calendar-days .enabled:last')
		;
		if(lastEnabled.next().length){
			lastEnabled.next().addClass('enabled').text(i);
		} else {
			lastEnabled.after('<div class="col-week enabled ta-c" data-week="'+week+'">'+i+'</div>');
		}
	}
	/*COMPLETE MES ANTERIOR*/
	for(var i=monthBeforeOver.getDate()-1;i>0;i--){
		var j = i%7
		, week = j==0 ? 'Sun' : j==1 ? 'Mon' : j==2 ? 'Tue' : j==3 ? 'Wed' : j==4 ? 'Thu' : j==5 ? 'Fri' : 'Sat'
		, lastDisabled = $('#calendar .calendar-days .col-disabled:first')
		;
		if(lastDisabled.prev().length){
			lastDisabled.prev().addClass('col-disabled').text(i);
		}
	}
	/*COMPLETE MES POSTERIOR*/
	for(i=0,j=$('[data-week]').length;j<42;j++){
		$('[data-week]:last').after('<div class="col-week col-disabled ta-c" data-week="">'+(++i)+'</div>');
	}
};