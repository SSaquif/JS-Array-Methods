# Array Methods in JS

## Intro

This repo is to be additional resource to help students understand array methods in JS. I will provide example of some common issues that pop up while learning these methods. We will then go over the signature of the some of the most commonly used functions  

## Common Issues and Confusion

First I want to point out some of the common issues that I see when someone is learning to use these array methods.

1. Difficulty Using array methods on arrays which contain **OBJECTS** rather than simple strings, numbers or booleans.

2. Understanding **The callback function** and the **arguments it accepts**
    1. > We need to understand that all of these methods are Higher Order Functions (HOF), ie they take in another function as its argument/parameter
    2. > The function that goes inside the HOF is called the callback function
    3. > This HOF basically starts a loop, to loop over each item (which could be an object, string, boolean, number or even another array etc)
    4. > The callback function then operates on each of this items once. So if there are 5 items, the callback function will run 5 times
    5. > The callback function usually has a recurring signaure (discussed below)

3. To return or not to return. (Missing return statements)


## Our Code Setup


```javascript
let objectArray = [
    { name: "mudkip", pType: "water", sType: null, currentHP: 100, maxHP: 100, fainted: false },
    { name: "bulbasaur", pType: "grass", sType: "poison", currentHP: 110, maxHP: 110, fainted: false },
    { name: "pikachu", pType: "electric", sType: null, currentHP: 100, maxHP: 100, fainted: false },
    { name: "squirtle", pType: "water", sType: null, currentHP: 80, maxHP: 150, fainted: false },
    { name: "pidgey", pType: "flying", sType: "normal", currentHP: 100, maxHP: 100, fainted: false },
    { name: "charizard", pType: "fire", sType: "flying", currentHP: 0, maxHP: 300, fainted: true },
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