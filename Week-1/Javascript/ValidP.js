
let validPar = (str) => {
	var length = str.length / 2;
	for(var i = 0; i < length; i++){
		str = str.replace('()', '');
	}
	return str === '';
}

//try with stack and queue



