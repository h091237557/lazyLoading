/*!lazyloading v1.0.0 | (c) 2016 Mark | https://github.com/h091237557/lazyLoading#readme */
(function() {
	var elements = [];
	var lazyLoad = {
		init:function(){
			this.setLayzimg();
			this.lazy();
			this.slowLoad();
		},
		setLayzimg: function() {
			var el = document.getElementsByTagName('img'),
			ellength = el.length;
			for (var i = 0; i < ellength; i++) {
				if (typeof(el[i].getAttribute("lazy_src"))) {
					elements.push(el[i]);
				}

			}
		},
		lazy: function() {
			if (!elements.length) return;
			var innerHeigh = this.getPosition.ViewPort(),
			ellength = elements.length,
			index = 0,
			scrollTop = 0;

			for (var i = 0; i < ellength; i++) {
				index = this.getPosition.ElementViewTop(elements[i]);
				scrollTop = this.getPosition.ScrollTop();
				if (index - scrollTop < innerHeigh) {
					elements[i].src = elements[i].getAttribute("lazy_src");
					delete elements[i];
				}
			}
		},
		slowLoad: function() {
			var that = this;
			window.onscroll = window.onload = function() {
				setTimeout(function() {
					that.lazy();
				},
				1000);
			}

		},
		getPosition: {

			ViewPort: function() {
				var height = 0;
				if (document.compatModel == "BackCompat") {
					height = document.body.clientHeight;
				} else {
					height = document.documentElement.clientHeight;
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
	}
	lazyLoad.init();	
})();

