$(function(){

  (function homeTransition() {

    var homePageTransition = function() {
      $('#home-header').removeClass('before');
      $('img.logo.powerbi').attr('style', 'top:0;-webkit-transition: top 1.2s ease;transition: top 1.2s ease;')
    }

    var setInitialPowerBiTop = function() {
      var header = $('#home-header');
      var headerHeight = $(header).outerHeight();
      var content = $('.header-content-wrapper');
      var contentHeight = $(content).outerHeight();
      var top = 190;
      if ($(window).outerWidth() < 600 && ($(window).outerHeight() > 1024)) {
        top = (headerHeight/2)-(contentHeight/2)-30;
      } else if (($(window).outerWidth() > 992)) {
        top = (headerHeight/2)-(contentHeight/2)+70;
      } else if (($(window).outerHeight() > 1024)) {
        top = (headerHeight/2)-(contentHeight/2)-10;
      } else if ($(window).outerWidth() < 600) {
        top = 160;
      }
      var logo = $('img.logo.powerbi');
      $(logo).attr('style', 'opacity:1;top:'+top+'px;');
    }

    var setHeaderContentMarginTop = function() {
      var content = $('.header-content-wrapper');
      var contentHeight = $(content).outerHeight();
      var marginTop = (contentHeight/2)-155;
      $(content).attr('style', 'margin-top: -'+marginTop+'px;');
    }

    var takeTransOffButton = function() {
      var button = $('#home-page-email-input-top input[type="submit"]');
      $(button).addClass('no-trans');
    }

    setHeaderContentMarginTop();
    $(window).resize(function() {
      setHeaderContentMarginTop();
    });

    setInitialPowerBiTop();

    setTimeout(function(){
      homePageTransition();
    }, 1500);

    setTimeout(function(){
      takeTransOffButton();
    }, 3200);

    //make user scroll to top on page load
    //this is so animation starts in correct spot
    // $(window).on('beforeunload', function() {
    //   $(window).scrollTop(0); //set browser scroll to top to override where user might have been before refresh
    // });

  }());


});
