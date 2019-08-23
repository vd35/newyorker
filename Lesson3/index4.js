const quiz = [
    {
        question: "How many legs an octopus has:",
        choice: ["One leg", "Two legs", "Four legs", "Eight legs"],
        correctAns: 4
    },
    {
        question: "How many legs a dog has:",
        choice: ["One leg", "Two legs", "Four legs", "Eight legs"],
        correctAns: 4
    }
];

let score = 0;
for (i = 0; i < quiz.length; i++) {
    console.log(quiz[i].question);
    console.log(quiz[i].choice);
    const ans = prompt("Your answer:");
    if (ans == quiz[i].correctAns) {
        console.log("Hura!!!");
        score += 1;
    } else {
        console.log("Not a correct answer :(");
    }
    console.log(score);
    const percentage = score / (quiz.length) * 100;
    console.log(`${percentage}%`);
}


