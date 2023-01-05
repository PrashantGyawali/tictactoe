const tile= document.querySelectorAll(".tile");
const Player_X="X";
const Player_O="O";

let turn= Player_X;

const boardState= Array(tile.length);
boardState.fill(null);

//elements
const strike= document.getElementById("strike");
const gameOverArea=document.getElementById("game-over-area");
const gameOverText=document.getElementById("game-over-text");
const playAgain=document.getElementById("play-again");


console.log("hello");




//Sounds
// const click= new Audio();
// const gameOverSound= new Audio();

tile.forEach((tile)=>tile.addEventListener("click",tileClick));

function tileClick(event)
{
    if(gameOverArea.classList.contains("visible"))
    {
        return;
    }

    const tile= event.target;
    const tileNumber= tile.dataset.index;
    if(tile.innerText !="")
    {
        return;
    }

    if( turn===Player_X)
    {
        tile.innerText=Player_X;
        boardState[tileNumber-1]=Player_X;
        turn=Player_O;
    }

    else{
        tile.innerText=Player_O;
        boardState[tileNumber-1]=Player_O;
        turn=Player_X;
    }

}