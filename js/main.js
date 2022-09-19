$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

	/**
   * Animation on scroll function and init
   */
	 function aos_init() {
		AOS.init({
		  duration: 1200,
		  easing: 'slide',
		  once: true,
		  mirror: false
		});
	  }
	  window.addEventListener('load', () => {
		aos_init();
	  });

	/*Load More Button Script*/
	$(document).ready(function () {
	$('.gallery-content .hovereffects:lt(3)').show();
	$('.less').hide();
	var items =  9;
	var shown =  3;
	$('.more').click(function () {
		$('.less').show();
		shown = $('.gallery-content .hovereffects:visible').length+3;
		if(shown< items) {
			$('.gallery-content .hovereffects:lt('+shown+')').show(300);
		} else {
			$('.gallery-content .hovereffects:lt('+items+')').show(300);
			$('.more').hide();
		}
	});
	$('.less').click(function () {
		$('.gallery-content .hovereffects').not(':lt(3)').hide(300);
		$('.more').show();
		$('.less').hide();
	});
	});
});