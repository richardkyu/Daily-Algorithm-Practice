var isValid = function(s) {
    //Still need to figure out how this exactly works.
    var st = []
    for(var l of s)
        if ((i="({[]})".indexOf(l))>-1){
            if (st[st.length-1]+i===5){
                console.log(st)
                st.length--;
            }
            
            else{
                st.push(i);
            }
        }
    return st.length===0
};

//Solution using a stack.

/*var map = {
    "(": ")",
    "[": "]",
    "{": "}"
} 

var isValid = function(s) {
    var stack = [];
    
    for (var i = 0; i < s.length; i++) {
        var element = s[i];
        console.log(element);
        
        //Push the expected parentheses to the stack.
        if (map[element]) {
            stack.push(map[element]);
            
        } else { // If the expected element is not in the stack, then the parenthesis wasn't closed properly.
            if (element != stack.pop()) {
                return false;
            }
        }
        console.log(stack);
    }
    
    return stack.length === 0;

}*/