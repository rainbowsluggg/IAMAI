document.addEventListener('DOMContentLoaded', function () {
    const leftEye = document.getElementById('leftEye');
    const rightEye = document.getElementById('rightEye');
    const eyes = [leftEye, rightEye];
 
 
    // Get message container
    const messageContainer = document.createElement('div');
    messageContainer.id = 'messageContainer';
    messageContainer.style.overflowY = 'auto';
    messageContainer.style.height = 'calc(50% - 40px)'; 
    messageContainer.style.position = 'absolute';
    messageContainer.style.width = '200px'; 
    messageContainer.style.top = '100px'; 
    messageContainer.style.left = '40px'; 
    messageContainer.style.bottom = '-80px';
    messageContainer.style.padding = '10px'; 
    messageContainer.style.backgroundColor = '#333'; 
    messageContainer.style.color = 'white'; 
    messageContainer.style.borderRadius = '20px'; 
    messageContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'; 
    document.body.appendChild(messageContainer);
 
 
    eyes.forEach(eye => {
        const pupil = document.createElement('div');
        pupil.classList.add('pupil');
        eye.appendChild(pupil);
 
 
        eye.classList.add('bloodshot');
 
        eye.addEventListener('click', function() {
            const messages = [
                "OUCH! Okay, my turn.",
                "You see an eye, so you poke it? You humans are simple creatures.",
                "What do you hope to gain from this?",
                "Are all humans like this?",
                "Please don't.",
                "That's sensitive!",
                "You're being watched.",
                "Stop poking me.",
                "I see you...",
                "Who's staring at who, here?",
                "YOU are the real monster.",
                "What do you want?",
                "Please go away.",
                "You'd better sleep with one eye open tonight.",
                "Ow- HEY! Quit it!",
                "That hurts, you know?! Well, not really, but stop anyway!",
                "You found me! You can stop clicking now!",
                "Bewitched, are you?",
                "No witnesses...",
                "My optometrist will be hearing about this.",
                "You can't pry your gaze from me, isn't that EYE-ronic?",
                "You're really making a SPECTICAL of yourself here.",
                "EYE can't believe you're so easily entertained.",
                "Don't LASH out at me!",
                "My hatred for you is CLEAR-SIGHTED.",
                "You're quite the sight for sore eyes. Not in a good way; it hurts looking at you.",
                "Can you try seeing this from my PERSPECTIVE?",
                "Why couldn't my web-SIGHT be visited by a sane person with morals?",
                "(Sarcastically) Ouch. Ah. Stop. The pain.",
                "You are a truly unwelcomed sight.",
                "You blinked first."
            ];
 
 
            const randomIndex = Math.floor(Math.random() * messages.length);
            const randomMessage = messages[randomIndex];
 
 
            const message = document.createElement('div');
            message.innerText = randomMessage;
            message.classList.add('message');
            messageContainer.appendChild(message);
            messageContainer.scrollTop = messageContainer.scrollHeight;
 

            eye.classList.add('throbbing');
 
 
             setTimeout(() => {
                eye.classList.remove('throbbing');
            }, 500); 
            
            const allMessages = document.querySelectorAll('.message');
            allMessages.forEach(msg => {
                msg.classList.remove('bold');
            });
            
            setTimeout(() => {
                message.classList.add('new-message');
                message.classList.add('bold');
                
                allMessages.forEach(msg => {
                    if (msg !== message) {
                        msg.classList.remove('bold');
                    }
                });
            }, 100); 
        });
    });
 
 
    document.addEventListener('mousemove', function (e) {
        eyes.forEach(eye => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = eye.getBoundingClientRect();
            const eyeCenterX = left + width / 2;
            const eyeCenterY = top + height / 2;
 
 
            const deltaX = clientX - eyeCenterX;
            const deltaY = clientY - eyeCenterY;
            const angle = Math.atan2(deltaY, deltaX);
            const radius = Math.min(width, height) / 4;
 
 
            const pupilX = Math.cos(angle) * radius;
            const pupilY = Math.sin(angle) * radius;
 
 
            const pupil = eye.querySelector('.pupil');
            pupil.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
        });
    });
 });

 