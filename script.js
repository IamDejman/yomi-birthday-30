// Confetti Animation
function createConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confetti = [];
    const confettiCount = 150;
    const colors = ['#ff6b9d', '#c44569', '#f8b500', '#667eea', '#764ba2', '#4facfe', '#00f2fe'];
    
    class ConfettiPiece {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 5 + 3;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.speed = Math.random() * 3 + 2;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
        }
        
        update() {
            this.y += this.speed;
            this.x += Math.sin(this.y * 0.01) * 2;
            this.rotation += this.rotationSpeed;
            
            if (this.y > canvas.height) {
                this.y = -10;
                this.x = Math.random() * canvas.width;
            }
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.fill();
            ctx.restore();
        }
    }
    
    for (let i = 0; i < confettiCount; i++) {
        confetti.push(new ConfettiPiece());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(piece => {
            piece.update();
            piece.draw();
        });
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Slideshow State
let currentSlide = 0;
let totalSlides = 1; // Start with 1 (hero slide)
let slides = [];

// Initialize the slideshow
document.addEventListener('DOMContentLoaded', () => {
    createConfetti();
    createWishSlides();
    updateSlideIndicator();
    updateProgressBar();
    updateNavigationButtons();
    
    // Initialize music controls and attempt autoplay
    const music = document.getElementById('backgroundMusic');
    const musicIcon = document.getElementById('musicIcon');
    
    if (music) {
        music.addEventListener('play', () => {
            musicIcon.textContent = '🎵';
            isMusicPlaying = true;
        });
        
        music.addEventListener('pause', () => {
            musicIcon.textContent = '🔇';
            isMusicPlaying = false;
        });
        
        music.addEventListener('ended', () => {
            musicIcon.textContent = '🔇';
            isMusicPlaying = false;
        });
        
        // Set initial icon
        musicIcon.textContent = '🔇';
        
        // Load the audio source
        music.load();
        
        // Attempt to autoplay music (may be blocked by browser)
        attemptAutoplay();
    }
    
    // Function to attempt autoplay
    function attemptAutoplay() {
        if (music) {
            // Wait a bit for the audio to load
            setTimeout(() => {
                const playPromise = music.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        // Autoplay succeeded
                        isMusicPlaying = true;
                        musicIcon.textContent = '🎵';
                    }).catch((error) => {
                        // Autoplay was prevented - will play on first user interaction
                        console.log('Autoplay prevented. Music will play on user interaction.');
                    });
                }
            }, 100);
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide(); // Swipe left - next
            } else {
                previousSlide(); // Swipe right - previous
            }
        }
    }
});

// Create individual photo slide (one photo per slide, full screen)
function createSinglePhotoSlide(photoPath, slideIndex) {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.id = `slide-${slideIndex}`;
    
    const photoContainer = document.createElement('div');
    photoContainer.className = 'single-photo-container';
    
    const photoWrapper = document.createElement('div');
    photoWrapper.className = 'single-photo-wrapper';
    
    const img = document.createElement('img');
    img.src = photoPath;
    img.alt = 'Photo';
    img.className = 'single-photo';
    img.loading = 'eager';
    img.onerror = function() {
        console.error(`Failed to load image: ${photoPath}`);
    };
    
    photoWrapper.appendChild(img);
    photoContainer.appendChild(photoWrapper);
    slide.appendChild(photoContainer);
    return slide;
}

// Create wish slide
function createWishSlide(wish, slideIndex) {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.id = `slide-${slideIndex}`;
    
    const slideContent = document.createElement('div');
    slideContent.className = 'wish-slide-content';
    
    // Create message section
    const messageSection = document.createElement('div');
    messageSection.className = 'wish-message-section';
    
    const author = document.createElement('div');
    author.className = 'wish-author';
    author.textContent = wish.author;
    
    const message = document.createElement('div');
    message.className = 'wish-message';
    message.textContent = wish.message;
    
    messageSection.appendChild(author);
    messageSection.appendChild(message);
    slideContent.appendChild(messageSection);
    
    slide.appendChild(slideContent);
    return slide;
}

