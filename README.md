# Array Methods in JS

## Contents
- [Intro](#Intro)
- [Common Issues and Confusion](#Common-Issues-and-Confusion)
- [Our Code Setup](#Our-Code-Setup)
- [Array Methods VS For Loops](#Array-Methods-VS-For-Loops)
- [Define The Callback Function Outside of our HOF (ie Array Methods)](#Define-The-Callback-Function-Outside-of-our-HOF-(ie-Array-Methods))
- [Basic Looping/Iteration](#Basic-Looping/Iteration)
- [When not to use forEach()](#When-not-to-use-forEach)
- [Solving Our Issue with Map()](#Solving-Our-Issue-with-Map)
- [Find() and Filter()](#Find-and-Filter)
- [Reduce() (Stretch)](#Reduce-Stretch)

## Intro

This repo is to be additional resource to help students understand array methods in JS. I will provide example of some common issues that pop up while learning these methods. We will then go over the signature of the some of the most commonly used functions

> There are links in this readme file that should take you to the appropriate sections in the code


## Common Issues and Confusion

First I want to point out some of the common issues that I see when someone is learning to use these array methods.

1. Having difficulty using array methods on arrays which contain **OBJECTS** rather than simple strings, numbers or booleans (ie primitive types).

2. Understanding **The callback function** and the **arguments it accepts**
    1. > We need to understand that all of these methods are Higher Order Functions (HOF), ie they take in another function as its argument
    2. > The function that goes inside the HOF is called the callback function
    3. > The array methods basically starts a loop, to loop over each item of the array (the item could be an object, string, boolean, number or even another array etc).
    4. > The callback function then operates on each of this items once. So if there are 5 items, the callback function will run 5 times
    5. > The callback functions usually has a recurring signaure (discussed below)

3. To return or not to return. (Missing return statements)
    1. > We preatty much always need to do a return otherwise the default return is undefined. Exception is forEach which **ALWAYS** returns undefined    


## Our Code Setup

For our code I am using the following array of objects (a team of 6 pokemon). 

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

> **NOTE:** For callback functions (of all the array methods I have used in this repo), I have intentionally kept all the parameters (required once and the optional once), even if I am not using them. So that you get familiar with the syntax/signature 

> **TODO:** Go inside each file and at least see what the callback functions looks like. You will quickly spot a common pattern

## Array Methods VS For Loops

> Array Methods are basically Loops. So lets comapre them with your everday for Loop

[For Loop](https://github.com/SSaquif/JS-Array-Methods/blob/master/1-forEach.js#L12)
```javascript
for (let i=0; i<objectsArray.length; i++){
    console.log(objectsArray[i]);
}
```
[Array Method (forEach)](https://github.com/SSaquif/JS-Array-Methods/blob/master/1-forEach.js#L17)
```
objectsArray.forEach((currentItem, index, originalArray)=>{
    console.log(currentItem);
})
```
After comparing this two code snippets I want you to take away the following things. 

1. **Take Away 1**: Pretty much all callback Functions have the following signature
    1. > callbackFunction(currentItem, index, originalArray)
    2. > current item is one of the items in the array
    3. > index is the item's position in the array
    4. > originalArray, is self explanatory (it's the array we are working with)
    5. > **This 3 parameters CAN BE named anything**, it does not change what they store, which is the currentItem, index and originalArray

2. **Take Away 2**: If you compare the **for()** and **forEach()** functions, you will see that the following are equivalent for for() and forEach() respectively
    1. > **i === index**
    1. > **objectArray[i] === currentItem**

## Define The Callback Function Outside of our HOF (ie Array Methods)

Before we proceed, it is import to understand any callback function can be defined outside of the Array method istself and then itsimply needs to be passed as an argument to the Array method. This holds true for all callback functions (Not just the ones for array method).

1. [First Defining it Outside,](https://github.com/SSaquif/JS-Array-Methods/blob/master/1-forEach.js#L36)
2. [Then Passing it as an Argument to our HOF](https://github.com/SSaquif/JS-Array-Methods/blob/master/1-forEach.js#L40)


## Basic Looping/Iteration 

When using these methods, most people first struggle when we have an array of objects instead of an array of some primitive type. So I added an [array of strings](https://github.com/SSaquif/JS-Array-Methods/blob/master/1-forEach.js#L1) to go over the difference

```javascript
let stringsArray = ["mudkip","bulbasaur","pikachu","charizard","squirtle","ditto"];
```

[I loop of this array using a forEach()](https://github.com/SSaquif/JS-Array-Methods/blob/master/1-forEach.js#L24), (but this is valid for all array methods we have seen so far). In the table below I have broken down what value each parameter holds, at every iteration.

|Loop|       currentItem        | index   | originalArray  |
|----|--------------------------|---------|----------------|
|1   | "mudkip"                 | 0       | stringsArray   |
|2   | "bulbasaur"              | 1       | stringsArray   |
|3   | "pikachu"                | 2       | stringsArray   |
|4   | "squirtle"               | 3       | stringsArray   |
|5   | "pidgey"                 | 4       | stringsArray   |
|6   | "charizard"              | 5       | stringsArray   |

[Similarly we now Loop over array of objects using forEach()](https://github.com/SSaquif/JS-Array-Methods/blob/master/1-forEach.js#L17)

|Loop|       currentItem          | index   | originalArray  |
|----|----------------------------|---------|----------------|
|1   | { name: "mudkip", ... }    | 0       | objectsArray   |
|2   | { name: "bulbasaur", ... } | 1       | objectsArray   |
|3   | { name: "pikachu", ... }   | 2       | objectsArray   |
|4   | { name: "squirtle", ... }  | 3       | objectsArray   |
|5   | { name: "pidgey", ... }    | 4       | objectsArray   |
|6   | { name: "charizard", ... } | 5       | objectsArray   |

>So the major difference is what is in **currentItem**. While Looping through an array of strings, currentItem is a String. When Looping through an array of objects currentItem is an object. **Hence we can do the following when currentItem is an object**
```javascript 
currentItem.name //or some other property that's inside the object
``` 

## When not to use forEach()

Lets say, this code was part of a game and the array is being used to store the current status of your pokemon in the game.<br>

Now let say we visit the Poke-Center to heal our pokemon, and by design the game should auto save my game status right after. So we want to create a copy of the status of our pokemon at that point in time. If we do it using forEach(), it doesn't work. While the pokeTeam is correctly updated, autosave is undefined<br>

[Console logging pokeTeam](https://github.com/SSaquif/JS-Array-Methods/blob/master/2-forEachIssue.js#L23), we see that all the pokemon are back to max HP and fainted status(es) are removed.
```bash
pokeTeam: 
[
  { name: 'mudkip', pType: 'water', sType: null, currentHP: 100, maxHP: 100, fainted: false },
  { name: 'bulbasaur', pType: 'grass', sType: 'poison', currentHP: 110, maxHP: 110, fainted: false},
  { name: 'pikachu', pType: 'electric', sType: null, currentHP: 100, fainted: false },
  { name: 'squirtle', pType: 'water', sType: null, currentHP: 150, maxHP: 150, fainted: false },
  { name: 'pidgey', pType: 'flying', sType: 'normal', currentHP: 100, maxHP: 100, fainted: false },
  { name: 'charizard', pType: 'fire', sType: 'flying', currentHP: 300, maxHP: 300, fainted: false }
]
```
However, [console logging the autoSave variable](https://github.com/SSaquif/JS-Array-Methods/blob/master/2-forEachIssue.js#L24), where we store the result of our forEach operation is undefined   
```bash
save-file: undefined
```
> **Take Away 3**: forEach() always returns undefined even if you have [explicitely stated a return statement](https://github.com/SSaquif/JS-Array-Methods/blob/master/2-forEachIssue.js#L16)

## Solving Our Issue with Map()

Solving this issue is pretty simple, [simply **switch** your **forEach()** with a **map()**](https://github.com/SSaquif/JS-Array-Methods/blob/master/3-Map.js#L24)<br>
[Now autoSave is no longer undefined](https://github.com/SSaquif/JS-Array-Methods/blob/master/3-Map.js#L26)
```bash
save-file: [
  { name: 'mudkip', pType: 'water', sType: null, currentHP: 100, maxHP: 100, fainted: false },
  { name: 'bulbasaur', pType: 'grass', sType: 'poison', currentHP: 110, maxHP: 110, fainted: false},
  { name: 'pikachu', pType: 'electric', sType: null, currentHP: 100, fainted: false },
  { name: 'squirtle', pType: 'water', sType: null, currentHP: 150, maxHP: 150, fainted: false },
  { name: 'pidgey', pType: 'flying', sType: 'normal', currentHP: 100, maxHP: 100, fainted: false },
  { name: 'charizard', pType: 'fire', sType: 'flying', currentHP: 300, maxHP: 300, fainted: false }
]
```

**Map Summary**<br>
1. >Map returns a new array after it is done 
2. >The new array will have exactly the same number of elements as the original array. (We had 6 in both)
3. > Generally we use Map to change the items inside the original array in some way and the return the altered items in an new array

## Find() and Filter()
In both of this functions we provide a test, that evaluates to true or false.<br>In find the first item in the original array tp pass the test is returned.<br>While in filter all the items to pass the test are returned in a new array.

In this code for find(), I am trying to [find the first flying type pokemon in my team](https://github.com/SSaquif/JS-Array-Methods/blob/master/4-FindVSFilter.js#L13). I get the [following result]:(https://github.com/SSaquif/JS-Array-Methods/blob/master/4-FindVSFilter.js#L28)

>NOTE: A single **Object** is returned 

```
The First Flying Type in My Team
 {
  name: 'pidgey',
  pType: 'flying',
  sType: 'normal',
  currentHP: 100,
  maxHP: 100,
  fainted: false
}
```

Next, I want to find **ALL the flying types**. So I only filter those in, while filtering the rest out [using filter()](https://github.com/SSaquif/JS-Array-Methods/blob/master/4-FindVSFilter.js#L21). [The result]()

>NOTE: **Multiple Objects** are returned **Inside an Array**

```
ALL Flying Types in My Team
 [
  {
    name: 'pidgey',
    pType: 'flying',
    sType: 'normal',
    currentHP: 100,
    maxHP: 100,
    fainted: false
  },
  {
    name: 'charizard',
    pType: 'fire',
    sType: 'flying',
    currentHP: 0,
    maxHP: 300,
    fainted: true
  }
] 
```

**Find Summary**
1. >We want to use find() when we just **want a single item**. 
2. >Find stops the moment it finds the first item that matches the test
3. >The item is returned, **but NOT inside an array**. (Unless of course the item itself is an array)

**Filter Summary**
1. >We want to use filter() when we want all the items (of the original array) that pass a given test.
2. >The items are **returned in a new array**
3. >This new array can have the same size as original array (if all items pass the test), else it will be smaller (some items failed the test)  

## Reduce() (Stretch)

Reduce has an extra parameter, the accumulator. This is pretty much the magic behind reduce. This accumalator basically accumulates new information at every iteration. And at the end we return this. The function in the reduce file basically prints out a summary of our team status. For now I will not go into too much detail about this. But if you have time take a look and see if you can understand what's going on. It returns a summary like this

```
{
  numberOfPokemon: 6,
  totalFainted: 1,
  allTypes: {
    water: 2,
    grass: 1,
    poison: 1,
    electric: 1,
    flying: 2,
    normal: 1,
    fire: 1
  },
  mostCommonTypes: [ 'water', 'flying' ]
}
```
