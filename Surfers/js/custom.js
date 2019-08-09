
/*slider*/
$(document).ready(function(){
  $('.bxslider').bxSlider({
  	controls: true,
  	pager: false
  });

  


function addInternClass(){
	sliderItem.each(function(index, element){
		
		var internElem = $(element).find('.surfboards-slider__text-text');
		$(internElem[0]).hasClass('showed') ? $(internElem[0]) : $(internElem[0]).addClass('showed');

		var internTab = $(element).find('.tabs');
		console.log(internTab[0]);
		
		$(internTab[0]).append('<span class="decor-line"></span>');
	});
}

/* for number slider*/
function setPrevNumber(number){
	number--;
	if(number === 0) {
		var endNumber = +$('.surfboards-slider__item').length - 2;
		endNumber < 10 ? $('.page').text('0' + endNumber) : $('.page').text(endNumber);
	} else {
		number < 10 ? $('.page').text('0' + number) : $('.page').text(number);
	}
}

function setNextNumber(number){
	number++;
	if(number > (+$('.surfboards-slider__item').length - 2)) {
		$('.page').text('01');
	} else {
		number < 10 ? $('.page').text('0' + number) : $('.page').text(number);
	}
}

function setStartValue(arr) {
	$('.page').text('01');
	if(arr.length < 10){
		$('.page-all').text('0' + (arr.length - 2));
	} else {
		$('.page-all').text(arr.length - 2);
	}
}


/*for tabs slider*/
function removeClassShowed(elem) {
	elem.each(function(){
		if(elem.hasClass('showed')) {
			elem.removeClass('showed');
		}
	});
}
function addClassShowed(i, elem){
	$(elem[i]).addClass('showed');
}




/*показ номеру даного слайду*/
  var sliderItem = $('.surfboards-slider__item');
  setStartValue(sliderItem);

  $('a.bx-prev').on('click', function(){
  	$('span.decor-line').remove();
  	removeClassShowed(elem); // видалення класу показу вкладки
  	addInternClass(); // додавання декоративного елементу
  	var page = +$('.page').text();
  	setPrevNumber(page);
  });

  $('a.bx-next').on('click', function(){
  	$('span.decor-line').remove();
  	removeClassShowed(elem); // видалення класу показу вкладки
  	addInternClass(); // додавання декоративного елементу
  	var page = +$('.page').text();
  	setNextNumber(page);
  });



  /*Показ актуальної вкладки*/
  var elem = $('.surfboards-slider__text-text');
  var tab = $('.surfboards-slider__tabs-wrapp .tabs');
  var decorElem = $('.surfboards-slider__tabs-wrapp');
  const heightSlider = $('.surfboards .bx-wrapper').height(); //висота слайдера для подальшої зміни висоти при зміні вміту складок
  tab.each(function(index, element){
  	$(element).on('click', function(){
	  	removeClassShowed(elem);
	  	addClassShowed(index, elem);
	  	$('span.decor-line').remove();
	  	$(element).append('<span class="decor-line"></span>');

	  
		/*alert(heightItem);
		alert(firstTab);
		alert(thisTab);*/

	  });
  });

  /*$('.surfboards-slider__tabs-wrapp tabs').on('click', function(){
  	alert('555');
  	
  });*/
  

  /*about-us закриття модального вікна*/
  $('.description-surf__close').on('click', function(){
  	$('.description-surf__wrapp').addClass('description-surf--close');	
  });


  /*about-us видалення заставки і завантаження відео*/
  $('.index-video__play').on('click', function(){
  	$(this).addClass('video-close');
  	$('.index-video__bgImage').addClass('video-close');
  	$('.about-us__overlay').removeClass('none-show');
  	$('.index-video').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/A_0tgAVjQPw" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
  });

  /*about-us повернення заставки і видалення відео*/
  $('.about-us__overlay').on('click', function(){
  	$('.index-video__play').removeClass('video-close');
  	$('.index-video__bgImage').removeClass('video-close');
  	$('iframe').remove();
  	$('.about-us__overlay').addClass('none-show');
  });



  /*our team зміна розташування парних і непарних елементів*/
  $('.our-team-slider__link:odd').on('mouseenter', function(){
  	if($('.our-team-slider__link:even').hasClass('our-team-slider__link--active')) {
  			$('.our-team-slider__link:even').removeClass('our-team-slider__link--active');
  			$('.our-team-slider__link:odd').addClass('our-team-slider__link--active');
  		}
  });

  $('.our-team-slider__link:even').on('mouseenter', function(){
  	 if($('.our-team-slider__link:odd').hasClass('our-team-slider__link--active')) {
  			$('.our-team-slider__link:odd').removeClass('our-team-slider__link--active');
  			$('.our-team-slider__link:even').addClass('our-team-slider__link--active');
  		}
  });

});


 /*footer очищення полів форми*/
 $('.index-footer__form').on('submit', function(e){
 	e.preventDefault();
 	$('.index-footer__field').val('');
 });
  $('.index-footer__button').on('click', function(){
  	$('.index-footer__field').val('');
  });



/*instagram періодичне збільшення картинок*/
function instagramFotoScale(element) {
	$(element).addClass('instagram__foto--scale');
	setTimeout(instagramFotoScaleRemoveClass, 1000, element);
}
function instagramFotoScaleRemoveClass(element) {
	$(element).removeClass('instagram__foto--scale');
}

function instagramFotoInterval(){
	$('.instagram__foto').each(function(index, value){
		setTimeout(instagramFotoScale, ((index+1.5)*1000), $('.instagram__foto')[index]);
	});
};

setInterval(instagramFotoInterval, ($('.instagram__foto').length+2)*1000);




