let t1;
let def1;

let t2;
let def2;

let t3;
let def3;

let t4;
let def4;

let t5;
let def5;


let answer;

let randomNum;

function rollNum() {
    randomNum = Math.floor(Math.random() * 5) + 1;
  console.log(randomNum);
}


document.getElementById("SUBMIT").onclick = function(){

    t1 = document.getElementById("t1").value;
    def1 = document.getElementById("def1").value;

    t2 = document.getElementById("t2").value;
    def2 = document.getElementById("def2").value;

        t3 = document.getElementById("t3").value;
    def3 = document.getElementById("def3").value;

    t4 = document.getElementById("t4").value;
    def4 = document.getElementById("def4").value;

        t5 = document.getElementById("t5").value;
    def5 = document.getElementById("def5").value;



}



document.getElementById("shuffle").onclick = function() {

    rollNum();

    if (randomNum === 1) {
        document.getElementById("terms").textContent = t1;
        console.log("t1");
    } else if (randomNum === 2) {
        document.getElementById("terms").textContent = t2;
        console.log("t2");
    } else if (randomNum === 3) {
        document.getElementById("terms").textContent = t3;
        console.log("t3");
    } else if (randomNum === 4) {
        document.getElementById("terms").textContent = t4;
        console.log("t4");
    }  else if (randomNum === 5) {
        document.getElementById("terms").textContent = t5;
        console.log("t5");
    }


console.log(randomNum);

    document.getElementById("submitcard").onclick = function(){

    answer = document.getElementById("answer").value;

    if (randomNum === 1) {
                if (answer === def1) {
            document.getElementById("correctAnswer").textContent = `Correct`
        } else {
            document.getElementById("correctAnswer").textContent = `The correct answer was: ${def1}`;
        }
    }    

        if (randomNum === 2) {
            document.getElementById("terms").textContent = `${t2}`
                if (answer === def2) {
            document.getElementById("correctAnswer").textContent = `Correct`
        } else {
            document.getElementById("correctAnswer").textContent = `The correct answer was: ${def2}`;
        }
    }
    
            if (randomNum === 3) {
            document.getElementById("terms").textContent = `${t3}`
                if (answer === def3) {
            document.getElementById("correctAnswer").textContent = `Correct`
        } else {
            document.getElementById("correctAnswer").textContent = `The correct answer was: ${def3}`;
        }
    }

            if (randomNum === 4) {
            document.getElementById("terms").textContent = `${t4}`
                if (answer === def4) {
            document.getElementById("correctAnswer").textContent = `Correct`
        } else {
            document.getElementById("correctAnswer").textContent = `The correct answer was: ${def4}`;
        }
    }

            if (randomNum === 5) {
            document.getElementById("terms").textContent = `${t5}`
                if (answer === def5) {
            document.getElementById("correctAnswer").textContent = `Correct`
        } else {
            document.getElementById("correctAnswer").textContent = `The correct answer was: ${def5}`;
        }
    }
}    

}












