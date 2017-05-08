$(function() {
	$('#carousel').carouFredSel({
		width: 1000,
		align: false,
		items: {
			visible: 1,
			width: 900
		},
		auto: false,
		next: '#next',
		scroll: {
			onBefore: function( data ) {
				data.items.visible.animate({
					'marginLeft': 0
				}, data.scroll.duration);
			},
			onAfter: function( data ) {
				data.items.old.css({
					'zIndex': 0,
					'marginLeft': -300
				});
				data.items.visible.css( 'zIndex', 2 );
				data.items.visible.next().css( 'zIndex', 1 );
			}
		},
		onCreate: function( data ) {
			data.items.css({
				'marginLeft': 0,
				'zIndex': 2
			});
			data.items.next().css( 'zIndex', 1 );
		}
	});
});