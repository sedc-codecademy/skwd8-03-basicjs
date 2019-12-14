let balance = 1500.0;

function getBalace() {
    alert(`Your current balance is ${balance}.`);
}

function makeDeposit(deposit) {
    if(isNaN(deposit) || deposit === "") {
        alert("Error: please enter a valid amount of money!")
    } else {
        balance += deposit;
        getBalace();
    }
}





function atm() {
    let choice = parseInt(prompt("Select a choice: 1). Balance 2). Deposit 3). Withdrawal 4). Exit"))

    if(choice === 1) {
        getBalace();
    } else if (choice === 2) {
        let deposit = parseFloat(prompt("How much money would you like to deposit?"))
        makeDeposit(deposit);
    } else if (choice === 3) {
        
        makeWithdrawal()
    } else if (choice === 4) {
        exit();
    } else {
        error();
    }
}  