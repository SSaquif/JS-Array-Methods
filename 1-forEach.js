let stringsArray = ["mudkip","bulbasaur","pikachu","charizard","squirtle","ditto"];

let objectsArray = [
    { name: "mudkip", pType: "water", sType: null, currentHP: 100, totalHP: 100, fainted: false },
    { name: "bulbasaur", pType: "grass", sType: "poison", currentHP: 150, totalHP: 150, fainted: false },
    { name: "pikachu", pType: "electric", sType: null, currentHP: 200, totalHP: 200, fainted: false },
    { name: "squirtle", pType: "water", sType: null, currentHP: 100, totalHP: 100, fainted: false },
    { name: "pidgey", pType: "flying", sType: "normal", currentHP: 100, maxHP: 100, fainted: false },
    { name: "charizard", pType: "fire", sType: "flying", currentHP: 0, totalHP: 100, fainted: true },
];

// 1. Looping using your everyday for loop
for (let i=0; i<objectsArray.length; i++){
    console.log(objectsArray[i]);
}

// 2. Looping with forEach 
objectsArray.forEach((currentItem, index, originalArray)=>{
    console.log(currentItem);
})

// LESSON: objectsArray[i] = currentItem 

// 3. Looping An Array of Strings
stringsArray.forEach((currentItem, index, originalArray)=>{
    console.log(currentItem);
})

// Compare 2 and 3, The 2 functions are identical. But in one currentItem is a String and in another it's an Object

// LESSON: The type of currentItem can be anything. Most times, it's some kind of an object. So treat it like one. (Access properties, Call Methods etc)
// Draw A Table Maybe

// 4. Detour: Writing the callback function outside

const itemLogger = (currentItem, index, originalArray) => {
    console.log(currentItem)
}

stringsArray.forEach(itemLogger);
objectsArray.forEach(itemLogger);





