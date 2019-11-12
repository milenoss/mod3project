//Pseudo coding
//Load the Dom -
//Initialize function - main menu screen
//leader board should render each time the player finishes the game. 


document.querySelector(".ship").style.marginLeft = "700px"
const spaceShip = document.querySelector(".ship")
const box = document.querySelector(".box")



function moveShipLeft() {
    let leftNumbers = spaceShip.style.marginLeft.replace("px", "");
    let left = parseInt(leftNumbers)

    if (left > 10) {

        spaceShip.style.marginLeft = `${left - 5}px`;

    }


}



document.addEventListener("keydown", function(e){
    
    if(e.key === "ArrowLeft") {
        moveShipLeft()

    }



})

function moveShipRight() {
    let leftNumbers = spaceShip.style.marginLeft.replace("px", "");
    let left = parseInt(leftNumbers)

    if (left < 1365) {

        spaceShip.style.marginLeft = `${left + 5}px`;

    }


}



document.addEventListener("keydown", function(e){
    
    if(e.key === "ArrowRight") {
        moveShipRight()

    }



})

function shootMissile() {
    const shipPosition = spaceShip.style.marginLeft.replace("px", "")
    const shipPositionNum = parseInt(shipPosition)
    const missile = document.createElement('img')
    missile.src = '../Mod3project/assets/missile.png'
    missile.className = "missile"
    
    missile.style.marginLeft = `${shipPositionNum + 20}px`
    missile.style.marginTop = "570px";
    setInterval(function(){
        const missileMove = missile.style.marginTop.replace("px","")
        const missileMoveNum = parseInt(missileMove)

        missile.style.marginTop = `${missileMoveNum - 10}px`

        if (missile.style.marginTop === "0px") {
            missile.remove()
        }

    }, 10)


    
    
    box.append(missile)
    


}

document.addEventListener("keydown", function(e){
    var lastMove = 0;
    if(Date.now() - lastMove > 2000) {
        if (e.key === " ") {

            shootMissile()
    
        }
        lastMove = Date.now();
    } else {
        
    }

})









// Not needed so far

// document.addEventListener('DOMContentLoaded', () => {
//     let elements = []
//     let container = document.querySelector('#container')
//     // Add each row to the array
//     container.querySelectorAll('.row').forEach(el => elements.push(el))
//     // Clear the container
//     container.innerHTML = ''
//     // Sort the array from highest to lowest
//     elements.sort((a, b) => b.querySelector('.score').textContent - a.querySelector('.score').textContent)
//     // Put the elements back into the container
//     elements.forEach(e => container.appendChild(e))
//   })

//   const playerArray = [
//     {name: "Player1", score: "430", id:"player1"},
//     {name: "Player2", score: "580"}, id:"player2"},
//     {name: "Player3", score: "310"}, id:"player3"},
//     {name: "Player4", score: "640" id:"player4"},
//     {name: "Player5", score: "495", id:"player5"}
//   ]