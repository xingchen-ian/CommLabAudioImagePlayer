const images = [
    'assets/images/image1.jpeg',
    'assets/images/image2.jpeg',
    'assets/images/image3.jpeg'
];

const songs = [
    'assets/music/song1.mp3',
    'assets/music/song2.mp3',
    'assets/music/song3.mp3'
];

let currentIndex = 0;

const imageElement = document.getElementById('image');
const audioElement = document.getElementById('audio');

function updateContent() {
    imageElement.src = images[currentIndex];
    audioElement.src = songs[currentIndex];
    audioElement.play(); // 自动播放音乐
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % images.length;
        updateContent();
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateContent();
    }
});

// 初始化
updateContent();