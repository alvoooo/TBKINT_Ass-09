// Declaring and assigning variables
let num1 = 10;
let num2 = 20;
let num3 = 30;

//Comparing variables and displaying the larger value
if (num1>num2)
{
    console.log(num1);
}
else
{
    console.log(num2);
}

//Checking whether a number is odd or even
if (num1 % 2 == 0)
{
    console.log("The number is even");
}
else {
    console.log("The number is odd");
}

//Sorting numbers from smallest to largest
if (num1>num2 && num1>num3)
{
    if (num2>num3)
    {
        console.log(num1 + "," + num2 + "," + num3);
    }
    else 
    {
        console.log(num1 + "," + num3 + "," + num2)
    }
}
 else if (num2>num1 && num2>num3)
{
    if (num1>num3)
    {
        console.log(num2 + "," + num1 + "," + num3);
    }
    else 
    {
        console.log(num2 + "," + num3 + "," + num1)
    }
}
else if (num3>num1 && num3>num2)
{
    if (num1>num2)
    {
        console.log(num3 + "," + num1 + "," + num2);
    }
    else 
    {
        console.log(num3 + "," + num2 + "," + num1)
    }
}

//For loop
for (var i = 1; i < 21; i++)
{ 
 console.log(i);
}

//while loop
var i = 1;
while (i<= 20)
{
    console.log(i);
    i ++;
}

//display all even numbers between 1 and 20
for (i = 1; i<= 20; i++)
{
    if (i % 2 == 0)
    {
        console.log(i);
    }
}

//nested loops
const n = 5;
let stars = "";
for  (let i = 1; i <= n; i++)
{
    stars = "";
    for (j = i; j > 0; j--){
        stars = "*" + stars;
    }
    console.log(stars)
}

//GCD of two numbers
function gcd(x,y)
{
    if ((typeof x !== 'number') || (typeof y !== 'number'))
return false;
x = Math.abs(x);
y = Math.abs(y);
while(y){
    var t = y;
    y = x % y;
    x = t;
}
return x;
}
console.log(gcd(20,30));

