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
                "root@geeksec ~ $ whoami",
                "Securing the internet, one bug at a time"
            ];

            let phraseIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let isPaused = false;

            function type() {
                if (isPaused) {
                    setTimeout(type, 100);
                    return;
                }

                const current = phrases[phraseIndex];
                if (isDeleting) {
                    el.textContent = current.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    el.textContent = current.substring(0, charIndex + 1);
                    charIndex++;
                }

                let speed = isDeleting ? 30 : 60;

                if (!isDeleting && charIndex === current.length) {
                    speed = 2500;
                    isPaused = true;
                    setTimeout(() => {
                        isPaused = false;
                        isDeleting = true;
                        setTimeout(type, 10);
                    }, speed);
                    setTimeout(type, speed + 10);
                    return;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    speed = 400;
                }

                setTimeout(type, speed);
            }

            setTimeout(type, 500);
        }

        function initLogoAnimation() {
            const logo = document.getElementById('hacker-logo');
            if (!logo) return;
            logo.style.display = 'flex';
            logo.style.opacity = '0';
            logo.style.transform = 'translate3d(50px, 20px, 0) rotate(5deg)';
            logo.style.transition = 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)';
            requestAnimationFrame(() => {
                logo.style.opacity = '1';
                logo.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
            });
        }

        initTypewriter();
        setTimeout(initLogoAnimation, 400);
    }

    initializeAnimations();
});
