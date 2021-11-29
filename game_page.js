player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");

player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn : "+player1_name;
document.getElementById("player_answer").innerHTML="answer turn : "+player2_name;

function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log("word in lower case= "+word);

    char1=word.charAt(1);
    console.log(char1);

    lengthDivide2=Math.floor(word.length/2);
    char2=word.charAt(lengthDivide2);
    console.log(char2); 
    
    lengthMinus1=word.length-1;
    char3=word.charAt(lengthMinus1);
    console.log(char3);

    remove_char1=word.replace(char1,"_");
    remove_char2=remove_char1.replace(char2,"_");
    remove_char3=remove_char2.replace(char3,"_");
    console.log(remove_char3);

    q_word="<h4 id='word_display'>Q. "+remove_char3+"</h4>";
    i_box="<br>answer: <input type='text' id='input_check_box'>";
    c_button="<br> <br> <button class='btn btn-info' onclick='check()'>check</button>";
    row=q_word+i_box+c_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
    
}

ques="player1"
answ="player2"
function check(){
    getanswer=document.getElementById("input_check_box").value;
    answer=getanswer.toLowerCase();
    console.log("answer in lowercase"+answer);
    if (answer==word){
    if (answ=="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else {
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
}
if (ques=="player1"){
    ques="player2";
    document.getElementById("player_question").innerHTML="questionturn= "+player2_name;
}
else{
    ques="player1";
    document.getElementById("player_question").innerHTML="questionturn= "+player1_name;
}
if (answ=="player1"){
    answ="player2";
    document.getElementById("player_answer").innerHTML="answerturn= "+player2_name;
}
else{
    answ="player1";
    document.getElementById("player_answer").innerHTML="answerturn= "+player1_name;
}
document.getElementById("output").innerHTML="";
}