let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        let value = button.textContent;

        if (value === "C") {
            display.value = "";
        }

        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }

        else if (value === "=") {
            display.value = calculate(display.value);
        }
       
        else {
            display.value += value;
        }

    });
});


function calculate(exp) {
    let operators = ["+", "-", "*", "/"];

    for (let i = 0; i < operators.length; i++) {
        let op = operators[i];

        if (exp.includes(op)) {
            let parts = exp.split(op);

            let num1 = parseFloat(parts[0]);
            let num2 = parseFloat(parts[1]);

            
            if (op === "+") return num1 + num2;
            if (op === "-") return num1 - num2;
            if (op === "*") return num1 * num2;
            if (op === "/") {
                if (num2 === 0) return "Error";
                return num1 / num2;
            }
        }
    }

    return exp;
}
