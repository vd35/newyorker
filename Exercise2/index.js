// const arr = ["Ronaldo", "Messi", "Neymar"];
// for (i = 0; i < arr.length; i++){
// console.log(arr[i]);
// }
// const ans = prompt("Do you want more players?");
// if (ans == "Y" || ans == "y"){
//     const ans1 = prompt("Name of player?");
//     arr.push(ans1);
//     for (i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }
// } else {
//     console.log("Goodbye!")
// }

// const n = prompt("Enter a number:");
// let sum = 0;
// for (i = 0; i <= n; i++){
//     sum += i;
// }
// console.log(sum);
let str = ""
const arr = ["Ronaldo", "Messi", "Neymar"];
for (i = 0; i < arr.length; i++) {
    let plus = " | "
    if (i == arr.length -1) {
        plus = ""
    }
    str += arr[i] + plus
}

console.log(str);
