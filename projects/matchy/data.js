/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {

}


animal.species = 'Honey Badger'; 
animal['name'] = 'Theo'; 
animal.noises = []; 

console.log(animal); 

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//Create a variable named `noises` and assign it to an empty array.
var noises = []; 

//Using **bracket notation** give `noises` it's first element.
noises[0] = 'rattle-roar';

//Using an array function add another noise to the end of `noises`.
noises.push('squeal-rattle');

noises.unshift('rawwwww');

//Using **bracket syntax** again, add another element to the end of `noises`
noises[noises.length] = 'meow';

//the length of `noises
console.log(noises.length); 

//the last element in `noises` again without hard coding the index.
//let lastElement = animal.noises[animal.noises.length - 1];
console.log(noises[noises.length - 1]); 

//`console.log` the whole array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////


//Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
animal['noises'] = noises; 


// Using any syntax add another noise to the `noises` property on `animal`.
animal['noises'].push('choo choo');


//`console.log` `animal`.
console.log(animal); 

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a variable named `animals` and assign it to an empty array.

var animals = []; 

//`push` our `animal` that we created to `animals`.
animals.push(animal);


//`console.log` `animals
console.log(animals); 

//Create a variable called `duck` and assign it to the data:
var duck = { 
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};  

var cat = { 
  species: 'cat', 
  name: 'Cheddar', 
  noises: ['meow', 'tuna', 'sneeze'] 
};  


var dog = { 
  species: 'dog', 
  name: 'John', 
  noises: ['bark', 'boo', 'growl'] 
};  


//`push` `duck` to `animals`
animals.push(duck);

animals.push(cat);

animals.push(dog);

//`console.log` `animals`
console.log(animals); 










//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

 
var friends = [];

// 5. Write a function called `getRandom` that takes our `animals` array and returns a random `index` of the input array, using `Math.random`.
function getRandom(animals) {
  var randomIndex = Math.floor(Math.random() * animals.length);
  return randomIndex;
}

// 6. Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
var randomIndex = getRandom(animals);
var randomAnimal = animals[randomIndex];
friends.push(randomAnimal.name);

// 7. `console.log` `friends`.
console.log(friends);

// 8. Using bracket notation, add the `friends` list as a property also named `friends` on one of the animals in the `animals` array.
randomAnimal['friends'] = friends.slice();

// 9. `console.log` your work.
console.log(randomAnimal);




//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}