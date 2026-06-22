document.addEventListener("DOMContentLoaded", () => {
    function initializeAnimations() {
        function initTypewriter() {
            const el = document.getElementById("dynamicWords");
            if (!el) {
                setTimeout(initTypewriter, 100);
                return;
            }

            const phrases = [
                "Pentester & Bug Hunter",
                "Python · JavaScript · Linux",
                "Building tools, breaking stuff",
                "Infosec since 10th grade",
                "root@geeksec ~ $ whoami"
            ];

            let phraseIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            function type() {
                const current = phrases[phraseIndex];
                if (isDeleting) {
                    el.textContent = current.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    el.textContent = current.substring(0, charIndex + 1);
                    charIndex++;
                }

                let speed = isDeleting ? 40 : 80;

                if (!isDeleting && charIndex === current.length) {
                    speed = 2000;
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    speed = 500;
                }

                setTimeout(type, speed);
            }

            type();
        }

        function initLogoAnimation() {
            const logo = document.getElementById('hacker-logo');
            if (!logo) return;
            logo.style.display = 'flex';
            logo.style.opacity = '0';
            logo.style.transform = 'translate3d(50px, 20px, 0) rotate(5deg)';
            logo.style.transition = 'all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            requestAnimationFrame(() => {
                logo.style.opacity = '1';
                logo.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
            });
        }

        initTypewriter();
        setTimeout(initLogoAnimation, 300);
    }

    initializeAnimations();
});
