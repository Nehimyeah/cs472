/*jslint browser: true */
/*global window, ANIMATIONS */
window.onload = function () {
    "use strict";
    const textArea = document.querySelector("#text-area");
    const start = document.querySelector("#start");
    const stop = document.querySelector("#stop");

    const animation = document.querySelector("#animation");
    const fontSize = document.querySelector("#fontsize");
    const turbo = document.querySelector("#turbo");

    let timer;
    let timerStarted = false;
    let index;
    let keyframes;
    let speed = 250;

    fontSize.onchange = function () {
        textArea.style.fontSize = fontSize.value;
    };

    animation.onchange = function () {
        textArea.value = ANIMATIONS[animation.value];
    };

    turbo.onchange = function () {
        if (timerStarted) {
            clearInterval(timer);
            setSpeed();
            startAnimation(speed);
        }
    };

    start.onclick = function () {
        index = 0;
        timerStarted = true;
        setSpeed();
        keyframes = textArea.value.split("=====\n");
        startAnimation(speed);
        start.disabled = true;
        stop.disabled = false;
        animation.disabled = true;
    };

    stop.onclick = function () {
        textArea.value = keyframes.join("=====\n");
        clearInterval(timer);
        stop.disabled = true;
        start.disabled = false;
        animation.disabled = false;
        timerStarted = false;
    };

    function setSpeed() {
        speed = (
            turbo.checked
            ? 50
            : 250
        );
    }

    function startAnimation(speed) {

        timer = setInterval(function () {
            startKeyframes();
        }, speed);
    }

    function startKeyframes() {
        textArea.value = keyframes[index % keyframes.length];
        index += 1;
    }
};