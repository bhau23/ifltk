document.addEventListener('DOMContentLoaded', () => {
    const slides = Array.from(document.querySelectorAll('.slide'));
    let currentSlideIndex = 0;

    // Helper to find slide by part of name
    const findSlideIndex = (namePart) => slides.findIndex(s => s.dataset.name && s.dataset.name.includes(namePart));

    const landingIndex = findSlideIndex('Landing');
    const categoryIndex = findSlideIndex('Category');
    const academicStart = findSlideIndex('Academic_Slide_1');
    const academicEnd = findSlideIndex('Academic_Slide_9');
    const businessStart = findSlideIndex('Business_Slide_1');
    const businessEnd = findSlideIndex('Business_Slide_7');

    function showSlide(index) {
        if (index === -1 || !slides[index]) return;
        slides.forEach(s => s.classList.remove('active'));
        slides[index].classList.add('active');
        currentSlideIndex = index;
    }

    // Initial state
    showSlide(landingIndex !== -1 ? landingIndex : 0);

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'Escape') {
            goHome();
        }
    });

    function nextSlide() {
        if (currentSlideIndex === landingIndex) {
            showSlide(categoryIndex);
        } else if (currentSlideIndex >= academicStart && currentSlideIndex < academicEnd) {
            showSlide(currentSlideIndex + 1);
        } else if (currentSlideIndex >= businessStart && currentSlideIndex < businessEnd) {
            showSlide(currentSlideIndex + 1);
        }
    }

    function prevSlide() {
        if (currentSlideIndex === categoryIndex) {
            showSlide(landingIndex);
        } else if (currentSlideIndex > academicStart && currentSlideIndex <= academicEnd) {
            showSlide(currentSlideIndex - 1);
        } else if (currentSlideIndex > businessStart && currentSlideIndex <= businessEnd) {
            showSlide(currentSlideIndex - 1);
        } else if (currentSlideIndex === academicStart || currentSlideIndex === businessStart) {
            showSlide(categoryIndex);
        }
    }

    function goHome() {
        if (categoryIndex !== -1) showSlide(categoryIndex);
    }

    // Attach click listeners to generated UI buttons
    document.querySelectorAll('button, a, [role="button"], .cursor-pointer').forEach(el => {
        // Use textContent instead of innerText because innerText returns empty string if the element is hidden (e.g. inside a non-active slide)
        const text = (el.textContent || '').trim().toLowerCase();
        
        // Start Presentation Button
        if (text.includes('start presentation') || text.includes('begin')) {
            el.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); showSlide(categoryIndex); });
            el.style.cursor = 'pointer';
        }
        
        // Next Button
        if (text.includes('next') && text.length < 35) {
            el.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); nextSlide(); });
            el.style.cursor = 'pointer';
        }

        // Previous Button
        if ((text.includes('previous') || text === 'back' || text.includes('←')) && !text.includes('menu') && text.length < 35) {
            el.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); prevSlide(); });
            el.style.cursor = 'pointer';
        }

        // Back to Menu
        if (text.includes('back to menu') && text.length < 40) {
            el.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); goHome(); });
            el.style.cursor = 'pointer';
        }
    });

    // Category Selector Routing
    if (categoryIndex !== -1) {
        const categorySlide = slides[categoryIndex];
        // The category selector has cards. We bind to anything that looks like a card or track selector
        const cards = categorySlide.querySelectorAll('.rounded-xl, .rounded-2xl, .bg-white');
        cards.forEach(card => {
            const text = (card.textContent || '').toLowerCase();
            
            // For Slide Deck tracks
            if (text.includes('academic') && text.includes('slide deck')) {
                card.addEventListener('click', (e) => { 
                    e.preventDefault(); e.stopPropagation(); 
                    showSlide(academicStart); 
                });
                card.style.cursor = 'pointer';
            }
            if (text.includes('business') && text.includes('slide deck')) {
                card.addEventListener('click', (e) => { 
                    e.preventDefault(); e.stopPropagation(); 
                    showSlide(businessStart); 
                });
                card.style.cursor = 'pointer';
            }
        });
    }
});
