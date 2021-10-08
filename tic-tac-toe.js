window.onload = function(){
    let board = document.getElementById("board").getElementsByTagName("div");
    let boardArray = Array.from(board);
    var boardState = ["e","e","e","e","e","e","e","e","e"];
    var play = 0;

    

    for (const boardItem of board) {
        boardItem.className = "square";
        boardItem.addEventListener("click", function(){
                
                if(play == 0){
                    boardState.splice(boardArray.indexOf(boardItem),1,"X")
                    boardItem.classList.add("X");
                    boardItem.innerHTML = "X";

                    console.log(boardState);
                    console.log(boardState.indexOf("X"))

                    play = play + 1;
                    winCheck()
                }
                
                else if(play > 0 && play % 2 != 0){
                    boardState.splice(boardArray.indexOf(boardItem),1,"O")
                    boardItem.classList.add("O");
                    boardItem.innerHTML = "O";

                    console.log(boardState);
                    console.log(boardState.indexOf("O"))

                    play = play + 1;
                    winCheck()
                }
                else{
                    boardState.splice(boardArray.indexOf(boardItem),1,"X")
                    boardItem.classList.add("X");
                    boardItem.innerHTML = "X";

                    console.log(boardState);
                    console.log(boardState.indexOf("X"))

                    play = play + 1;
                    winCheck()
                }  
                
        });

        boardItem.addEventListener("mousemove", () => {
            boardItem.classList.add("hover");
            
        });
        boardItem.addEventListener("mouseleave", () => {
            boardItem.classList.remove("hover");
            
        });

     winCheck = () => {
         if (boardState[0] == "X" && boardState[1] == "X" && boardState[2] == "X"){
             document.getElementById("status").innerHTML = "Congratulations! X is the Winner";
             document.getElementById("status").classList.add("you-won");
         }
         else if (boardState[0] == "X" && boardState[3] == "X" && boardState[6] == "X"){
            document.getElementById("status").innerHTML = "Congratulations! X is the Winner";
             document.getElementById("status").classList.add("you-won");
        }
        else if (boardState[0] == "X" && boardState[4] == "X" && boardState[8] == "X"){
            document.getElementById("status").innerHTML = "Congratulations! X is the Winner";
             document.getElementById("status").classList.add("you-won");
        }

        else if (boardState[2] == "X" && boardState[5] == "X" && boardState[8] == "X"){
            document.getElementById("status").innerHTML = "Congratulations! X is the Winner";
             document.getElementById("status").classList.add("you-won");
        }
        else if (boardState[6] == "X" && boardState[7] == "X" && boardState[8] == "X"){
            document.getElementById("status").innerHTML = "Congratulations! X is the Winner";
             document.getElementById("status").classList.add("you-won");
        }

        else if (boardState[2] == "X" && boardState[4] == "X" && boardState[6] == "X"){
            document.getElementById("status").innerHTML = "Congratulations! X is the Winner";
             document.getElementById("status").classList.add("you-won");
        }
        else if (boardState[1] == "X" && boardState[4] == "X" && boardState[4] == "X"){
            document.getElementById("status").innerHTML = "Congratulations! X is the Winner";
             document.getElementById("status").classList.add("you-won");
        }
        else if (boardState[3] == "X" && boardState[4] == "X" && boardState[5] == "X"){
            document.getElementById("status").innerHTML = "Congratulations! X is the Winner";
             document.getElementById("status").classList.add("you-won");
        }



        if (boardState[0] == "O" && boardState[1] == "O" && boardState[2] == "O"){
            document.getElementById("status").innerHTML = "Congratulations! O is the Winner";
            document.getElementById("status").classList.add("you-won");
        }
        else if (boardState[0] == "O" && boardState[3] == "O" && boardState[6] == "O"){
           document.getElementById("status").innerHTML = "Congratulations! O is the Winner";
            document.getElementById("status").classList.add("you-won");
       }
       else if (boardState[0] == "O" && boardState[4] == "O" && boardState[8] == "O"){
           document.getElementById("status").innerHTML = "Congratulations! O is the Winner";
            document.getElementById("status").classList.add("you-won");
       }

       else if (boardState[2] == "O" && boardState[5] == "O" && boardState[8] == "O"){
           document.getElementById("status").innerHTML = "Congratulations! O is the Winner";
            document.getElementById("status").classList.add("you-won");
       }
       else if (boardState[6] == "O" && boardState[7] == "O" && boardState[8] == "O"){
           document.getElementById("status").innerHTML = "Congratulations! O is the Winner";
            document.getElementById("status").classList.add("you-won");
       }

       else if (boardState[2] == "O" && boardState[4] == "O" && boardState[6] == "O"){
           document.getElementById("status").innerHTML = "Congratulations! O is the Winner";
            document.getElementById("status").classList.add("you-won");
       }
       else if (boardState[1] == "O" && boardState[4] == "O" && boardState[4] == "O"){
           document.getElementById("status").innerHTML = "Congratulations! O is the Winner";
            document.getElementById("status").classList.add("you-won");
       }
       else if (boardState[3] == "O" && boardState[4] == "O" && boardState[5] == "O"){
           document.getElementById("status").innerHTML = "Congratulations! O is the Winner";
            document.getElementById("status").classList.add("you-won");
       }
     }
    };
    
}



