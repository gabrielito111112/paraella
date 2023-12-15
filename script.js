var currentImage = 1;
var totalImages = 1; 

function changeImage() {
    var galleryImage = document.getElementById('gallery-image');
    currentImage = (currentImage % totalImages) + 1;
    galleryImage.src = 'imagen' + currentImage + '.jpg';
}

function acceptProposal() {
    document.getElementById('heart').classList.remove('hidden');
    document.getElementById('options').style.display = 'none';
    document.getElementById('heart').style.transform = 'scale(1)';
    createConfetti();
}

function rejectProposal() {
    alert('oeee oee oeee desawebate');
    document.getElementById('heart').classList.remove('hidden');
  
}

function createConfetti() {
    var confettiContainer = document.getElementById('confetti-container');

    for (var i = 0; i < 50; i++) {
        var confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confettiContainer.appendChild(confetti);
    }
}
const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que ibas a decir que si <3' ) 
    alert('si aceptaste solo dame un besito y no me digas  nada <3')
    alert('Bueno mejor 2 ¿si? te quiero mi barquito de papel <3')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
var audio = document.getElementById("myAudio");
var audioSource = document.getElementById("audioSource");

function toggleAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function setAudioSource(url) {
    audioSource.src = url;
    audio.load();
}

// Ejemplo de uso: setAudioSource('tu-url-de-cancion.mp3');

