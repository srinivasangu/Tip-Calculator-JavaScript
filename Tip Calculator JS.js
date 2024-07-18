let bill = document.getElementById("billAmount");
let percentTip = document.getElementById("percentageTip");
let tipAmountInput = document.getElementById("tipAmount");
let totalInput = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");

function onCalculate() {
    let billAmountInputValue = bill.value;
    let percentageTipInputValue = percentTip.value;


    if (billAmountInputValue === "") { // Here, if the bill input value is empty, error message will be displayed
        errorMessageElement.textContent = "Invalid";
    } else if (percentageTipInputValue === "") { // Here, if the percentage tip input value is empty, error message will be displayed
        errorMessageElement.textContent = "Invalid";
    } else {
        errorMessageElement.textContent = "";
        let billAmount = parseFloat(billAmountInputValue); // Getting bill amount and converting to integer
        let percentageTip = parseFloat(percentageTipInputValue); // Getting tip percentage and converting to integer

        let calculatedTip = (percentageTip / 100) * billAmount; // Calculating tip
        let calculatedTotal = billAmount + calculatedTip; // Calculating total

        tipAmountInput.value = calculatedTip; // Assigning CalculatedTip to the input
        totalInput.value = calculatedTotal; // Assigning total bill amount to the input
    }
}