// Image Placeholders (weepower.com)
// Licensed under Apache 2 (http://www.apache.org/licenses/LICENSE-2.0)
// DO NOT MODIFY

(function(W) {
	'use strict';

	W.fn.make('imagePlaceholders', {
		/**
		 * Setup initial placeholders and bind resize event
		 *
		 * @constructor
		 */
		_construct: function() {
			this.bind();

			// Set resize event
			W.events.on(W._win, 'resize.imagePlaceholders', this.update, {
				init: true,
				scope: this
			});
		},

		/**
		 * Setup all available image placeholders
		 */
		bind: function() {
			this.placeholders = W.$map('[data-placeholder]', function(el) {
				var size = W.$data(el, 'placeholder') || '16:9',
					parts = size.split(':');

				if (parts.length == 2) {
					var x = parts[0],
						y = parts[1],
						fluid = W.$data(el, 'fluid'),
						text = W.$data(el, 'text'),
						span = W._doc.createElement('span');

					// Transparent background
					el.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

					// Apply dimensions
					W.$css(el, (fluid == 'false') ? {
						width: x + 'px',
						height: y + 'px',
						paddingTop: 0
					} : {
						paddingTop: ((y / x) * 100) + '%'
					});

					W.$addClass(span, 'js-placeholder-text');

					// Append placeholder text span
					W._body.appendChild(span);

					// Set title
					if (text) {
						span.innerText = text;
					}

					return [el, span, text];
				}
			}, {
				scope: this
			});
		},

		/**
		 * Loop through the placeholders and update the text overlays
		 */
		update: function() {
			for (var i = 0; i < this.placeholders.length; i++) {
				var placeholder = this.placeholders[i],
					img = placeholder[0],
					span = placeholder[1],
					pos = W.$offset(img),
					width = img.offsetWidth,
					height = img.offsetHeight;

				W.$css(span, {
					left: pos.left + 'px',
					top: pos.top + 'px',
					width: width + 'px',
					lineHeight: height + 'px'
				});

				if (! placeholder[2]) {
					span.innerText = width + 'x' + height;
				}
			}
		}
	});
})(Wee);