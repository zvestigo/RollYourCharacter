/* Declared variables for html elements */
var intro = document.getElementById("intro");
var charDesc = document.getElementById("char-desc");
var comment = document.getElementById("comment");
var rollBtn = document.getElementById("roll-btn");
var d20 = document.getElementById("d20");


/* Functioon to retrieve a entry in charOptions*/
function rollTrait(trait) {
    var i = Math.floor(Math.random() * trait.length);  // random number corresponding to # of options for given trait
    var randomTrait = trait[i];
    return randomTrait;
}


/* Function to create a character object */
function createCharacter() {
    var character = {
        race: rollTrait(charOptions.race),
        class: rollTrait(charOptions.class),
        background: rollTrait(charOptions.background),
        adjective: rollTrait(charOptions.adjective),
        quirk: rollTrait(charOptions.quirk)
    };

    console.log(character.adjective + " " + character.race + " " + character.class + " who grew up as a " + character.background + " and " + character.quirk) // left to later make it possible to create a log for user to check

    charDesc.innerText = character.adjective + " " + character.race + " " + character.class + " who grew up as a " + character.background + " and " + character.quirk;
    
    intro.style.opacity = "1";       // Fading text in on first roll
    charDesc.style.opacity = "1";
    comment.style.opacity = "1";
}

rollBtn.addEventListener('click', createCharacter);


/* Object containing nested arrays from which to generate character */
var charOptions = {
    race: ["Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"],
    class: ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"],
    background: ["acolyte", "charlatan", "criminal", "entertainer", "folk Hero", "guild artisan","hermit", "noble", "outlander", "sage", "sailor", "urchin"],
    adjective: ["A grumpy", "A cheerful", "A colorblind", "A paranoid", "An absent-minded", "An abrasive", "A dishonest", "An easygoing", "A near-sighted", "A quiet", "A boistrous", "An illiterate", "A shady", "A caring","A quirky"],
    quirk: ["hates the color yellow", "is deathly allergic to bees", "believes everyone is good at heart", "would sell their mother for 20 gold pieces", "likes to pull pranks on their party", "has a pet ferret", "rides a miniature horse", "lives with their mother", ]
}