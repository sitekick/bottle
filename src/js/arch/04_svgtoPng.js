var svgtoPng = (function() {

	let manifest = {
		method : 'jquery',
		fn : 'append',
		target : '.software .scrollwrap',
		class : '.svgtopng'
		};

	var checks = {
				hasFeature : function (el) {
					return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
				},
				loopChecks : {
					noHeight : function (el){
						//console.log(el.height);
						return (el.height == 0) ? true : false;
					},
					oddHeight : function (el){
						return false;
					}
				}
		};




	function _jquery(settings) {
		
		switch(settings.fn){
			case 'append' :
			 _overrideAppend(settings);
			break;
		};
		
		function _overrideAppend(settings) {
			
			var origAppend = $.fn.append;
			$.fn.append = function () {
			//console.log(this.selector + ':' + target);
				if(this.selector  ==  settings.target){
					//console.log('trigger');
					return origAppend.apply(this, arguments).trigger('custom', [settings.target, settings.class]);
				} else {
					//console.log('default');
					return origAppend.apply(this, arguments);
				}
    		};
    	}
	}
	
	function _bind(settings){
		
		$(settings.target).bind('custom', function(){
			
			let svgs = document.querySelectorAll(settings.class);
			
			if(svgs != null)
			  _checkSvgs(svgs);
		});
	}
	
	var checkSvg = function(opts) {
		
		switch(opts.method){
			case 'jquery' :
				_bind(opts);
				_jquery(opts);
			break;
		}
		
		
	}// checkSVG
	
	function _checkSvgs(elements){
		
		//let browser = checks.hasFeature();
		let browser = true;
		
		for(let i=0,l=elements.length; i < l; i++){
			let el = elements[i];
			let replace = false;
				
			if(browser === true){
					
				console.log(el.height);
				switch(true){
					case (el.height == 0) :
					//replace = true;
					_switchSrc(el);
					break;
					
					}

/*
				checkloop:			 
				for(check in checks.loopChecks){
					let issue = checks.loopChecks[check](el);
					if( checks.loopChecks[check](el) === true){
				}
*/
				
			} else {
				replace = true; 
			}
				
/*
			if(replace === true)
				_switchSrc(el);
*/
					
			}// for loop

	}
	
	
	function _switchSrc(el){
		
		let path = el.src;
		console.log(path);
		let pos = path.indexOf('.svg');
		
		if(pos > -1) {
			//console.log(path.slice(0,pos) + '.png');
			//el.src = path.slice(0,pos) + '.png';
		} else {
			return;
		}
	}	
	
	
	return checkSvg(manifest);


})();

