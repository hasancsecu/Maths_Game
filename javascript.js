var playing = false;
var score;
var timeRemaining;
var action;
var correctAnswer;

document.getElementById("startreset").onclick = function() {
    
    if(playing == true){
        location.reload();
    }
    else{
        playing = true;
        score = 0;
        
        document.getElementById("scoreValue").innerHTML = score;
        
        show("time");
        
        document.getElementById("startreset").innerHTML = "Reset Game";
        hide("gameOver");
        timeRemaining = 60;
        document.getElementById("timeValue").innerHTML = timeRemaining;
        
        startCountdown();
        
        generateQA();
        
    }
}
    
    function hide(Id){
        document.getElementById(Id).style.display = "none";
    }
    function show(Id){
        document.getElementById(Id).style.display = "block";
    }
    
    function startCountdown(){
        action = setInterval(function(){
            timeRemaining --; 
            document.getElementById("timeValue").innerHTML = timeRemaining;
            
            if(timeRemaining == 0){
                clearInterval(action);
                hide("time");
                show("gameOver");
                document.getElementById("gameOver").innerHTML = "<p>game Over!</p><p>Your score is: " +score+ "</p>";
                playing = false;
                document.getElementById("startreset").innerHTML = "Start Game";
                
            }
        },1000);
    }

    for(i = 1; i < 5; i++){
        document.getElementById("box"+i).onclick = function(){
            if(playing == true){
                if(correctAnswer == this.innerHTML){
                    score++;
                    
                    document.getElementById("scoreValue").innerHTML = score;
                    
                    show("correct");
                    
                    setTimeout(function(){hide("correct")},1000);
                    
                    generateQA();
                    
                }else{
                    show("wrong");
                    setTimeout(function(){hide("wrong")},1000);
                }
            }
        }
    }
    function generateQA(){
        var x = 1 + Math.round(9 * Math.random());
        var y = 1 + Math.round(9 * Math.random());
        
        correctAnswer = x * y;
        
        document.getElementById("question").innerHTML = x + "x" + y;
        
        var correctPosition = 1 + Math.round(Math.random() * 3);
        
        document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
         
        var answer = [correctAnswer];
                    
        for(i = 1 ; i < 5 ; i++){
            
            if(i != correctPosition){
                var wrongAnswer;
                do{
                    wrongAnswer =   (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
                }while(answer.indexOf(wrongAnswer) > -1)
    
                answer.push(wrongAnswer);
                 
                document.getElementById("box"+i).innerHTML = wrongAnswer;
            }
            
        }
    }
