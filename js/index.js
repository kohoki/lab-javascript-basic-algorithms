console.log("I'm ready!");

// Iteration 1: Names and Input

const hacker1 = "Anna";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Samuel";
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length)
{
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length)
{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else
{
    console.log(`Wow, you both have equally long names, XX characters!`)
}


// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals

let array = [];
for (let index = 0; index < hacker1.length; index += 1)
{
    array.push(hacker1[index].toUpperCase())
}
console.log(array.join(` `))

// 3.2 Print all the characters of the navigator's name, in reverse order.

let array2 = [];

for (let index = 0; index < hacker2.length; index += 1)
{
    array2.unshift(hacker2[index].toUpperCase())
}
console.log(array2.join(` `));

// 3.3 Depending on the lexicographic order of the strings, print:

if (hacker1 < hacker2)
{
    console.log("The driver's name goes first.");
}
else if (hacker1 > hacker2)
{
    console.log("Yo, the navigator goes first definitely.");
}
else
{
    console.log("What?! You both have the same name?");
}
