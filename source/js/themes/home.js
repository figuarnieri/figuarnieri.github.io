$('[data-unikode]').each((i, tag) => {
    var t = $(tag)
    , url = atob(t.data('unikode'))
    ;
    t.attr('href', url);
});
$('[data-menu]').on('click', (e) => {
    var t = $(e.target);
    $('.nav').toggleClass('nav-active');
});
$(window).on('load', (e) => {
    let h = $('body').height();
    $('.bg-cloud, .bg-square-inner').height(h);
});

