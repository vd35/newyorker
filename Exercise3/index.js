const person = ["Vinh", 20, "Hanoi"];

const personObject = { // key: value
    name: "Vinh",
    age: 20,
    hometown: "Hanoi",
}

// Read
for (let key in personObject) {
    console.log(key, personObject[key]);
}

// Create
personObject.height = 175;

for (let key in personObject) {
    console.log(key, personObject[key]);
}

// Update
personObject.age= 19;

console.log(personObject);

// Delete
delete personObject.height;
console.log(personObject);
