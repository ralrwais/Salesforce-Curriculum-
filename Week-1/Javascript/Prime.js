let isPrime = (x) => {
	for(var i = 2; i < x; i++){
		if(x % i === 0){
			return false;
		}
	}
	return x > 1;
}