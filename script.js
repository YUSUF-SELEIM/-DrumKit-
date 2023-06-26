var boom = document.getElementById("boom");
var clap = document.getElementById("clap");
var hihat = document.getElementById("hihat");
var kick = document.getElementById("kick");
var openhat = document.getElementById("openhat");
var ride = document.getElementById("ride");
var snare = document.getElementById("snare");
var tink = document.getElementById("tink");
var tom = document.getElementById("tom");
// Sounds
var boomSound = new Audio("./sounds/boom.wav");
var clapSound = new Audio("./sounds/clap.wav");
var hihatSound = new Audio("./sounds/hihat.wav");
var kickSound = new Audio("./sounds/kick.wav");
var openhatSound = new Audio("./sounds/openhat.wav");
var rideSound = new Audio("./sounds/ride.wav");
var snareSound = new Audio("./sounds/snare.wav");
var tinkSound = new Audio("./sounds/tink.wav");
var tomSound = new Audio("./sounds/tom.wav");
// play when clicked
boom.addEventListener("click", () => {
    boomSound.play();
    boomSound.currentTime = 0;
    // tp //play it again and again with each press
});
clap.addEventListener("click", () => {
    clapSound.play();
    clapSound.currentTime = 0; // tp play it again and again with each press
});
hihat.addEventListener("click", () => {
    hihatSound.play();
    hihatSound.currentTime = 0; // tp play it again and again with each press
});
kick.addEventListener("click", () => {
    kickSound.play();
    kickSound.currentTime = 0; // tp play it again and again with each press
});
openhat.addEventListener("click", () => {
    openhatSound.play();
    openhatSound.currentTime = 0; // tp play it again and again with each press
});
ride.addEventListener("click", () => {
    rideSound.play();
    rideSound.currentTime = 0; // tp play it again and again with each press
});
snare.addEventListener("click", () => {
    snareSound.play();
    snareSound.currentTime = 0; // tp play it again and again with each press
});
tink.addEventListener("click", () => {
    tinkSound.play();
    tinkSound.currentTime = 0; // tp play it again and again with each press
});
tom.addEventListener("click", () => {
    tomSound.play();
    tomSound.currentTime = 0; // tp play it again and again with each press
});
// window.addEventListener("keydown", (e) => console.log(e.code))
