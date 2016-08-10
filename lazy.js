(function() {
	var elements = [];

	function init() {
		var el = document.getElementByTagName('img'),
		ellenght = el.length;

		for (var i = 0; i < ellength; i++) {
			if (typeof(el[i].getAttribute("lazy_src"))) {
				elements.push(el[i];)
			}

		}
	}

	function lazy(){
		if(!elements.length) return;
		var innerHeigh = this.getPosition.ViewPort(),
				ellength = el.length,
				index = 0;

				for (var i=0;i<ellength;i++){
					index = this.getPosition.ElementViewTop(elements[i]);
					if(index - this.getPosition.ScrollTop() < innerHeigh){
						elements[i].src = elements[i].getAttribute("lazy_src");
						delete elements[i];
					}	
				}
	}

	function slowLoad (){
		window.onscroll = window.onload = function(){
			setTimeout(function(){
				
			},1000);
		}
	
	}
	var getPosition: {
		ViewPort: function() {
			var height = 0;
			if (document.compatModel == "BackCompat") {
				height = document.body.clientHeight;
			} else {
				heigth = document.documentElement.clientHeight;
			}
			return height;
		},
		ScrollTop: function() {
			var elementScrollTop = 0;
			if (document.compatModel == "BackCompat") {
				elementScrollTop = document.documentElement.scrollTop;
			} else {
				elementScrollTop = document.body.scrollTop;
			}
			return elementScrollTop;
		},
		ElementViewTop: function(el) {
			var actualTop = 0;
			current = 0;

			if (el) {
				actualTop = el.offsetTop,
				current = el.offsetParent;
				while (current != null) {
					actualTop += current.offsetTop;
					current = current.offsetParent;
				}
				return actualTop - this.ScrollTop();

			}
		}

	}


})();

