let wentForRun = true;

const getIceCreamTonight = new Promise((resolve, reject) => {
	if(wentForRun) {
		let iceCream = {
			flavor: 'Banana Cookie Dough',
			size: 'Large'
		};
		resolve(iceCream);
	} else {
		let reason = new Error('You didnt exercise today');
		reject(reason);
	}
})

// consuming Promise

const dessertTime = () => {
	getIceCreamTonight
		.then(backToGym)
		.then((fulfilled) => {
			console.log(fulfilled);
		})
		.catch((error) => {
			console.log(error.message);
		});
};

//chaining Promise

const backToGym = (iceCream) => {
	return new Promise(
		(resolve) => {
			let message = `I have to head back to the gym to burn off this ${iceCream.size} ${iceCream.flavor} Ice Cream.`;
			resolve(message);
		}
	)
}