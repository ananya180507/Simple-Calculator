document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("result");

    function appendValue(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = "";
    }

    function deleteLast() {
        display.value = display.value.slice(0, -1);
    }

    function calculateResult() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

    window.appendValue = appendValue;
    window.clearDisplay = clearDisplay;
    window.deleteLast = deleteLast;
    window.calculateResult = calculateResult;

    document.addEventListener("keydown", function (event) {
        const key = event.key;

        if (!isNaN(key) || key === ".") {
            appendValue(key);
        }

        if (key === "+" || key === "-" || key === "*" || key === "/") {
            appendValue(key);
        }

        if (key === "Enter") {
            event.preventDefault();
            calculateResult();
        }

        if (key === "Backspace") {
            deleteLast();
        }

        if (key === "Escape") {
            clearDisplay();
        }
    });
});
