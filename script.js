// Hiệu ứng tương tác cho trang web chúc mừng 20/10

document.addEventListener('DOMContentLoaded', function() {
    // Tạo hiệu ứng confetti khi trang load
    createConfetti();
    
    // Hiệu ứng click trên ảnh
    const photoFrame = document.querySelector('.photo-frame');
    if (photoFrame) {
        photoFrame.addEventListener('click', function() {
            createHeartExplosion();
            showSurpriseMessage();
        });
    }
    
    // Hiệu ứng hover cho các card
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Tạo hiệu ứng typing cho tiêu đề
    typeWriter();
    
    // Tạo hiệu ứng parallax nhẹ
    window.addEventListener('scroll', parallaxEffect);
    
    // Tạo hiệu ứng click toàn trang
    document.addEventListener('click', createClickEffect);
});

// Tạo hiệu ứng confetti
function createConfetti() {
    const colors = ['#ff6b6b', '#ff8e8e', '#ffa8a8', '#ffb3ba', '#ffc0cb'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            createConfettiPiece(colors);
        }, i * 50);
    }
}

function createConfettiPiece(colors) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.zIndex = '1000';
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    
    document.body.appendChild(confetti);
    
    const animation = confetti.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
        duration: 3000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    
    animation.onfinish = () => {
        confetti.remove();
    };
}

// Tạo hiệu ứng nổ trái tim
function createHeartExplosion() {
    const hearts = ['💖', '💕', '💗', '💝', '💘', '💓', '💞', '💟'];
    const explosionCount = 20;
    
    for (let i = 0; i < explosionCount; i++) {
        setTimeout(() => {
            createExplodingHeart(hearts);
        }, i * 100);
    }
}

function createExplodingHeart(hearts) {
    const heart = document.createElement('div');
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.position = 'fixed';
    heart.style.fontSize = '2rem';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    heart.style.zIndex = '1000';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'heartExplosion 2s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Hiển thị thông điệp bất ngờ
function showSurpriseMessage() {
    const messages = [
        "Mai Hương thật xinh đẹp! 💖",
        "Chúc em luôn hạnh phúc! 🌸",
        "Em là người phụ nữ tuyệt vời nhất! ✨",
        "Mong em luôn tỏa sáng! 💫",
        "Yêu em nhiều lắm! 💕"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    const messageDiv = document.createElement('div');
    messageDiv.textContent = randomMessage;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '50%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e8e)';
    messageDiv.style.color = 'white';
    messageDiv.style.padding = '20px 30px';
    messageDiv.style.borderRadius = '20px';
    messageDiv.style.fontSize = '1.5rem';
    messageDiv.style.fontWeight = 'bold';
    messageDiv.style.zIndex = '1001';
    messageDiv.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
    messageDiv.style.animation = 'messagePop 3s ease-out forwards';
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Hiệu ứng typing cho tiêu đề
function typeWriter() {
    const nameTitle = document.querySelector('.name-title');
    if (!nameTitle) return;
    
    const text = nameTitle.textContent;
    nameTitle.textContent = '';
    nameTitle.style.borderRight = '3px solid #e91e63';
    
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            nameTitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
            setTimeout(() => {
                nameTitle.style.borderRight = 'none';
            }, 1000);
        }
    }, 200);
}

// Hiệu ứng parallax
function parallaxEffect() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.photo-frame, .wish-card');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

// Hiệu ứng click toàn trang
function createClickEffect(event) {
    const clickEffect = document.createElement('div');
    clickEffect.style.position = 'fixed';
    clickEffect.style.left = event.clientX + 'px';
    clickEffect.style.top = event.clientY + 'px';
    clickEffect.style.width = '20px';
    clickEffect.style.height = '20px';
    clickEffect.style.background = 'radial-gradient(circle, #ff6b6b, transparent)';
    clickEffect.style.borderRadius = '50%';
    clickEffect.style.pointerEvents = 'none';
    clickEffect.style.zIndex = '1000';
    clickEffect.style.animation = 'clickRipple 0.6s ease-out forwards';
    
    document.body.appendChild(clickEffect);
    
    setTimeout(() => {
        clickEffect.remove();
    }, 600);
}

// Thêm CSS animations động
const style = document.createElement('style');
style.textContent = `
    @keyframes heartExplosion {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes messagePop {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
        20% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
        }
        80% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes clickRipple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

