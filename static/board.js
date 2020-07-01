const Board = Object.create(null);

Board.cards = document.querySelectorAll(".card");
const el = (id) => document.getElementById(id);
const numOfCards = 12;
let totalClicks = 0;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;
let allMatchedCards = [];

(Board.shuffleCards = function () {
    Board.cards.forEach((card) => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

Board.flipCard = function () {
    //if 2 unmatched cards opened, forbid user from clicking new card.
    if (lockBoard) return;
    //if double click on same card, ignore second click.
    if (this === firstCard) return;

    //increment flips counter every time a card is flipped.
    el("flips").innerText = totalClicks;
    totalClicks++;
    el("flips").innerText = totalClicks;

    this.classList.add("flip");

    // first click
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    // second click
    secondCard = this;
    Board.checkForMatch();
};

Board.checkForMatch = function () {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? Board.disableCards() : Board.flipCardsBack();
};

//if match, prevent them from being clicked again.
Board.disableCards = function () {
    firstCard.removeEventListener("click", Board.flipCard);
    secondCard.removeEventListener("click", Board.flipCard);

    allMatchedCards.push(firstCard.dataset, secondCard.dataset);
    if (allMatchedCards.length === numOfCards) {
        Board.victory();
    }
    Board.resetBoard();
};

//if not a match
Board.flipCardsBack = function () {
    //No cards can be flipped until the unmatched pair is flipped back.
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        Board.resetBoard();
    }, 500);
};

//close unmatched pair.
Board.resetBoard = function () {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
};

Board.victory = function () {
    el("victory-text").classList.add("visible");
    el("total-flips").innerText = totalClicks;

    //send player name & score to server
    el("submit-name").addEventListener("click", async event => {
        const inputName = el("inputName").value;
        const playerInfo = { "Name": inputName, "Score": totalClicks };
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(playerInfo)
        };

        const response = await fetch("/scoreRoom", options);
        const serverResponse = await response.json();
        console.log(serverResponse);
    });
};

Board.cards.forEach(memcard => memcard.addEventListener("click", Board.flipCard));
export default Object.freeze(Board)