/* Detect if max-width is < 500 to initialize mobile menu behaviors */
$(function() {
        
        if (Modernizr.mq('(max-width: 500px)')) {
        	
        	
        	$("#login div").append( '<button class="menu-toggle" role="button" aria-pressed="false"></button>' ); 
			$( 'nav .level2' ).before( '<button class="sub-menu-toggle" role="button" aria-pressed="false"></button>' ); 
			

			// Show/hide the navigation
			
			$( '.menu-toggle' ).on( 'click', function() {
				var $this = $( this );
				$this.attr( 'aria-pressed', function( index, value ) {
					return 'false' === value ? 'true' : 'false';
				});
		
				$this.toggleClass( 'activated' );
				$( 'nav' ).slideToggle( 'fast' );
		
			});
			
			
			$( '.sub-menu-toggle' ).on( 'click', function() {
				var $this = $( this );
				$this.attr( 'aria-pressed', function( index, value ) {
					return 'false' === value ? 'true' : 'false';
				});
		
				$this.toggleClass( 'activated' );
				$this.next( '.sub-menu' ).slideToggle( 'fast' );
		
			});

        }
        
  });




    
