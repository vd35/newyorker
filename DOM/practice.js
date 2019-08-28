// let title = document.getElementById("title");
// console.log(title);

// let content = document.getElementsByClassName("text");
// console.dir(content[0]);
let btn = document.getElementById("btn_test");
let inputBox = document.getElementById("input");

console.log(btn);
btn.addEventListener("click", function() {
    console.log("User clicked");
    console.log(inputBox.value);

});

let input = document.getElementById("input_box");
console.log(input);
input.addEventListener("keyup", function() {
    console.log("User keyed up");
});

let event = document.getElementById("event");
console.log(event);
event.addEventListener("mouseover", function() {
    console.log("User moused over");
});

// console.log(inputBox);
// inputBox.addEventListener("keydown", (e) => {
//     console.log(e.target.value)
// });