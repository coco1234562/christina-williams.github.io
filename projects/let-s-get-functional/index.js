// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./christina-williams.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
	//assign variable to filter function. Input array and function with current customer
	let males = _.filter(array, function(customer){
		//return filter if customer gender is male
		return customer.gender === 'male';
	});
	//return length of males
	return males.length;
	
};

/*
### 2: `femaleCount`
- **Objective**: Find the number of female customers
- **Input**: `Array`
- **Output**: `Number`
- **Constraints**: use `reduce`
*/


//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


var femaleCount = function(array) {
	//assign variable to reduce function. Input array, function and seed
	let females = _.reduce(array, function(accumulator, customer){
		//test if current customer is female
		if(customer.gender === 'female') {
			//if female, add 1 to accumulator and return
			return accumulator + 1;
		}
		//if not female, return current value of accumulator
		return accumulator;
	}, 0)
	//return number of females
	return females;
}


/*
### 3: `oldestCustomer`
- **Objective**: Find the oldest customer's name
- **Input**: `Array`
- **Output**: `String`
- **Constraints**:
*/


//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


var oldestCustomer = function(array) {
	//create variable and assign it to reduce function. Input array and function
	//The accumulator holds the value that is accumulated throughout the iteration process.
	let oldest = _.reduce(array, function(accumulator, customer) {
		//f the accumulator's age is greater than the current customer's age, the function returns the accumulator object.
		if (accumulator.age > customer.age) {
			return accumulator;
		}
		//else return current customer object
		return customer;
	})
	//The result of the reduce function is stored in the oldest variable, which will contain the customer object with the highest age.
	return oldest.name;
}


/*
### 4: `youngestCustomer`
- **Objective**: Find the youngest customer's name
- **Input**: `Array`
- **Output**: `String`
- **Constraints**:
*/


//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

var youngestCustomer = function(array) {
	//create variable and assign it to reduce function. Input array and function
	let youngest = _.reduce(array, function(accumulator, customer){
		//test if age of object associate with accumulator is less than age of object associated with customer
		if (accumulator.age < customer.age) {
			// if true, return accumulator object
			return accumulator;
		}
		//else return customer object
		return customer;
	})
	//return name property of object associated with youngest
	return youngest.name;
}


/*
### 5: `averageBalance`
- **Objective**: Find the average balance of all customers
- **Input**: `Array`
- **Output**: `Number`
- **Constraints**:
*/

//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

var averageBalance = function(array) {
	//create variable and assign it to reduce function. Input array, function and seed
	let total = _.reduce(array, function(accumulator, customer){
		return accumulator += Number(customer.balance.replace(/[$,]/g, ''));
	}, 0)
	return total / array.length;
}


/*
### 6: `firstLetterCount`
- **Objective**: Find how many customer's names begin with a given letter
- **Input**: `Array`, `Letter`
- **Output**: `Number`
- **Constraints**:
*/

//array.filter(callback(element, index, arr), thisValue)

var firstLetterCount = function(array, letter) {
	//assign newArray = .filter(array)
	  let newArray = _.filter(array, function(customer){
		//return the customers name at char0 
		//case sensitive! 
		//count how many have the same letter 
		  return customer.name.charAt(0).toLowerCase() === letter.toLowerCase();
	  })
	  //return the length 
	  return newArray.length;
  }

/*### 7: `friendFirstLetterCount`
- **Objective**: Find how many friends of a given customer have names that start with a given letter
- **Input**: `Array`, `Customer`, `Letter`
- **Output**: `Number`
- **Constraints**:
*/

//array.filter(callback(element, index, arr), thisValue)

//create the function
var friendFirstLetterCount = function (array, name, letter) {
	//iterate around the array 
	for (let i = 0; i < array.length; i++) {
		//if the name found in the array == name 
		if (array[i].name === name) {
			//use filter function 
			let personFriends = _.filter(array[i].friends, function(friend) {
				//return the name at index0 
				//make lowercase 
				return friend.name.charAt(0).toLowerCase() === letter.toLowerCase();
			})
			//return the length of the name 
			return personFriends.length;  
		}
	}
	
}

/*
### 8: `friendsCount`
- **Objective**: Find the customers' names that have a given customer's name in their friends list
- **Input**: `Array`, `Name`
- **Output**: `Array`
- **Constraints**:
*/

//array.filter(callback(element, index, arr), thisValue)

var friendsCount = function(array, name) {
	let friends = _.filter(array, function(customer) {
		//loop around the customer.friends object 
		for (let i = 0; i < customer.friends.length; i++) {
		//if you found a name that == name 
			if (customer.friends[i].name === name) {
				//return true 
				return true;
			}
		}
		//else return false 
		return false;
	})
	//use map method 
	//array.map(function(currentValue, index, arr), thisValue)
	let names = _.map(friends, function(friend) {
		//return the friends name 
		return friend.name;
	})
	return names;
}


/*
### 9: `topThreeTags`
- **Objective**: Find the three most common tags among all customers' associated tags
- **Input**: `Array`
- **Output**: `Array`
- **Constraints**:
*/

//function topThreeTags(array):
var topThreeTags = function(array) {
	//allTags = map array using a function (current):
	  let allTags = _.map(array, function(current) {
		//return current.tags
		  return current.tags;
	  })
	  //flatTags = flatten allTags
	  let flatTags = allTags.flat();
	  
	  //countedTags = an empty dictionary
	  let countedTags = {};
	  //for i = 0 to length of flatTags:
	  for(let i = 0; i < flatTags.length; i++) {
		//if countedTags has property flatTags[i]:
		  if(countedTags.hasOwnProperty(flatTags[i])) {
			//increment countedTags[flatTags[i]]
			  countedTags[flatTags[i]]++;
		  }else {
			//set countedTags[flatTags[i]] to 1
			  countedTags[flatTags[i]] = 1
		  }
	  }
	  //countedTags = convert countedTags to an array of key-value pairs
	  countedTags = Object.entries(countedTags);
	  
	  //sortedTags = sort countedTags using a comparison function (a, b):
	  let sortedTags = countedTags.sort(function(a, b) {
		//return b[1] - a[1]
		  return b[1] - a[1];
	  })
	  
	  //topTags = take the first 3 elements from sortedTags
	  let topTags = _.first(sortedTags, 3);
	  
	  //topTagNames = map topTags using a function (current):
	  let topTagNames = _.map(topTags, function(current) {
		// return current[0]
		  return current[0];
	  })
	  //return topTagNames
	  return topTagNames;
  }
  


/*
### 10: `genderCount`
- **Objective**: Create a summary of genders, the output should be: 

{
male: 3,
female: 4,
non-binary: 1
}


- **Input**: `Array`
- **Output**: `Object`
- **Constraints**: Use `reduce`
*/

//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


var genderCount = function(array) {
	let genders = _.reduce(array, function(accumulator, current, index, array) {
		if (current.gender === 'male') {
			accumulator.male++;
		}else if (current.gender === 'female') {
			accumulator.female++;
		}else {
			accumulator['non-binary']++
		}
		return accumulator;
	}, {male: 0, female: 0, 'non-binary': 0})
	return genders;
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
