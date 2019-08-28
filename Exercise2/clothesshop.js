// const arr = ["T-Shirt", "Sweater"];
// console.log("Our items: " + arr [0] + ", " + arr [1]);
const arr = ["T-Shirt", "Sweater"];
let running = true
for (let i = 0; running; i++) {
    const question = prompt("Welcome to our shop, what do you want (C, R, U, D)?").toLocaleUpperCase();
    if (question == "R") {
        print();
    }

    else if (question == "C") {
        const ans = prompt("Enter new item: ")
        arr.push(ans);
        print();
    }

    else if (question == "U") {
        const ans1 = prompt("Update position? ")
        const answer = prompt("New item? ")
        arr[ans1 - 1] = answer;
        print();
    }

    else if (question == "D") {
        const ans2 = prompt("Delete position? ")
        arr.splice(ans2 - 1, 1);
        print();
    }
    else {
        running = false
    }
}

function print(){

    let str = "";
    for (i = 0; i < arr.length; i++) {
        let plus = ", "
        if (i == arr.length - 1) {
            plus = ""
        }
        str += arr[i] + plus
    }
    console.log("Our items: " + str);

}
// function sum(number1, number2) {
// const result = number1 + number2;
// console.log(result);
// }

// sum(1,2);




