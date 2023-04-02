// ------------- Task 1.1 -----------
const number = +prompt('Enter a number from 0 to 9:');
switch (number) {
    case 0: console.log("^"); break;
    case 1: console.log("@"); break;
    case 2: console.log("!"); break;
    case 3: console.log("%"); break;
    case 4: console.log("&"); break;
    case 5: console.log("*"); break;
    case 6: console.log("#"); break;
    case 7: console.log("~"); break;
    case 8: console.log("("); break;
    case 9: console.log(")"); break;
    default: console.log("Incorrect number!");
}

// ------------- Task 1.2 -----------
const userbirth = +prompt('Enter your year of birth:');
if (userbirth%4==0 && userbirth%100!=0 || userbirth%400==0) {
    console.log(`${userbirth} a leap year!`);
}
else {
    console.log(`${userbirth} not a leap year!`);
}

// ------------- Task 1.3 -----------
const date = Date('Enter a date(day, month, year): ');
console.log(`${date}!`);

// ------------- Task 2.1 -----------
const N = +prompt('Enter a number:');
let S = 0;
for (let i = 0; i <= N; ++i) {
    S+=i;
    console.log(`${S}`);
}

// ------------- Task 2.2 -----------
const n = +prompt('Enter a number:');
let k = 0;
while (n.lenght > k) {
    k+=1;
    console.log(`${k}`);
}