/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

console.log('hoi');

var button = document.querySelector("button");
var section = document.querySelector('section');
var laadElement = document.querySelector('span');

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
	inwonersbutton.textContent = "Inwoners";
	var bijnaambutton = document.createElement('button');
	bijnaambutton.textContent = "Bijnaam";
	var datumbutton = document.createElement('button');
	datumbutton.textContent = "Datum van toetreding";
	var stadbutton = document.createElement('button');
	stadbutton.textContent = "Hoofdstad";
	var pInfo = document.createElement('p');
	pInfo.textContent = "Klik op een van de buttons of de eerste letter van de knop op het toetsenbord om de informatie bij de staten te weergeven.";

	div.appendChild(h1Section);
	div.appendChild(pInfo);
	div.appendChild(inwonersbutton);
	div.appendChild(bijnaambutton);
	div.appendChild(datumbutton);
	div.appendChild(stadbutton);

	for (var i = 0; i < staten.length; i++) {
		console.log("Staat " + i);
		var staatHouder = document.createElement('article');
		var staatIMG = document.createElement('img');
		staatIMG.src = staten[i].state_flag_url;
		var staatNaam = document.createElement('h3');
		staatNaam.textContent = staten[i].state;
		var paragraafInfo = document.createElement('p');

		console.log(paragraafInfo);

		//ALLE DATA KOPPELEN
		staatHouder.appendChild(staatIMG);
		staatHouder.appendChild(staatNaam);
		staatHouder.appendChild(paragraafInfo);

		//HTML INJECTION IN BESTAANDE SECTION
		section.appendChild(staatHouder);
	} //end: for staten

	inwonersbutton.addEventListener('click', function () {
		showInwoners(staten);
	});
	bijnaambutton.addEventListener('click', function () {
		showBijnaam(staten);
	});
	datumbutton.addEventListener('click', function () {
		showDatum(staten);
	});
	stadbutton.addEventListener('click', function () {
		showStad(staten);
	});

	document.addEventListener('keydown', function (event) {
		if (event.keyCode === 73) { // i
			showInwoners(staten);
		}
		if (event.keyCode === 66) { // b
			showBijnaam(staten);
		}
		if (event.keyCode === 68) { // d
			showDatum(staten);
		}
		if (event.keyCode === 72) { // h
			showStad(staten);
		}
	});
}

function showInwoners(b) {
	var staten = b; //hierin staat de volledige json file opgeslagen
	//console.log(a); //hiervan krijg ik 'population' terug in de console
	var articles = document.querySelectorAll('article');
	for (j = 0; j < staten.length; j++) {
		//console.log(staten[j].a); // hiervan krijg ik 50x 'undefined' terug in de console..
		var p = articles[j].querySelector('p');
		p.textContent = 'AANTAL INWONERS: ' + staten[j].population;
	}
}

function showBijnaam(b) {
	var staten = b;
	console.log(staten);
	var articles = document.querySelectorAll('article');
	for (k = 0; k < staten.length; k++) {
		var p = articles[k].querySelector('p');
		p.textContent = 'BIJNAAM STAAT: ' + staten[k].nickname;
	}
}

function showDatum(b) {
	var staten = b;
	var articles = document.querySelectorAll('article');
	for (l = 0; l < staten.length; l++) {
		var p = articles[l].querySelector('p');
		p.textContent = 'DATUM VAN TOETREDING: ' + staten[l].admission_date;
	}
}

function showStad(b) {
	var staten = b;
	var articles = document.querySelectorAll('article');
	for (m = 0; m < staten.length; m++) {
		var p = articles[m].querySelector('p');
		p.textContent = 'HOOFDSTAD: ' + staten[m].capital_city;
	}
}
