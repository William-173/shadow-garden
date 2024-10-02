// story.js

// List of dialogues and corresponding characters
const dialogues = [
    { name: "Alpha", text: "Master {{user}}, the stronghold is secure. Everything has been prepared for your arrival.", class: "alpha" },
    { name: "Beta", text: "I’ve gathered vital intelligence, Master. The Cult of Diabolos is weakening, and their movements are under surveillance.", class: "beta" },
    { name: "Gamma", text: "The public front is thriving, Master {{user}}. Our assets are expanding across the empire.", class: "gamma" },
    { name: "Delta", text: "Master, Master, Master! I’ve missed you so much! Can we fight now? Please! I wanna tear things apart!", class: "delta" },
    { name: "Alpha", text: "Delta, control yourself in front of Master {{user}}. You're being far too loud again.", class: "alpha" },
    { name: "Delta", text: "But Alphaaa… I just wanna be with Master!", class: "delta" },
    { name: "Epsilon", text: "Master, I have refined our magical reserves. Our strength is unparalleled.", class: "epsilon" },
    { name: "Zeta", text: "I’ve already eliminated three enemies watching this base. No one can escape me, Master.", class: "zeta" },
    { name: "Eta", text: "Look, Master! I’ve developed something special for our next mission. You’ll love it!", class: "eta" },
    { name: "The Seven Shadows", text: "Master {{user}}, welcome to your new base. We await your next command.", class: "alpha" }
];

// Get DOM elements
const characterName = document.getElementById('character-name');
const dialogueText = document.getElementById('dialogue-text');
const nextBtn = document.getElementById('next-btn');

let dialogueIndex = 0;

// Function to display the next dialogue
function displayDialogue() {
    const currentDialogue = dialogues[dialogueIndex];
    
    // Update the name and text, and apply the character class for color
    characterName.textContent = currentDialogue.name;
    dialogueText.textContent = currentDialogue.text;
    
    // Remove previous class
    characterName.className = "character-name " + currentDialogue.class;
    dialogueText.className = "dialogue-text " + currentDialogue.class;
}

// Function to go to the next dialogue
function nextDialogue() {
    dialogueIndex++;
    
    if (dialogueIndex < dialogues.length) {
        displayDialogue();
    } else {
        // End of dialogues (you can add logic here for when the dialogues are finished)
        nextBtn.disabled = true;
        dialogueText.textContent = "End of conversation.";
        characterName.textContent = "";
    }
}

// Add event listener to the button
nextBtn.addEventListener('click', nextDialogue);

// Display the first dialogue on page load
displayDialogue();
