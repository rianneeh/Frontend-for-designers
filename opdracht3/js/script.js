/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

console.log('hoi');

var section = document.querySelector('section');

var requestURL = 'https://raw.githubusercontent.com/CivilServiceUSA/us-states/master/data/states.json'; //bewaar de URL van de JSON in een variabele
var request = new XMLHttpRequest(); //maak een nieuw request
request.open('GET', requestURL); //open dit request met de juiste variabele, requestURL
request.responseType = 'json'; //zo weet de XHR dat de server een JSON terugkrijgt die moet worden omgezet naar JS object
request.send(); //verstuur het verzoek naar de server

request.onload = function () { //wachten op een response van de server en dat verwerken, eventhandler die gaat als het load event actief is op de request, de request zal dan succesvol zijn(request.response)
	var datainhoud = request.response; //de response slaan we op in de variabele
	showStaten(datainhoud); //functie die zorgt dat de section word gevult met juiste superhelden
}


function showStaten(jsonObj) { //functie voor superhelden
	var staten = jsonObj;
	console.log("show data alle Staten:", staten);

	//BUTTONS
	var div = document.querySelector('div');
	var h1Section = document.createElement('h1');
	h1Section.textContent = "Klik om informatie per staat te weergeven: ";
	var inwonersbutton = document.createElement('button');
	inwonersbutton.textContent = "Aantal inwoners";

	div.appendChild(h1Section);
	div.appendChild(inwonersbutton);

	for (var i = 0; i < staten.length; i++) {
		console.log("Staat " + i);
		var staatHouder = document.createElement('article');
		var staatIMG = document.createElement('img');
		staatIMG.src = staten[i].state_flag_url;
		var staatNaam = document.createElement('h3');
		staatNaam.textContent = staten[i].state;
		var paragraafInfo = document.createElement('p');
		paragraafInfo.textContent = "AANTAL INWONERS: " + staten[i].population;

		console.log(paragraafInfo);

		//ALLE DATA KOPPELEN
		staatHouder.appendChild(staatIMG);
		staatHouder.appendChild(staatNaam);
		staatHouder.appendChild(paragraafInfo);

		//HTML INJECTION IN BESTAANDE SECTION
		section.appendChild(staatHouder);

		function klikButton() {
			paragraafInfo.classList.add('show');
		}

		inwonersbutton.addEventListener('click', klikButton);
	} //end: for staten
}
