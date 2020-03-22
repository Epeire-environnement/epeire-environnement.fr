
document.addEventListener("DOMContentLoaded", function (event) {
	var mymap = L.map('mapintervention').setView([48.453, 0.7024], 8);

	L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, '
	}).addTo(mymap);

	L.circle([48.453, 0.7024], {
		color: 'green',
		fillColor: '#03ab1a',
		fillOpacity: 0.2,
		radius: 60000
	}).addTo(mymap);
});



