/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    var max = '';
    for (var i = 0; i < s.length; i++) {
      for (var j = 0; j < 2; j++) {
        var left = i;
        var right = i + j;
        console.log("left:", left, "right:", right);
        while (s[left] && s[left] === s[right]) {
            
          console.log("S[left]: ",s[left], "S[right]:",s[right])
          left--;
          right++;
        }
          
      console.log("after while loop, left:", left, "Right:", right);
          
        if ((right - left - 1) > max.length) {
          max = s.substring(left + 1, right);
          console.log("max:", max,"right-left-1:", right-left-1, "left+1", left+1, "right:", right)
        }
      }
    }
    return max;
  };
  
  //Naïve solution.
  /*
  var longestPalindrome = function(s) {
      if (s===''){
          return '';
      }
      
      function checkPalindrome(str){
          for(let i = 0; i<str.length; i++){
              if (str.charAt(i) != str.charAt(str.length-1-i)){
                  return false;   
              }
          }
          return true;
      }
      
      var res = '';
  
      
      for(let i = 0; i<s.length; i++){
          
          end = s.length-i;
          start =0;
          string_to_check = s.slice(start,end);
          if(checkPalindrome(string_to_check) === true){
              return string_to_check;
          }
          
          while(end!=s.length){
              start++;
              end++;
              string_to_check = s.slice(start,end);
              if(checkPalindrome(string_to_check) === true){
                  return string_to_check;
              }
          }
          
      }
  
  };*/