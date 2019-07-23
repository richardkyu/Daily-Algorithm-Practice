//A naïve solution.
var addTwoNumbers = function(l1, l2) {
    let node = l1;
    let carry = 0;
    
    while(node || l2){
        if(!node.next && l2.next){
            node.next = new ListNode(0);
        }
        
        if(!l2.next && node.next){
            l2.next = new ListNode(0);
        }
        
        node.val = node.val + l2.val;
        
        node = node.next;
        l2 = l2.next;
    }
    
    node = l1;
    while(node){
        
        if (carry>0){
            node.val++;
            carry--;
        }
        
        if(node.val>9){
            node.val-=10;
            carry++;
        }
        
        if (!node.next && carry>0){
            node.next = new ListNode(carry);
            carry--;
        }
        
        node = node.next;
    }
    
    return l1;
};