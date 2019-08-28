let input = document.getElementById("user_input");
console.log(input.value)
    // input.addEventListener("keyup", (e) => {
    //     console.log(e.target.value);
    // });
let title = document.getElementById("title");
console.log(title);
title.addEventListener("click", () => {
    title.textContent = "Game started";
});

let content = document.getElementById("content");
content.addEventListener("mouseover", () => {
    content.style.color = "blue";
    content.style.backgroundColor = "purple";
});
content.addEventListener("mouseout", () => {
    content.style.color = "black";
    content.style.backgroundColor = "white";
});