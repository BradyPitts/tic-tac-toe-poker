console.log('connected');

const board = []


const play = (clickedId) =>{
  const playerSpan = document.getElementById('player')
  console.log(playerSpan)
  let clickedElement = document.getElementById(clickedId)

  if (playerSpan.innerText === 'X'){
    clickedElement.innerText = 'X'
    board[clickedId] = 'X'
    playerSpan.innerText = 'O'
  }
  else {
    clickedElement.innerText = 'O'
    board[clickedId] = 'O'
    playerSpan.innerText = 'X'
  }

  if (board[0] !== undefined && board[0] === board[1] && board[1] === board[2]){
    alert(`${board[0]} is the Winner!`)
    return;
  }
  if (board[3] !== undefined && board[4] === board[5] && board[5]=== board[3]){
    alert(`${board[3]} is the Winner!`)
    return
  }
  if (board[6] !== undefined && board[6] === board[7] && board[7]=== board[8]){
    alert(`${board[6]} is the Winner!`)
    return
  }
  if (board[0] !== undefined && board[0] === board[3] && board[3]=== board[6]){
    alert(`${board[0]} is the Winner!`)
    return
  }
  if (board[1] !== undefined && board[1] === board[4] && board[4]=== board[7]){
    alert(`${board[1]} is the Winner!`)
    return
  }
  if (board[2] !== undefined && board[2] === board[5] && board[5]=== board[8]){
    alert(`${board[2]} is the Winner!`)
    return
  }
  if (board[0] !== undefined && board[0] === board[4] && board[4]=== board[8]){
    alert(`${board[0]} is the Winner!`)
    return
  }
  if (board[2] !== undefined && board[2] === board[4] && board[4] === board[6]){
    alert(`${board[2]} is the Winner!`)
    return
  }



  let boardFull = true;
  for (let i = 0; i<9; i++){
    if (board[i] === undefined){
      boardFull = false;
    }
  }

  if (boardFull === true){
    alert ("Cat's Game. Play again.")
  }
  


  console.log (board)
}