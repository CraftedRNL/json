 const xhr = new XMLHttpRequest();

        xhr.onload = function(){
            // let player = this.responseText;
            // player = JSON.parse(player);
            // document.getElementById("player-info").innerHTML = player.fullName + ": " + player.position;
            if(xhr.status === 200){
                const data = JSON.parse(xhr.responseText);
                
            }
        }

        xhr.open("GET", "player.json");
        xhr.send();
