console.log("Homework");

// Exercise 1
/*
Banking System

Create an Account class with the properties accountNumber, currentBalance, and owner. The Account should have methods to deposit and withdraw. The 
deposit method should add that amount to the currentBalance. The withdraw method should first check if there is enough to withdraw before withdrawing

Implement child classes CheckingAccount and SavingsAccount, each inheriting from the Account class. 

The CheckingAccount will also have an overdraftLimit property. Override the withdraw method to 
first check if there is enough (+ overdraftLimit) before withdrawing.

The SavingsAccount will also have an interestRate. Add a method addInterest that will increase the currentBalance by that interest rate

*/
// create account class with the properties accountNumber, currentBalance, and owner
class Account {
    constructor(accountNumber, currentBalance, owner){
        this.accountNumber = accountNumber;
        this.currentBalance = currentBalance;
        this.owner = owner;
    }
    // The Account should have methods to deposit and withdraw
    deposit(amount) {
        this.currentBalance += amount
        console.log(`You've added  \$${amount} to your balance. You now have \$${this.currentBalance} available.`);
    }
    // return true/false based on whether or not we can withdraw the specified amount of money
    withdraw(amount) {
        if ( this.currentBalance >= amount ){
            this.currentBalance -= amount;
            console.log(`You have successfully withdrawn \$${amount}. You're new balance is \$${this.currentBalance}`)
        } else {
            console.log(`Insufficient funds, you only have \$${this.currentBalance} available.`)
        }
    }
}
// Implement child classes CheckingAccount and SavingsAccount, each inheriting from the Account class.

//The CheckingAccount will also have an overdraftLimit property. Override the withdraw method to first check if there is enough (+ overdraftLimit) before withdrawing.
class CheckingAccount extends Account{
    constructor(accountNumber, currentBalance, owner, overdraftLimit){
        super(accountNumber, currentBalance, owner);
        this.overdraftLimit = overdraftLimit;
    }
    
    // Override the withdraw method to first check if there is enough (+ overdraftLimit) before withdrawing
    withdrawOverride(amount) {
        let availableFunds = this.currentBalance + this.overdraftLimit;
        
        if (availableFunds >= amount ) {
            console.log(this.withdraw(amount))
        } else {
            console.log("You're overdrawn. Please add more funds.")
        }
    }
}

class SavingsAccount extends Account{
    constructor(accountNumber, currentBalance, owner, interestRate){
        super(accountNumber, currentBalance,  owner);
        this.interestRate=interestRate
    }
    
    // Add a method addInterest that will increase the currentBalance by that interest rate
    addInterest() {
        this.currentBalance *= this.interestRate;
        console.log(`Congratulations! Your interest has hit and you now have \$${this.currentBalance} available in your Savings account.`);
    }
}

const checkingAccount = new CheckingAccount('123456', 1000, 'John Doe', 500);
const savingsAccount = new SavingsAccount('654321', 5000, 'Jane Smith', 2);

checkingAccount.deposit(500);
checkingAccount.withdraw(1400);
checkingAccount.withdraw(200);  

savingsAccount.deposit(1000);
savingsAccount.withdraw(7000);
savingsAccount.addInterest();




// Exercise 2 - Promises 
// Using the below getMovieInfo function, which is a Promised-base function, write an asynchronous function (.then().catch() or async/await)
// called printMovieInfo that will take in a movie title and then either displays the movie information or logs an error with a console.warn().


function getMovieInfo(movieName){
    return new Promise((resolve, reject) => {
        if (movieName.length > 5){
            let movie = {
                id: 123,
                title: movieName,
                director: 'Christopher Spielberg',
                runtime: 157,
                description: 'Good vs Evil'
            }
            resolve(movie)
        } else {
            reject(`${movieName} cannot be accessed because it is too short.`)
        }
    })
}

async function printMovieInfo(movieName) {
    try {
        const movie = await getMovieInfo(movieName);
        console.log(`${movie.title} directed by ${movie.director}. A story of ${movie.description} that runs for ${movie.runtime} minutes.`);
    } catch (error) {
        console.warn(error);
    }
}


// Example 1
printMovieInfo('Indiana Jones and the Dark Knight')
// Output: Indiana Jones and the Dark Knight directed by Christopher Spielberg. A story of Good vs Evil that runs for 157 minutes.

// Example 2
printMovieInfo('ET')
// Output: *Warning* ET cannot be accessed because it it too short



// *BONUS CHALLENGE*
// Exercise 3
// Add a Button somewhere on your index.html page with an id "backgroundChanger"
// Add a click event listener to your button that will change the background color of the body
// The background should toggle between at least 2 colors


