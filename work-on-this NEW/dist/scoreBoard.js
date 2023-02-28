function renderScoreBoard(players) {
    try {
        if (!players || !Array.isArray(players))
            throw new Error("players is not an array");
        debugger;
        const page = players.map((player) => {
            return `<div class="line" >
                <img class="small_logo" src='${player.picture}'/>
                <div>${player.name} </div>
                <div>${player.score} </div>
                </div>`;
        }).join(" ");
        const html = document.querySelector(".scoreBoard");
        if (html !== null) {
            html.innerHTML = page;
        }
    }
    catch (error) {
        console.error(error);
    }
}
renderScoreBoard(players);
// function renderItems(items: Item[]): string {
//     try {
//       if (!items || !Array.isArray(items))
//         throw new Error("items is not an array");
//       const html = items
//         .map((item) => {
//           console.log(`---${item.uid}---`);
//           return `
//       <div class="item" style="background-color:${item.color}">
//         <h3>${item.name}</h3>
//         <div>Price: ${item.price} <button onclick="handleUpdatePrice()">Update</button></div>
//         <div>Category: ${item.category}</div>
//         <div>Size: ${item.size}</div>
//         <div>S/N: ${item.sn}</div>
//         <button onclick="handleDeleteItem('${item.uid}')">Remove</button>
//       </div>
//       `;
//         })
//         .join(" ");
//       console.log(html);
//       return html;
//     } catch (error) {
//       console.error(error);
//       return "";
//     }
//   }
