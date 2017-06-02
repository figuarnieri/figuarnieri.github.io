/*IBARO*/
;
var device, deviceType
, url = location.host.replace(/^(www|local|log|dev)\.|\.(com|co|es|edu|gov|info|org|net|uol\.com)(|\.(br|))$/gi,'')
;
deviceType = function(e){
	window.device = (e >= 997) ? 'pc' : (e <= 996 && e > 600) ? 'tablet' : 'mobile';
}
deviceType(window.innerWidth);

$('[data-js]').each(function(e, f){
	if(f.textContent.trim().length){
		var msg = {
			  text: 'Ueeeepa!! Chama os programadores e designers, pq exite algum script [data-js] nesta página, sem estar na all.js'
			, tag: f
		}
		console.info(msg);
	}
});
$('[data-css]').each(function(e, f){
	if(f.sheet.cssRules.length){
		var msg = {
			  text: 'Exite um estilo na tag [data-css] nessa página'
			, tag: f
		}
		console.info(msg);
	}
});
if(document.querySelector('[data-error-close]')){
	document.querySelector('[data-error-close]').addEventListener('click',function(e){
		var io_error = document.querySelector('.error-box');
		e.preventDefault();
		io_error.style.opacity=1;
		setInterval(function(){
			(io_error.style.opacity<=0) ? io_error.style.display='none' : io_error.style.opacity-=.05;
		},30);
	});
}

$(window).on('keyup', function(e){
	if(e.keyCode===13 && e.ctrlKey===true){
		window.open('http://adm.ibaro.com.br/'+url,'_blank');
	}
}).on('resize', function(e){
	deviceType(window.innerWidth);
});
$('img').on('error', function(){
	this.classList.add('img-error');
});
