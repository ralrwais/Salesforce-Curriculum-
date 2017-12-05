let twoSum = (nums, target) => {
	let results = [];
	for(var i = 0; i < nums.length; i++){
		for(var j = 1; j < nums.length; j++){
			if(nums[i] + nums[j] === target) {
				results.push(i, j);
				return results;
			}
		}
	}
}