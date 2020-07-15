# Array Methods in JS

## Intro

This repo is to be additional resource to help students understand array methods in JS. I will provide example of some common issues that pop up while learning these methods. We will then go over the signature of the some of the most commonly used functions  

## Common Issues and Confusion

    1. Using array methods on arrays which contain objects rather than strings, numbers and booleans only, 
       seem to cause a lot more issues and confusion
    
    2. Understanding **The callback function__ and the __arguments it accepts__

    3. To return or not to return
    


## Our Code Setup
```javascript
let objectArray = [
    { name: "mudkip", pType: "water", sType: null, currentHP: 100, totalHP: 100, fainted: false },
    { name: "bulbasaur", pType: "grass", sType: "poison", currentHP: 150, totalHP: 150, fainted: false },
    { name: "pikachu", pType: "electric", sType: null, currentHP: 200, totalHP: 200, fainted: false },
    { name: "charizard", pType: "fire", sType: "flying", currentHP: 0, totalHP: 100, fainted: false },
    { name: "squirtle", pType: "water", sType: null, currentHP: 100, totalHP: 100, fainted: false },
    { name: "ditto", pType: normal, sType: null, currentHP: 100, totalHP: 100, fainted: false },
];
```
## forEach() Signature & Some Basic Looping/Iteration 

> callbackFunction(currentItem, index, array)

> objectArray[i] = currentItem

## Map 
// No return statement
// Things still work
## Improvements with Map
// Example - healing function
// switching to let pokeTeam