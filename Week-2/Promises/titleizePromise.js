//using promises instead of callbacks

let firstNames = ["Mary", "Brian", "Leo"];

let titleize = (arr) => {
 	return new Promise((resolve) => {
 		let newNames = arr.map(name => `${name} Smith`);
 		resolve(newNames);
 	})
 }

titleize(firstNames).then(arr => {
	arr.forEach(fullName => {
		console.log(fullName);
	})
})
