$(document).ready(function() {

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

	var page = document.getElementById('page'),
		internal = wrapper.getElementsByTagName('a');
	
	for (var i = 0; i < internal.length; i++) {
		internal[i].addEventListener('click', function(e) {
			e.preventDefault();
	
			var anchor = this.getAttribute('href').replace('#', ''),
				target = document.getElementById(anchor).offsetTop -35;
	
			if ( target == '' || target <= 0 ) {
				var target = '0';
			}
	
			scrollTo(0, target);
			toggleNav();
		})
	}
	
})	