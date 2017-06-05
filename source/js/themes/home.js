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
    if(device=='tablet'){
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
    if(device=='tablet'){
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

    $.ajax({
          url: url
        , method: 'post'
        , beforeSend: (f) => {
            $(to).html('Carregando...');
            isHome(url);
        }
        , success: (f) => {
            let html = new DOMParser().parseFromString(f, "text/html")
            , htmlNew = $(local, html).html()
            ;
            $(to).html(htmlNew);
            refreshPages();
            history.pushState('', 'Filipe Guarnieri - Web Developer', url);
        }
    });
});
$(window).on('load', (e) => {
    isHome(location.pathname);
});
let isHome = (e) => {
    console.log(e);
    (/index/gi.test(e)||e==='/') ? $('.bg-square').removeClass('bg-square-inner') : $('.bg-square').addClass('bg-square-inner');
    return;
}
, refreshPages = (e) => {
    if($('#portfolio').length){
        new Vue({
              el: '#portfolio'
            , data: {
                items: [{"title":"NET Combo","descript":"Desenvolvi a reformulação da identidade visual do canal web e a funcionalidade de seu sistema administrador, como também trabalhei para tornar relevante os testes AB, Design Thinking, UX (User Experience) e SEO nos mínimos detalhes da Landing Page o que resultou no aumento de visitações e vendas de uma mídia que já possuía altos níveis de excelência e conversão.","img":"net-combo.jpg"},{"title":"BlackTag","descript":"Tive um importante trabalho de direcionamento de ideias, criação e execução para esse projeto, de alta complexidade, se tornar viável e totalmente integrado aos eventos do Facebook.","img":"blacktag.jpg"},{"title":"CSN","descript":"Desenvolvi uma refatoração de complexo sistema de interligação dados, digitalizando todo processo do gigantesco sistema de intranet da empresa, fazendo a CSN usufruir de um sistema mais moderno, seguro e amigável para os vendedores com diferentes níveis de conhecimento web, com relatórios constantemente atualizados.","img":"csn.jpg"},{"title":"FreeCô","descript":"Desenvolvi em um tempo recorde, um e-commerce rápido e robusto o suficiente para atender aos resultados que a parte de Marketing Digital precisaria para o lançamento da nova loja virtual.","img":"freeco.jpg"},{"title":"Carrefour Tour 40 Anos","descript":"Através de uma plataforma que desenvolvidi a parte do Front, O Carrefour pode ter total integração com os dispositivos mobiles para contar, em tempo real, a viagem através de todas lojas do Carrefour no pais.","img":"carrefour.jpg"},{"title":"EuPaciente","descript":"Criei a parte de Front End e acompanheio o conceito e comportamentos dessa rede social. Foram quase 2 anos de produção evolvendo várias áreas de desenvolvimento, desde sua fase inicial com a criação de sua identidade visual até os detalhes mais estratégicos de suas funcionalidades e serviços prestados.","img":"eupaciente.jpg"},{"title":"AlergoShop","descript":"Depois de um estudo feito com pessoas alérgicas, de como elas procuram produtos e quais suas maiores dificuldades na hora de finalizar uma compra foi desenvolvido de um sistema que cruzasse todos os dados do usuário com compostos dos produtos e informasse ao mesmo qual produto poderia ou não lhe causar alergia antes dele finalizar sua compra.","img":"alergoshop.jpg"},{"title":"Academia de Jogos","descript":"Após diversas tentativas frustradas de colocar em pratica sua loja virtual com outras produtoras web, a Academia de Jogos procurou a Ibaro (empresa onde trabalho), para melhorar o UX do site a atualizar a identidade visual do site.","img":"academia-de-jogos.jpg"},{"title":"ToolBox Trade Marketing","descript":"O Grupo ToolBox é composto de duas empresas complementares e apesar de terem as mesmas estruturas, elas possuem conteúdos independentes. Ao invés de seguir o formato convencional em dividir o site do Grupo em dois sites internos, inovamos ao apresentar a navegação de dois sites gêmeos expostos simultaneamente no mesmo front de forma original e totalmente única.","img":"toolbox.jpg"},{"title":"Psicólogo Ari Guarnieri","descript":"Desenvolvido em um plataforma Wordpress, HTML5, e CSS3, onde o cliente tem facilidade em alterar todas as informações do site através do Administrador do site","img":"ari-guarnieri.jpg"},{"title":"Eduardo Muller Barbershop","descript":"Fiz o layout e a parte de Front End do barbeiro Eduardo Muller, utilizando Wordpress, jQuery, HTML5, CSS3 e tornando ele um site  Responsivo","img":"eduardo-muller.jpg"},{"title":"Ago de Souza","descript":"Fiz o layout e a parte de Front End do cantor de RAP Ago de Souza, utilizando Wordpress, jQuery, HTML5, CSS3, JS Hisory API, e tornando ele um site  Responsivo","img":"ago-de-souza.jpg"}]
            }
        });
    }
    if($('#labs').length){
        new Vue({
              el: '#labs'
            , data: {
                items: [{"title":"Zo Framework","link":"https://github.com/figuarnieri/Zo-Framework"},{"title":"FontAstico","link":"https://github.com/figuarnieri/fontAstico"},{"title":"Savefield","link":"https://github.com/figuarnieri/savefield"},{"title":"Prevalue","link":"https://github.com/figuarnieri/prevalue"},{"title":"Tipfy","link":"https://github.com/figuarnieri/tipfy"},{"title":"Salepress","link":"https://github.com/figuarnieri/salepress"}]
            }
        });
    }
    $('[data-tipfy]').each(function(e, f){
        $(f).tipfy({text:$(f).data('tipfy')});
    });
}
refreshPages();