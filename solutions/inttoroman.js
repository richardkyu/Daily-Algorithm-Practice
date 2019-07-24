/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    conversion_dict = {1 : "I",
                       4: "IV",
                       5: "V",
                       9: "IX",
                       10: "X",
                       40: "XL",
                       50: "L",
                       90: "XC",
                       100: "C",
                       400: "CD",
                       500 : "D",
                       900: "CM",
                       1000: "M"}
    
    conversion_keys = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    remainder = num;
    count = [];
    
    //Iterate through the conversion keys list and get the remainders for each possible roman numeral.
    for (var i =0; i<conversion_keys.length; i++){
        
        //Count records the number of times a roman numeral needs to be repeated in order to be equal to its decimal representation.
        if (remainder>=conversion_keys[i]){
            count.push(Math.floor(remainder/conversion_keys[i]));
            remainder = remainder % conversion_keys[i]
            
        } else{ //If the remainder is not bigger than the conversion key, then it is skipped. This allows us to account for...
            //numbers like 4,9,40,90 by going in descending order.
            count.push(0)
        }
    }
    
    roman_numeral = '';
    
    for (var i =0; i<conversion_keys.length; i++){
    
    //Match the roman numeral representation using the first dict, and add the appropriate number of repeats for its decimal representation.
        roman_numeral += conversion_dict[conversion_keys[i]].repeat(count[i]);
    
    
    }
    return roman_numeral;
    
};