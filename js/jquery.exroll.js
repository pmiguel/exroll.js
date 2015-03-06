/**
  * jQuery Exroll 0.2
  *
  * @author Pedro Leal - 2015
  * Extended scroll functions for containers, ideal for chat-like applications
  * Static prepend logic based on the implementation
  * by Kirby
  * http://kirbysayshi.com/2013/08/19/maintaining-scroll-position-knockoutjs-list.html
  *
  */
 (function($) {
 	var prevScrollDelta = 0;
 	var prevScrollHeight = 0;
 	// saves the current scroll state of the node
 	$.fn.saveScrollState = function() {
 		prevScrollHeight = this[0].scrollHeight;
 	}
 	// prepends elements to the node keeping the scroll position in place
 	// the effect is the list growing upwards (like chat)
 	$.fn.staticPrepend = function(element, callback) {
 		prevScrollDelta = this[0].scrollHeight - this[0].scrollTop;
 		this.prepend(element);
 		this.scrollTop(this[0].scrollHeight - prevScrollDelta);
 		this.saveScrollState();
 		if(callback)
 			callback(this);
 		return this;
 	};
 	// appends elements to the node and automatically scrolls bottom
 	$.fn.dynamicAppend = function(element, callback) {
 		this.append(element);
 		this.scrollToBottom();
 		this.saveScrollState();
 		if(callback)
 			callback(this);
 		return this;
 	};
 	// readjusts the container to the original position. Ideal when
 	// an element has adjusted it's size
 	$.fn.readjust = function(callback) {
 		var scrollDelta = this[0].scrollHeight - prevScrollHeight;
 		this.scrollTop(this[0].scrollTop + scrollDelta);
 		this.saveScrollState();
 		if(callback)
 			callback(this);
 		return this;
 	};
 	// Scroll helper. scrolls the container to bottom
 	$.fn.scrollToBottom = function() {
 		this.scrollTop(this[0].scrollHeight);
 	}
 	// scroll helper. scrolls the container to top
 	$.fn.scrollToTop = function() {
 		this.scrollTop(0);
 	}
 }(jQuery));