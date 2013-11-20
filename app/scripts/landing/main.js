$(document).ready(function() {

  // DROPDOWN

  $('#cssmenu ul ul li:odd').addClass('odd');
  $('#cssmenu ul ul li:even').addClass('even');
  
  $('#cssmenu > ul > li > a').click(function() {
  
    var checkElement = $(this).next();
  
    $('#cssmenu li').removeClass('active');
    $(this).closest('li').addClass('active'); 
  
    if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
      $(this).closest('li').removeClass('active');
      checkElement.slideUp('normal');
    }
    if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
      $('#cssmenu ul ul:visible').slideUp('normal');
      checkElement.slideDown('normal');
    }
  
    if($(this).closest('li').find('ul').children().length == 0) {
      return true;
    } else {
      return false; 
    }
  
  });

  var body = document.body,
    nav = document.getElementById('nav'),
    toggle = document.getElementById('toggle'),
    wrapper = document.getElementById('wrapper'),
    overlay = document.getElementById('overlay'),
    scrollbar = document.getElementById('scrollbar');
  
  function toggleNav() {
    function setHeight(value) {
      scrollbar.firstChild.style.height = value+'%';
    }
    
    function toggleScrollbar(value) {
      scrollbar.style.opacity = value;
    }
    
    var windowHeight = window.innerHeight,
      wrapperHeight = wrapper.scrollHeight;
    
    if ( wrapperHeight > windowHeight ) {
      toggleScrollbar(1);
      setHeight( ( windowHeight / wrapperHeight ) * 100 );
    }
    
    wrapper.onscroll = function() {
      var scrolledPercentage = ( wrapper.scrollTop / wrapper.scrollHeight ) * 100;
      scrollbar.firstChild.style.top = scrolledPercentage+'%';
    }
    
    window.onresize = function() {
      var windowHeight = window.innerHeight,
        wrapperHeight = wrapper.scrollHeight;
  
      setHeight( ( windowHeight / wrapperHeight ) * 100 );
  
      if ( body.getAttribute('data-nav') ) {
        if ( wrapperHeight < windowHeight ) {
          toggleScrollbar(0);
        } else {
          toggleScrollbar(1);
        }
      }
    }
    
    var attr = 'data-nav',
      cls = 'open';
    
    if ( !body.getAttribute(attr) ) {
      body.setAttribute(attr, cls);
    } else {
      body.removeAttribute(attr);
      toggleScrollbar(0);
    }
  }
  
  overlay.onclick = function() {
    toggleNav();
  }
  toggle.onclick = function() {
    toggleNav();
  }

  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']'
          );
          if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
          return false;
          }
      }
    });
 
})
