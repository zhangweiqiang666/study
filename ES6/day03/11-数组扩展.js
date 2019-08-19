let arr = [1, 2, 3];

// console.log(arr.fill(9));
// console.log(arr);

console.log(arr.includes(2));

let keys = arr.keys()
console.log(keys);
for (let key of keys) {
    console.log(key);
}


let values = arr.values()
console.log(values);
for (let value of values) {
    console.log(value);
}

let entries = arr.entries()
console.log(entries);
for (let entrie of entries) {
    console.log(entrie);
}
