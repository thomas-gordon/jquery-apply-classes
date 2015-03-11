;(function ( $, window, document, undefined ) {

	var pluginName = "applyClasses",
		defaults = {
			classes: [
				'apply-classes-1',
				'apply-classes-2'
			],
			avoid: '',
			random: false
		};

	function Plugin ( element, options ) {
		this.elements = element;
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	$.extend(Plugin.prototype, {
		init: function () {

			var _self = this;
			_self.reduced_targets = [];

			if (_self.settings.classes.length < 1) {
				console.log('addColorClasses: You need to define an array of classes.');
				return;
			}

			$.each(_self.elements, function (i,el) {
				if (!$(el).is($(_self.settings.avoid))) {
					_self.reduced_targets.push($(el));
				}
			});
			_self.applyClassArrays(_self.reduced_targets)
		},

		applyClassArrays: function (targetArray) {
			var _self = this;
			var class_state = 0;
			var randomClass;

			if (_self.settings.random === true) {
				$.each(targetArray, function (i,el) {
					randomClass = _self.settings.classes[Math.floor(Math.random() * _self.settings.classes.length)];
					$(el).addClass(randomClass);
				});
			} else {
				$.each(targetArray, function (i,el) {
					$(el).addClass(_self.settings.classes[class_state]);

					if (class_state === _self.settings.classes.length -1) {
						class_state = 0;
					} else {
						class_state++
					}
				});
			}
		}

	});

	$.fn[ pluginName ] = function ( options ) {

		if (!$.data( this, "plugin_" + pluginName ) ) {
			$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
		}
		return this;
	};

})( jQuery, window, document );