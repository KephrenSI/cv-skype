
    // <!-- Scroll lors du clic sur le bouton -->
    $('a[href^="#projet"], a[href^="#comp"], a[href^="#pres"], a[href^="#cont"]' ).click(function(){

        var the_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop:$(the_id).offset().top
        }, 'medium');

       return false;
   	});

	// <!-- Élément sélectioné au clic en surbrillance -->
    $(document).ready(function () {
        $('.list1__elt').click(function(e) {

            $('.list1__elt').removeClass('active');

            var $this = $(this);
            if (!$this.hasClass('active')) {
                $this.addClass('active');
            }
            //e.preventDefault();
        });
    });

	// <!-- Élément sélectioné au clic en surbrillance -->
    $(document).ready(function () {
        $('.list3__elt').click(function(e) {

            $('.list3__elt').removeClass('active');

            var $this = $(this);
            if (!$this.hasClass('active')) {
                $this.addClass('active');
            }
            //e.preventDefault();
        });
    });

	// <!-- Affichage du sous-menu lorsque la taille de la fenêtre est inférieure à 770px -->
    if ($(window).width() > 770 ) {
        jQuery(document).ready(function(){
            // On cache la zone de texte
            jQuery('.dropdown').hide();
            // toggle() lorsque du clic sur le bouton
            jQuery('.btn').click(function(){
                jQuery('.dropdown').toggle(0);
                return false;
            });
        });
    }