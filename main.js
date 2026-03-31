document.addEventListener('DOMContentLoaded', () => {
    // Fortune Cookie Interaction
    const cookieContainer = document.getElementById('interactive-cookie');
    const fortunes = [
        '"The river is now 40% crude oil. Sorry!"',
        '"Your department has been outsourced to a spreadsheet."',
        '"The factory will ignite at precisely 4:30 PM."',
        '"Your stock options are currently worth zero."',
        '"We regret to inform you that the server room is fully submerged."',
        '"Do not drink the tap water. Ever again."',
        '"That wasn\'t chicken in the cafeteria today."'
    ];
    let isCracked = false;

    if (cookieContainer) {
        cookieContainer.addEventListener('click', () => {
            if (!isCracked) {
                // Pick a random fortune
                const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
                const fortuneTextEl = cookieContainer.querySelector('.fortune-text');
                fortuneTextEl.textContent = randomFortune;

                // Crack the cookie
                cookieContainer.classList.add('cracked');
                isCracked = true;
                
                // Subtle change to hint
                const hint = document.querySelector('.hint-text');
                if (hint) hint.textContent = "Click again for an even worse outcome";
            } else {
                // Reset and crack again quickly
                cookieContainer.classList.remove('cracked');
                
                // Wait for transition to re-crack
                setTimeout(() => {
                    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
                    const fortuneTextEl = cookieContainer.querySelector('.fortune-text');
                    fortuneTextEl.textContent = randomFortune;
                    
                    cookieContainer.classList.add('cracked');
                }, 500); // Wait for CSS transition
            }
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
