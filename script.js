// รูปภาพตัวอย่าง (สามารถเปลี่ยน URL เป็นรูปจริง ๆ ได้)
const images = [
    { src: 'father1.jpg', isFather: true },
    { src: 'father2.jpg', isFather: true },
    { src: 'father3.jpg', isFather: true },
    { src: 'father4.jpg', isFather: true },
    { src: 'other1.jpg', isFather: false },
    { src: 'other2.jpg', isFather: false },
    { src: 'other3.jpg', isFather: false },
    { src: 'other4.jpg', isFather: false }
];

// ฟังก์ชันสุ่มรูปภาพ
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// แสดงรูปภาพในหน้าเว็บ
function displayImages() {
    shuffle(images);
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '';
    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.dataset.isFather = image.isFather;
        imgElement.addEventListener('click', () => checkAnswer(image.isFather, index));
        imageGrid.appendChild(imgElement);
    });
}

// ตรวจสอบคำตอบ
function checkAnswer(isFather, index) {
    const resultMessage = document.getElementById('resultMessage');
    if (isFather) {
        resultMessage.textContent = 'ถูกต้อง! นี่คือคุณพ่อ!';
    } else {
        resultMessage.textContent = 'ผิดพลาด! นี่ไม่ใช่คุณพ่อ!';
    }
}

// เริ่มเกม
displayImages();
