// $(function () {
//     $(document).keyup(function (e) {
//        console.log(e.keyCode);
//     });
//   });

window.addEventListener('keydown', function (e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const keys = [...document.querySelectorAll('.keys, .keys2')];
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

// keys.forEach(key => key.addEventListener('transitionedend', removeTransition()));