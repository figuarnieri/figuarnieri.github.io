document.querySelectorAll('.header a').forEach( item => {
    if(item.pathname===location.pathname || item.getAttribute('href')==='index.html'&&location.pathname==='/' || item.getAttribute('href')==='sobre-profissional.html'&&location.pathname==='/sobre-pessoal.html'){
        item.classList.add('header--link-active');
    }
});
document.addEventListener("DOMContentLoaded", () => {
	document.querySelector('[data-date]').textContent = new Date().getFullYear();
});

document.addEventListener('click', event => {
    const tag = event.target;
    if(tag.hasAttribute('data-go')){
        event.preventDefault();
        if(tag.closest('.header')){
            document.querySelectorAll('.header--link-active').forEach( item => {
                item.classList.remove('header--link-active');
            });
            tag.classList.add('header--link-active');
        }
        if(location.pathname !== tag.pathname){
            const xhr = new XMLHttpRequest()
            , bodyClass = document.querySelector('.loading').classList
            , after = tag.dataset.goAfter
            ;
            // bodyClass.add('loading--init');
            xhr.open('GET', tag.pathname, true);
            xhr.addEventListener('loadend', (res) => {
                if(res.target.status===200){
                    const time = parseFloat(getComputedStyle(document.body).transitionDuration)
                    , parser = new DOMParser()
                    , html = parser.parseFromString(res.target.responseText, 'text/html')
                    , boardLoad = html.querySelector('main')
                    , boardCurrent = document.querySelector('main')
                    ;
                    boardCurrent.innerHTML = boardLoad.innerHTML;
                    history.pushState('','', tag.href);
                    setTimeout(() => {
                        //bodyClass.remove('loading--init');
                        if(after){
                            const fn = new Function(after);
                            fn();
                        }
                    }, time*1200);
                }
            }, false);
            xhr.send();
        }
    }

    if(tag.pathname===window.location.pathname){
        event.preventDefault();
        document.querySelector('.header--check:checked').click();
    }

    if(tag.tagName==='A'){
        if(window['Menu'].checked){
            window['Menu'].click();
        }
    }
});

window.squareHome = () => {
	document.body.classList.remove('boxcontent');
}
window.squarePages = () => {
	document.body.classList.add('boxcontent');
}