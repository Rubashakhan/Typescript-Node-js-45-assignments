// Assignments Solution
// Task 1
// Installation completed

// Task 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personName: string=  ' Eric';
console.log (`Hello " " ${personName}, would you like to learn some Python today?`);

// Task 3
// // Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let PersonName: string ='Rubasha Khan';
// // For lower case
console.log("Lowercase:", PersonName.toLowerCase());

// // For upper case
console.log("uppercase:",PersonName.toLocaleUpperCase());

// // For title case
console.log("titlecase:",PersonName.replace(/\bw/g,c =>c.toUpperCase()));

// Task 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let Qoute:string="“A person who never made a mistake never tried anything new.”";
let Author:string="Albert Einstein";
console.log(`${Author} once said, ${Qoute}`)

// Task 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person:string="Albert Einstein";
let qoute:string="“A person who never made a mistake never tried anything new.”";
let message:string=`${famous_person} once said, ${qoute}`;
console.log(message);

// Task 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let personname:string= "\t\n   'Rubasha khan'     \t\n";
console.log("Orignal:", personname);

// console.log(personname);
console.log("Stripped:", personname.trim())

// Task 7&8

// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// // You should create four lines that look like this:
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);

// Task 9 
// // Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber:number= 7;
console.log(`My favourite number is ${favoriteNumber}`)

// // Task 10
// // Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.


// Name=Rubasha khan

// Date=3/2/2024

// The printing result of task 7&8 is 8 is  four time 8.

// Task 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let Name:string[] = ["Anumta","Madiha","Laiba","Kainat"];
console.log(Name[(0)]);
console.log(Name[(1)]);
console.log(Name[(2)]);
console.log(Name[(3)]);

// Task 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let Name:string[] = ["Anumta","Madiha","Laiba","Kainat"];
let message:string=",would you like to come for dinner tonight ?"
console.log("hellow",Name[(0)],message)
console.log("hellow",Name[(1)],message)
console.log("hellow",Name[(2)],message)
console.log("hellow",Name[(3)],message)

// Task 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let vehicle:string [] =['Honda','Toyota','Hyundai'];

vehicle.map((items)=> console.log(`I would like to own a ${items} car.`));

// // // Task 14
// // // Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner./

let GUEST:string[] = ["Anumta","Madiha","Laiba","Kainat"];

GUEST.map((items)=> console.log(`Dear ${items}, You are invited to a dinner.`));

// Task 15
// // Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let GUEST:string[] = ["Anumta","Madiha","Kainat"];
 
console.log(GUEST[0],'cannot attend the dinner.');

let NewGuest: string="Laiba"
GUEST [GUEST.indexOf (GUEST[0])]= NewGuest;
console.log(GUEST)

// Task 16

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

let Guest:string[]=['Anumta','Madiha','Kainat']

let Guest1:string='Laiba';
Guest[Guest.indexOf(Guest[0])]=Guest1;
console.log(Guest);

Guest.map((items)=>console.log(`Dear ${items}, I have found a bigger dinnig table so I'm inviting more people. `));


// // • Add one new guest to the beginning of your array.
let guest2: string='Anum';
Guest.unshift(guest2);
console.log(Guest);
// • Add one new guest to the middle of your array.

let guest3:string='Bisma';

let index= Guest.length/2
Guest.splice(index,0,guest3)
console.log(Guest);
// //  • Use append() to add one new guest to the end of your list. 

let guest4:string='Neha';
Guest.push(guest4)
console.log(Guest);
// // • Print a new set of invitation messages, one for each person in your list.

Guest.map((items)=>console.log(`Dear ${items}, I have found a bigger dinnig table so I'm inviting more people. `));

// Task 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// // • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

let GUEST:string[] = ["Anumta","Madiha","Laiba","Kainat"];
console.log('Due to limited space, we can only invite two peoples.')



// // // // • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
 while (GUEST.length > 2) {const removeguest=GUEST.pop();
    console.log(`Sorry, ${removeguest}, you are no longer invited to the dinner.`)
}
// // // • Print a message to each of the two people still on your list, letting them know they’re still invited.
GUEST.map((items)=> console.log(`${items} you are still invited.`));

// // // • Remove the last two names from your list, so you have an empty list. 
// // // Print your list to make sure you actually have an empty list at the end of your program.
console.log("Final Guest list:",GUEST);


// // // Task 18

// // // Seeing the World: Think of at least five places in the world you’d like to visit.

// // // • Store the locations in a array. Make sure the array is not in alphabetical order.
let places: string[] = ['Canada','Saudi Arabia','America', 'Turkey','Spain']
// // // // • Print your array in its original order.

console.log('Orignal Order:',places);

// // // // // • Print your array in alphabetical order without modifying the actual list.
console.log('Alphabetical Order:',[...places].sort());

// // // // // • Show that your array is still in its original order by printing it.
console.log('Orignal Order:',places);

// // // • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order:",[...places].sort().reverse());
// // // • Show that your array is still in its original order by printing it again.
console.log("real order:", places);
// // // • Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log("reverse order:",places);
// // • Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log("reverse order to orignal:",places);
// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.log("sorting order:",places);
// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.sort((a,b)=>b.localeCompare(a));
console.log("sorting in reverse alphabetical order:",places);

// Task 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner

let invite:string[]=["Anumta","Madiha"];

console.log(`${invite.length} peoples will be invited at dinner`)

// Task 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let Languages:string[]=["russian","spanish","arabic","urdu",];
let List:string="List of languages:";
console.log(List)
Languages.map((items)=>console.log(items));

// Task 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let vehicle= {Type:"Car",Color:"white",Model:"Aqua"};

console.log(vehicle);

// // Task 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.


let Days:number[]=[11,21,33,51,77,55];

console.log(Days{3});
console.log(Days[3]);

// Task 23

let car = 'subaru';
let transport='audi'
let vehicle= "cycle"

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

console.log("Is car == 'Subaru'? I predict False.")
console.log(car == 'Subaru')

console.log("Is car == '7'? I predict False.")
console.log(car == '7')

console.log("Is transport <= 'audi'? I predict False.")
console.log(transport== 'Subaru')

console.log("Is transport == '4'? I predict False.")
console.log(transport == '4')

console.log("vehicle == 'Subaru'? I predict False.")
console.log(vehicle == 'Subaru')

console.log("Is transport == 'audi'? I predict True.")
console.log(transport == 'audi')

console.log("Is vehicle == 'cycle'? I predict True.")
console.log(vehicle == 'cycle')

console.log("Is vehicle !== '9'? I predict True.")
console.log(vehicle !== '9')

console.log("Is vehicle <= 'cycle'? I predict True.")
console.log(vehicle <= 'cycle')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


// // Task 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// // • Tests for equality and inequality with strings

let var1:string="rubasha khan"
let var2:string="rubasha khan"

if(var1==var2){console.log(" names are equal");
}
else {console.log("name are not equal")}

if(var1!=var2){console.log(" names are equal");
}
else {console.log("name are not equal")}

// // • Tests using the lower case function
if(var1==var2){console.log(" names are equal");
}
// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num:number= 6 ;
let num1:number=3 ;
let num2:number= 6;
let num3:number=10 ; 
if(num==num2){console.log(num,"is euqal to",num2);} 

else {console.log(num,"is not euqal to",num2);}


if(num!=num2){console.log(num,"is not euqal to",num2);}

if(num>=num1){console.log(num,"is greater then",num1)}
if(num<=num3){console.log(num,"is less then",num3)}

if(num ==6 && num1==3){console.log(num,num1)}
if (num2!=10){console.log(num2)}

// // • Tests using "and" and "or" operators
if(num==5||num1==3){console.log("num is 6")}

// // • Test whether an item is in a array
let array:string[]=["Blue","Green","pink","Red"]

if (array.includes("pink")){console.log("pink is in the array")}
// // • Test whether an item is not in a array
if (!array.includes("purple")){console.log("purple is not  in the array");}

// Task 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// // • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

let alian_Color :string="Green";

if(alian_Color=="Green"){console.log("You have earned 5 point")}

 else{console.log("no output")}

 let alian_Color2 :string="Green";
 if(alian_Color2=="Yellow"){console.log("You have earned 5 point")}

 else{console.log("no output")}

// // Task 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

let alian_Color :string="Green";

if(alian_Color=="Green"){console.log("You have earned 5 point")}

 else{console.log("You have earned 10 point")}

// Task 27
let alian_Color:string= "blue";

 if(alian_Color=="Green"){console.log("You have earned 5 point")}

 else if(alian_Color=="yellow"){ console.log("You have earned 10 point")}

else {console.log("You have earned 15 point")}

// // Task 28
let age:number=76;

if(age<2){console.log('person is a baby')}
else if(age<4){console.log("person is a toddler")}
else if(age<13){console.log("person is a kid")}
else if(age<20){console.log("person is a teeager")}

else if(age<65){console.log("person is an adult")}
else if(age>65){console.log("person is an elder")}

// // Task 29
 let favorite_fruits:string[]=["Mango","Apple","Cherry","strewberry","Banana"]

if(favorite_fruits.includes("Apple")){console.log("I really likes Apples")}
if(favorite_fruits.includes("Mango")){console.log("I really likes Mangos")}
if(favorite_fruits.includes("Cherry")){console.log("I really likes Cherrys")}
if(favorite_fruits.includes("strewberry")){console.log("I really like strewberries!")}
if(favorite_fruits.includes("Banana")){console.log("I really like bananas!")}

// Task 30

let users: string[]=["Admin","Alia","Maryam", "kainat","Madiha"]

for(let user of users){
    if(user ==="Admin") {console.log("Hello Admin, would you like to see a status report?")}

    else{console.log(`Hello ${user},thank you for logging in again. `)}
   
}

