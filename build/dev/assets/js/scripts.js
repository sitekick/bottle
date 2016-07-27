/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-mq-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function s(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?S.className.baseVal=n:S.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(x?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var s,l,f,u,d="modernizr",c=i("div"),p=a();if(parseInt(r,10))for(;r--;)f=i("div"),f.id=o?o[r]:d+(r+1),c.appendChild(f);return s=i("style"),s.type="text/css",s.id="s"+d,(p.fake?p:c).appendChild(s),p.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),l=t(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=u,S.offsetHeight):c.parentNode.removeChild(c),!!l}function f(e,n){return!!~(""+e).indexOf(n)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e,n){return function(){return e.apply(n,arguments)}}function c(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?d(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+p(n[o])+":"+r+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,o,s){function a(){d&&(delete N.style,delete N.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var l=m(e,o);if(!r(l,"undefined"))return l}for(var d,c,p,h,v,y=["modernizr","tspan","samp"];!N.style&&y.length;)d=!0,N.modElem=i(y.shift()),N.style=N.modElem.style;for(p=e.length,c=0;p>c;c++)if(h=e[c],v=N.style[h],f(h,"-")&&(h=u(h)),N.style[h]!==t){if(s||r(o,"undefined"))return a(),"pfx"==n?h:!0;try{N.style[h]=o}catch(g){}if(N.style[h]!=v)return a(),"pfx"==n?h:!0}return a(),!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,o,s):(a=(e+" "+E.join(i+" ")+i).split(" "),c(a,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var g=[],C=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var S=n.documentElement,x="svg"===S.nodeName.toLowerCase(),_=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();w.mq=_;var b="Moz O ms Webkit",z=w._config.usePrefixes?b.split(" "):[];w._cssomPrefixes=z;var E=w._config.usePrefixes?b.toLowerCase().split(" "):[];w._domPrefixes=E;var P={elem:i("modernizr")};Modernizr._q.push(function(){delete P.elem});var N={style:P.elem.style};Modernizr._q.unshift(function(){delete N.style}),w.testAllProps=v,w.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),o(),s(g),delete w.addTest,delete w.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);
'use strict';

var resizeQuery = function () {

	var mQueries = ['(max-width: 500px)', '(max-width: 768px)', '(max-width: 1024px)', '(min-width: 1024px)'];
	var currentMQ = idQuery();

	var monitorMQ = function monitorMQ(eventsobj, init) {

		var tmpMQ = currentMQ;

		if (init) {
			fireCallback(eventsobj, currentMQ);
		}

		$(window).resize(function () {
			var newMQ = idQuery();

			if (newMQ != tmpMQ) {
				fireCallback(eventsobj, newMQ);

				if (eventsobj['(all)']) {
					fireCallback(eventsobj, '(all)');
				}

				tmpMQ = newMQ;
			};
		});
	};

	function idQuery() {
		for (var i = 0; i < mQueries.length; i++) {
			if (Modernizr.mq(mQueries[i]) == true) {

				return mQueries[i];

				break;
			}
		}
	}

	function fireCallback(events, index) {

		if (typeof events[index] === 'function') {
			return events[index]();
		}
	}

	return monitorMQ;
}();
'use strict';

$(function () {

	$.getJSON('assets/data/charts.json', function (data) {

		buildCharts(data.charts);
	});

	function buildCharts(data) {

		Chart.defaults.global.defaultFontColor = '#EEE';
		Chart.defaults.global.defaultFontFamily = 'Lato, sans-serif';
		Chart.defaults.global.defaultFontSize = 14;

		/* Investors Chart 1: Profit Margin */

		var can1 = document.getElementById('chart1');
		can1.height = 200;
		var ctx1 = can1.getContext('2d');

		var myLine = new Chart(ctx1, {
			type: 'line',
			data: data.investor.profitMargin,
			options: {
				responsive: false,
				tooltips: {
					callbacks: {
						title: function title() {
							return '';
						},
						label: function label(tooltipItem, data) {
							return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '%';
						}
					}
				},
				legend: {
					display: false
				}
			}
		});

		/* Investors Chart 2: Annual Revenue */

		var can2 = document.getElementById('chart2');
		can2.height = 200;
		var ctx2 = can2.getContext('2d');

		var myPie = new Chart(ctx2, {
			type: 'doughnut',
			data: data.investor.annualRevenue,
			options: {
				responsive: false,
				tooltips: {
					callbacks: {
						title: function title() {
							return 'FY 2015';
						},
						label: function label(tooltipItem, data) {
							return data.labels[tooltipItem.index] + ': $' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + ' B';
						}
					}
				},
				legend: {
					display: true,
					position: 'bottom',
					labels: {
						boxWidth: 15
					}
				}
			}
		});

		/* Investors Chart 3: PS Ratio */

		var can3 = document.getElementById('chart3');
		can3.height = 200;
		var ctx3 = can3.getContext('2d');

		var myBar = new Chart(ctx3, {
			type: 'bar',
			data: data.investor.psRatio,
			options: {
				responsive: false,
				legend: {
					display: false
				}
			}
		});
	}
});
'use strict';

$(function () {

	$.getJSON('assets/data/search.json', function (data) {

		var terms = data.terms;

		var suggestions = $.map(terms, function (term) {
			return { value: term, data: term };
		});
		$('#searchform input[type=text]').autocomplete({
			lookup: suggestions
		});
	});
});
'use strict';

/* Detect changes in viewport to initialize/reset appropriate menu behaviors */
$(function () {

	var events = {
		'(max-width: 500px)': function maxWidth500px() {
			mobileNav();
			footerNavActivate();
		},
		'(max-width: 768px)': function maxWidth768px() {
			standardNav();
			footerNavDeactivate();
		},
		'(max-width: 1024px)': function maxWidth1024px() {
			standardNav();
			footerNavDeactivate();
		},
		'(min-width: 1024px)': function minWidth1024px() {
			standardNav();
			footerNavDeactivate();
		}
	};

	//with true to set initial state
	resizeQuery(events, true);

	function mobileNav() {

		//reset elements
		$("nav .level1 > li").off();
		$("nav .level2").each(function () {
			$(this).hide().css({ 'top': 0, 'height': 'auto' });
		});

		//mobile nav activate
		if (!$("#login .menu-toggle").length) {
			$('nav').hide();
			$("#login div").append('<button class="menu-toggle" role="button" aria-pressed="false"></button>');
			$('.level1 > li > a').attr('aria-pressed', 'false');

			$('.menu-toggle').on('click', function () {

				$(this).attr('aria-pressed', function (index, value) {
					return 'false' === value ? 'true' : 'false';
				}).toggleClass('active');
				$('nav').slideToggle(100);
			});

			$('nav .level1 > li > a').off().on('click', function () {

				$(this).attr('aria-pressed', function (index, value) {
					return 'false' === value ? 'true' : 'false';
				}).toggleClass('active').next('.level2').slideToggle(100);

				$("nav .level1 > li > a").not(this).each(function () {

					if ($(this).hasClass('active')) {
						$(this).toggleClass('active').next('.level2').slideToggle(100);
					}
				});
			});
		} //if(!$("#login .menu-toggle").length)
	}

	function standardNav() {

		//reset elements
		$('.level1 > li > a').off();
		if ($("#login .menu-toggle").length) {
			$("#login .menu-toggle").remove();
			$("nav").show();
			$("nav .level2").show();
			$("nav .level1 > li > a").removeClass('active').removeAttr('aria-pressed');
		}

		$('nav .level1 > li a').off().on({
			focus: function focus() {
				//@a11y: show drop down on tab focus
				fireDropDown('down', $(this).parent());
			}
		});

		$("nav .level2").each(function () {
			var y = $(this).height();
			var yb = parseInt($(this).css("border-bottom-width"), 10);
			var py = $(this).parent().height();
			var offset = -Math.abs(y + yb - py);
			$(this).css('top', offset).data({ calcheight: y, borderw: yb, offset: offset }).hide();
		});

		$('nav .level2 > li:last-child a').on({
			//retract dropdown when last sub menu item loses focus
			focusout: function focusout() {
				fireDropDown('up', $(this).parents('.level1 li'));
			}
		});

		$("nav .level1 > li").off().on({
			mouseenter: function mouseenter() {
				fireDropDown('down', this);
			},
			mouseleave: function mouseleave() {
				fireDropDown('up', this);
			}
		});
	}

	function fireDropDown(dir, el) {
		switch (dir) {

			case 'down':

				$(el).data({ fired: true }).addClass("active");
				var yy = $(el).height();
				var sy = $(".row.slider").height();
				var yb = $(".level2", el).data().borderw;
				$(".level2", el).show().animate({
					top: yy,
					height: sy - yb
				}, 300, "swing");
				break;
			case 'up':
			default:
				//retract

				if ($(el).data().fired) {
					$(el).data({ fired: false }).removeClass("active");
					$(".level2", el).animate({
						top: $(".level2", el).data().offset,
						height: $(".level2", el).data().calcheight
					}, 200, "swing", function () {
						$(this).hide();
					});
				} else {
					return;
				}

		}
	};

	function footerNavActivate() {
		$(".footer ul").hide();
		$(".footer h4").off().removeClass("active").on("click", function () {
			$(this).next("ul").slideToggle(300, function () {
				$(".footer ul:visible").prev("h4").addClass("active");
				$(".footer ul:hidden").prev("h4").removeClass("active");
			});
		});
	}

	function footerNavDeactivate() {
		$(".footer ul").show();
		$(".footer h4").off().removeClass("active");
	}
});
'use strict';

$(function () {

	var target = 'table#products';
	$(target).hide();
	//detect when a screen resize occurs that results in new media query being utilized;
	//refires products table build mechanism to switch between layout modes;

	var events = {
		'(all)': function all() {
			$("#productform select").change();
		}
	};

	resizeQuery(events);

	$.getJSON('assets/data/products.json', function (data) {

		//the select field change event fires the build mechanism for the table
		$("#productform select").change(function () {

			var sel = '';

			sel += $("#productform select option:selected").val();

			$('#products tbody').children('tr').remove();

			buildTable(data.products, sel);
		}).change();
	});

	function buildTable(products, display) {

		//products array of all products
		//display: which subset to display(featured or sale)

		var divs = [];

		$('tbody', target).hide();

		for (var p = 0; p < products.length; p++) {

			var value = products[p];

			if (display == 'featured' && value.featured === false) continue;
			if (display == 'sale' && value.sale === false) continue;

			var div = '<tr>\n\t\t\t\t\t<td><img src="assets/img/products/' + value.image + '" alt="" /></td>\n\t\t\t\t\t<td>' + value.manufacturer + '</td>\n\t\t\t\t\t<td>' + value.description + ' </td>\n\t\t\t\t\t<td><a href="#">' + value.number + '</a></td>\n\t\t\t\t\t<td>' + value.category + '</td>\n\t\t\t\t\t<td>$' + PriceColumn(value.price, value.sale) + '</td>\n\t\t\t\t\t</tr>';

			divs.push(div);
		};

		$('tbody', target).append(divs);

		if (Modernizr.mq('(min-width: 768px)')) {
			//large screen layout mode; includes custom hover effect	

			//hover
			$('tbody tr', target).hover(function () {
				activateRevealPanel(this);
			});
			//tabbed focus
			$('tbody tr a', target).on({
				focus: function focus() {
					var tr = $(this).parents('tr');
					$(tr).addClass('focused');
					activateRevealPanel(tr);
				},
				focusout: function focusout() {
					var tr = $(this).parents('tr');
					$(tr).removeClass('focused');
				}
			});
			//reset
			$(target).on({
				mouseleave: function mouseleave() {
					deactivateRevealPanel();
				}
			});
			$('tbody tr:nth-last-child(1) a', target).on({
				focusout: function focusout() {
					deactivateRevealPanel();
				}
			});
		} else {
			//small screen layout mode; standard table output
			$('tbody tr', target).off("mouseenter mouseleave");
		}

		$(target).show();
		$('tbody', target).fadeIn("slow");
	}

	function PriceColumn(templatePrice, templateSale) {

		if (templateSale === false) {
			return templatePrice.toFixed(2);
		} else {
			return '<del>' + templatePrice.toFixed(2) + '</del> ' + templateSale.toFixed(2);
		}
	}

	function activateRevealPanel(el) {

		//take the hover||tabbed row element and retrieve data from child cells to populate hover element
		deactivateRevealPanel();

		$('.products .col1').prepend('<div id="product-details"></div>');

		var image = $('td:nth-child(1)', el).html();
		var manufacturer = $('td:nth-child(2)', el).html();
		var description = $('td:nth-child(3)', el).html();

		var details = '<div class="product-detail"><div class="photo">' + image + '</div><div class="copy"><h4>' + manufacturer + '</h4><p>' + description + '</p></div></div>';

		$('#product-details').append(details);
		$('.product-detail').hide().fadeIn("fast");
	}

	function deactivateRevealPanel() {
		$('#product-details').remove();
	}
});
"use strict";

$(function () {

	/* Change search border color; submit button background color on focus of search field */

	$("#searchform input[type=text]").on({
		focus: function focus() {
			$(this).parent().addClass('active');
		},
		input: function input() {
			$(this).next("input[type=submit]").addClass('active');
		},
		focusout: function focusout() {
			$(this).parent().removeClass('active');

			if ($(this).val().trim().length == 0) {
				$(this).next("input[type=submit]").removeClass('active');
			}
		}
	});
});
'use strict';

$(function () {

	var target = '.software .scrollwrap';
	//detect when a screen resize occurs that results in new media query being utilized;
	//refires products table build mechanism to switch between layout modes;

	var events = {
		'(all)': function all() {
			$("#softwareform select").change();
		}
	};

	resizeQuery(events);

	$.getJSON('assets/data/software.json', function (data) {

		//the select field change event fires the build mechanism for the table

		$("#softwareform select").change(function () {

			var sel = '';

			sel += $("#softwareform select option:selected").val();

			$(target).children('article').remove();

			buildScroll(data.blog[sel]);
		}).change();
	});

	function buildScroll(arr) {

		var articles = [];

		$(target).hide();

		$.each(arr, function (index, value) {

			var article = '<article><a href="' + value.link + '">\n\t\t\t\t\t<div class="logo"><img class="autosize" src="assets/img/blog/logos/' + value.image1 + '" alt="" /></div>\n\t\t\t\t\t<div class="teaser"><h4>' + value.title + '</h4><p>' + value.teaser + '</p></div>\n\t\t\t\t\t</a>\n\t\t\t\t\t' + revealImage(value.image2) + '\n\t\t\t\t\t<hr></article>';

			articles.push(article);
		});

		$(target).append(articles);

		if (Modernizr.mq('(min-width: 768px)')) {
			//large screen layout mode; includes custom hover effect	

			//hover
			$('article', target).hover(function () {
				activateRevealPanel(this);
			});
			//tabbed focus
			$('article a', target).on({
				focus: function focus() {
					var article = $(this).parents('article');
					$(article).addClass('focused');
					activateRevealPanel(article);
				},
				focusout: function focusout() {
					var article = $(this).parents('article');
					$(article).removeClass('focused');
				}
			});
			//reset
			$(target).on({
				mouseleave: function mouseleave() {
					deactivateRevealPanel();
				}
			});
			$('article:nth-last-child(1) a', target).on({
				focusout: function focusout() {
					deactivateRevealPanel();
				}
			});
		} else {
			//small screen layout mode; standard table output
			$('article', target).off("mouseenter mouseleave");
		}

		$(target).fadeIn("slow");
	}

	function revealImage(fileName) {
		if (fileName == null) {
			return '';
		} else {
			return '<div class="reveal"><img src="assets/img/blog/photos/src/' + fileName + '" class="autosize" alt=""></div>';
		}
	}

	function activateRevealPanel(el) {

		//take the hover||tabbed row element and retrieve data from child cells to populate hover element
		deactivateRevealPanel();
		var image = $('div.reveal', el).html();

		if (image == null) {
			return;
		}

		$('.software .col3').prepend('<div id="blog-photo"></div>');

		var photo = '<div class="blog-photo">' + image + '</div>';

		$('#blog-photo').append(photo);
		$('.blog-photo').hide().fadeIn("fast");
	}

	function deactivateRevealPanel() {
		$('#blog-photo').remove();
	}
});