$('[data-menu]').on('click', (e) => {
    var t = $(e.target);
    $('.nav').toggleClass('nav-active');
});
$('[data-unikode]').each((i, tag) => {
    var t = $(tag)
    , url = atob(t.data('unikode'))
    , attr = t.data('unikode-attr')||'title'
    ;
    t.attr(attr, url);
});
$('body').on('click', '[data-portfolio]', (e) => {
    var t = $(e.target)
    , x = t.offset().left
    , y = t.offset().top
    , width = t.innerWidth()
    , height = t.innerHeight()
    , mouseX = e.pageX
    , mouseY = e.pageY
    , left = (mouseX < window.innerWidth/2) ? x : x - width
    , top = (mouseY < window.innerHeight/2) ? y : y - height
    , html = t.children('.d-n').html()
    , index = t.parent().index() % 4
    ;
    if(t){
        t.children('.portfolio-hidden').slideDown();
    } else {
        $('.portfolio-content').remove();
        $('body').append('<div class="portfolio-content portfolio-eq-'+index+'" />');
        $('.portfolio-content').css({left: left+'px',top: top+'px',width: width*2,height: height * 2}).addClass('portfolio-content-render');
        $('.portfolio-content').append(html).append('<button data-portfolio-close class="fa fa-times button-close"></button>');
    }
});
$('body').on('click', '[data-portfolio-close]', (e) => {
    var t = $(e.target);
    alert(1);
    if(t){
        t.closest('.portfolio-hidden').slideUp();
    } else {
        t.closest('.portfolio-content').fadeOut(600, (f) => {
            $(f.target).remove();
        });
    }
});
$('body').on('click', '[data-open-next]', (e) => {
    var t = $(e.target);
    if(t.attr('data-open-next')==='open'){
        return t.attr('data-open-next','').removeClass('labs-active').next().slideUp();
    }
    $('[data-open-next="open"]').attr('data-open-next','').removeClass('labs-active').next().slideUp();
    t.attr('data-open-next','open').addClass('labs-active').next().slideToggle();
});
$('body').on('click', '[data-get]', (e) => {
    var t = $(e.currentTarget)
    , url = t.attr('href')
    , local = t.attr('data-get')
    , to = t.data('get-to')
    ;
    e.preventDefault();

    $('.nav').removeClass('nav-active');
    isHome();

    $.ajax({
          url: url
        , method: 'post'
        , beforeSend: (f) => {
            $(to).html('Carregando...');
        }
        , success: (f) => {
            let html = new DOMParser().parseFromString(f, "text/html")
            , htmlNew = $(local, html).html()
            ;
            console.log(htmlNew);
            $(to).html(htmlNew);
            history.pushState('', 'Filipe Guarnieri - Web Developer', url);
        }
    });
});
$(window).on('load', (e) => {
    isHome();
});
let isHome = () => {
    console.log(location.pathname);
    (/index/gi.test(location.pathname)) ? $('.bg-square').removeClass('bg-square-inner') : $('.bg-square').addClass('bg-square-inner');
    return;
}