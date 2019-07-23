/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    y_length = board.length;
    x_length = board[0].length;
    const map = new Map();
    new_board_list = [];
    
    function checkRangeY(n){
        if(n>=0 && n<y_length){
            return true;
        }
        return false;
    }
    
    function checkRangeX(n){
        if(n>=0 && n<x_length){
            return true;
        }
        return false;
    }
    
    
    for (let i =0; i<y_length; i++){
        for(let j=0; j<x_length;j++){
            list_check = [[i-1,j-1],[i-1,j],[i-1,j+1],[i,j-1],[i,j+1],[i+1,j-1],[i+1,j],[i+1,j+1]];
            sum=0;
            for (element of list_check){
                
                if(checkRangeY(element[0]) && checkRangeX(element[1])){
                    sum+=board[element[0]][element[1]]
                    
                }
            }
            //console.log('sum', sum)
            var to_push = board[i][j]
            if(board[i][j] === 1 && sum<2 || sum>3){
                new_board_list.push(0)
 
            }
            
            else if(board[i][j] === 0 && sum===3){
                new_board_list.push(1)
               
            }
            
            else{
                new_board_list.push(to_push);
            }
            
            
        }
    }
    
    
    var new_board =[];
    for(let i=0; i<new_board_list.length; i+=x_length){
        new_board.push(new_board_list.slice(i,i+x_length))
    }
    
    //console.log('new: ',new_board)
    
    for (let i =0; i<y_length; i++){
        for(let j=0; j<x_length;j++){
            board[i][j] = new_board[i][j];
        }
    }

};