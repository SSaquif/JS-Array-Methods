const pokeTeam = [
    { name: "mudkip", pType: "water", sType: null, currentHP: 100, maxHP: 100, fainted: false },
    { name: "bulbasaur", pType: "grass", sType: "poison", currentHP: 110, maxHP: 110, fainted: false },
    { name: "pikachu", pType: "electric", sType: null, currentHP: 100, maxHP: 100, fainted: false },
    { name: "squirtle", pType: "water", sType: null, currentHP: 80, maxHP: 150, fainted: false },
    { name: "pidgey", pType: "flying", sType: "normal", currentHP: 100, maxHP: 100, fainted: false },
    { name: "charizard", pType: "fire", sType: "flying", currentHP: 0, maxHP: 300, fainted: true },
];

 let accumulator = {
    numberOfPokemon: 0,
    totalFainted: 0,
    allTypes: {},
    mostCommonTypes: []
}

const teamSummary = pokeTeam.reduce((accumulator,currentItem,index,originalArray)=>{ 

    accumulator.numberOfPokemon += 1;    
    
    if(currentItem.fainted){
        accumulator.totalFainted +=1;
    }

    if(accumulator.allTypes[currentItem.pType]){
        accumulator.allTypes[currentItem.pType] += 1
    } else {
        accumulator.allTypes[currentItem.pType] = 1
    }
    
    if(accumulator.allTypes[currentItem.sType]){
        accumulator.allTypes[currentItem.sType] += 1
    } else if (currentItem.sType !== null){
        accumulator.allTypes[currentItem.sType] = 1
    }

    if(index === originalArray.length - 1){
        let types = Object.keys(accumulator.allTypes)
        let frequency = Object.values(accumulator.allTypes)
        let currentMax = 0
        frequency.forEach((currentItem, index, originalArray)=>{
            if(index===0){
                currentMax = currentItem
                accumulator.mostCommonTypes.push(types[index])
            }
            else if (index!==0 && currentItem === currentMax){
                accumulator.mostCommonTypes.push(types[index])
            }
            else if(index!==0 && currentItem > currentMax){
                currentMax = currentItem                
                accumulator.mostCommonTypes = []
                accumulator.mostCommonTypes.push(types[index])
            }
        })
    }

    return accumulator

},accumulator)

console.log(teamSummary)