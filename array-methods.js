
//Copy the code below into the JavaScript file, and follow the instructions in the comments.

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

const el = document.getElementById("planets");

 //Use the forEach method to add the name of each planet to a div element in your HTML with an id of "planets".
planets.forEach((planet, i) => el.innerHTML += `<p> ${planet} </p>`);

// Use the map method to create a new array where the first letter of each planet is capitalized

//grabbed this handy funciton from stack overflow
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

let capitalizedPlanets = planets.map((planet, index) => capitalizeFirstLetter(planet));

console.log('capitalizedPlanets', capitalizedPlanets);

// Use the filter method to create a new array that contains planets with the letter 'e'
let ePlanets = planets.filter((planet) => (planet.includes("e") ? 1 : 0));
console.log('ePlanets:', ePlanets);


// Use the reduce method to create a sentence from the words in the following array 
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let sentence = words.reduce(() => words.join(" "));
console.log('sentence:', sentence);
