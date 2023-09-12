stats = {
    wins: 0,
    losses: 0,
    ties: 0
};

// 0 = Rock. 1 = Paper. 2 = Scissors.
function playAsRock(){
    rock = true;
    paper = false;
    scissors = false;

    computer = Math.floor(Math.random()* 3);
    
    //Computer - Rock
    if (computer === 0){
        if (rock === true){
            stats.ties += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Rock. Computer Chose: Rock.";
        }
        else if (paper === true){
            stats.losses += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Paper. Computer Chose: Rock.";
        }
        else if (scissors === true){
            stats.wins += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Scissors. Computer Chose: Rock.";
        }
    }

    //Computer - Paper
    if (computer === 1){
        if (rock === true){
            stats.losses += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Rock. Computer Chose: Paper.";
        }
        else if (paper === true){
            stats.ties += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Paper. Computer Chose: Paper.";
        }
        else if (scissors === true){
            stats.losses += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Scissors. Computer Chose: Paper.";
        }
    }

    //Computer - Scissors
    if (computer === 2){
        if (rock === true){
            stats.wins += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Rock. Computer Chose: Scissors.";
        }
        else if (paper === true){
            stats.losses += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Paper. Computer Chose: Scissors.";
        }
        else if (scissors === true){
            stats.ties += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Scissors. Computer Chose: Scissors.";
        }
    }
}
// 0 = Rock. 1 = Paper. 2 = Scissors.
function playAsPaper(){
    rock = false;
    paper = true;
    scissors = false;

    computer = Math.floor(Math.random()* 3);
    
    //Computer - Rock
    if (computer === 0){
        if (rock === true){
            stats.wins += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Paper. Computer Chose: Rock.";
        }
        else if (paper === true){
            stats.wins += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Paper. Computer Chose: Rock.";
        }
        else if (scissors === true){
            stats.losses += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Scissors. Computer Chose: Rock.";
        }
    }

    //Computer - Paper
    if (computer === 1){
        if (rock === true){
            stats.losses += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Rock. Computer Chose: Paper.";
        }
        else if (paper === true){
            stats.ties += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Paper. Computer Chose: Paper.";
        }
        else if (scissors === true){
            stats.losses += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Scissors. Computer Chose: Paper.";
        }
    }

    //Computer - Scissors
    if (computer === 2){
        if (rock === true){
            stats.wins += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Rock. Computer Chose: Scissors.";
        }
        else if (paper === true){
            stats.losses += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Paper. Computer Chose: Scissors.";
        }
        else if (scissors === true){
            stats.ties += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Scissors. Computer Chose: Scissors.";
        }
    }
}
// 0 = Rock. 1 = Paper. 2 = Scissors.
function playAsScissors(){
    rock = false;
    paper = false;
    scissors = true;

    computer = Math.floor(Math.random()* 3);
    
    //Computer - Rock
    if (computer === 0){
        if (rock === true){
            stats.wins += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Paper. Computer Chose: Rock.";
        }
        else if (paper === true){
            stats.wins += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Paper. Computer Chose: Rock.";
        }
        else if (scissors === true){
            stats.losses += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Scissors. Computer Chose: Rock.";
        }
    }

    //Computer - Paper
    if (computer === 1){
        if (rock === true){
            stats.losses += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Rock. Computer Chose: Paper.";
        }
        else if (paper === true){
            stats.ties += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Paper. Computer Chose: Paper.";
        }
        else if (scissors === true){
            stats.wins += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Scissors. Computer Chose: Paper.";
        }
    }

    //Computer - Scissors
    if (computer === 2){
        if (rock === true){
            stats.wins += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Rock. Computer Chose: Scissors.";
        }
        else if (paper === true){
            stats.losses += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Paper. Computer Chose: Scissors.";
        }
        else if (scissors === true){
            stats.ties += 1;
            document.getElementById("stats").innerText = 
            "Wins : " + stats.wins + " Losses: " + stats.losses
            + " Ties: " + stats.ties;
            document.getElementById("comments").innerText = 
            "You Chose: Scissors. Computer Chose: Scissors.";
        }
    }
}