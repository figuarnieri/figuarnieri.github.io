<?php include 'header.php'; ?>
    <main id="main" role="main">
        <div class="full-height cf">
            <div class="pc-col-20 t-col-20">
                <h1 class="bigtitle">Labs</h1>
                <div class="cf va-t">
                    <div class="pc-col-7 -pc-col-1 col-lr t-d-n">
                        <div class="labs-images">imagem</div>
                    </div>
                    <div class="pc-col-11 t-col-20">
                        <ul class="accordion">
                            <li class="labs-item">
                                <h2 data-open-next class="labs-title fa fa-minus">Github</h2>
                                <div class="labs-content">
                                    <div class="labs-text">
                                        <ul class="labs-list">
                                            <?
                                            $item = array(
                                                  array('Zo Framework','https://github.com/figuarnieri/Zo-Framework')
                                                , array('FontAstico','https://github.com/figuarnieri/fontAstico')
                                                , array('Savefield','https://github.com/figuarnieri/savefield')
                                                , array('Prevalue','https://github.com/figuarnieri/prevalue')
                                                , array('Tipfy','https://github.com/figuarnieri/tipfy')
                                                , array('Salepress','https://github.com/figuarnieri/salepress')
                                            );
                                            foreach ($item as $i => $items) { ?>
                                                <li class="labs-list-text"><a class="labs-link" target="_blank" href="<?=$items[1]?>"><?=$items[0]?></a></li>
                                            <? } ?>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
<?php include 'footer.php'; ?>