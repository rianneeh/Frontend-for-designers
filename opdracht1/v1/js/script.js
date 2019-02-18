/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*MICROINTERACTIE 1 - de button veranderd van aan en uit*/
var buttons = document.querySelectorAll('button');
console.log(buttons);

function klikButton(event) {
	var geklikteAfbeelding = event.target;
	geklikteAfbeelding.classList.toggle('show');
}


function verwijderClass() {
	var alleImg = document.querySelectorAll('#images img');
	console.log(alleImg);
	for (var a = 0; a < alleImg.length; a++) {
		alleImg[a].classList.remove('show');
	}
}

function gekozenAfbeeldingen(sel) {
	console.log(sel);
	var gekozenImg = document.querySelectorAll(sel);
	console.log(gekozenImg);
	for (var b = 0; b < gekozenImg.length; b++) {
		gekozenImg[b].classList.add('show');
	}
}


for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', klikButton);
	buttons[i].addEventListener('click', verwijderClass);
}

buttons[0].addEventListener('click', function () {
	gekozenAfbeeldingen('#images img');
});
buttons[1].addEventListener('click', function () {
	gekozenAfbeeldingen('.wit');
});
buttons[2].addEventListener('click', function () {
	gekozenAfbeeldingen('.zwart');
});
buttons[3].addEventListener('click', function () {
	gekozenAfbeeldingen('.paars');
});
buttons[4].addEventListener('click', function () {
	gekozenAfbeeldingen('.blauw');
});
buttons[5].addEventListener('click', function () {
	gekozenAfbeeldingen('.oranje');
});
buttons[6].addEventListener('click', function () {
	gekozenAfbeeldingen('.groen');
});
