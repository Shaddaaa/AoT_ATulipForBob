let ShaddasATulipForBob = {};

ShaddasATulipForBob.setupUI = function() {
	let cards = document.getElementsByClassName("col-md-8")[0];
	let card = document.createElement("div");
	card.classList.add("card");
	let cHeader = document.createElement("div");
	cHeader.classList.add("card-header");

	let prevButton = document.createElement("button");
	prevButton.innerHTML = "<- Previous";
	prevButton.classList.add("btn");
    prevButton.classList.add("btn-sm");
    prevButton.classList.add("btn-primary");
	prevButton.onclick = function() {
		window.location.href = "https://ageoftrades.com/game/tulips/" + (ShaddasATulipForBob.tulip-1);
	}

	let nextButton = document.createElement("button");
	nextButton.innerHTML = "Next ->";
	nextButton.classList.add("btn");
    nextButton.classList.add("btn-sm");
    nextButton.classList.add("btn-primary");
	nextButton.onclick = function() {
		window.location.href = "https://ageoftrades.com/game/tulips/" + (ShaddasATulipForBob.tulip+1);
	}
	nextButton.style.float= "right";


	cHeader.appendChild(prevButton);
	cHeader.appendChild(nextButton);
	card.appendChild(cHeader);
	cards.insertBefore(card, cards.children[0]);
}

ShaddasATulipForBob.tulip = window.location.href.split("https://ageoftrades.com/game/tulips/")[1];
if (ShaddasATulipForBob.tulip!=null) {
	ShaddasATulipForBob.tulip = Number.parseInt(ShaddasATulipForBob.tulip);
	ShaddasATulipForBob.setupUI();
}