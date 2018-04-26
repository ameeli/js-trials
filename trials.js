// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map
phoneNumbers.set('home', "510-867-5309");
phoneNumbers.set('mobile', "415-555-1212");
phoneNumbers.set('business', "415-123-4567");


// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 

function updatesInfo(accountHolder, accountNumber, businessName) {
	console.log(`Account Holder Name: ${accountHolder}
				Account Holder Number: ${accountNumber}
				Business Name: ${businessName}`);
}

// Add function to print all addresses, including a header

function showAddresses(array) {
	console.log('Addresses:');

	for (let i of array) {
		console.log(i);
	}
}


// Add function to print phone types and numbers
function showPhoneNums(map) {
	console.log("Phone Numbers:");

	for (let number of map) {
		console.log(number[0] + ': ' + number [1]);
	}
}


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions

const transactions = new Map();


// Add function to add transactions

function addTransaction(date, amount) {
	transactions.set(`${date}:`, `${amount}`);
}


// Use the function to add transactions

addTransaction('May-2', -500);
addTransaction('May-13', 1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', 2200);


// Add function to show balance status

function showBalance(amount){
	if (amount < 0 ){
		console.log("YOU ARE OVERDRAWN");
	} else if (amount > 0 && amount < 20){
		console.log("Warning: You are close to zero balance");
	}else {
		console.log( "Thank you for your business.");
	}
}
// Add function to show transactions

function showTransactions(map, amount) {
	console.log(amount);

	for (let trans of map) {
		console.log('Date:' + trans[0]);

		if (trans[1] < 0) {
			console.log('Type: Withdrawal');
			amount -= -25;

		} else if (trans[1] > 0) {
			console.log('Type: Deposit');
		}
	}

	console.log(amount, showBalance(amount));
}


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




