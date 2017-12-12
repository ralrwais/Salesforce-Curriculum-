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

//try with map

let twoSum2 = (nums, target) => {
  let presenceHash = {}
    for (var  i = 0; i < nums.length; i++) {
      if (presenceHash[nums[i]] || presenceHash[nums[i]] === 0){
        return[presenceHash[nums[i]], i] 
      }
  	let complement = target - nums[i]
	  presenceHash[complement] = i
  }
	return "no match"
}