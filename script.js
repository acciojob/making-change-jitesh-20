const makeChange = (c) => {
  // your name here
	let change = {
        q: 0, // quarters
        d: 0, // dimes
        n: 0, // nickels
        p: 0  // pennies
    };

    // Calculate the number of quarters (25 cents each)
    change.q = Math.floor(c / 25);
    c %= 25; // Update the remaining amount
 
    // Calculate the number of dimes (10 cents each)
    change.d = Math.floor(c / 10);
    c %= 10; // Update the remaining amount

    // Calculate the number of nickels (5 cents each)
    change.n = Math.floor(c / 5);
    c %= 5; // Update the remaining amount

    // Calculate the number of pennies (1 cent each)
    change.p = c; // Remaining amount is all pennies

    return change;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
