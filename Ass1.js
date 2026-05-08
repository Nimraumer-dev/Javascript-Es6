/*//Questionn no: 1

// Take input from user
var subject1 = +prompt("Enter marks for Subject 1:");
var subject2 = +prompt("Enter marks for Subject 2:");

// Validation
if (
    isNaN(subject1) || isNaN(subject2) || 
    subject1 < 0 || subject1 > 100 || 
    subject2 < 0 || subject2 > 100
) {
    alert("Error: Please enter valid marks between 0 and 100.");
}

// Fail condition (less than 40 in any subject)
else if (subject1 < 40 || subject2 < 40) {
    alert("Result: Fail");
}

// Calculate average
else {
    var average = (subject1 + subject2) / 2;
    var grade = "";

    // Grading system
    if (average >= 75) {
        grade = "Excellent";
    } else if (average >= 60) {
        grade = "Good";
    } else if (average >= 50) {
        grade = "Pass";
    } else {
        grade = "Fail";
    }

    alert("Average: " + average);
    alert("Grade: " + grade);

    // Bonus condition
    if (subject1 > 85 && subject2 > 85) {
        alert("Outstanding Performance");
    }
}*/











//Questionn no: 2

// Stored username and password
var username = "nimra";
var password = "12345";

// Login attempts counter
var attempts = 0;

// Ask user for username
var user = prompt("Enter Username:");

//  Username check
if (user !== username) {

    alert("Access Denied");

} else {

    //Ask for password
    var passcode = prompt("Enter Password:");

    //  Password check
    if (passcode === password) {

        // Successful login on first attempt
        alert("Login Successful – Welcome Back");

    } else {

        attempts++;

        alert("Incorrect Password");

        // Ask again if attempts are less than 3
        if (attempts < 3) {

            passcode = prompt("Enter Password Again:");

            if (passcode === password) {

                alert("Login Successful");

            }

            else {

                attempts++;

                alert("Incorrect Password");

                // Third attempt
                if (attempts < 3) {

                    passcode = prompt("Enter Password Again:");

                    if (passcode === password) {

                        alert("Login Successful");

                    } else {

                        attempts++;

                        alert("Incorrect Password");
                    }
                }
            }
        }

        // 🔹 Too many attempts
        if (attempts >= 3) {

            alert("Too many attempts");
        }
    }
}





//Questionn no: 3


// Predefined product list (shop inventory)
var products = {
    "mobile": 2500,
    "laptop": 6000,
    "shoes": 1500,
    "watch": 800,
    "bag": 1200
};

// Customer input
var productName = prompt("Enter product name (mobile, laptop, shoes, watch, bag):");

// Convert to lowercase for matching
productName = productName.toLowerCase();

// Check if product exists
if (products[productName] === undefined) {
    alert("Product not available");
} else {

    var price = products[productName];
    var total = price;

    // Premium product check
    if (price > 4000) {
        alert("Premium Product Selected");
    }

    // Discount calculation
    var discount = 0;

    if (total > 5000) {
        discount = total * 0.15;   // 15% discount
    } else if (total > 3000) {
        discount = total * 0.10;   // 10% discount
    }

    var finalBill = total - discount;

    // Show final bill
    alert("Product: " + productName +
          "\nPrice: " + price +
          "\nDiscount: " + discount +
          "\nFinal Bill: " + finalBill);
}


//Questionn no: 1
//Questionn no: 1
//Questionn no: 1
//Questionn no: 1
//Questionn no: 1
//Questionn no: 1
//Questionn no: 1