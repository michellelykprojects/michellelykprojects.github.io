import Board from "./board.js";

const describe = window.describe;
const it = window.it;
const fc = window.fastcheck;
const chai = window.chai;

describe("Mocha", function () {
    it("Correctly initialises Mocha", function () {
    });

    it("Correctly initialises FastCheck", function () {
        fc.assert(fc.property(fc.integer(), () => true));
    });
});

describe("Shuffle Cards", function () {
    it(
        "Given a board; " +
        "Once it is shuffled; " +
        "The cards must not have the same arrangement as before; ",
        function () {
            const unshuffled = Array.from(Board.cards);
            const shuffled = unshuffled
                .map((a) => ({ index: Math.floor(Math.random() * 12), value: a }))
                .map((a) => a.value);

            if (shuffled === unshuffled) {
                throw "Cards were not shuffled.";
            }
        }
    )
});


