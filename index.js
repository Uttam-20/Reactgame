import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
var count = 20;
var y = (Math.floor(Math.random() * (10000 - 1000)) + 1000).toString();
function Show() {
    var x = document.getElementById("code").value;
    var strike = 0;
    var goal = 0;
    if (x == "") alert("Please Enter a number");
    else {
        document.getElementById("result").style.display = "block";

        if (x == y) {
            ReactDOM.render("Correct!!! Your Final score is " + count + "/20", document.getElementById("result"));
            count = 20;
            document.getElementById("btn").style.visibility = "hidden";
        }
        else {
            count = count - 1;
            for (let i = 0; i < x.length; i++) {
                for (let j = 0; j < x.length; j++) {
                    if (x[i] == y[i]) {
                        goal = goal + 1;
                        break;
                    }
                    else if (x[i] == y[j]) {
                        strike = strike + 1;
                    }
                }

            }
            if (strike == 0 && goal == 0) {

                ReactDOM.render("Foul", document.getElementById("result"));
            }
            else ReactDOM.render("Strikes=" + strike + "and Goals= " + goal, document.getElementById("result"));
        }
    }
}
const myrules = (<p>
    <ul>
        <li>This Game is about to crack the code using the hints as follows</li>
        <li>If your answer is exactly matches the code,it displays your final score(for each incorrect answer one mark is deducted and is evaluated outof 10)</li>
        <li>If any digit matches with the digits of original code but their places are not matched it displays <b>Strikes</b></li>
        <li>If any digit matches with the digits of original code and their places are also matched it displays <b>Goals</b></li>
        <li>If no digit matches,it displays <b>Foul</b></li>
        <li>Code is a <b>four digit number</b></li>
        <li>Digits may not be <b>distinct</b></li>
        <li><b>Refresh the page to play with new number</b></li>
    </ul>
</p>);
function Display() {
    return (<button id="buton" onClick={Show}>Submit</button>);
}
function Open() {
    var z = document.getElementById("rules");
    if (z.style.display == "none") {
        z.style.display = "block";
        ReactDOM.render(myrules, document.getElementById("rules"));
    }
    else z.style.display = "none";
}
function Inst() {
    return <button id="ruling"onClick={Open}>Game Rules</button>;
}

const myelement = <h1><center>Crack the code</center></h1>;
const box = (<label><b>Code:</b><input type="text" id="code" /></label>);
ReactDOM.render(box, document.getElementById("val"));
ReactDOM.render(<Display />, document.getElementById("btn"));
ReactDOM.render(<Inst />, document.getElementById("instruct"));
ReactDOM.render(myelement, document.getElementById("root"));
ReactDOM.render(box, document.getElementById("val"));