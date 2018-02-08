window.deviceType = function(e){
	return window.deviceWidth = (e >= 997) ? 'pc' : (e <= 996 && e > 600) ? 'tablet' : 'mobile';
}
deviceType(window.innerWidth);
document.querySelectorAll('[data-js]').forEach(item => {
	if(item.textContent.trim().length){
		const msg = {
			  text: 'Ueeeepa!! Chama os programadores e designers, pq exite algum script [data-js] nesta página, sem estar na all.js'
			, tag: item
		}
		console.info(msg);
	}
});
document.querySelectorAll('[data-css]').forEach(item => {
	if(item.sheet.cssRules.length){
		const msg = {
			  text: 'Exite um estilo na tag [data-css] nessa página'
			, tag: item
		}
		console.info(msg);
	}
});
window.addEventListener('resize', () => deviceType(window.innerWidth));