let btn = document.getElementById("btn_test");
console.log(btn);


btn.addEventListener("click", function() {
    let input = document.getElementById("input_box");
    console.log(input.value);
});

let inputBox = document.getElementById("input_box");

inputBox.addEventListener("keyup", function(e) {
    console.log("Key up");
    console.log(e);
    console.log(e.target.value);
})

let btnChangeColor = document.getElementById("btn_changecolor");
btnChangeColor.addEventListener("click", function() {
    let pMessage = document.getElementById("message");
    pMessage.style.color = "red";
    pMessage.textContent = "I love DOM";

});
let searchBar = document.getElementById("search_bar");
searchBar.addEventListener("click", function() {
    searchBar.value = "Lemon tree";
    searchBar.style.backgroundColor = "blue";
});