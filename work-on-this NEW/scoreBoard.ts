function renderScoreBoard(players:Player[]){
    try {
        if (!players || !Array.isArray(players)) throw new Error("players is not an array");
      
        debugger;
        const page=players.map((player) => {
                return `<div class="line" >
                <img class="small_logo" src='${player.picture}'/>
                <div>${player.name} </div>
                <div>${player.score} </div>
                </div>`
               }).join(" ");

               const html: HTMLDivElement | null = document.querySelector(".scoreBoard");
               if (html !== null) {
                 html.innerHTML = page;
             
               }
    } catch (error) {
        console.error(error)
    }
}


renderScoreBoard(players)




