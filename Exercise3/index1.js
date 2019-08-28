// const personObject = {
//     name: "Christiano Ronaldo",
//     birthYear: 1985,
//     nationality: "Portugese",
// }
// console.log(personObject);
// const question = prompt("Do you want to delete any info?(Y/N)");

// if (question == "Y" || question == "y"){
//     const question1 = prompt("What info do you want to delete?");
//     key = question1;
//     delete personObject[key];
//     console.log(personObject);

// } else if (question == "N" || question == "n"){
//     console.log("Goodbye!");
    
// }
const inventory = {
    gold: 500,
    pouch: ["flint", "twine", "gemstone"],
    backpack: ["xylophone", "dagger", "bedroll", "bread loaf"]
}

inventory.pocket = ["seashell", "strange berry", "lint"];
console.log(inventory);

inventory.backpack.splice(1,1);
console.log(inventory.backpack);

inventory.gold += 50;
console.log(inventory.gold);

delete inventory.pouch;
console.log(inventory);

