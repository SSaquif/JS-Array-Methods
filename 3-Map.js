//Solution: Use Map
//We use Map when we want to alter our arrays to something new
//and than store that something new somewhere else

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
    //REMEMBER the return statement not useless anymore
    return currentItem;
}

const autoSave = pokeTeam.map(pokeCenterHeal);

console.log('save-file',autoSave);