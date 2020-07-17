
// Assignment - 01 -------------------------------   FeetToMile(feet) 
function feetToMile(feet) {
    if (feet < 0) {
        return console.log("Value Can't be negative!");
    }

    let res = feet / 5280;
    console.log(`${feet} Feet is Equal to ${res} Mile`);
    return res;
}

// Function call
feetToMile(1);


// Assignment - 02 ------------------------------   woodCalculator(chair, table, bed)
function woodCalculator(chairCount, tableCount, bedCount) {
    let totalWoodCost = 0;
    totalWoodCost = chairCount * 1 + tableCount * 3 + bedCount * 5;

    console.log(`For (chair,table,bed) (${chairCount}, ${tableCount}, ${bedCount}) Total Wood cost is = ${totalWoodCost}`);

    return totalWoodCost;
}


// Function call
woodCalculator(1, 2, 3);



// Assignment - 03 -----------------------------  brickCalculator(hight)

function brickCalculator(hight) {
    let feetCount = 0, totalBrick;

    if (hight < 0) {
        return console.log("Hight can't be Negative!")
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

    totalBrick = feetCount * 1000;

    console.log(`For a ${hight}'th Building Brick is needed about ${totalBrick}`);

    return totalBrick;
}

// function call
brickCalculator(22);



// Assignment - 04 -----------------------------  tinyFriends(names)


function tinyFriends(names) {
    if (names.length == 0) {
        console.log(`Array can't be empty!`);
        return 0;
    }

    let smallLength = names[0].length;
    let index = 0;


    for (i = 0; i < names.length; i++) {
        if (names[i].length < smallLength) {
            smallLength = names[i].length;
            index = i;
        }
    }

    console.log(`Small Friend is '${names[index]}'`);
    return names[index];
}


let names = [
    'himel',
    'mo',
    'abdullah',
    'jhanker vai',
    'liz',
];


// function call
tinyFriends(names);

