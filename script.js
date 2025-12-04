document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const modeToggle = document.getElementById('modeToggle');
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');
    
    // --- 1. Dark Mode Toggle Logic ---
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        modeToggle.textContent = currentTheme === 'dark-mode' ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    } else {
        // Default to light mode
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

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // --- 2. Scroll-to-Top Button Logic ---
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    // --- 3. Typewriter Effect Logic ---
    const textElement = document.getElementById('typewriter-text');
    // Name split into two lines for the effect
    const textToType = "WAN CAIREL AIMAN BIN WAN \n HABIB"; 
    let charIndex = 0;

    function type() {
        if (charIndex < textToType.length) {
            const char = textToType.charAt(charIndex);
            
            // Check for newline character and insert <br>
            if (char === '\n') {
                textElement.innerHTML += '<br>';
            } else {
                // Use innerText/textContent to ensure the typewriter effect works correctly
                textElement.textContent += char;
            }

            charIndex++;
            setTimeout(type, 80); // Typing speed in milliseconds
        }
    }
    // Clear content before starting the typing effect
    textElement.textContent = ''; 
    // Start typing after a short delay
    setTimeout(type, 1000); 


    // --- 4. Video Loop Control ---
    const videoElement = document.getElementById('homeVideo');
    const loopDuration = 5; // Set desired loop duration in seconds

    if (videoElement) {
        videoElement.addEventListener('timeupdate', () => {
            // If the video plays beyond the desired duration, reset it to the start.
            if (videoElement.currentTime >= loopDuration) {
                videoElement.currentTime = 0;
            }
        });
    }

    // --- 5. Contact Form Feedback ---
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            // Placeholder: In a real scenario, you would send data via fetch/AJAX here.
            
            formFeedback.textContent = "Thank you for your message! I will be in touch shortly.";
            formFeedback.style.color = body.classList.contains('dark-mode') ? '#4f46e5' : '#1e3a8a';
            contactForm.reset();
            
            // Clear feedback after 5 seconds
            setTimeout(() => {
                formFeedback.textContent = '';
            }, 5000);
        });
    }
});