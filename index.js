const clothing = {
	socks: 14,
	underwear: {
		briefs: 4,
		boxers: 3,
		shirts: 7 
	},
	pants: 3,
	shirts: 7,
}

const nl = () => console.log('\n');

// Iterate through an object using the keys...
// Note the nested object will give us trouble for a bit, but we'll get to it.)

console.log(`Object.keys...`);
Object.keys(clothing).forEach(key => console.log(key));

nl();

// Iterate through an object using the values...
console.log(`Object.values...`);
Object.values(clothing).forEach(value => console.log(value));

nl();

// Iterate with Object.entries because it's better by much...
// Note we're immediataly destructuring the array returned by Object.entries.
console.log(`Object.entries...`);
Object.entries(clothing).forEach(([key, value]) => console.log(`${key}: ${value}`));

nl();

console.log(`Object.entries tuples sans destructuring...`);

Object.entries(clothing).forEach(entry => console.log(entry));

nl();

// Finally, we create a function to enter into nested objects and list those too..
console.log(`Recursing through nested objects...`);

const recursiveEntries = (obj, indent = '') => {
	Object.entries(obj).forEach(([key, value]) => {
		if (value.constructor === Object) {
			console.log(`${key}:`);
			recursiveEntries(value, '\t');
		} else {
			console.log(`${indent}${key}: ${value}`);
		}
	}); 
}

recursiveEntries(clothing);

nl();

// How we did it during the Great Migrations...
console.log(`Enumerating with for..in like in olden times...`);

const recursiveForIn = (obj, indent = '') => {
	for (const key in obj) {
		if (obj[key].constructor === Object) {
			console.log(`${key}:`);
			recursiveForIn(obj[key], '\t');
		} else {
			console.log(`${indent}${key}: ${obj[key]}`);
		}
	}
}

recursiveForIn(clothing);