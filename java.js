 const xhr = new XMLHttpRequest();

        xhr.onload = function(){
            // let player = this.responseText;
            // player = JSON.parse(player);
            // document.getElementById("player-info").innerHTML = player.fullName + ": " + player.position;
            if(xhr.status === 200){
                const data = JSON.parse(xhr.responseText);
                const players = data.players;
                const container = document.getElementById("cards");
                


                

               
                
                players.forEach(player => {
                    const card = document.createElement('div');
                    let statsHtml ="";
                    let teamsHtml ="";
                    let awardsHtml ="";

                    for (let i = 0; i < player.teams.length; i++) {
                        
                    
                }

                });

                

             
                
                    console.log(players);
            }
        }

        xhr.open("GET", "player.json");
        xhr.send();
