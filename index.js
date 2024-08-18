let homeScore = 0;
let guestScore = 0;
let homeScoreEl = document.getElementById("homeScore-el");
let guestScoreEl = document.getElementById("guestScore-el");

function homeIncrement1 () {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}
function homeIncrement2 () {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}
function homeIncrement3 () {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}
function guestIncrement1 () {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}
function guestIncrement2 () {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}
function guestIncrement3 () {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}
function restartGame () {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}