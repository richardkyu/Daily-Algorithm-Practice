/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    //Trim the whitespace on the right and left of the str
   str=str.trim();
    if(!str)return 0; //Account for empty str.
    
    //Account for negative and positive/
var sign=1;
var i=0, answer=0;
if(str[i]=='+'){
    sign=1;
    i++;
}
else if(str[i]=='-'){sign=-1;i++;}

    //iterate through the string.
for(;i<str.length;i++)
{
    //convert the character code of the string to an integer by subtracting 48 from what charCodeAt returns.
    var temp=str.charCodeAt(i)-48;
    console.log(temp, answer);
    
    //If the character code is not numeric, then break (answer =0)
    if(temp>9 || temp<0)break;
    
    //If the answer is greater, then return the limit.
    if(answer>2147483647/10|| answer>(2147483647-temp)/10)return sign==1?2147483647: -2147483648;
    
    //Else add up the answer by digit.
    else answer=answer*10 + temp;
}
return answer* sign;
};