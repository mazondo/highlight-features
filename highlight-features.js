(function($) {
	var overlayTemplate = "<div class='feature-highlight'><div class='feature-overlay'><div class='feature-close'>close</div></div></div>",
		dotTemplate = "<div class='feature-dot-holder'><div class='feature-dot'></div><div class='feature-dot-rays'></div><div class='feature-text'></div></div>",
		overlay;

	function kill() {
		overlay.remove();
		overlay = false;
	}

	function launch(container) {
		if (overlay) {
			kill();
		}
		overlay = $(overlayTemplate);
		container.append(overlay);

		//setup the close button
		overlay.find(".feature-close").on("click", function() {
			kill();
		});
		//setup esc to close
		container.on("keyup", function(e) {
			if (e.keyCode == 27) {
				kill();
			}
		});

		//search for all the features in this section
		var features = container.find("[data-feature]");

		//generate the dot
		features.each(function(index, element) {
			element = $(element);
			var dot = $(dotTemplate),
				pos = element.offset(),
				text = dot.find(".feature-text"),
				textPosition = {};

			//add the text to the dot
			text.html(element.data("feature"));

			//position the dot
			dot.css({
				top: pos.top,
				left: pos.left,
				positon: "absolute"
			});

			dot.on("click", function() {
				text.toggleClass("feature-visible");
			});

			//place the dot
			overlay.append(dot);
		});
	}

	$.fn.highlightFeatures = function(trigger) {
		if (trigger == "hide") {
			kill();
		} else if (trigger == "toggle") {
			if (overlay) {
				kill();
			} else {
				launch($(this));
			}
		} else {
			launch($(this));
		}
	}
})(jQuery);