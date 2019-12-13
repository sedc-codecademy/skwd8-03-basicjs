let creditorMoney = 1400;
let debtorMoney = 300;

console.log(creditorMoney);
console.log(debtorMoney);
console.log("================");

let transferAmount = parseInt(prompt("Welcome to our money transfer app. \n Enter the amount of money you want to be transfered: "));

let isPaymentSuccessful = false;

if (transferAmount > 0 && transferAmount <= creditorMoney) {
    isPaymentSuccessful = true;
} else {
    isPaymentSuccessful = false;
    console.warn("Invalid input!");
}

if(isPaymentSuccessful === true) {
    creditorMoney -= transferAmount;
    debtorMoney += transferAmount;
    console.warn("payment complete");
} else {
    console.warn("payment has failed!");
}

console.log(creditorMoney);
console.log(debtorMoney);
console.log("================");

