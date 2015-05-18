(function() {
	[].slice.call( document.querySelectorAll( '.checkout' ) ).forEach( function( el ) {
		var openCtrl = el.querySelector( '.checkout-button' ),
			closeCtrls = el.querySelectorAll( '.checkout-cancel' );

		openCtrl.addEventListener( 'click', function(ev) {
			ev.preventDefault();
			classie.add( el, 'checkout--active' );
		} );

		[].slice.call( closeCtrls ).forEach( function( ctrl ) {
			ctrl.addEventListener( 'click', function() {
				classie.remove( el, 'checkout--active' );
			} );
		} );
	} );
})();
