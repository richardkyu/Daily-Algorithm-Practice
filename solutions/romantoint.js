/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    conversion_dict = { "I" : 1,
                        "V" : 5,
                        "X" : 10,
                        "L" : 50,
                        "C" : 100,
                        "D" : 500,
                        "M" : 1000,
                        }
    year = 0
    for(let i =0 ;i<s.length;i++){
        
        if (conversion_dict[s[i+1]]>conversion_dict[s[i]]){
            year-=conversion_dict[s[i]];
        } else{
            year+=conversion_dict[s[i]];
        }
    }
    
    return year;
    
};