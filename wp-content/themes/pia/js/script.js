$( function(){

	if ( $('#cookie-policy') ) {
		$('#cookie-policy a.btn-close').on('click', function(e){

			var d = new Date();
		    d.setTime(d.getTime() + (1500*24*60*60*1000));
		    var expires = "expires="+ d.toUTCString();
		    document.cookie = "cookie-policy=ok;" + expires + ";path=/";

			$('#cookie-policy').fadeOut();
		});
	}

	$('#header ul li a').on('click', function(e){

		if ( !$(this).hasClass('btn-contact'))
			e.preventDefault();
		
		if ( $(this).hasClass('btn-menu') ) {
			if ( $('#header').hasClass('cover') ) {
				$('#header').removeClass('cover');
			}
			$('#header').addClass('show-nav');
			$('#nav').addClass('active');
		}
		else if ( $(this).hasClass('btn-contact') ) {

		}
		else if ( $(this).hasClass('btn-close') ) {
			$('#header').removeClass('show-nav').addClass('delay');
			$('#nav').removeClass('active');
			$(window).scroll();
		}
	});

	if ( $('section#home').length > 0 ) {

		navInterval = setInterval(function(){
			clearInterval(navInterval);
			$('#header').removeClass('cover').removeClass('delay');
		}, 5000);

		//$('nav').addClass('cover');
		$(window).scroll(function(){
			if ( !$('#nav').hasClass('active') )
				if ($(window).scrollTop() > 0) {
					clearInterval(navInterval);
					$('#header').removeClass('cover').removeClass('delay');
				}
				else
					$('#header').addClass('cover');
		});
		$(window).scroll();
	}

	if ( $(".enquiry .owl-carousel").length > 0 ) {
		$('.enquiry .wpcf7').prepend('<span class="progress-bar"></span>');
		enquiryCarousel = $(".enquiry .owl-carousel");
		enquiryCarousel.owlCarousel(
		  	{
		  		items: 1,
		  		nav: false,
		  		mouseDrag: false,
		  		touchDrag: false,
		  		margin: 0
		  	}
		);
		enquiryCarousel.on('changed.owl.carousel', function(e) {
		    $('.enquiry .wpcf7 .progress-bar').css('width', (e.item.index/(e.item.count-1)*100)+'%');
		})
		enquiryCarousel.find('.btn-next').on('click', function(e){
			e.preventDefault();

			if ( $(this).parent().parent().find('.wpcf7-text').val()!="" ) {

				if ( $(this).parent().parent().find('.wpcf7-text').hasClass('wpcf7-email') ) { // test email
					if ( /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(this).parent().parent().find('.wpcf7-text').val()) ) {
						$(this).parent().parent().find('.wpcf7-text').removeClass('wpcf7-not-valid');
						enquiryCarousel.trigger('next.owl.carousel');

					} else {
						$(this).parent().parent().find('.wpcf7-text').addClass('wpcf7-not-valid');
					}
				
				} else {

					$(this).parent().parent().find('.wpcf7-text').removeClass('wpcf7-not-valid');
					enquiryCarousel.trigger('next.owl.carousel');
				}

			} else {

				$(this).parent().parent().find('.wpcf7-text').addClass('wpcf7-not-valid');
			}
		});

		$('.enquiry .wpcf7-form .wpcf7-text').attr('tabindex', '-1');
		$('.enquiry .wpcf7-form input[name="your-accept"]').attr('tabindex', '-1');
		$('.enquiry .wpcf7-form .wpcf7-submit').attr('tabindex', '-1');
	}


	if ( $(".team-brokers").length > 0 ) {

		$( window ).resize(function() {

			if ( $(window).width() < 575 )
				if ( $('.team-brokers .bio .member.active').length == 0 )
					$($('.team-brokers .bio .member')[0]).addClass('active');
		});

		$('.team-brokers .images .area a').each(function(index, el){
			$(el).css('top', $(el).data('position-top')).css('left', $(el).data('position-left'));
		});
		$('.team-brokers .images .area a').on('mouseover', function(e){
			$($('.team-brokers .images .members img')[$(this).index()]).addClass('active');
		});
		$('.team-brokers .images .area a').on('mouseout', function(e){
			$($('.team-brokers .images .members img')[$(this).index()]).removeClass('active');
		});
		$('.team-brokers .images .area a').on('click', function(e){
			$('.team-brokers .bio .member').removeClass('active');
			$($('.team-brokers .bio .member')[$(this).index()]).addClass('active');
			$('.team-brokers .bio').addClass('active');
		});

		$('.team-brokers .bio a').on('click', function(e){
			e.preventDefault();

			if ( $(this).hasClass('btn-close') ) {
				$('.team-brokers .bio').removeClass('active');
				$('.team-brokers .bio .member').removeClass('active');
			}
			else if ( $(this).hasClass('btn-more') ) {
				$('.team-brokers .bio .member').removeClass('more');
				$('.team-brokers .bio .member.active').addClass('more');
			}
			else if ( $(this).hasClass('btn-close-more') ) {
				$('.team-brokers .bio .member').removeClass('more');
			}
			else if ( $(this).hasClass('btn-prev') ) {
				var _index = $('.team-brokers .bio .member.active').index();
				_index = (_index == 0) ? $('.team-brokers .bio .member').length-1 : _index-1;
				$('.team-brokers .bio .member').removeClass('active');
				$($('.team-brokers .bio .member')[_index]).addClass('active');

			}
			else if ( $(this).hasClass('btn-next') ) {
				var _index = $('.team-brokers .bio .member.active').index();
				_index = (_index == $('.team-brokers .bio .member').length-1) ? 0 : _index+1;
				$('.team-brokers .bio .member').removeClass('active');
				$($('.team-brokers .bio .member')[_index]).addClass('active');
			}
		});
	}

	if ( $(".time-line").length > 0 ) {
		$('.time-line a').on('click', function(e){
			$('.time-line li').removeClass('active');
			$(this).parent().addClass('active');
		});
	}

	if ( $(".feature").length > 0 ) {

		$('.feature').each(function(){
			$('<h2>'+ $(this).find('h1').html() +'</h2>').insertAfter($(this).find('h1'));
			$(this).find('h1').remove();
		});		
	}

	$('#bioModal').on('show.bs.modal', function (event) {
		var member = $(event.relatedTarget).hasClass('image') ? $(event.relatedTarget).parent() : $(event.relatedTarget).parent().parent();
		var modal = $(this);
		modal.find('.modal-title').text(member.find('.name').text());
		modal.find('.modal-body').html(member.find('.bio').html());
	})

	document.addEventListener( 'wpcf7mailsent', function( event ) {
	    if ( '12' == event.detail.contactFormId ) {
	        $('.enquiry .wpcf7 .progress-bar').css('width', '100%');
	        enquiryCarousel.trigger('next.owl.carousel');
	        setTimeout(function(){
	        	enquiryCarousel.trigger('to.owl.carousel', [0]);
	        }, 5000);
	    }
	}, false );
	
});