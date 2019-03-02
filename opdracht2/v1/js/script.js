/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var previous = document.querySelector('#previous');
var next = document.querySelector('#next');

var huidigeImg = 1;

function volgendeImg(sel) {
	weergeefImg(huidigeImg += sel);
}

function vorigeImg(sel) {
	weergeefImg(huidigeImg -= sel);
}

function weergeefImg(sel) {
	var i;
	var alleImg = document.querySelectorAll('img');
	var alleDots = document.querySelectorAll('.dot');
	if (sel > alleImg.length) {
		huidigeImg = 1
	};
	if (sel < 1) {
		huidigeImg = alleImg.length
	};
	for (i = 0; i < alleImg.length; i++) {
		alleImg[i].classList.remove('show');
	}
	for (i = 0; i < alleDots.length; i++) {
		alleDots[i].classList.remove('active');
	}
	alleImg[huidigeImg - 1].classList.add('show');
	alleDots[huidigeImg - 1].classList.add('active');
}

previous.addEventListener('click', function () {
	vorigeImg(1);
});
next.addEventListener('click', function () {
	volgendeImg(1);
});

document.addEventListener('keydown', function (event) {
	if (event.keyCode === 39) {
		volgendeImg(1);
	}
	if (event.keyCode === 37) {
		vorigeImg(1);
	}
});
