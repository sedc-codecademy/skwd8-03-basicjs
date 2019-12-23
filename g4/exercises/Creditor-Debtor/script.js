let creditorMoney = 1400;
let debtorMoney = 300;

console.log(`Creditor Money: ${creditorMoney}`);
console.log(`Debtor Money: ${debtorMoney}`);
console.log("================");

let shouldProgramContinue = false;

do {
    let transferAmount = parseInt(prompt("Welcome to our money transfer app. \n Enter the amount of money you want to transfered: "));

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
    
    console.log(`Creditor Money: ${creditorMoney}`);
    console.log(`Debtor Money: ${debtorMoney}`);
    console.log("================");  
    
    
    if(creditorMoney > 0) {
		shouldProgramContinue = confirm("do you want another transaction?");
	} else {
		console.warn("Sorry, you dont have enough money for a transaction!");
		shouldProgramContinue = false;
	}

} while(shouldProgramContinue);

