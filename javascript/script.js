console.log("Ashish is Awesome");

window.addEventListener('keydown', function (e) {
    //  console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e) {
    //console.log(e);
    if (e.propertyName !== 'transform') {
        return;
    }
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(function (key) {
    key.addEventListener('transitionend', removeTransition);
});