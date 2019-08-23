const number1 = prompt("Enter a number:");
if (number1 > 13) {
    console.log("Number is bigger than 13");
} else if (number1 < 13) {
    console.log("Number is smaller than 13");
} else {
    console.log("Number is equal to 13");
}

const number2 = prompt("Enter a number:");
if (number2 % 2 == 0) {
    console.log("Number is even");
} else if (number2 != 0) {
    console.log("Number is odd");
}

const month = prompt("Enter a month:");
const monthArr = ["April", "June", "September", "November"];
if (monthArr.includes(month)) {
    console.log("There are 30 days in this month.")
}
else if (month == "February") {
    console.log("There are 28 or 29 days in this month.")
}
else {
    console.log("There are 31 days in this month.")
}

// clear();
// const n = prompt("How many sides do you want your polygon to have:");
// for (let i = 0; i < n; i++) {
// fd(50);
// lt(360/n);
// }