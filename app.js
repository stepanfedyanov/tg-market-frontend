const main = '/channel/'
let array = [];

for (let i = 0; i < 9593; i++) {
    array.push(`'${main}${i}',`);
}

console.log(...array)
