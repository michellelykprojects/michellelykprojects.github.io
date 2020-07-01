const Features = Object.create(null);

const el = (id) => document.getElementById(id);

function restartGame() {
    window.location.reload();
}

el("submit-name").addEventListener("click", restartGame);

el("inputName").onkeydown = function (event) {
    if (event.key === "Enter") {
        el("submit-name").click();
    }
};

export default Object.freeze(Features);