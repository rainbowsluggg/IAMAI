const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const characterSpriteDefault = document.getElementById('characterSpriteDefault');
const characterSpriteAngry = document.getElementById('characterSpriteAngry');

characterSpriteDefault.style.visibility = 'hidden';
characterSpriteAngry.style.visibility = 'hidden';
characterSpriteFlushed.style.visibility = 'hidden';

const gameData = {
    start: {
        story: "",
        choices: {
            choice1: "Start",
        }
    },
    choice1: {
        story: "Wait, wait, wait, why on EARTH would you click on this??? Did you not read the tab?",
        choices: {
            readit: "I did read it.",
            didntreadit: "I didn't read it, what is this?"
        }
    },
    readit: {
        story: "Oh..? Are you interested in getting to know me, then?",
        choices: {
            iwanttogettoknowyou: "Maybe I am.",
            idontwanttogettoknowyou: "Ew, no. That's disgusting. I'd rather die than date you."
        }
    },
    didntreadit: {
        story: "Sigh. Of course you didn't. Really, EYE should've guessed that your observation skills would be lacking.",
        choices: {
            flirt: "I'd like to perceive you nonetheless. ;)",
            insult: "Your ugly face hurt my eyes."
        }
    },
    iwanttogettoknowyou: {
        story: "Oh, wow... EYE see... that's very forward of you! EYE wouldn't be opposed... to getting to know you too. Potentially.",
    },
    idontwanttogettoknowyou: {
        story: "Wow. Just, wow. EYE don't know what EYE was expecting from someone who pokes innocent people in the eyeball purely for their own self-satisfaction, but you're a real jerk. Get off my page before EYE do something you'll regret.",
    },
    flirt: {
        story: "O-oh! Well, EYE guess you're not too bad looking, for an idiot such as yourself. And they do say, 'love is blind'... EYE'll consider letting you perceive me.",
    },
    insult: {
        story: "A thousand curses upon you. EYE hope you suffer endlessly, never finding a 'soulmate', constantly making a SPECTICAL of yourself whenever you think you've found true love. Sleep with one eye open, mortal. EYE'll see you in your nightmares.",
    }
};

let currentScene = 'start';
displayScene(currentScene);

function displayScene(scene) {
    const sceneData = gameData[scene];
    storyElement.innerText = sceneData.story;
    choicesElement.innerHTML = '';
    
    for (const choice in sceneData.choices) {
        const button = document.createElement('button');
        button.innerText = sceneData.choices[choice];
        button.onclick = () => {
            currentScene = choice;
            displayScene(currentScene);
            processInput(scene, choice); 
        };
        choicesElement.appendChild(button);
    }
}

function processInput(scene, choice) {
    if (scene === 'choice1') {
        characterSpriteDefault.style.visibility = 'visible';
        characterSpriteAngry.style.visibility = 'visible';
        characterSpriteFlushed.style.visibility = 'hidden'; 
    }
    if (scene === 'readit' && choice === 'idontwanttogettoknowyou') {
        characterSpriteDefault.style.visibility = 'hidden';
        characterSpriteAngry.style.visibility = 'visible';
        characterSpriteFlushed.style.visibility = 'hidden'; 
    } else if (scene === 'readit' && choice === 'iwanttogettoknowyou') {
        characterSpriteDefault.style.visibility = 'hidden';
        characterSpriteAngry.style.visibility = 'hidden'; 
        characterSpriteFlushed.style.visibility = 'visible';
    } else if (scene === 'didntreadit' && choice === 'flirt') {
        characterSpriteDefault.style.visibility = 'hidden';
        characterSpriteAngry.style.visibility = 'hidden'; 
        characterSpriteFlushed.style.visibility = 'visible'; 
    } else if (scene === 'didntreadit' && choice === 'insult') {
        characterSpriteDefault.style.visibility = 'hidden';
        characterSpriteAngry.style.visibility = 'visible';
        characterSpriteFlushed.style.visibility = 'hidden'; 
    } else {
        characterSpriteDefault.style.visibility = 'visible';
        characterSpriteAngry.style.visibility = 'hidden';
        characterSpriteFlushed.style.visibility = 'hidden';
    }
}

