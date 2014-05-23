/**
app
app.init
app.helper
	.addEvent
	.removeEvent
	.getStyle
**/

var app = app || {};

app.init = function() {
	var app = this;
	var nav = document.querySelectorAll('nav.main')[0].getElementsByTagName('ul')[0];
	var toggle = document.querySelectorAll('.menuToggle')[0];

	this.helper.addEvent(toggle, 'mousedown', function(e) {
		var nClass = nav.getAttribute('class');
		if(nClass === 'hide')
			nav.className = "";
		else
			nav.className = "hide";

		e.preventDefault();
		return false;
	});

	nav.setAttribute('class', 'hide');
};

app.helper = app.helper || {};

app.helper.addEvent = function(el, ev, fn) {
	if (el.addEventListener)
		el.addEventListener(ev,fn,false);
	else if (el.attachEvent)
		el.attachEvent('on'+ev,fn);
};

app.helper.removeEvent = function(el, ev, fn) {
	if (el.removeEventListener)
		el.removeEventListener(ev,fn,false);
	else if (el.detachEvent)
		el.detachEvent('on'+ev,fn);
};

app.helper.getStyle = function(el, prop) {
	if (el.currentStyle)
		var style = el.currentStyle[prop];
	else if (window.getComputedStyle)
		var style = window.getComputedStyle(el,null).getPropertyValue(prop);
	return style;
};

document.addEventListener('DOMContentLoaded', function() {
	//app.init();
});