(function () {
    const button = document.querySelector('#start');
    const width = document.querySelector('#width');
    const amount = document.querySelector('#amount');
    const rate = document.querySelector('#rate')
    const circles = document.querySelector('#circles');
    const message = document.querySelector("#message");
    const game = document.querySelector("#game");

    let zIndex = parseInt(circles.value);

    button.onclick = function() {
        if(game.childElementCount == 0) 
        if (validate()) {
            message.style.display = "none";
            for (let i = 0; i < parseInt(circles.value); i++) {
                createElement.call(this)
            }
        } else {
            message.style.display = "block";
            return;
        }
    }

    function validate() {
        let inputs = document.querySelectorAll('input[type="number"]');
        return Array.from(inputs).reduce((a, c) => {
            if (c.value === "") {
                c.style.border = "1px solid red";
            } else {
                c.style.border = "1px solid black"
            }
            return c.value !== ""
        }, false);
    }

    function createElement() {
        let a = document.createElement('div');
        let r = generateColor();
        let g = generateColor();
        let b = generateColor();
        a.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        a.style.width = width.value + 'px';
        a.style.height = width.value + 'px';
        a.classList.add('balloon');
        a.style.zIndex = zIndex--;

        a.onclick = function() {
            game.removeChild(a);
        }
        a.onmouseenter = function() {
            a.classList.add('fade-out');
        }
        a.onmouseleave = function() {
            a.classList.remove("fade-out");
        }
        game.appendChild(a);

        place(a);

        let timer = setInterval(() => {
            if (game.childElementCount == 0)
                clearInterval(timer);
            let width = parseInt(a.style.width) + parseInt(amount.value);
            let height = parseInt(a.style.height) + parseInt(amount.value);
            a.style.width = width + 'px';
            a.style.height = height + 'px';
        }, parseInt(rate.value))
    }

    function generateColor() {
        return Math.floor(Math.random() * 255);
    }

    function place(elem) {
        // let operation = screenPlaceRandom(1, 10);
        let tenPercentWidth = screen.width * 0.1;
        let thirtyPercentHeight = screen.height * 0.4;
        elem.style.left = screenPlaceRandom(tenPercentWidth, screen.width - tenPercentWidth) + 'px';
        elem.style.top = screenPlaceRandom(thirtyPercentHeight, screen.height - thirtyPercentHeight) + 'px';
    }

    function screenPlaceRandom(low, high) {
        return (Math.floor(Math.random() * (high - low)) + low);
    }
}())