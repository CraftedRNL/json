const xhr = new XMLHttpRequest();
console.log("1")
xhr.onload = function () {
console.log("2")
    if (xhr.status === 200) {
        console.log("3")
        const data = JSON.parse(xhr.responseText);
        const players = data.players;
        const container = document.getElementById("cards");
        
        players.forEach(player => {
            const card = document.createElement("div");
            //add a className "card" to the card variable
            card.className = "card";
            
            let statsHTML = "";
            let teamsHTML = "";
            let awardsHTML = "";

            // the for loop below is looping through an object 
            // the syntax is different when you look through arrays
            for (let stat in player.careerStats) {
                statsHTML += "<li>" + stat + ": " + player.careerStats[stat] + "</li>";
            }

            // teams and awards are both arrays, so these for loops should look the same
            for (let i = 0; i < player.teams.length; i++) {
                teamsHTML += "<li>" + player.teams[i] + "</li>";
            }

            for (let i = 0; i < player.awards.length; i++) {
                awardsHTML += "<li>" + player.awards[i] + "</li>";
            }
            
            card.innerHTML = `
                <h2>
                ${player.fullName}
                </h2>
                <p><span class="label">Position:</span>
                ${player.position}
                </p>
                <p><span class="label">Primary Team:</span> 
                ${player.primaryTeam}
                </p>
                <p><span class="label">Jersey Number:</span> #
                ${player.jerseyNumber}
                </p>
                <p><span class="label">Born:</span>
                ${player.birthDate}
                </p>
                <p><span class="label">Throws:</span>
                ${player.throws}
                </p>
                <p><span class="label">Hall of Fame:</span>
                ${player.hallOfFameYear}
                </p>

                <p class="label">Career Stats:</p>
                <ul>
                ${statsHTML}
                </ul>

                <p class="label">Teams:</p>
                <ul>
                ${teamsHTML}
                </ul>

                <p class="label">Awards:</p>
                <ul>
                ${awardsHTML}
                </ul>`;

            container.appendChild(card); //variables go into those spots
            
        });
    }
};

xhr.open("GET", "player.json"); //make sure your json file is named player.json in VSCode
xhr.send();
console.log("4")