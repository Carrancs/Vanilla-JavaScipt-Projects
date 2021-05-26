
let questions = ["Hello I am R2, what is your name?",
                    "Where are you from?",
                    "How old are you?",
                    "It was nice talking to you"];

let number = 0;

let midOutput = document.querySelector("#midResult");

let output = document.querySelector("#result");

output.innerHTML = questions[0];

let inputBox = document.querySelector("#ans");

let chatBox = document.querySelector("#chatbox");

function showResponse (){
    let input = inputBox.value;
    // let name = input;
    let presentYear = new Date();
    if (inputBox.value === "") {
        alert("Please type your message");
    }
    else {
        if (number === 0) {
            // midOutput.innerHTML = `${input}`;
            setTimeout(() => {
                output.innerHTML = `<p>Hello ${input} nice metting you</p>`;
            }, 3000);
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "R2 is typing");
            number++;
            setTimeout(changeQuestion, 6000);
        } else if (number === 1) {
            setTimeout(() => {
                output.innerHTML = `<p>${input} is an awesome place!</p>`;
            }, 3000);
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "R2 is typing");
            ++number;
            setTimeout(changeQuestion, 6000);
        } else if (number === 2) {
            setTimeout(() => {
                output.innerHTML = `<p>That means you were born in ${presentYear.getFullYear() - input}</p>`;
            }, 3000);
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "R2 is typing");
            ++number;
            setTimeout(changeQuestion, 6000);
        }
    }
}

function changeQuestion(){
    inputBox.setAttribute("placeholder", "Enter your response");
    output.innerHTML = questions[number];
    if (number === 3) {
        output.innerHTML = `It was nice talking to :)`;
        inputBox.value = "";
        document.querySelector(".input").style.display = "none";
    }
} 

function submitMessage() {
    showResponse();
}
