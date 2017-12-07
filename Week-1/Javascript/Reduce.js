[1,2,3]


function myReduce (arr, cb, startVal){
	var acc = startVal;
	for(var i = 0; i < arr.length; i++) {
		 acc = cb(acc, arr[i])
	}
	return acc;
};


myReduce([1,2,3], function(acc, currentVal){
		return acc += currentVal;
}, 0);



