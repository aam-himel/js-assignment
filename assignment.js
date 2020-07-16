/*
feetToMile(feet) -> feet/5280
woodCalculator(chair, table, bed)
brickCalculator(brick_count)
tinyFriends(names[])

*/

// Assignment - 01 -------------------------------   FeetToMile(feet) 
function feetToMile(feet) {
    const res = feet / 5280;
    return res;
}

// change value here
const feet = 4;
const output = feetToMile(feet);
console.log(`${feet} Feet is Equal To ${output} Mile`);


// Assignment - 02 ------------------------------   woodCalculator(chair, table, bed)
function woodCalculator(chair, table, bed) {
    let total = 0;
    total = chair * 1 + table * 3 + bed * 5;
    return total;
}

let chairCount, tableCount, bedCount;

// change values here
chairCount = 1;
tableCount = 2;
bedCount = 4;

const totalWoodCost = woodCalculator(chairCount, tableCount, bedCount);

console.log(`For (chair,table,bed) (${chairCount}, ${tableCount}, ${bedCount}) Total Wood cost is = ${totalWoodCost}`);


// Assignment - 03 -----------------------------  brickCalculator(hight)

function brickCalculator(hight) {
    let feetCount = 0;
    let totalBrick;

    if (hight < 0) {
        return console.log("Hight can't be Negetive!")
    }
    if (hight > 20) {
        feetCount += (hight - 20) * 10;
        feetCount += 10 * 12;
        feetCount += 10 * 15;

    } else if (hight >= 11) {
        feetCount += (hight - 10) * 12;
        feetCount += 10 * 15;
    } else {
        feetCount += hight * 15;
    }
    // console.log(feetCount);
    totalBrick = feetCount * 1000;
    return totalBrick;
}

// change value here
let hightOfBuilding = 1;
const totalBrick = brickCalculator(hightOfBuilding);

console.log(`For a ${hightOfBuilding}'th Building Brick is needed about ${totalBrick}`);


// Assignment - 04 -----------------------------

let names = [
    'himel',
    'munna',
    'abdullah',
    'jhanker vai',
    'liz',
    'aa',
];

function tinyFriends(names) {
    let smallLength = 9999999;
    let index;
    for (i = 0; i < names.length; i++) {
        if (names[i].length < smallLength) {
            smallLength = names[i].length;
            index = i;
        }
    }
    console.log(`Small Friend is '${names[index]}'`);
    return names[index];
}



tinyFriends(names);

