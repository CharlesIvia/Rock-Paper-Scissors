
        let ninjaOption = null;
        let aiOption = null;
        let ninjaScore = 0;
        let aiScore = 0;

        const resultContainer = document.querySelector("#result-container");
        const btn = document.querySelectorAll(".btn");
        const finalResult = document.querySelector("#final-result");
        let ninjaScoreBtn = document.querySelector("#ninja-score");
        let aiScoreBtn = document.querySelector("#ai-score");

        const options = ["Rock", "Paper", "Scissors"];

        for (let i = 0; i< btn.length ; i++){
            btn[i].addEventListener("click", function(){
                ninjaOption = btn[i].textContent;
                playRound();
            });
        };

        function playRound() {
            if (ninjaScore >= 5 || aiScore >= 5){
                return;
            }
            clear();
            getAiOption();
            showNinjaOption();
            showAiOption();
            showWinner();
            updateScore();
            checkGameWinner();

        }

        function clear(){
            let p = document.querySelectorAll("p");
            for (let i = 0; i < p.length ; i++){
                p[i].remove();
            }
        }

        function getAiOption(){
            aiOption = options[Math.floor(Math.random() * 3)];
        }

        function showNinjaOption (){
            createNode ("My choice: " + ninjaOption );
        }

        function showAiOption(){
            createNode ("Computers's choice: " + aiOption);
        }

        function showWinner(){
            if (checkWinner() === "tie"){
                createNode("Result: Draw");
            }
            else if (checkWinner() === "ai"){
                aiScore += 1;
                createNode("Result: You lost");
            }
            else if (checkWinner() === "ninja"){
                ninjaScore += 1;
                createNode("Result: You won");
            }
        }

        function updateScore(){
            ninjaScoreBtn.innerHTML = ninjaScore;
            aiScoreBtn.innerHTML = aiScore;
        }

        function checkGameWinner() {
            if (ninjaScore === 5){
                createNode("You Won the Game", finalResult);
                createResetBtn();
            }
            else if (aiScore === 5) {
                createNode("You lost the Game", finalResult)
                createResetBtn();
            }
        }

        function createNode(str, node = resultContainer){
            let p = document.createElement("p");
            p.appendChild(document.createTextNode(str));
            node.appendChild(p);
        }

        function createResetBtn() {
            let b = document.createElement("button");
            b.appendChild(document.createTextNode("Restart game"));
            b.classList.add("btn-hover");
            finalResult.appendChild(b);
            b.addEventListener("click", function(){
                clear();
                ninjaScore = 0;
                aiScore = 0;
                updateScore();
                b.remove();
            });
        }

        function checkWinner(){
            if (aiOption === ninjaOption){
                return "draw";
            }
            else if((aiOption === "Rock" && ninjaOption === "Scissors") || (aiOption === "Scissors" && ninjaOption === "Paper") || (aiOption === "Paper" && ninjaOption === "Rock")){
               return "ai"; 
            }
            else if ((ninjaOption === "Rock" && aiOption === "Scissors") || (ninjaOption === "Scissors" && aiOption === "Paper") || (ninjaOption === "Paper" && aiOption === "Rock")){
               return "ninja";
            }
        }
