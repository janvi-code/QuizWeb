var questionBank = [
    {

        "question": "A complete graph can have",
        "options": ["n2 spanning trees", "nn-2spanning trees", "nn-2spanning trees", "nn-2 spanning trees"],
        "correctAnswer": "nn-2 spanning trees",
        "score": "0"

    },
    {

        "question": "What is full form of CSS",
        "options": ["Javascript", "Java", "HTML", "None of these"],
        "correctAnswer": "None of these",
        "score": "0"

    },
    {

        "question": "How to include javascript in HTML document",
        "options": ["style", "scriptt", "css", "script"],
        "correctAnswer": "script",
        "score": "0"

    },
    {

        "question": "How to declare variable in javascript",
        "options": ["let", "const", "var", "all of above"],
        "correctAnswer": "var",
        "score": "0"

    },
    {

        "question": "what=> means in javascript",
        "options": ["function", "myfunction", "Arrow function", "standard function"],
        "correctAnswer": "Arrow function",
        "score": "0"

    },
    {

        "question": "Which of these is not a javascript framework",
        "options": ["Django", "jquery", "frame", "HelloFrame"],
        "correctAnswer": "Django",
        "score": "0"

    },
    {

        "question": "How do you define objects in javascript",
        "options": ["[]", "{}", "()", "[)"],
        "correctAnswer": "{}",
        "score": "0"

    },
    {

        "question": "Which of these is not a valid javascript version",
        "options": ["EX12", "EX15", "EX19", "EX20"],
        "correctAnswer": "EX19",
        "score": "0"

    },
    {

        "question": "What is the output of '2'+2 ",
        "options": ["22", "4", "2", "202"],
        "correctAnswer": "22",
        "score": "0"

    },
    {

        "question": "What is the output of '2'-1 ",
        "options": ["2-1", "1", "3", "2"],
        "correctAnswer": "3",
        "score": "0"

    },
    {

        "question": "How to check if a value is NaN in javascript ",
        "options": ["checkNaA", "TellNaN", "isNaN", "isNaN(val)"],
        "correctAnswer": "isNaN(val)",
        "score": "0"

    }
]


var qNum = 0;
var clickNumber = 1;


function restartPage() {
    var updateheading = document.getElementById("heading");
    updateheading.innerHTML = "Quiz";

    qNum = 0;
    clickNumber = 1;

    var rbtn = document.getElementById("reBtn");
    document.body.removeChild(rbtn);

    var divQues = document.getElementById("innerDiv");
    var lst = document.getElementById("newList");
    divQues.removeChild(lst);

    var Head = document.getElementById("showAnsHead");
    Head.innerHTML = "";

    var mainDiv = document.getElementById("innerDiv");


    var newHead = document.createElement("h3");
    newHead.setAttribute("id", "questionNumber")
    newHead.innerHTML = "A complete graph can have";
    mainDiv.appendChild(newHead);


    var radio1 = document.createElement("input");
    radio1.setAttribute("type", "radio");
    radio1.setAttribute("name", "radioName");
    radio1.setAttribute("id", "opt1");

    var lab1 = document.createElement("label");
    lab1.innerHTML = "n2 spanning trees";
    lab1.setAttribute("id", "l1");
    mainDiv.appendChild(radio1);
    mainDiv.appendChild(lab1);

    var spaceBr = document.createElement("br");
    mainDiv.appendChild(spaceBr);


    var radio2 = document.createElement("input");
    radio2.setAttribute("type", "radio");
    radio2.setAttribute("name", "radioName");
    radio2.setAttribute("id", "opt2");


    var lab2 = document.createElement("label");
    lab2.innerHTML = "nn2-trees";
    lab2.setAttribute("id", "l2");
    mainDiv.appendChild(radio2);
    mainDiv.appendChild(lab2);

    var sp = document.createElement("br");
    mainDiv.appendChild(sp);

    var radio3 = document.createElement("input");
    radio3.setAttribute("type", "radio");
    radio3.setAttribute("name", "radioName");
    radio3.setAttribute("id", "opt3");

    var lab3 = document.createElement("label");
    lab3.innerHTML = "nn-2spanning trees";
    lab3.setAttribute("id", "l3");
    mainDiv.appendChild(radio3);
    mainDiv.appendChild(lab3);

    var spa = document.createElement("br");
    mainDiv.appendChild(spa);

    var radio4 = document.createElement("input");
    radio4.setAttribute("name", "radioName");
    radio4.setAttribute("id", "opt4");
    radio4.setAttribute("type", "radio");


    var lab4 = document.createElement("label");
    lab4.innerHTML = "nn-2 spanning trees";
    lab4.setAttribute("id", "l4");
    mainDiv.appendChild(radio4);
    mainDiv.appendChild(lab4);


    var para = document.createElement("p");
    para.setAttribute("id", "ans");
    mainDiv.appendChild(para);


    var newBtn = document.createElement("input");
    newBtn.setAttribute("type", "button");
    newBtn.setAttribute("value", "Submit");
    newBtn.setAttribute("id", "submit");
    newBtn.setAttribute("onclick", "checkAnswer()");
    mainDiv.appendChild(newBtn);


}


