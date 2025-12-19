document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const modeToggle = document.getElementById('modeToggle');
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');
    
    // --- 1. Dark Mode Toggle Logic (with LocalStorage memory) ---
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        modeToggle.textContent = currentTheme === 'dark-mode' ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    } else {
        body.classList.add('light-mode');
        modeToggle.textContent = 'Toggle Dark Mode';
    }

    modeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            modeToggle.textContent = 'Toggle Light Mode';
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
            modeToggle.textContent = 'Toggle Dark Mode';
        }
    });

    // --- 2. Mobile Menu Toggle ---
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    }

    // --- 3. Scroll-to-Top Button Logic ---
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- 4. Typewriter Effect (Presentation Fix: Removed \n) ---
    const textElement = document.getElementById('typewriter-text');
    const textToType = "WAN CAIREL AIMAN BIN WAN HABIB"; // Removed the \n here
    let index = 0;

    function type() {
        if (index < textToType.length) {
            textElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 100); 
        }
    }
    
    if (textElement) {
        textElement.textContent = ''; 
        setTimeout(type, 1000); 
    }

    // --- 5. Video Loop Control ---
    const videoElement = document.getElementById('homeVideo');
    const loopDuration = 5; 

    if (videoElement) {
        videoElement.addEventListener('timeupdate', () => {
            if (videoElement.currentTime >= loopDuration) {
                videoElement.currentTime = 0;
            }
        });
    }

    // --- 6. Contact Form Feedback ---
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            formFeedback.textContent = "Thank you for your message! I will be in touch shortly.";
            formFeedback.style.color = body.classList.contains('dark-mode') ? '#4f46e5' : '#1e3a8a';
            contactForm.reset();
            
            setTimeout(() => {
                formFeedback.textContent = '';
            }, 5000);
        });
    }
});