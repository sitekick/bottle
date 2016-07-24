var resizeQuery = (function () {
		
		var mQueries = ['(max-width: 500px)','(max-width: 768px)','(max-width: 1024px)','(min-width: 1024px)'];
		var currentMQ = qChange();
		var qChangeEvents;

		return {
			currentMQ : function(){
				//transitionMq(mQueries);
				return currentMQ;
			},
			events : function(obj) {
				qChangeEvents = obj;
				
			},
			check : function() {
				$(window).resize(function(){ qChange() });
			}
		};
	
	
		function qChange() {
		/* As screen size changes; detect if we have transitioned between media queries; requires Modernizr */
			
			for (var i=0 ;i < mQueries.length; i++) {
			
				if(Modernizr.mq(mQueries[i]) == true){
					
					if(currentMQ == null){
					 	return mQueries[i];
					} else if(mQueries[i] != currentMQ){
						currentMQ = mQueries[i];
						qChangeAction(mQueries[i]);
					} 
				
				break;
				}
			}
		};
		
		function qChangeAction(qChange) {
			
			//console.log(qChangeEvents);
			
			switch(qChange){
				case mQueries[0]:
				
				//console.log(qChangeEvents);
				return qChangeEvents.query;
				break;
			}
			
		}
	
})();