// รูปภาพตัวอย่าง (สามารถเปลี่ยน URL เป็นรูปจริง ๆ ได้)
const images = [
    { src: 'father1.jpg', isFather: true },  // คุณพ่อ
    { src: 'father2.jpg', isFather: true },  // คุณพ่อ
    { src: 'father3.jpg', isFather: true },  // คุณพ่อ
    { src: 'father4.jpg', isFather: true },  // คุณพ่อ
    { src: 'other1.jpg', isFather: false },  // คนอื่น
    { src: 'other2.jpg', isFather: false },  // คนอื่น
    { src: 'other3.jpg', isFather: false },  // คนอื่น
    { src: 'other4.jpg', isFather: false }   // คนอื่น
];

// เริ่มเกม
document.getElementById('start-button').onclick = function() {
    document.getElementById('game-area').style.display = 'grid';
    document.getElementById('resultMessage').style.display = 'none';
    document.getElementById('start-button').style.display = 'none';

    // สุ่มภาพ
    shuffleImages(images);
    loadImages(images);
};

// สุ่มภาพ
function shuffleImages(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// โหลดภาพลงใน game area
function loadImages(images) {
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = ''; // ล้างเนื้อหาก่อนหน้า

    images.forEach((image) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.onclick = function() {
            checkAnswer(image.isFather);
        };
        gameArea.appendChild(imgElement);
    });
}

// ตรวจสอบคำตอบ
function checkAnswer(isFather) {
    const resultMessage = document.getElementById('resultMessage');
    if (isFather) {
        resultMessage.textContent = 'คุณเลือกคุณพ่อถูกต้อง!';
    } else {
        resultMessage.textContent = 'ไม่ใช่คุณพ่อ ลองอีกครั้ง!';
    }
    resultMessage.style.display = 'block';
}
