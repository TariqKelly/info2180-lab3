window.onload = function(){
    let board = document.getElementById("board").getElementsByTagName("div");
    var boardState = [];
    var play = 0;
    for (const boardItem of board) {
        boardItem.className = "square";
        boardItem.addEventListener("click", function(){
                console.log(play);
                if(boardState.length == 0 || play == 0){
                    boardState.push("X");
                    boardItem.classList.add("X");
                    boardItem.innerHTML = "X";

                    console.log("X");
                    console.log(boardState);
                    play = play + 1;
                }
                else if(play > 0 && boardState[play-1] == "X"){
                    boardState.push("O");
                    boardItem.classList.add("O");
                    boardItem.innerHTML = "O";

                    console.log("O");
                    console.log(boardState);
                    play = play + 1;
                }
                else if(play > 0 && boardState[play-1] == "O"){
                    boardState.push("X");
                    boardItem.classList.add("X");
                    boardItem.innerHTML = "X";

                    console.log("X");
                    console.log(boardState);
                    play = play + 1;
                }    
        });
    };
    
}

