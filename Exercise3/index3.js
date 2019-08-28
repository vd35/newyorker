const salary = [
    { 
        name: "Huy",
        role: "Waiter",
        hours: 12,
        salaryPerHr: 0.8,
    },
    {
        name: "Tung",
        role: "Cook",
        hours: 24,
        salaryPerHr: 1.5,
    },
    {
        name: "M.Duc",
        role: "Manager",
        hours: 20,
        salaryPerHr: 2,
    }
]

salary.push(
    {  
        name: "Don",
        role: "Waiter",
        hours: 12,
        salaryPerHr: 0.9,

    },
    {
        name: "H.Duc",
        role: "Waiter",
        hours: 14,
        salaryPerHr: 0.7,

    }
);

console.log(salary[2]);

salary[0] = {
    name: "Huyen",
    role: "Waitress",
    hours: 14,
    salaryPerHr: 1,
}
console.log(salary);


salary.splice(salary.length - 1, 1);
console.log(salary);

sum = 0;
for (let i = 0; i < salary.length; i++){
    personalSalary = salary[i].salaryPerHr * salary[i].hours;
    sum += personalSalary;
    console.log(salary[i].name, personalSalary);
}
console.log(sum);




