
( function () {

	var minute = 60 * 1000 					,
		period = parseFloat ( 0.5 ) 		,
		height = document.body.clientHeight ;

	window.setInterval ( function () {

		var random = Math.floor ( Math.random () * height );

		window.scrollTo ( 0 , random );
	} , ( minute * period ));

} ());