function createGame (player1, hour, player2) {
 return `
      <li>
           <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
              <strong>${hour} </strong>
              <img src="./assets/icon-${player2}.svg" alt="Bandeira de ${player2}">
       </li>
  `
}

let delay = -0.4;
function createCard (date,day,game) {
  delay = delay + 0.4;
  return ` 
       <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>
            ${day}</span></h2>
          <ul>
             ${game}
          </ul>
        </div>
       
  `
}
document.querySelector("#cards").innerHTML = 
   createCard(
             "24/11",
             "quinta",
     createGame("Brazil", "16:00", "serbia")) +
   createCard(
              "28/11",
              "segunda",
     createGame("Brazil", "13:00", "switzerland")) +
   createCard(
              "02/12",
              "sexta",
     createGame("Brazil", "16:00", "cameroon") +  
     createGame("Brazil", "16:00", "cameroon"))
