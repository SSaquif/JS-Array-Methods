const pokeTeam = [
    { name: "mudkip", pType: "water", sType: null, currentHP: 100, maxHP: 100, fainted: false },
    { name: "bulbasaur", pType: "grass", sType: "poison", currentHP: 110, maxHP: 110, fainted: false },
    { name: "pikachu", pType: "electric", sType: null, currentHP: 100, maxHP: 100, fainted: false },
    { name: "squirtle", pType: "water", sType: null, currentHP: 80, maxHP: 150, fainted: false },
    { name: "pidgey", pType: "flying", sType: "normal", currentHP: 100, maxHP: 100, fainted: false },
    { name: "charizard", pType: "fire", sType: "flying", currentHP: 0, maxHP: 300, fainted: true },
];

const pokeCenterHeal = (currentItem, index, originalArray) => {
    // Note: Remember currentItem is EXPECTED to be an Object
    if(currentItem.currentHP < currentItem.maxHP){
        currentItem.currentHP = currentItem.maxHP;
        currentItem.fainted = false;
    }
    // I Put a return here to show that, returns on forEach are useless
    // Uncomment to see it does nothing
    //return currentItem;
}

//Issue: Say this was a game and the game should autosave and store a COPY of your current team status
// So that as you keep playing the game, and things go wrong you can power off and come back to that good spot
const autoSave = pokeTeam.forEach(pokeCenterHeal);

console.log('pokeTeam',pokeTeam);
console.log('save-file',autoSave);