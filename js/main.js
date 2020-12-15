console.log("test");

/* Object containing nested arrays from which to generate character */
var charOptions = {
    race: ["Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"],
    class: ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"],
    background: ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Guild Artisan","Hermit", "Noble", "Outlander", "Sage", "Sailor", "Urchin"],
    adjective: ["A Grumpy", "A Cheerful", "A Colorblind", "A Paranoid", "An Absent-minded", "An Abrasive", "A Dishonest", "An Easygoing", "A Near-sighted", "A Quiet", "A Boistrous", "An Illiterate", "A Shady", "A Caring","A Quirky"],
    quirk: ["hates the color yellow", "is deathly allergic to bees", "believes everyone is good at heart", "would sell their mother for 20 gold pieces", "likes to pull pranks on their party", "has a pet ferret", "rides a miniature horse", "lives with their mother", ]
}

/* Functioon to retrieve a entry in charOptions*/
function rollTrait(trait) {
    var i = Math.floor(Math.random() * trait.length);
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

    console.log(character.adjective + " " + character.race + " " + character.class + " who grew up as a " + character.background + " and " + character.quirk)

    var charDesc = document.getElementById("char-desc");
    charDesc.innerText = character.adjective + " " + character.race + " " + character.class + " who grew up as a " + character.background + " and " + character.quirk;
    charDesc.style.opacity = "1";

    return character;
}

var rollBtn = document.getElementById("roll-btn");

rollBtn.addEventListener('click', createCharacter);