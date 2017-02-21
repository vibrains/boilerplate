var url="http://api.geonames.org/postalCodeLookupJSON?postalcode=6600&country=AT&username=demo";
$.getJSON(url, function (data) {
	$.each(data.postalcodes, function (){
		$('ul#results').append('<li><div class=\"cityName\">' +this.placeName+ '</div></li>', 
			'<li>Longitude: <div class=\"lng\">' +this.lng+ '</div></li>',
			'<li class=\"latitude\">Latitude: <div class=\"lat\">' +this.lat+ '</div></li>');
	});
});