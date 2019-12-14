let balance = 1500.0;

function getBalace() {
    alert(`Your current balance is ${balance}.`);
    atm();
}

function makeDeposit(deposit) {
    if(isNaN(deposit) || deposit === "") {
        alert("Error: please enter a valid amount of money!")
        atm();
    } else {
        balance += deposit;
        getBalace();
    }
}

function makeWithdrawal(withdraw) {
    if(isNaN(withdraw) || withdraw === "") {
        alert("Error: please enter a valid amount of money!")
        atm();
    } else {
        balance -= withdraw;
        getBalace();
    }
 }

 function exit() {
     let confirm = window.confirm("yes / no");

     if(confirm) {
        window.close();
     } else {
        atm();
     }
 } 

 function error() {
     alert("Wrong input!");
 }

function atm() {
    let choice = parseInt(prompt("Select a choice: 1). Balance 2). Deposit 3). Withdrawal 4). Exit"))

    if(choice === 1) {
        getBalace();
    } else if (choice === 2) {
        let deposit = parseFloat(prompt("How much money would you like to deposit?"))
        makeDeposit(deposit);
    } else if (choice === 3) {
        let withdraw = parseFloat(prompt("How much money would you like to withdraw?"))
        makeWithdrawal(withdraw)
    } else if (choice === 4) {
        exit();
    } else {
        error();
    }
}  

atm();