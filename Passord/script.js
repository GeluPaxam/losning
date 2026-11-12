const color = {red: "#ff0000ff", yellow: "#eeff00ff", green: "#008917ff", legend: "#870087ff"};

let PoloskaDLaCvetov = false;
const PasswordInput = document.getElementById("passwordID");
const Poloska = document.getElementById("Poloska");

PasswordInput.addEventListener("input", PasswordCheck);

function ScoreMath(){
    let score = 0;
    let password = PasswordInput.value;
    if (password.length >= 8) {
        score += 1;
    }
    if (password.length >= 12){
        score += 1;
    }
    if (password != password.toLowerCase()) {
        score += 1;
    }
    if (password != password.toUpperCase()) {
        score += 1;
    }
    if (
        password.includes("!") ||
        password.includes("@") ||
        password.includes("#") ||
        password.includes("$") ||
        password.includes("%") ||
        password.includes("^") ||
        password.includes("&") ||
        password.includes("*") ||
        password.includes("(") ||
        password.includes(")")
    ) {
        score += 1;
    }
    for (let i = 0; i <= 9; i++) {
        if (password.includes(String(i)) == true) {
            score += 1;
            break;
        }
    }
    return score;
}

function PasswordCheck(){

    let score = ScoreMath();
    PoloskaDLaCvetov = true;
    if(score <= 2){
        Poloska.style.backgroundColor = color.red;
    }
    else if(score <= 4){
        Poloska.style.backgroundColor = color.yellow;
    }
    else if(score == 5){
        Poloska.style.backgroundColor = color.green;
    }
    else{
        Poloska.style.backgroundColor = color.legend;
    }
}