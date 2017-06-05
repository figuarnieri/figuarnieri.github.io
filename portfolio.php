<?php include 'includes/header.php'; ?>
    <main id="main" role="main">
        <div class="full-height cf">
            <div class="pc-col-11">
                <h1 class="bigtitle">Portfolio</h1>
            </div>
            <div class="pc-col-20 t-col-20 col-lr">
                <div class="portfolio cf">
                    <?
                    $item = array(
                          array('NET Combo', 'Desenvolvi a reformulação da identidade visual do canal web e a funcionalidade de seu sistema administrador, como também trabalhei para tornar relevante os testes AB, Design Thinking, UX (User Experience) e SEO nos mínimos detalhes da Landing Page o que resultou no aumento de visitações e vendas de uma mídia que já possuía altos níveis de excelência e conversão.', 'net-combo.jpg')
                        , array('BlackTag', 'Tive um importante trabalho de direcionamento de ideias, criação e execução para esse projeto, de alta complexidade, se tornar viável e totalmente integrado aos eventos do Facebook.', 'blacktag.jpg')
                        , array('CSN', 'Desenvolvi uma refatoração de complexo sistema de interligação dados, digitalizando todo processo do gigantesco sistema de intranet da empresa, fazendo a CSN usufruir de um sistema mais moderno, seguro e amigável para os vendedores com diferentes níveis de conhecimento web, com relatórios constantemente atualizados.', 'csn.jpg')
                        , array('FreeCô', 'Desenvolvi em um tempo recorde, um e-commerce rápido e robusto o suficiente para atender aos resultados que a parte de Marketing Digital precisaria para o lançamento da nova loja virtual.', 'freeco.jpg')
                        , array('Carrefour Tour 40 Anos', 'Através de uma plataforma que desenvolvidi a parte do Front, O Carrefour pode ter total integração com os dispositivos mobiles para contar, em tempo real, a viagem através de todas lojas do Carrefour no pais.', 'carrefour.jpg')
                        , array('EuPaciente', 'Criei a parte de Front End e acompanheio o conceito e comportamentos dessa rede social. Foram quase 2 anos de produção evolvendo várias áreas de desenvolvimento, desde sua fase inicial com a criação de sua identidade visual até os detalhes mais estratégicos de suas funcionalidades e serviços prestados.', 'eupaciente.jpg')
                        , array('AlergoShop', 'Depois de um estudo feito com pessoas alérgicas, de como elas procuram produtos e quais suas maiores dificuldades na hora de finalizar uma compra foi desenvolvido de um sistema que cruzasse todos os dados do usuário com compostos dos produtos e informasse ao mesmo qual produto poderia ou não lhe causar alergia antes dele finalizar sua compra.', 'alergoshop.jpg')
                        , array('Academia de Jogos', 'Após diversas tentativas frustradas de colocar em pratica sua loja virtual com outras produtoras web, a Academia de Jogos procurou a Ibaro (empresa onde trabalho), para melhorar o UX do site a atualizar a identidade visual do site.', 'academia-de-jogos.jpg')
                        , array('ToolBox Trade Marketing', 'O Grupo ToolBox é composto de duas empresas complementares e apesar de terem as mesmas estruturas, elas possuem conteúdos independentes. Ao invés de seguir o formato convencional em dividir o site do Grupo em dois sites internos, inovamos ao apresentar a navegação de dois sites gêmeos expostos simultaneamente no mesmo front de forma original e totalmente única.', 'toolbox.jpg')
                        , array('Psicólogo Ari Guarnieri', 'Desenvolvido em um plataforma Wordpress, HTML5, e CSS3, onde o cliente tem facilidade em alterar todas as informações do site através do Administrador do site', 'ari-guarnieri.jpg')
                        , array('Eduardo Muller Barbershop', 'Fiz o layout e a parte de Front End do barbeiro Eduardo Muller, utilizando Wordpress, jQuery, HTML5, CSS3 e tornando ele um site  Responsivo', 'eduardo-muller.jpg')
                        , array('Ago de Souza', 'Fiz o layout e a parte de Front End do cantor de RAP Ago de Souza, utilizando Wordpress, jQuery, HTML5, CSS3, JS Hisory API, e tornando ele um site  Responsivo', 'ago-de-souza.jpg')
                    );
                    foreach ($item as $key => $items) { ?>
                        <div class="pc-col-5 t-col-20 col-lr">
                            <div data-portfolio class="portfolio-item" style="background-image: url(assets/img/<?=$items[2]?>);">
                                <div class="portfolio-hidden d-n">
                                    <div class="portfolio-main">
                                        <div class="pc-d-n ta-r">
                                            <button data-portfolio-close class="portfolio-close fa fa-times">fechar</button>
                                        </div>
                                        <img class="portfolio-img" src="assets/img/<?=$items[2]?>" alt="">
                                        <h2 class="portfolio-title"><?=$items[0]?></h2>
                                        <p class="portfolio-text"><?=$items[1]?></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <? } ?>
                </div>
            </div>
        </div>
    </main>
<?php include 'includes/footer.php'; ?>