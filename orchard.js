///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// Setup variables to track total acres from each orchard
let fujiTotalAcres = 0
let galaTotalAcres = 0
let pinkTotalAcres = 0

// Loop through Fuji orchard to calculate total number of 
for (let i = 0; i < fujiAcres.length; i++) {
    fujiTotalAcres += fujiAcres[i]
}
// Loop through Gala orchard to calculate total number of 
for (let i = 0; i < galaAcres.length; i++) {
    galaTotalAcres += galaAcres[i]
}
// Loop through Pink orchard to calculate total number of 
for (let i = 0; i < pinkAcres.length; i++) {
    pinkTotalAcres += pinkAcres[i]
}

// Determine total number of acres picked by adding all orchards together
const totalAcres = fujiTotalAcres + galaTotalAcres + pinkTotalAcres
console.log(`totalAcres = ${totalAcres}`)



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// Declare a property to count the number of acrePicked entries in all orchards
const totalNumOfDays = fujiAcres.length + galaAcres.length + pinkAcres.length

// Calculate average acres picked per day
const averageDailyAcres = totalAcres / totalNumOfDays
console.log(`averageDailyAcres = ${averageDailyAcres}`)




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

// Calclulate the estimated number of days left to work 
while (acresLeft > 0) {
    days += 1
    acresLeft -= averageDailyAcres
}
// Log days to console
console.log(`There are ${days} days left to work picking apples`)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = []
let galaTons = []
let pinkTons = []

// Setup an easy way to change yield in case in the future the yield per acre changes
const yieldPerAcre = 6.5

// Loop fujiAcres to calculate daily tons picked in this orchard and add them to the appropriate array
for (let i = 0; i < fujiAcres.length; i++) {
    fujiTons.push(fujiAcres[i] * yieldPerAcre)
}
console.log(`fujiTons = ${fujiTons}`)

// Loop galaAcres to calculate daily tons picked in this orchard and add them to the appropriate array
for (let i = 0; i < galaAcres.length; i++) {
    galaTons.push(galaAcres[i] * yieldPerAcre)
}
console.log(`galaTons = ${galaTons}`)

// Loop pinkAcres to calculate daily tons picked in this orchard and add them to the appropriate array
for (let i = 0; i < pinkAcres.length; i++) {
    pinkTons.push(pinkAcres[i] * yieldPerAcre)
}
console.log(`pinkTons = ${pinkTons}`)






// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// Declare a variable to track the pounds of yield 
let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

// Calculate the the total tons in the fujiTons array and multiply by 2000 to get pounds
for (let i = 0; i < fujiTons.length; i++) {
    fujiPounds += fujiTons[i] * 2000
}
// Calculate the the total tons in the galaTons array and multiply by 2000 to get pounds
for (let i = 0; i < galaTons.length; i++) {
    galaPounds += galaTons[i] * 2000
}
// Calculate the the total tons in the pinkTons array and multiply by 2000 to get pounds
for (let i = 0; i < pinkTons.length; i++) {
    pinkPounds += pinkTons[i] * 2000
}


console.log(`fujiPounds = ${fujiPounds}`) 
console.log(`galaPounds = ${galaPounds}`) 
console.log(`pinkPounds = ${pinkPounds}`)






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// Calculate profit from each orchard by multiplying the total pounds by the price of each variety of apple
let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log(`fujiProfits = $${fujiProfit}`)
console.log(`galaProfits = $${galaProfit}`)
console.log(`pinkProfits = $${pinkProfit}`)


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

// Calculate total profits by adding all profits of each variety
const totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(`totalProfit = $${totalProfit}`)
