// 51. Check if a number is positive, negative, or zero.
function check(num) {
    if (num > 0) {
        console.log("positive");
    } else if (num < 0) {
        console.log("negative");
    } else {
        console.log("zero");
    }
}
check(5); // Output:  
check(-3); // Output:  
check(0); // Output:  
// 51. Check if a number is positive, negative, or zero.
function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}
checkNumber(5); 
checkNumber(-3);
checkNumber(0);   
// 52. Check if a year is a leap year.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year");
    }
    else {
        console.log(year + " is not a leap year");
    }
}

isLeapYear(2020); 
isLeapYear(2023);
// 53. Determine if a person can vote based on their age.
function vote(age) {
    if (age >= 18) {
        console.log("Eligible to vote");
    }
    else {
        console.log("Not eligible to vote");
    }
}
vote(25); 
vote(17);
// 54. Log the name of the day based on its number (1 = Monday).
function day(day) {
    switch (day) {
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
        case 7: console.log("Sunday"); break;
        default: console.log("Invalid day number"); break;
    }
}

day(3); // Output: Wednesday
// 55. Check if a number is divisible by 3 and 5.
function div(numb) {
    if (numb % 3 === 0 && numb % 5 === 0) {
        console.log(numb + " is divisible by 3 and 5");
    }
    else {
        console.log(numb + " is not divisible by 3 and 5");
    }
}

div(15);
// 56. Check the grade of a student based on marks.
function grade(marks) {
    if (marks >= 90) {
        console.log("Grade: A");
    }
    else if (marks >= 80) {
        console.log("Grade: B");
    }
    else if (marks >= 70) {
        console.log("Grade: C");
    }
    else if (marks >= 60) {
        console.log("Grade: D");
    }
    else {
        console.log("Grade: F");
    }
}

grade(85); // Output: Grade: B
// 57. Compare two strings and log if they are equal.
function string(str1, str2) {
    if (str1 === str2) {
        console.log("Strings are equal");
    } else {
        console.log("Strings are not equal");
    }
}

string("hello", "world"); 
// 58. Check if a number is even or odd using a ternary operator.
function evnOrOdd(num) {
    console.log(num % 2 === 0 ? "Even" : "Odd");
}

evnOrOdd(5); 
// 59. Find the largest of three numbers using if...else.
function find(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        console.log(num1 + " is the largest");
    }
    else if (num2 >= num1 && num2 >= num3) {
        console.log(num2 + " is the largest");
    }
    else {
        console.log(num3 + " is the largest");
    }
}

find(5, 7, 3);
// 60. Calculate the discount based on the price of an item
function cal(price){
    let dis;
    if(price > 1000){
        dis = 0.2;
        }
        else if(price > 500){
        dis = 0.15;
        }
        else{
            dis = 0;
        }
        console.log(`dis: ${dis}`);
}

cal(1200); // Output: 240
cal(400);