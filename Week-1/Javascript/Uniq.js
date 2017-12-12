var arr = [1,1,2,2,3,4,5];

let myUniq = (arr) => {
	let uniqArr = [];
	for(var i = 0; i < arr.length; i++){
		if(!uniqArr.includes(arr[i])){
			uniqArr.push(arr[i]);
		}
	}
	return uniqArr;
}


//use hash
