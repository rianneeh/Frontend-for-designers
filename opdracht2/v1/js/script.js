/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*De twee knoppen krijgen elk een variabele*/
var previous = document.querySelector('#previous');
var next = document.querySelector('#next');

/*De variabele huidigeImg wordt gebruikt om te tellen welke img moet worden weergeven*/
var huidigeImg = 1;

function volgendeImg() {
	weergeefImg(huidigeImg += 1); /*huidige img wordt 1 bij opgeteld en met die nieuwe waarde word de functie weergeefImg uitgevoerd*/
}

function vorigeImg() {
	weergeefImg(huidigeImg -= 1); /*huidige img wordt 1 afgehaald en met die nieuwe waarde word de functie weergeefImg uitgevoerd*/
}

function weergeefImg(sel) {
	var i;
	/*alle images worden in een array gezet/geteld*/
	var alleImg = document.querySelectorAll('img');
	/*alle dots worden in een array gezet/geteld*/
	var alleDots = document.querySelectorAll('.dot');
	/*als de waarde van huidigeImg hoger word dan het totaal aantal Img, gaat de waarde terug naar 1(de eerste foto)*/
	if (sel > alleImg.length) {
		huidigeImg = 1
	};
	/*als de waarde van huidigeImg lager word dan 1, word de waarde het toaal aantal Img (de laatste foto)*/
	if (sel < 1) {
		huidigeImg = alleImg.length
	};
	/*de class show wordt van de vorig weergeven img verwijdert*/
	for (i = 0; i < alleImg.length; i++) {
		alleImg[i].classList.remove('show');
	}
	/*de class active wordt van de vorig weergeven dots verwijdert*/
	for (i = 0; i < alleDots.length; i++) {
		alleDots[i].classList.remove('active');
	}
	/*de img en dot die op dat moment moeten worden weergeven krijgen de juiste class, -1 omdat de array begint bij 0*/
	alleImg[huidigeImg - 1].classList.add('show');
	alleDots[huidigeImg - 1].classList.add('active');
}

/*Als de eerste knop word geklikt, word de functie vorigeImg uitgevoerd*/
previous.addEventListener('click', vorigeImg);

/*Als de tweede knop word geklikt, word de functie volgendeImg uitgevoerd*/
next.addEventListener('click', volgendeImg);

/*als de pijl terug word aangeklikt, word vorigeImg uitgevoerd, als de pijl verder word aangeklikt, word volgendeImg uitgevoerd*/
document.addEventListener('keydown', function (event) {
	if (event.keyCode === 39) {
		volgendeImg();
	}
	if (event.keyCode === 37) {
		vorigeImg();
	}
});
