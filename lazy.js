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
		}

	}

})();

