//Solution utilizing hashmap.
var twoSum = function(nums, target) {
    let res;
    const map = new Map();
    nums.some((cur, i)=>{
        const k = target - cur
        if(map.has(k)){
            res = [map.get(k),i]
            return true
        }
        map.set(cur,i)
    })
    
    return res;
};

    
//Naïve solution utilizing two for loops

    /*for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i]+nums[j]===target){
                return [i,j];
            }   
        }
    }*/