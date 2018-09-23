/*js for quiz.html*/
/*----MARIA MATHEW----
------ID: 991491575-----*/

//function to check the answers and to calculate the total score

function getAnswers(){
	
//variable to check if the question is answered
	var ans = false;
	
//making sure all the questions are answered.
//checking if question 1 is answered.
	for(var i = 0; i<document.myForm.q1.length; i++){
		if (document.myForm.q1[i].checked == true){
		ans = true;}
			}
		if (ans == false){
			alert("Answer all the questions!!");
			return;
			}
			
	
//checking if question 2 is answered.
	ans = false;
	for(var i = 0; i<document.myForm.q2.length; i++){
		if (document.myForm.q2[i].checked == true){
		ans = true;}
			}
		if (ans == false){
			alert("Answer all the questions!!");
			return;
			}
			
//checking if question 3 is answered.
			ans = false;
	for(var i = 0; i<document.myForm.q3.length; i++){
		if (document.myForm.q3[i].checked == true){
		ans = true;}
			}
		if (ans == false){
			alert("Answer all the questions!!");
			return;
			}
			
//checking if question 4 is answered.
			ans = false;
	for(var i = 0; i<document.myForm.q4.length; i++){
		if (document.myForm.q4[i].checked == true){
		ans = true;}
			}
		if (ans == false){
			alert("Answer all the questions!!");
			return;
			}
			
//checking if question 5 is answered.
			ans = false;
	for(var i = 0; i<document.myForm.q5.length; i++){
		if (document.myForm.q5[i].checked == true){
		ans = true;}
			}
		if (ans == false){
			alert("Answer all the questions!!");
			return;
			}
			
//checking if question 6 is answered.
		ans = false;
	for(var i = 0; i<document.myForm.q6.length; i++){
		if (document.myForm.q6[i].checked == true){
		ans = true;}
			}
		if (ans == false){
			alert("Answer all the questions!!");
			return;
			}
			
//checking if question 7 is answered.
			ans = false;
	for(var i = 0; i<document.myForm.q7.length; i++){
		if (document.myForm.q7[i].checked == true){
		ans = true;}
			}
		if (ans == false){
			alert("Answer all the questions!!");
			return;
			}
			
//checking if question 8 is answered.
			ans = false;
	for(var i = 0; i<document.myForm.q8.length; i++){
		if (document.myForm.q8[i].checked == true){
		ans = true;}
			}
		if (ans == false){
			alert("Answer all the questions!!");
			return;
			}
			
//checking if question 9 is answered.
			ans = false;
	for(var i = 0; i<document.myForm.q9.length; i++){
		if (document.myForm.q9[i].checked == true){
		ans = true;}
			}
		if (ans == false){
			alert("Answer all the questions!!");
			return;
			}	
			
//checking if question 10 is answered.
			ans = false;
	for(var i = 0; i<document.myForm.q10.length; i++){
		if (document.myForm.q10[i].checked == true){
		ans = true;}
			}
		if (ans == false){
			alert("Answer all the questions!!");
			return;
		}	
		
	//****CALCULATING THE SCORE****
		var correctAnswers = 0;       //count for correct answers
		var text = "";               //variable to display the results of each question
		
//question 1 
		if(document.myForm.q1[0].checked){
			text = "You are right!! &#10004; ";
			document.getElementById("answer1").innerHTML = text;
			document.getElementById("correct1").innerHTML = "";
			correctAnswers++;
		}
		else if (document.myForm.q1[0].checked == false){
			text = "You are Wrong!! &#10008;</br> The correct answer is CEREBRUM!";
			document.getElementById("answer1").innerHTML = "";
			document.getElementById("correct1").innerHTML = text;
		}
		
//question 2 
		if(document.myForm.q2[3].checked){
			text = "You are right!! &#10004; ";
			document.getElementById("answer2").innerHTML = text;
			document.getElementById("correct2").innerHTML = "";
			correctAnswers++;
		}
		else if (document.myForm.q2[3].checked == false){
			text = "You are Wrong!! &#10008;</br> The correct answer is SKIN!";
			document.getElementById("answer2").innerHTML = "";
			document.getElementById("correct2").innerHTML = text;
		}
		
//question 3
		if(document.myForm.q3[1].checked){
			text = "You are right!! &#10004; ";
			document.getElementById("answer3").innerHTML = text;
			document.getElementById("correct3").innerHTML = "";
			correctAnswers++;
		}
		else if (document.myForm.q3[1].checked == false){
			text = "You are Wrong!! &#10008;</br> The correct answer is MELANIN!";
			document.getElementById("answer3").innerHTML = "";
			document.getElementById("correct3").innerHTML = text;
		}
		
//question 4
		if(document.myForm.q4[0].checked){
			text = "You are right!! &#10004; ";
			document.getElementById("answer4").innerHTML = text;
			document.getElementById("correct4").innerHTML = "";
			correctAnswers++;
		}
		else if (document.myForm.q4[0].checked == false){
			text = "You are Wrong!! &#10008;</br> The correct answer is MIDDLE FINGER!";
			document.getElementById("answer4").innerHTML = "";
			document.getElementById("correct4").innerHTML = text;
		}
		
//question 5
		if(document.myForm.q5[2].checked){
			text = "You are right!! &#10004; ";
			document.getElementById("answer5").innerHTML = text;
			document.getElementById("correct5").innerHTML = "";
			correctAnswers++;
		}
		else if (document.myForm.q5[2].checked == false){
			text = "You are Wrong!! &#10008;</br> The correct answer is GALL BLADDER!";
			document.getElementById("answer5").innerHTML = "";
			document.getElementById("correct5").innerHTML = text;
		}
		
//question 6
		if(document.myForm.q6[0].checked){
			text = "You are right!! &#10004; ";
			document.getElementById("answer6").innerHTML = text;
			document.getElementById("correct6").innerHTML = "";
			correctAnswers++;
		}
		else if (document.myForm.q6[0].checked == false){
			text = "You are Wrong!! &#10008;</br> The correct answer is FEMUR!";
			document.getElementById("answer6").innerHTML = "";
			document.getElementById("correct6").innerHTML = text;
		}
		
//question 7
		if(document.myForm.q7[3].checked){
			text = "You are right!! &#10004; ";
			document.getElementById("answer7").innerHTML = text;
			document.getElementById("correct7").innerHTML = "";
			correctAnswers++;
		}
		else if (document.myForm.q7[3].checked == false){
			text = "You are Wrong!! &#10008;</br> The correct answer is LIVER!";
			document.getElementById("answer7").innerHTML = "";
			document.getElementById("correct7").innerHTML = text;
		}
		
//question 8
		if(document.myForm.q8[0].checked){
			text = "You are right!! &#10004; ";
			document.getElementById("answer8").innerHTML = text;
			document.getElementById("correct8").innerHTML = "";
			correctAnswers++;
		}
		else if (document.myForm.q8[0].checked == false){
			var text = "You are Wrong!! &#10008;</br> The correct answer is DIAPHRAGM!";
			document.getElementById("answer8").innerHTML = "";
			document.getElementById("correct8").innerHTML = text;
		}
		
//question 9
		if(document.myForm.q9[1].checked){
			text = "You are right!! &#10004; ";
			document.getElementById("answer9").innerHTML = text;
			document.getElementById("correct9").innerHTML = "";
			correctAnswers++;
		}
		else if (document.myForm.q9[1].checked == false){
			text = "You are Wrong!! &#10008;</br> The correct answer is 4!";
			document.getElementById("answer9").innerHTML = "";
			document.getElementById("correct9").innerHTML = text;
		}
		
//question 10
		if(document.myForm.q10[3].checked){
			text = "You are right!! &#10004; ";
			document.getElementById("answer10").innerHTML = text;
			document.getElementById("correct10").innerHTML = "";
			correctAnswers++;
		}
		else if (document.myForm.q10[3].checked == false){
			text = "You are Wrong!! &#10008;</br> The correct answer is THYROXIN!";
			document.getElementById("answer10").innerHTML = "";
			document.getElementById("correct10").innerHTML = text;
		}
		
//displaying the total score.
		alert("YOUR SCORE IS "+correctAnswers+" OUT OF 10!!");
		
		}
	
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
