
let isSubstring = (subStr, str) => {
	return str.includes(subStr);
}



function isSubstring(subStr, str) { 
	return str.indexOf(subStr) != -1;
};



let isSubstring = (sub, str) => {
	var newStr = '';
	for(var i = 0; i < str.length; i++){
		for(var j = 0; j < sub.length; j++){
			if(str[i] === sub[j]){
				newStr += sub[j];
			}
		}
	}
	if(newStr === sub){
		return true;
	}
	return false;
}