function checkAnswer() {

    var fillAns = document.getElementById("ans");
    var submitButton = document.getElementById('submit');

    var option1 = document.getElementById("opt1");
    var option2 = document.getElementById("opt2");
    var option3 = document.getElementById("opt3");
    var option4 = document.getElementById("opt4");

    var label1 = document.getElementById("l1");
    var label2 = document.getElementById("l2");
    var label3 = document.getElementById("l3");
    var label4 = document.getElementById("l4");

    if (clickNumber == 1) {

        submitButton.value = "Next";
        submitButton.style.backgroundColor = "green";
        submitButton.style.textAlign = "center";
        submitButton.style.fontWeight = "bold";
        submitButton.style.color = "white";


        if (option1.checked && label1.innerHTML == questionBank[qNum].correctAnswer) {

            fillAns.innerHTML = "correct";
            fillAns.style.backgroundColor = "lightgreen";
            fillAns.style.color = "green";
            fillAns.style.textAlign = "center";
            fillAns.style.fontWeight = "bold";

            questionBank[qNum].score = "1";


        } else if (option2.checked && label2.innerHTML == questionBank[qNum].correctAnswer) {

            fillAns.innerHTML = "correct";
            fillAns.style.backgroundColor = "lightgreen";
            fillAns.style.color = "green";
            fillAns.style.textAlign = "center";
            fillAns.style.fontWeight = "bold";
            questionBank[qNum].score = "1";

        } else if (option3.checked && label3.innerHTML == questionBank[qNum].correctAnswer) {

            fillAns.innerHTML = "correct";
            fillAns.style.backgroundColor = "lightgreen";
            fillAns.style.color = "green";
            fillAns.style.textAlign = "center";
            fillAns.style.fontWeight = "bold";
            questionBank[qNum].score = "1";

        } else if (option4.checked && label4.innerHTML == questionBank[qNum].correctAnswer) {

            fillAns.innerHTML = "correct";
            fillAns.style.backgroundColor = "lightgreen";
            fillAns.style.color = "green";
            fillAns.style.textAlign = "center";
            fillAns.style.fontWeight = "bold";


        }
        else {
            fillAns.innerHTML = "Incorrect";
            fillAns.style.backgroundColor = "hsla(0, 100%, 50%, 0.3)";
            fillAns.style.color = "red";
            fillAns.style.textAlign = "center";
            fillAns.style.fontWeight = "bold";
        }

        clickNumber += 1;

    }

    else {
        if (qNum == 10) {

            var divQues = document.getElementById("ques");

            document.body.removeChild(divQues);

            var newDiv1 = document.createElement("div");
            var newDiv2 = document.createElement("div");

            newDiv1.setAttribute("class", "card");
            newDiv1.setAttribute("id", "ques");
            newDiv2.setAttribute("class", "container");
            newDiv2.setAttribute("id", "innerDiv");

            newDiv1.appendChild(newDiv2);
            document.body.appendChild(newDiv1);

            divQues = document.getElementById("innerDiv");

            divQues.style.height = "350px";
            document.getElementById("showAnsHead").innerHTML = "Answer Key";
            var list = document.createElement("ul");
            list.setAttribute("id", "newList");
            divQues.appendChild(list);

            var countScore = 0;

            for (var i = 0; i < 11; i++) {

                if (questionBank[i].score == "1") countScore++;
                questionBank[i].score = "0";

                var quesAns = questionBank[i].question + " - " + "<span class='highlight'>"+ questionBank[i].correctAnswer + "</span>";
                var appendAns = document.createElement("li");
                appendAns.innerHTML = quesAns;
                list.append(appendAns);

            }

            var updateheading = document.getElementById("heading");
            updateheading.innerHTML = "Score: " + countScore;

          var newLine = document.createElement("br");
          document.body.appendChild(newLine);


            var restartBtn = document.createElement("button");
            restartBtn.innerHTML = "Restart";
            restartBtn.style.backgroundColor = "blue";
            restartBtn.style.width = "80px";
            restartBtn.style.height = "35px";
            restartBtn.style.color = "white";
            restartBtn.fontWeight = "bold";
            restartBtn.setAttribute("id", "reBtn");
            restartBtn.setAttribute("onclick", "restartPage()");
            document.body.appendChild(restartBtn);

        }

        else {

            fillAns.innerHTML = "";
            fillAns.style.backgroundColor = "";
            qNum++;

            var editQues = document.getElementById("questionNumber");
            editQues.innerHTML = questionBank[qNum].question;

            label1.innerHTML = questionBank[qNum].options[0];
            label2.innerHTML = questionBank[qNum].options[1];
            label3.innerHTML = questionBank[qNum].options[2];
            label4.innerHTML = questionBank[qNum].options[3];



            submitButton.value = "Submit";
            submitButton.style.backgroundColor = "yellow";
            submitButton.style.textAlign = "center";
            submitButton.style.fontWeight = "bold";
            submitButton.style.color = "Black";



            if (option1.checked) {
                option1.checked = false;
            }
            if (option2.checked) {
                option2.checked = false;
            }
            if (option3.checked) {
                option3.checked = false;
            }
            if (option4.checked) {
                option4.checked = false;
            }

            clickNumber = 1;
        }

    }




}