// Create all slides: individual photos before first wish, then wish + individual photos after each wish
function createWishSlides() {
    const slideshowContainer = document.getElementById('slideshowContainer');
    let slideIndex = 1; // Start after hero slide (index 0)
    
    // Individual photo slides before first wish (7 photos = 7 slides)
    if (photoSlides[0] && photoSlides[0].length > 0) {
        photoSlides[0].forEach((photoPath) => {
            const photoSlide = createSinglePhotoSlide(photoPath, slideIndex);
            slideshowContainer.appendChild(photoSlide);
            slideIndex++;
        });
    }
    
    // Create wish slides with individual photo slides after each
    wishes.forEach((wish, wishIndex) => {
        // Create wish slide
        const wishSlide = createWishSlide(wish, slideIndex);
        slideshowContainer.appendChild(wishSlide);
        slideIndex++;
        
        // Create individual photo slides after this wish (photoSlides[1] after first wish, etc.)
        const photoSlideIndex = wishIndex + 1;
        if (photoSlides[photoSlideIndex] && photoSlides[photoSlideIndex].length > 0) {
            photoSlides[photoSlideIndex].forEach((photoPath) => {
                const photoSlide = createSinglePhotoSlide(photoPath, slideIndex);
                slideshowContainer.appendChild(photoSlide);
                slideIndex++;
            });
        }
    });
    
    totalSlides = slideIndex; // Total includes hero slide
    slides = document.querySelectorAll('.slide');
}

// Navigate to next slide
function nextSlide() {
    // Try to start music on first user interaction (if autoplay was blocked)
    if (!isMusicPlaying && currentSlide === 0) {
        const music = document.getElementById('backgroundMusic');
        if (music) {
            music.load();
            music.play().then(() => {
                isMusicPlaying = true;
                document.getElementById('musicIcon').textContent = '🎵';
            }).catch((error) => {
                // Music will need manual play - don't show error
                console.log('Music play on interaction failed:', error);
            });
        }
    }
    
    if (currentSlide < totalSlides - 1) {
        goToSlide(currentSlide + 1);
    }
}

// Navigate to previous slide
function previousSlide() {
    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    }
}

// Go to specific slide
function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    
    const currentSlideElement = slides[currentSlide];
    const nextSlideElement = slides[index];
    
    // Remove active class from current slide
    currentSlideElement.classList.remove('active');
    
    // Determine direction
    if (index > currentSlide) {
        currentSlideElement.classList.add('prev');
        nextSlideElement.classList.add('next');
    } else {
        currentSlideElement.classList.add('next');
        nextSlideElement.classList.add('prev');
    }
    
    // Update current slide
    currentSlide = index;
    
    // Add active class to new slide
    setTimeout(() => {
        nextSlideElement.classList.remove('prev', 'next');
        nextSlideElement.classList.add('active');
        currentSlideElement.classList.remove('prev', 'next');
    }, 50);
    
    updateSlideIndicator();
    updateProgressBar();
    updateNavigationButtons();
    
    // Scroll to top of slide
    nextSlideElement.scrollTop = 0;
}

// Update slide indicator
function updateSlideIndicator() {
    document.getElementById('currentSlide').textContent = currentSlide + 1;
    document.getElementById('totalSlides').textContent = totalSlides;
}

// Update progress bar
function updateProgressBar() {
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
}

// Update navigation buttons visibility
function updateNavigationButtons() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    
    if (currentSlide === 0) {
        prevButton.classList.add('hidden');
    } else {
        prevButton.classList.remove('hidden');
    }
    
    if (currentSlide === totalSlides - 1) {
        nextButton.classList.add('hidden');
    } else {
        nextButton.classList.remove('hidden');
    }
}

// Handle keyboard navigation
function handleKeyboardNavigation(e) {
    switch(e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ': // Spacebar
            e.preventDefault();
            nextSlide();
            break;
        case 'ArrowLeft':
        case 'ArrowUp':
            e.preventDefault();
            previousSlide();
            break;
        case 'Home':
            e.preventDefault();
            goToSlide(0);
            break;
        case 'End':
            e.preventDefault();
            goToSlide(totalSlides - 1);
            break;
    }
}

// Background Music Controls
let isMusicPlaying = false;

function toggleMusic() {
    const music = document.getElementById('backgroundMusic');
    const musicIcon = document.getElementById('musicIcon');
    
    if (!music) {
        console.error('Music element not found');
        return;
    }
    
    // Check if audio has a valid source by checking if it can load
    if (!music.src && music.children.length === 0) {
        console.error('No music source found');
        return;
    }
    
    if (isMusicPlaying) {
        music.pause();
        musicIcon.textContent = '🔇';
        isMusicPlaying = false;
    } else {
        // Load the audio first if needed
        music.load();
        music.play().then(() => {
            musicIcon.textContent = '🎵';
            isMusicPlaying = true;
        }).catch((error) => {
            console.error('Error playing music:', error);
            // Don't show alert, just log the error
        });
    }
}

