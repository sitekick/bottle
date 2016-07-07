$(function() {
	
	var data_chart1 = [
	    {
	        value: 300,
	        color:"#F7464A",
	        highlight: "#FF5A5E",
	        label: "Red"
	    },
	    {
	        value: 50,
	        color: "#46BFBD",
	        highlight: "#5AD3D1",
	        label: "Green"
	    },
	    {
	        value: 100,
	        color: "#FDB45C",
	        highlight: "#FFC870",
	        label: "Yellow"
	    }
	];
	var data_chart2 = [
				{
					value: 9.99,
					color:"#006C8F",
					highlight: "#9900CC",
					label: "Americas"
				},
				{
					value: 5.18,
					color: "#0099CC",
					highlight: "#9900CC",
					label: "EMEA"
				},
				{
					value: 3.33,
					color: "#D9F0F7",
					highlight: "#9900CC",
					label: "Asia Pacific"
				}
			];
			
	var data_chart3 = {
		labels : ["January","February","March"],
		datasets : [
			{
				fillColor : "#0099CC",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
				data: [65, 59, 80]
			},
			{
				fillColor : "#D9F0F7",
				strokeColor : "rgba(151,187,205,0.8)",
				highlightFill : "rgba(151,187,205,0.75)",
				highlightStroke : "rgba(151,187,205,1)",
				data: [27, 41, 69]
			}
		]
	};
	
			var ctx1 = $("#chart1").get(0).getContext("2d");
			var myPolar = new Chart(ctx1).PolarArea(data_chart1, {
				responsive : true,
				maintainAspectRatio: true
			});
			
			var ctx2 = $("#chart2").get(0).getContext("2d");
			var myPie = new Chart(ctx2).Pie(data_chart2, {
				responsive : true,
				maintainAspectRatio: true,
				segmentShowStroke : false,
				animationEasing : "easeOutQuad"
			});
			
			var ctx3 = $("#chart3").get(0).getContext("2d");
			var myPie = new Chart(ctx3).Bar(data_chart3, {
				responsive : true,
				maintainAspectRatio: true,
				barShowStroke : false
			});
})




$(function () {
	
	var suggestions = $.map(terms, function (term) { return { value: term, data: term }; });
		$('#searchform input[type=text]').autocomplete({
			lookup: suggestions			
		});

});