// Task 31
let users: string[]=["Admin","Alia","Maryam", "kainat","Madiha"]
users =[]

if(users.length==0) {console.log("We need to find some users!")}

   
// Task 32 

let current_users: string[]=["Bisma","Alia","Maryam", "kainat","Madiha"]
let new_users: string[]=["Bisma","Neha","Maryam", "Anumta","Laiba"]

let current_Users_lower = current_users.map(user =>user.toLocaleLowerCase());

for (let new_user of new_users) 
if (current_Users_lower.includes (new_user.toLocaleLowerCase())) (console.log(` ${new_user} name ist available!`) )
else (console.log( `${new_user} is available ! `))

// // Task no 33

let ordinal_number: number[]= [1,2,3,4,5,6,7,8,9];

ordinal_number.map

for ( let number of ordinal_number) {
 if (number===1){ console.log(`${number}st`)}
else if(number===2){ console.log(`${number}nd`)}
else if(number===3) {console.log(`${number}rd`)}

else console.log (`${number}th`)}


// Task 34

let pizza:string[]=["Aabian","Fagita","Tikka"]
{
for(let pizzas of pizza){console.log(`${pizzas}`)}
for(let pizzas of pizza)
 console.log(` I like ${pizzas} pizza.`)}
console.log(" I really love pizza!")

// Task 35

let Animal:string[]=["cat","monkey","dog"]
{
for(let animals of Animal){console.log(`${animals}`)}
for(let animals of Animal)
 console.log(` A ${animals} would make a great pet.`)}
console.log(" Monkey would make a great pet!")


// Task 36

function makeShirt (size:string,text:string):void 
{console.log(`you order a ${size} shirt that says ${text}`)}

makeShirt ('Extra small','" I love Pakistan."');

// Task 37


function makeShirt(size:string ='lagre',text:string= 'I love typescript !'):
void{console.log (`You order a ${size} shirt that says ${text}`)}

makeShirt();
makeShirt('medium',);

makeShirt('small',"Live your life");

// Task 38

function describe_city(city:string,country:string="Pakistan"):void{console.log(`${city} is in ${country}.`)}

describe_city('Karachi')
describe_city('Lahore')
describe_city('Paris','France')

// Task 39

function city_country(city:string,country:string):void{console.log(`${city}, ${country}.`)}


city_country('Istanbul','Turkey')
city_country('Toranto','Canada')
city_country('Moscow','Russia')

// Task 40
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function Make_album (Artist:string,Title:string):{ Artist:string;Title:string }
 {const dictionaries= 
    {Artist:Artist.charAt(0).toUpperCase()+Artist.slice(1),
 Title:Title.charAt(0).toUpperCase()+Title.slice(1)};
return dictionaries
}
let album=Make_album('Maryam','hiphop') 
console.log(album)

album=Make_album('John','Sad song') 
 console.log(album)

 album=Make_album('james','romantic songs')
 console.log(album)

// Task 41


function show_magicians ( megicians_name: string[]):void {
    for (let megician of megicians_name){

console.log(megician.charAt(0).toUpperCase()+megician.slice(1)) }}


let magician:string []=['Ali','Ahmed','Mustafa']
show_magicians(magician)


// // // Task 42
function make_great(megicians_name:string[]):void{for (let i=0; i< megicians_name.length;++i ){ megicians_name [i]= megicians_name [i]+ " the great " } }

const magicians:string []=['Ali','Ahmed','Mustafa']
 make_great(magicians)
 show_magicians(magicians);



// Task 43
function show_magicians ( megicians_name: string[]):void {
    for (let megician of megicians_name){

console.log(megician.charAt(0).toUpperCase()+megician.slice(1)) }}
function make_great2 (megicians_name:string[]):string[]{const greatMagician: string[]=[];
    for (let i=0; i< megicians_name.length;++i ){ greatMagician.push(megicians_name[i]+ " The great ") } return greatMagician ;}



const magicians:string []=['Ali','Ahmed','Mustafa']

const great_magician:string[]=make_great2(magicians);
show_magicians(magicians)
show_magicians(great_magician)


// Task 44


function sandwich(...items:string[]):void{

console.log("Sandwichh Order:")
for (let i=0; i< items.length; i++){
    console.log(`-${items[i]}`)}}
    console.log("Enjoy your meal !")

sandwich("Chicken Sandwich","Veg Sandwich","cheese Sandwich")
sandwich ("Itanlian Sandwich", "Maxican Sandwich", "Arabic Sandwich")
sandwich("Tikka Sandwich","Mayo Garlic Sandwich", "Extra spicy Sandwich")


// Task 45


type car= {
    manufacture:string
     model:string
      [key:string]:any;
}
function CarOrder(manufacture:string,model:string,optional:Record<string,any>):car {
return{
    manufacture,
    model,
    ...optional
}
}
const mycar:car=CarOrder("Honda","vitz",{color:"pink",year:"2020"})
console.log(mycar)


