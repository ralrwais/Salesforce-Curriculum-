let firstNames = ["Mary", "Brian", "Leo"];

let titleize = (arr, cb) => {
	let newNames = arr.map(name => `${name} Smith`);
	cb(newNames);
}

titleize(firstNames, arr => {
	arr.forEach(fullName => {
		console.log(fullName);
	})
})

//shitty way

var firstNames = ["Mary", "Brian", "Leo"];

function titleLize (arr, cb) {
	var newNames = arr.map(function(name) {
		var newName = name + ' Smith';
		return newName;
	})
	cb(newNames);
}

titleLize(firstNames, function(arr){
	arr.forEach(function(fullName){
		console.log(fullName);
	});
})

