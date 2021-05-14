
let [computer_score, user_score] = [0, 0];

let result_ref = document.querySelector("#result");

let options_object = {
    "rock": {
        "rock": "draw",
        "scissor": "win",
        "paper": "loose"
    },
    "scissor": {
        "rock": "loose",
        "scissor": "draw",
        "paper": "win"
    },
    "paper": {
        "rock": "win",
        "scissor": "loose",
        "paper": "draw"
    }
}

function checker(choice){
    let options = ["rock", "paper", "scissor"];

    let num = Math.floor(Math.random() * 3);

    // Computer selectionn
    document.querySelector("#comp_choice").innerHTML = ` Computer Choose <span>${options[num].toUpperCase()}</span>`;

    // User input
    document.querySelector("#user_choice").innerHTML = ` You Choose <span>${choice.toUpperCase()}</span>`;

    let computer_choice = options[num];

    switch (options_object[choice][computer_choice]){
        case "win":
            result_ref.style.cssText = "background-color: #cfddce; color: #689f38";
            result_ref.innerHTML = "YOU WIN <p>🤩</p>";
            user_score++;
            break;
        case "loose":
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "YOU LOOSE <p>😞</p>";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "DRAW <p>🙃</p>";
            break;
    }

    document.querySelector("#computer_score").innerHTML = computer_score;

    document.querySelector("#user_score").innerHTML = user_score;
}
