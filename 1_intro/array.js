// ------------- Task 1 -----------
var array = [4, 9, 87, 54, 74, 20, 85, 6, 25, 98, 17, 67, 71, 55, 23, 47, 1, 77, 2, 34]

// ------------- Task 2 -----------
for (let i = 0; i < array.length; i++) {
    console.log("[" + [i] + "] - " + array[i]);
}

// ------------- Task 3 -----------
array.sort((a, b) => b - a);
console.log("Sort array: ", array);

// ------------- Task 4 -----------
for (let i = 0; i < array.length; i++) {
    if (i > (array.length/2) - 1) {
        array[i] = 0;
    }
}
console.log("New array: ", array);

// ------------- Task 5 -----------
let isValid = false;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 7 == 0) {
        isValid = true;
    }
}
console.log(isValid);

// ------------- Task 6 -----------
array.splice(0, 3);
console.log("New array: ", array);

// ------------- Task 7 -----------
let k = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        k+=1;
    }
}
console.log("Even numbers in the array: ", k);

// ------------- Task 8 -----------
let isvalid = false;
for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i+1]) {
        isvalid = true;
    }
}
console.log(isvalid);