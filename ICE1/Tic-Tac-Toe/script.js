// want to click on a box and it should show me an x 
//variable below will grab all the htm elements that match the class name
// const boxes = document.getElementsByClassName("box");

// for (let i= 0; i < boxes.length; i++){
//     boxes[i].addEventListener("click",(event) =>
//     {
//         console.log("box "+ event.target.classList[2]+" was clicked!")
//     });

// }
// console.log(boxes)
//fetched an element with a class name of main-container and store it inside a variable
const mainContainer = document.querySelector(".main-container")

//initialize new variable called playerTurn to keep track of who's turn it is
//let or var
var playerTurn = "x";
//we are modifying
const  squares = document.querySelectorAll('.box');

function clearBoard() {
    squares.forEach((square) => square.innerText = "");
}
function checkForWinner() {
   //in order to win we need to find either three xs or three os in any direction
   // start with xs and console log squares 
   //if all squares in the top row have an inner text property that equal 'x' we have a winner
   if (squares[0].innerText == "x" && squares[1].innerText == "x" && squares[2].innerText == "x") {
    alert("x won");
    clearBoard();
} else if (squares[3].innerText == "x" && 
           squares[4].innerText == "x" && 
           squares[5].innerText == "x") {
    alert("x won");
    clearBoard();
} else if (squares[6].innerText == "x" &&  
           squares[7].innerText == "x" && 
           squares[8].innerText == "x") {
    alert("x won");
    clearBoard();
} else if (squares[0].innerText == "x" && 
           squares[3].innerText == "x" && 
           squares[6].innerText == "x") {
    alert("x won");
    clearBoard();
} else if (squares[1].innerText == "x" &&
           squares[4].innerText == "x" && 
           squares[7].innerText == "x") {
    alert("x won");
    clearBoard();
} else if (squares[2].innerText == "x" && 
           squares[5].innerText == "x" && 
           squares[8].innerText == "x") {
    alert("x won");
    clearBoard();
} else if (squares[0].innerText == "x" &&
           squares[4].innerText == "x" &&
           squares[8].innerText == "x") {
    alert("x won");
    clearBoard();
} else if (squares[2].innerText == "x" &&
           squares[4].innerText == "x" && 
           squares[6].innerText == "x") {
    alert("x won");
    clearBoard();
}
if (squares[0].innerText == "o" && 
    squares[1].innerText == "o" && 
    squares[2].innerText == "o") {
    alert("o won");
    clearBoard();
} else if (squares[3].innerText == "o" && 
           squares[4].innerText == "o" && 
           squares[5].innerText == "o") {
    alert("o won");
    clearBoard();
} else if (squares[6].innerText == "o" &&  
           squares[7].innerText == "o" && 
           squares[8].innerText == "o") {
    alert("o won");
    clearBoard();
} else if (squares[0].innerText == "o" && 
           squares[3].innerText == "o" && 
           squares[6].innerText == "o") {
    alert("o won");
    clearBoard();
} else if (squares[1].innerText == "o" &&
           squares[4].innerText == "o" && 
           squares[7].innerText == "o") {
    alert("o won");
    clearBoard();
} else if (squares[2].innerText == "o" && 
           squares[5].innerText == "o" && 
           squares[8].innerText == "o") {
    alert("o won");
    clearBoard();
} else if (squares[0].innerText == "o" &&
           squares[4].innerText == "o" &&
           squares[8].innerText == "o") {
    alert("o won");
    clearBoard();
} else if (squares[2].innerText == "o" &&
           squares[4].innerText == "o" && 
           squares[6].innerText == "o") {
    alert("o won");
    clearBoard();
}

       
    }

mainContainer.addEventListener("click", event =>{
    console.log('box ' +event.target.classList [2]+" was clicked!")
    if(playerTurn == "x"){
        event.target.innerText= "x";
        //we are re-assigning the value of the playerTurn variable to 'toggle' between x and o
      playerTurn ="o"
    }else if (playerTurn =="o")
    {
        event.target.innerText="o";
        playerTurn="x";
    } 
    checkForWinner();
});
