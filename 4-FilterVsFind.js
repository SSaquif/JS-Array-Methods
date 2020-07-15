const pokeTeam = [
    { name: "mudkip", pType: "water", sType: null, currentHP: 100, maxHP: 100, fainted: false },
    { name: "bulbasaur", pType: "grass", sType: "poison", currentHP: 110, maxHP: 110, fainted: false },
    { name: "pikachu", pType: "electric", sType: null, currentHP: 100, maxHP: 100, fainted: false },
    { name: "squirtle", pType: "water", sType: null, currentHP: 80, maxHP: 150, fainted: false },
    { name: "pidgey", pType: "flying", sType: "normal", currentHP: 100, maxHP: 100, fainted: false },
    { name: "charizard", pType: "fire", sType: "flying", currentHP: 0, maxHP: 300, fainted: true },
];

// I want only the flying types
// Once again same signature

const flyingTypes = pokeTeam.filter((currentItem, index, originalArray )=>{
    if( currentItem.pType==='flying' || currentItem.sType==='flying' ){
        return currentItem
    }
})

const firstFlyingType = pokeTeam.find((currentItem, index, originalArray )=>{
    if( currentItem.pType==='flying' || currentItem.sType==='flying' ){
        return currentItem
    }
})


console.log('ALL Flying Types in My Team\n',flyingTypes,'\n')
console.log('The First Flying Types in My Team\n',firstFlyingType,'\n')