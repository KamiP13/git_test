let justEvaluated = false;
const inputValue = document.getElementById("user-input");

// Handle number button clicks
document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "NaN" || inputValue.innerText === "0" || justEvaluated) {
            inputValue.innerText = "";
            justEvaluated = false;
        }
        inputValue.innerText += e.target.innerHTML.trim();
    });
});

// Handle operator button clicks
document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        const operation = e.target.innerHTML.trim();
        const lastChar = inputValue.innerText.slice(-1);

        if (operation === "=") {
            try {
                const result = eval(inputValue.innerText);
                inputValue.innerText = isNaN(result) ? "NaN" : result;
            } catch {
                inputValue.innerText = "NaN";
            }
            justEvaluated = true;
        } else if (operation === "AC") {
            inputValue.innerText = "0";
            justEvaluated = false;
        } else if (operation === "DEL") {
            inputValue.innerText = inputValue.innerText.slice(0, -1) || "0";
            justEvaluated = false;
        } else {
            if (!isNaN(lastChar)) {
                inputValue.innerText += operation;
                justEvaluated = false;
            }
        }
    });
});
