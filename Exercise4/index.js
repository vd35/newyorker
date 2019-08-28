let score = 0;
let playing = true
// while (playing) {
const a = Math.floor(Math.random() * 10);
const b = Math.floor(Math.random() * 10);
const result = a + b;

function random_number(random) {
    return random[Math.floor(Math.random() * random.length)];
}

const random = [-1, 0, 1];
const randomIndex = Math.floor(Math.random() * 3 )

console.log(random[randomIndex]);

// const c = random_number(random) + result;
// console.log(`${a} + ${b} = ${c}`);
//     const answer = prompt("true or false:");
// if (answer == "true" && c == result) {
//     score += 1;
//     console.log(score);
// }
// else if (answer == "false" && c == result) {
//     score -= 1; 
//     playing = false
//     console.log(score);
// }
// else if (answer == "true" && c != result) {
//     score -= 1;
//     playing=false
//     console.log(score);
// }
// else if (answer == "false" && c != result) {
//     score += 1;
//     console.log(score);
// }
// }