document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressBar = document.getElementById('progressBar');
    const currentSlideDisplay = document.getElementById('currentSlide');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    function updatePresentation() {
        // Update slides
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update progress bar
        const progress = (currentSlide / (totalSlides - 1)) * 100;
        progressBar.style.width = `${progress}%`;

        // Update counter
        currentSlideDisplay.textContent = currentSlide + 1;

        // Update button states
        prevBtn.style.opacity = currentSlide === 0 ? '0.3' : '1';
        prevBtn.style.pointerEvents = currentSlide === 0 ? 'none' : 'auto';
        
        nextBtn.style.opacity = currentSlide === totalSlides - 1 ? '0.3' : '1';
        nextBtn.style.pointerEvents = currentSlide === totalSlides - 1 ? 'none' : 'auto';
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updatePresentation();
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updatePresentation();
        }
    }

    // Event Listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Initialize
    updatePresentation();
});
