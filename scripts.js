// scripts.js

document.querySelectorAll('.content').forEach(section => {
    section.addEventListener('click', () => {
        const sectionTitle = section.querySelector('h2').innerText;
    });
});
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
