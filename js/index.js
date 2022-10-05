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


// Bonus 1: Generate 3 paragraphs. Store the text in a variable type of string.

const longString = 
`

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet ultrices massa, sed ultricies ligula finibus commodo. Aenean eu eros nec nulla pharetra pulvinar et quis ante. Suspendisse mollis lacus auctor, dignissim sapien nec, efficitur turpis. Aliquam ac ex eu ante scelerisque mattis sed nec metus. Integer pretium nec elit quis porta. Nunc sit amet maximus neque. Sed nulla libero, porttitor quis magna a, feugiat finibus ante. Mauris venenatis sit amet massa a scelerisque. Vivamus viverra ligula nec felis pellentesque, vel interdum neque vulputate.

In ultricies nisi sed leo tincidunt accumsan. Donec hendrerit ultricies leo, ut pellentesque mi porta eget. Mauris nulla est, tempus id enim ut, maximus ornare augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ultrices nunc. Fusce gravida velit vulputate, accumsan justo in, interdum nibh. Ut non leo eleifend, pellentesque diam et, viverra lacus. Nulla sagittis augue nisi, vitae blandit lectus sagittis tincidunt. Proin justo ligula, fringilla ut porta ut, dignissim in lorem. Ut justo nibh, rutrum in sagittis sed, porttitor in ex. Duis a velit convallis, sollicitudin sapien in, maximus elit. Praesent vitae hendrerit nisl. Duis finibus nec mauris id ullamcorper. Donec non lectus condimentum, aliquam quam ut, porta quam. Cras facilisis, dolor et laoreet posuere, leo tellus pulvinar ante, molestie rutrum sapien tortor eu nunc.

Ut nunc urna, interdum vel mauris vel, dapibus venenatis urna. Ut vitae massa neque. Aliquam fringilla commodo aliquet. Sed condimentum nisl sed suscipit rutrum. Vestibulum eu viverra nisl. Nullam lacinia sapien malesuada maximus blandit. Morbi scelerisque massa at sem ultrices maximus. Nulla in lacus id nunc eleifend consequat in ullamcorper libero. Suspendisse porta rutrum congue. Nullam ut felis dolor. Etiam commodo tellus sapien, eget consectetur tellus venenatis ac. Fusce gravida tempor auctor. Aenean blandit sagittis molestie. In accumsan eros massa, sit amet euismod nisi hendrerit sed.

`;


// console.log(longString);
let counter = 1;
for (let index = 0; index < longString.length; index += 1)
{
    if (longString[index] == ` `)
    {
        counter += 1;
    }
};
console.log(counter);


// version 2 
console.log(longString.split(" ").length);

// Count word "et"
console.log(longString.split("et").length);

// Bonus 2
// check if it is a palindrom
// with more loops and less fancy functions and methods 

let word = "Amor, Roma";
let arg = [];

for (let index = 0; index < word.length; index += 1)
{
    if(word[index] != "." && word[index] != "?" && word[index] != "," && word[index] != " " 
    && word[index] != "!")
    {
    arg.push(word[index].toUpperCase());
    }
}

let check = false;
for (let index = 0; index < arg.length; index +=1)
{
    if (arg[index] === arg[(arg.length-1) - index])
    {
        check = true;
    }
    else
    {
        check = false;
        break;
    }
}

if (check)
{
    console.log("It is a palindrom :-)");
}
else
{
    console.log("It is NOT a palindrom :-(");
}



