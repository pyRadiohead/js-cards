;
(function () {
	"use strict";
	console.log('it works');
	var cardTemplate = document.querySelector('#card-tmpl').innerHTML;
	var ourContainer = document.querySelector('.ba-cards');
	var suits = ['&spades;', '&clubs;', '&hearts;', '&diams;'];
	var indexes = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 'Joker'];

	var ourNewHtml = '';
	let multipleSuitsDown = '';
	let multipleSuitsUp = '';
	// for (let i = 0; i <= (indexes.length * suits.length); i++) {
	suits.forEach(suitElement => {
		indexes.forEach(indexElement => {
			if (Number(indexElement)) {
				if (indexElement % 2 != 0) {
					multipleSuitsUp = suitElement.repeat(indexElement / 2 + 1)
					multipleSuitsDown = suitElement.repeat(indexElement / 2);
				} else {
					multipleSuitsDown = suitElement.repeat(indexElement / 2);
					multipleSuitsUp = suitElement.repeat(indexElement / 2);
				}
			} else {
				multipleSuitsUp = `<img src="./img/${indexElement}.png" alt="${indexElement}">`;
				multipleSuitsDown = `<img src="./img/${indexElement}.png" alt="${indexElement}">`
			}

			ourNewHtml += cardTemplate.replace(/{{cardIndex}}/ig, indexElement)
				.replace(/{{cardSuitMini}}/ig, suitElement)
				.replace(/{{cardSuitUp}}/ig, multipleSuitsUp)
				.replace(/{{cardSuitDown}}/ig, multipleSuitsDown)

		});
	});

	ourContainer.innerHTML = ourNewHtml;


	// }

})();