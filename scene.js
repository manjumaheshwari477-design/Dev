import { Scene, Character } from "./yourFile.js";

// Create scene
const scene = new Scene({
    background: "rainy_night",
    music: "sad_soft_music"
});

// Create character
const cat = new Character("Cute Big Cat", {
    size: "large",
    eyes: "teary",
    emotion: "crying"
});

// Add character to scene
scene.addCharacter(cat);

// Start animation
function startScene() {
    cat.enter()
       .lookDown()
       .tears(true);

    setTimeout(() => {
        cat.lookUp()
           .holdBoard("I miss you 😢")
           .speak("Please don't go...")
           .hugGesture();
    }, 2000);
}

startScene();
