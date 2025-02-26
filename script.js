const images = [
    'assets/images/image_01.png',
    'assets/images/image_02.png',
    'assets/images/image_03.png',
    'assets/images/image_04.png',
    'assets/images/image_05.png',
    'assets/images/image_06.png',
    'assets/images/image_07.png',
    'assets/images/image_08.png',
    'assets/images/image_09.png',
    'assets/images/image_10.png',
    'assets/images/image_11.png',
    'assets/images/image_12.png',
    'assets/images/image_13.png',
    'assets/images/image_14.png',
    'assets/images/image_15.png',
    'assets/images/image_16.png',
    'assets/images/image_17.png',
    'assets/images/image_18.png',
    'assets/images/image_19.png',
    'assets/images/image_20.png'
];

const songs = [
    'assets/music/music_01.mp3',
    'assets/music/music_02.mp3',
    'assets/music/music_03.mp3',
    'assets/music/music_04.mp3',
    'assets/music/music_05.mp3',
    'assets/music/music_06.mp3',
    'assets/music/music_07.mp3',
    'assets/music/music_08.mp3',
    'assets/music/music_09.mp3',
    'assets/music/music_10.mp3',
    'assets/music/music_11.mp3',
    'assets/music/music_12.mp3',
    'assets/music/music_13.mp3',
    'assets/music/music_14.mp3',
    'assets/music/music_15.mp3',
    'assets/music/music_16.mp3',
    'assets/music/music_17.mp3',
    'assets/music/music_18.mp3',
    'assets/music/music_19.mp3',
    'assets/music/music_20.mp3'
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