/* Detect width to initialize appropriate menu behaviors */
$(function() {
	 //Mobile Chrome (will fire resize on scroll; track width)
	 var cachedwidth = $(window).width();
     $(window).resize(function(){nav(cachedwidth)});
   
    nav($(window).width() + 1);
    
    function nav(cwidth) {
	    	
	    	if( $(window).width() == cwidth ){
		   	     return ;
		   	} 
	    	
	    	if (Modernizr.mq('(min-width: 500px)') ) {
				standardNav();
				footerNavDeactivate();	
			} else {
				mobileNav();
				footerNavActivate();
        	}
			
			cachedwidth = $(window).width();
    }
    
    
    
    function mobileNav() {
	   	     
	  
	   	      //reset elements
		        $("nav .level1 > li").off(); 
				$("nav .level2").each( function() {
					 	$(this).hide();
					 	$(this).css({'top': 0, 'height' : 'auto'});  
			     });
		       
		        //mobile nav activate
		        if(!$("#login .menu-toggle").length){
					
					$("#login div").append( '<button class="menu-toggle" role="button" aria-pressed="false"></button>' ); 
			        $( '.level1 > li > a' ).attr('aria-pressed', 'false');
						
						$( '.menu-toggle' ).on( 'click', function() {
							
							$(this).attr( 'aria-pressed', function( index, value ) {
								return 'false' === value ? 'true' : 'false';
							});
					
							$(this).toggleClass( 'active' );
							$( 'nav' ).slideToggle(100);
						});
						
						$( 'nav .level1 > li > a' ).on( 'click', function() {
							
							$(this).attr( 'aria-pressed', function( index, value ) {
								return 'false' === value ? 'true' : 'false';
							});
							$(this).toggleClass( 'active' );
							$(this).next( '.level2' ).slideToggle(100);
							
							$("nav .level1 > li > a").not(this).each( function() {
								 
									 if( $(this).hasClass('active') ){
										$(this).toggleClass( 'active' );
										$(this).next( '.level2' ).slideToggle(100);
									 }
								});
						});
			        
			    } //if(!$("#login .menu-toggle").length)
			    
	}
   
   function standardNav() {
	   
				//reset elements
				$( '.level1 > li > a' ).off();
				if( $("#login .menu-toggle").length ){
					$("#login .menu-toggle").remove();
					$("nav").show();
					$("nav .level2").show();
					$("nav .level1 > li > a").removeClass('active').removeAttr('aria-pressed');
					}	

				$("nav .level2").each( function(){
			   		var y = $(this).height()
			   		var yb = parseInt($(this).css("border-bottom-width"), 10);
			   		var py = $(this).parent().height();
			   		var offset = -Math.abs( (y + yb) - py);
			   		$(this).css('top', offset);
			   		$(this).data('calcheight', y);
			   		$(this).data('borderw', yb);
			   		$(this).data('offset', offset);
		   		});
	
		   		$("nav .level1 > li").off().on({
					mouseenter: function() {
							var yy = $(this).height();
							var sy = $(".row.slider").height();
							var yb = $(".level2", this).data("borderw");
							$(this).addClass("active");
							$(".level2", this).animate({
									top: yy,
									height : sy-yb
			  					}, 300, "swing");
						},
					mouseleave: function () {
						
							$(this).removeClass("active");
							$(".level2", this).animate({
									top: $(".level2", this).data("offset"),
									height : $(".level2", this).data("calcheight")
			  					}, 200, "swing");
						}
					});
   
   }
   
   function footerNavActivate() {
	   $(".footer ul").hide();	
	   $(".footer h4").removeClass("active");
	   $(".footer h4").off().on("click", function() {
			$(this).next("ul").slideToggle(300, function() {
					$(".footer ul:visible").prev("h4").addClass("active");
					$(".footer ul:hidden").prev("h4").removeClass("active");				
			});
		});
   }
   
   function footerNavDeactivate() {
	   $(".footer ul").show();
	   $(".footer h4").removeClass("active");
	   $(".footer h4").off();
   }
   
});//$(function ()




    

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-mq-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function a(){var e,n,t,a,s,i,r;for(var l in d)if(d.hasOwnProperty(l)){if(e=[],n=d[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(a=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],r=i.split("."),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),f.push((a?"":"no-")+r.join("-"))}}function s(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,a){var s,l,f,d,c="modernizr",p=i("div"),m=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=a?a[o]:c+(o+1),p.appendChild(f);return s=i("style"),s.type="text/css",s.id="s"+c,(m.fake?m:p).appendChild(s),m.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=c,m.fake&&(m.style.background="",m.style.overflow="hidden",d=u.style.overflow,u.style.overflow="hidden",u.appendChild(m)),l=t(p,e),m.fake?(m.parentNode.removeChild(m),u.style.overflow=d,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],d=[],c={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){d.push({name:e,fn:n,options:t})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),m=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();c.mq=m,a(),s(f),delete c.addTest,delete c.addAsyncTest;for(var h=0;h<Modernizr._q.length;h++)Modernizr._q[h]();e.Modernizr=Modernizr}(window,document);
$(function() {
	
		
		$("#productform select").change(function() {
			
			var sel ="";
			sel += $("#productform select option:selected").val(); 
			
			var products = [];
				products['featured'] = [];
				products['sale'] = [];
			
			$.getJSON('assets/data/products.json', function(data) {
				
				$.each(data.products.product, function (key,value) {
										
					var kv = [];
					
					Object.getOwnPropertyNames(value).forEach(function(val, idx, array) {
						kv[val] = value[val];
					});
					
					
					if(value.featured == true){
						products['featured'].push(kv);
					}
					if(value.sale == true){
						products['sale'].push(kv);
					}
					
				});
				
				$('#products tbody').children('tr').remove();
				
				switch(sel) {
						case 'sale' : 
							buildTable(products['sale']);
							break;						
						case 'featured' : 
							buildTable(products['featured']);
							break;
					}
				
			});
			

		}).change();		
		
	
	function buildTable(arr) {
	
					
				$.each(arr, function (index, value) {
						
				var div = '<tr>' +
				'<td><img src="assets/img/products/' + value.image + '" alt="" /></td><td>' + value.manufacturer + '</td>' +
				'<td>' + value.description + '</td>' +
				'<td>' + value.number + '</td><td>' + value.category + '</td>' +
				'<td>' + value.price + '</td>' +
				'</tr>'
					
				$('#products tbody').append(div);
					
				});
					
					
				$('#products td:nth-child(1),#products td:nth-child(2),#products td:nth-child(3),#products th:nth-child(1),#products th:nth-child(2),#products th:nth-child(3)').hide();
					
				$('#products tbody tr')	.hover(	
					function () {
						activateRevealPanel(this);
							},
					function () {
						deactivateRevealPanel(this);
				});
	}
	
	function activateRevealPanel(el){
			
			$('.products .col1').prepend('<div id="product-details"></div>');
			
			var image = $('td:nth-child(1)', el).html();
			var manufacturer = $('td:nth-child(2)', el).html();
			var description = $('td:nth-child(3)', el).html();
			
			var details = '<div class="product-detail">' +
			'<div class="photo">' + image + '</div><div class="copy"><h5>' + manufacturer + 
			'</h5><p>' + description + '</p></div></div>';
			
			$('#product-details').append(details);
			$('.product-detail').hide().fadeIn( "fast" );
	}
	
	function deactivateRevealPanel(el){
			$('#product-details').remove();
			}
	
		
});
var terms = ["audio accessories","buzzer elements","buzzers","microphones","sirens","speakers","battery accessories","batteries non-rechargeable ","batteries rechargeable","battery chargers","battery holders","battery clips","battery contacts","battery packs","cigarette lighter assemblies","backplanes","box accessories","box components","boxes","card guide accessories","card guides","card rack accessories","card racks","card rack handles ","card rack locks","card rack latches","patchbay jack panel accessories","patchbay jack panels","rack accessories","rack components","rack thermal management","racks","barrel audio cables","barrel power cables","between series adapter cables","circular cable assemblies","coaxial cables","d-shaped cables","centronics cables","d-sub cables","fiber optic cables","firewire cables","flat flex cables","flat flex","ribbon jumper cables","jumper wires","lgh cables","modular cables","pluggable cables","power cables","line cables","rectangular cable assemblies","smart cables","solid state lighting cables","specialized cable assemblies","usb cables","video cables ","dvi cables","dmi cables","fiber optic cables","flat flex cables","flat ribbon cables","modular cable ","flat cable","multiple conductor cables","single conductor cables","wire wrap","cables accessories","bushings","grommets","cable grips ","cord grips","cable ties ","cable holders","cable mountings","cable lacing","clamps ","clips","cold shrink tape ","cold shrink tubing","fiber optic cables","grounding braid ","grounding straps","heat shrink boots","heat shrink boots caps","heat shrink fabric","heat shrink tubing","heat shrink wrap","labels ","labeling","markers","pulling grips","support grips","solder sleeve ","solid tubing","solid sleeving ","spiral wrap ","expandable sleeving","splice enclosures","wire ducts ","raceways","wire ducts accessories","capacitors","capacitors accessories","aluminum capacitors ","polymer capacitors","capacitor arrays","ceramic capacitors","electric double layer capacitors","supercaps","film capacitors","mica and ptfe capacitors","niobium oxide capacitors","silicon capacitors","tantalum - polymer capacitors","tantalum capacitors","thin film capacitors","trimmers ","variable capacitors","circuit protection ","accessories","circuit breakers ","disconnect switch components","electrical fuses ","specialty fuses","fuseholders ","fuses ","gas discharge tube arresters","ground fault circuit interrupter ","gfci","inrush current limiters","lighting protection","ptc resettable fuses","surge suppression ics","thermal cutoffs ","thermal cutouts","diodes","tvs","thyristors","varistors ","movs","computer accessories","adapter cards","adapters","books","videos","cd-roms","brackets","cameras ","projectors","computer mouse ","trackballs","desktop joysticks ","simulation products","films ","filters","hubs","servers","keyboards","kvm switches","kvm cables","magnetic strip readers","smart card readers","memory card readers","modems","monitors","printers ","connectors ","interconnects","arinc backplane connectors ","arinc inserts backplane connectors ","contact backplane connectors ","din backplane connectors ","hard metric backplane connectors ","standard backplane connectors ","backplane connector housings ","specialized backplane connector ","banana connectors","tip connectors","binding posts","banana and tip connectors jacks","barrel accessories","barrel audio adapters","barrel audio connectors","barrel power connectors","between series adapters ","blade type power connectors","card edge connectors","card edge connectors adapters ","card edge connectors contacts","card edge connectors edgeboard connectors ","card edge connectors housings","circular connectors ","circular connectors accessories","circular connectors adapters","circular connectors backshells ","circular connectors cable clamps","circular connectors contacts","circular connectors housings","coaxial connectors ","coaxial connectors accessories","coaxial connectors adapters","coaxial connectors contacts","coaxial connectors terminators","leadframe contacts","multi purpose contacts","spring loaded contacts","pressure contacts","d-shaped connectors ","d-sub connectors ","d-sub ","d-shaped connectors ","d-sub adapters","d-sub backshells ","d-sub hoods ","d-sub contacts","d-sub housings ","d-sub terminators","ffc connectors","fpc connectors","flat flexible connectors ","ffc accessories","fpc accessories","ffc contacts  ","fpc contact","ffc housings ","fpc housings","fiber optic connectors","fiber optic connectors accessories","fiber optic connectors adapters ","fiber optic connectors housings ","heavy duty connectors accessories ","heavy duty connectors assemblies ","heavy duty connectors contacts ","heavy duty connectors frames ","heavy duty connectors housings","heavy duty connectors hoods","heavy duty connectors bases ","heavy duty connectors inserts","heavy duty connectors inserts modules","keystone accessories ","keystone faceplates ","keystone frames","keystone inserts ","lgh connectors ","memory connectors accessories ","memory connectors inline module sockets ","memory connectors pc card sockets","memory connectors pc cards adapters","modular connectors accessories","modular connectors adapters","modular connectors jacks","modular connectors jacks with magnetics","modular connectors plug housings","modular connectors plugs ","modular connectors wiring blocks ","modular connectors wiring blocks accessories","photovoltaic connectors","solar panel connectors","photovoltaic connectors accessories","photovoltaic connectors contacts","pluggable connectors ","pluggable connectors accessories ","power entry connectors accessories ","power entry connectors inlets","power entry connectors  outlets ","modules ","rectangular connectors ","board to board connectors","board to board connectors arrays","board to board connectors edge type","board to board connectors mezzanine ","board to board connectors board spacers ","board to board connectors stackers","board to board connectors ","board to board headers ","board to board male pins ","board to board receptacles","board to board female sockets","rectangular connectors accessories","rectangular connectors adapters","rectangular connectors board in","rectangular connectors direct wire to board","rectangular connectors contacts ","rectangular connectors free hanging panel mount ","rectangular connectors free hanging panel mount","rectangular connectors headers ","rectangular connectors male pins ","rectangular connectors receptacles ","rectangular connectors female sockets","rectangular connectors specialty pin","rectangular connectors housings","rectangular connectors spring loaded","shunts","jumpers ","sockets for ics transistors ","transistors accessories","transistors adapters","solid state lighting connectors","solid state lighting connectors","terminal blocks accessories","terminal blocks jumpers","terminal blocks marker strips","terminal blocks wire ferrules","terminal blocks adapters","terminal blocks barrier blocks","terminal blocks contacts ","terminal blocks din rail ","terminal blocks channel","terminal blocks headers ","terminal blocks plugs and sockets","terminal blocks interface modules","terminal blocks panel mount","terminal blocks power distribution","terminal blocks specialized","terminal blocks wire to board","terminal junction systems","terminal strips","turret boards","terminal accessories ","terminal adapters","barrel terminals ","bullet connectors ","foil connectors","terminal housings ","terminal boots","knife connectors terminals","magnetic wire connectors","pc pin receptacles ","socket connectors ","pc pin","single post connectors","quick connects","quick disconnect","rectangular connectors","ring connectors","screw connectors","solder lug connectors","spade connectors","specialized connectors","turret connectors","wire pin connectors","wire splice connectors","wire to board connectors","usb connectors ","dvi connectors","hdmi connectors","usb accessories ","dvi accessories ","dvi adapters","usb adapters","crystals and oscillators","crystals","oscillators","pin configurable oscillators","programmable oscillator","resonators","sockets","insulators","stand alone programmers ","vco ","voltage controlled oscillators ","discrete semiconductor products","bridge rectifiers","diacs ","sidacs","diodes","zener ","arrays","rectifiers","fets","igbt arrays ","igbt modules ","igbt single","jfet","junction field effect","power drivers ","power modules","programmable unijunction transistors ","puts","rf diodes","rf fet","rf transistors","scr modules","scr single ","transistor arrays","transistor pre-biased","single transistors","transistors ","special purpose transistors","triacs","variable capacitance diodes ","varicaps ","varactors","embedded computers","interface boards","single board computers","sbcs","fans ","thermal management ","ac fans","dc fans","fans","finger guards ","fan filters  ","fan sleeves","thermal accessories","thermal adhesives","thermal epoxies ","thermal greases ","thermal pastes","thermal heat sinks","thermal liquid cooling","thermal pads","thermal sheets","thermoelectric assemblies","peltier assemblies","thermoelectric modules ","peltier modules","filters ","filter accessories","ceramic filters","common mode chokes","crystals","dsl filters","emi/rfi filter","lc networks","rc networks","feed through capacitors","ferrite beads and chips","ferrite core cables","ferrite core wiring","ferrite disks","ferrite plates","helical filters","power line filter modules","rf filters","saw filters","hardware ","fasteners","board spacers ","board standoffs","board supports","bumpers ","feet ","pads ","grips","component insulatorsmounts spacers","din rail channel","hole plugs","knobs","lockouts","padlocks","mounting brackets","nuts","rivets","screw grommet","grommet","screws ","bolts ","motion hardware ","washers","bushing","shoulder washers","inductors ","coils ","chokes","adjustable inductors","arrays transformers","signal transformers","delay lines","fixed inductors","wireless charging coils","industrial controls ","industrial meters","cam positioners","controller accessories","controller cable assemblies","liquid controllers","level controllers","machine safety controllers","plc modules","process controllers ","temperature controllers","programmable logic controllers","industrial equipment","lighting control","lighting control accessories","machine vision","machine vision accessories","cameras","sensors","control machine vision ","processing machine vision","machine vision lens","machine vision lighting","monitor relay output","current transducer  ","voltage transducer","panel meters","panel meter accessories","panel meter counters ","hour meters ","pneumatics","hydraulics ","protection relays ","protection systems","sensor cable","sensor cable assemblies","sensor interface","junction blocks","integrated circuits","ics","audio special purpose","clock/timing","clock buffers ","clock drivers","clock generators ","clock plls","clock frequency synthesizers","clock delay lines","clock ic batteries","clock programmable timers","clock oscillators","real time clocks","adcs","dacs","analog front end ","afe","analog to digital converters ","adc","digital potentiometers","data acquisition","digital to analog converters ","dac converters","touch screen controllers","cpld ","complex programmable logic devices","dsp","digital signal processors","fpgas","field programmable gate array","field programmable gate array microcontrollers","microcontroller modules ","microprocessor modules","microcontrollers","application specific microcontrollers","embedded microprocessors","embedded plds ","embedded programmable logic device","system on chip ","soc","analog switches","multiplexers","demultiplexers","codecs","direct digital synthesis ","dds","drivers","receivers","transceivers","encoders","decoders","converters","interface filters ","i/o expanders","modems","ics and modules","interface modules","ensor and detector interfaces","interface serializers ","interface deserializers ","signal buffers ","signal repeaters","signal splitters","signal terminators","telecom","uarts ","universal asynchronous receiver transmitter","interface voice record and playback","linear amplifiers","linear instrumentation","op amps","buffer amps","video amps and modules","analog multipliers","analog  dividers","linear comparators","video processing","logic buffers","logic drivers","logic receivers","logic transceivers","logic comparators","logic counters","logic dividers","fifos memory","flip flops","logic gates ","logic inverters","logic latches","logic multivibrators","logic parity generators ","logic parity checkers","shift registers","signal switches","logic multiplexers","logic decoders","specialty logic","logic translators","logic level shifters","logic universal bus functions","magnetic sensors ","magnetic switches","solid state switches","memory","memory batteries","memory configuration proms for fpgas","memory controllers","pmic ac dc converters","pmic offline switchers","pmic battery management","pmic current regulation","current management","display drivers","energy metering","half-bridge drivers","gate drivers","hot swap controllers","laser drivers","led drivers","lighting controllers","ballast controllers","motor drivers","motor controllers","or controllers","ideal diodes","pfc ","power factor correction","power distribution switches","power distribution load drivers","power over ethernet (poe) controllers","poe controllers","power supply controllers","power supply monitors","rms to dc converters","supervisors","thermal management","v/f converters","f/v converters","voltage reference","dc dc switching controllers","dc dc switching regulators","voltage regulators","linear transistor driver","voltage regulators","isolators ","digital isolators","gate driver","optoisolators logic output","optoisolators transistor","photovoltaic output optoisolators ","triac optoisolators ","scr output","audio kits","bumpers","feet","pads","grips kits","cable assemblies","single conductors","capacitor kits","circuit protection","circuit protection kits ","circuit protection fuse","tvs diodes","connector adapter kits","connector kits","crystal kits","discrete assortment","fiber optic kits","filter kits","hardware kits","heat shrink tubing kits","inductors kits","integrated circuits kits","ic kits","led kits","optics","leds","light pipe kits","potentiometer kits","prototype boards kits","unperforated boards kits ","resistor kits ","rf shield kits ","sensor kits ","static control kit","switch kits","tape kits","thermistor kits","transformer kit","wire and cable tie kits","line protection","line distribution ","line backups ","dc to ac (power) inverters ","line conditioners","power distribution","surge protectors","ups systems","magnetic transformer","magnetic inductor components","bobbins ","coil formers","ferrite cores","magnet wire","robotics kits","gadgets ","gizmos","prototyping","fabrication","wearables","memory cards","memory modules","solid state drives","ssds","usb flash drives","motors","solenoids","driver boards","driver modules","motor driver boards","motor driver modules","ac motors","dc motors","solenoids","stepper motors","networking solutions","gateways","routers","media converters","serial device servers","switches","hubs","optical inspection equipment","arms","mounts","stands","cameras","eyepieces ","lenses","illumination sources","magnifying lamps","task lamps","loupes","magnifiers","microscopes","video inspection systems","optoelectronics","display modules ","lcd display modules","oled character display modules ","numeric display modules ","graphic display modules","led character display modules  ","led dot matrix ","cluster display modules ","vacuum fluorescent display modules ","vfd display modules ","display interface controller","monitor interface controller","fiber optic attenuators","fiber optic receivers","fiber optic switches ","fiber optic multiplexers","fiber optic demultiplexers","fiber optic transceiver modules","fiber optics transmitters","drive circuitry integrated fiber optics transmitters","infrared emitters","uv emitters","visible emitters","inverters","cold cathode fluorescent lamps ","ccfl lamps","uv lamps ","incandescent lamps","neon lamps","laser diodes","lcd bezels","led indication","led lighting cobs","led lighting engines ","led lighting modules","led lighting color ","led lighting white","led thermal products","led circuit board indicators","led arrays","led light bars ","led bar graphs","led lamp replacements","leds spacers","led standoffs","light pipes","reflectors","optic lenses","remote phosphor optics","panel indicators","pilot lights","touch screen overlays","potentiometers","variable resistors","adjustable power resistor","joystick potentiometers","rotary potentiometers","rotary rheostats","scale dials","slide potentiometers","thumbwheel potentiometers","trimmer potentiometers","value display potentiometers","ac dc converters","dc dc converters ","led supplies","ac ac wall adapters","ac dc configurable power supply chassis","ac dc configurable power supply modules","ac dc converters","ac dc desktop","ac dc wall adapters","accessories","dc dc converters","led supplies","power over ethernet","poe","programmer systems ","development systems","evaluation and demonstration boards and kits","analog to digital converters","adc","audio amplifiers","smps","digital to analog converters","dacs","complex logic ","fpga complex logic ","cpld complex logic ","mcu","dsp","expansion boards","led drivers","linear voltage regulators","op amps","in-circuit programmers ","in-circuitemulators","in-circuit debuggers","software services ","stand alone programmers ","uv erasers ","prototyping ","breakout boards","card extenders","drill bits","etching and fabrication equipment","jumper wire","prototype boards perforated","prototype boards unperforated","prototype/repair tools","solderless breadboards","relays","i/o relay module racks","analog i/o relay modules","input i/o relay modules","output i/o relay modules","power relays","relay sockets","signal relays","solid state relays","time delay relays","resistors","chassis mount resistors","surface mount chip resistor","resistor networks","resistor arrays","specialized resistors","through hole resistors","rf/if","rfid","attenuators","balun","rf accessories","rf amplifiers","rf antennas","rf demodulators","rf detectors","rf die products","rf diplexers","rf directional coupler","rf evaluation and development kits","rf front end ","lna rf front end","pa rf front end","rf misc ics and modules","rf mixers","rf modulators","rf power controller ics","rf power dividers","rf power splitters","rf receiver","rf transmitter","rf transceiver","rf shields","rf switches","rf transceiver ics","rf transceiver modules","rf transmitters","rfi ","emi","rfi shielding and absorbing materials","emi shielding and absorbing materials","rfid accessories","rfid antennas","rfid evaluation and development kits","rfid reader modules","rfid transponders","rfid tags","rfid ","rf access","rfid  monitoring ic","sensors","transducers ","accelerometers","amplifiers","capacitive touch sensors","proximity sensor ics","color sensors","current transducers","dust sensors","encoders","flex sensors","float sensors ","level sensors","flow sensors ","force sensors","gas sensors","gyroscopes","image sensors","inclinometers","irda transceiver modules","lvdt transducers ","linear variable differential transformer","compass sensors ","magnetic field sensors","linear magnetic sensors","compass magnetic sensors","ics magnetic sensors","magnetic sensor position modules ","magnetic sensor proximity modules ","magnetic sensor speed modules","magnetic switches ","magnets","moisture sensors","humidity sensors","motion sensors","motion detectors","ambient light sensors  ","ir sensors","uv sensors","distance measuring sensors","mouse sensors","photo detectors","cds cells","logic output optical sensors ","photodiodes","photoelectric sensors ","photointerrupters sensors ","logic output sensors","photointerrupters sensors","transistor output sensors","phototransistors sensors","reflective optical sensors  ","analog output optical sensors ","position sensors","angle sensors ","linear position measuring ","pressure sensors","pressure transducers","proximity sensors","proximity sensors","occupancy sensors ","rtd ","resistance temperature detector","shock sensors","solar cells","specialized sensors","strain gauges","temperature regulators","temperature sensors","temperature transducers","temperature switches","ntc thermistors","ptc thermistors","thermocouple ","temperature probe","tilt sensors","ultrasonic receivers ","ultrasonic transmitters ","vibration sensors","soldering","desoldering ","desoldering braid","desoldering wick","desoldering pumps","dispensers","dispenser tips","flux","flux remover","fume extraction","smoke extraction","holder","stands","solder","solder sponge","solder stencils","soldertemplates","soldering irons ","soldering tweezers","soldering handles","soldering stations ","desoldering stations ","rework stations ","soldering tips","desoldering tips","rework tips tips","soldering nozzles","desoldering nozzles","rework tips nozzles","static control ","esd","clean room products","clean room swabs","clean room brushes","clean room treatments ","clean room cleaners ","clean room wipes ","ionizer equipment","static control clothing","static control device containers","static control grounding cords ","static control grounding cords straps ","static control grounding mats","static control shielding bags ","static control shielding  materials","configurable switch components ","contact block switch components ","illumination source switch components ","lens switch components ","dip switches","keylock switches","keypad switches","magnetic switches","reed switches","navigation switches ","joystick switches","programmable display switches","pushbutton switches","hall effect pushbutton switches ","rocker switches","rotary switches","selector switches","slide switches","snap action","limit switches","tactile switches","thumbwheel switches","toggle switche","tapes","adhesives","glue","applicators","tape dispensers","electrical testers","current probes","environmental testers","function generators","multimeters","oscilloscopes","power supplies","spectrum analyzers","variable transformers","alligator test clips","crocodile test clips","heavy duty test clips","grabbers","hooks ","ic test clips","banana test leads","meter interface test leads","bnc interface test leads ","jumper test leads","specialty test leads","test leads kits","oscilloscope probes","thermocouples","temperature probes","test points","test probe tips","thermometers","tools","assorted tool kits","chemicals","cleaners","crimp heads","die sets","crimpers","presses ","cutting tools","excavators","hooks","picks","probes","tuning tools","fiber optics ","fiber optic accessories","flashlights","hammers","heat guns ","torches","hex keys","torx keys","insertion","extraction","knives","blades","personal protective equipment","ppe","pliers","punchdown","blades","punches","screw and nut drivers","screw and nut bits","screw and nut blades","screw and nut handles ","screw and nut sets","sockets sets","sockets ","socket handles","specialized tools","spiral wrap tools ","expandable tools","sleeving tools","staking tools","tweezers","vacuums","vises","wire strippers","wire tie guns","wire wrap","wrenches","transformers","audio transformers","current sense transformers","isolated step up down autotransformer","non-isolated step up down autotransformer","power transformers","pulse transformers","specialty transformers","switching converter","smps transformers"];
$(function() {
	
	/* Change search border color; submit button background color on focus of search field */
	
	$("#searchform input[type=text]").focus(function() {
		$(this).parent().toggleClass('active');	
		$(this).next("input[type=submit]").toggleClass('active');	
		});

	$("#searchform input[type=text]").focusout(function() {
		$(this).parent().toggleClass('active');	
		$(this).next("input[type=submit]").toggleClass('active');
		
		});

});