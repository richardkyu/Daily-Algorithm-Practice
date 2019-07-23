/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0
    if (s.length === 1) return 1

    let i = 0, j = 1, len = 0
    while (j < s.length) {
        const idx = s.indexOf(s[j], i)
        console.log(idx, s[j],i)
        if (idx < j) { 
            i = idx + 1
        }

        j++

        if (j - i > len) {
            len = j - i
        }
    }

    return len
};

//Naïve solution.
/*    const map = {}
    var deleted = [0]

    for (var i = 0; i < s.length; i++) { 
        var letter = s.charAt(i);
        
        if (map[letter]){
           for (var key in map) {
              if(map[key]>=map[letter]){
                  deleted.push(map[key])
                  delete map[key];
              }
            } 
        }
        
        if (!map[letter]){
            map[letter] = 0;
        }
        
        for (var key in map) {
          map[key]++;
        }
        
        //console.log(map);
        
    }
    
    //console.log(deleted);
    values = Object.values(map);
    deleted = deleted.concat(values);
    max = Math.max(...deleted);
    
    return max
    
};*/