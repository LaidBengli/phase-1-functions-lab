// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    //returns the number of blocks given a value
    return Math.abs(blocks - 42)
}


function distanceFromHqInFeet(feet) {
    distanceFromHqInBlocks(feet);
    return distanceFromHqInBlocks(feet) * 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

    // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    distanceFromHqInBlocks(start);
    distanceFromHqInBlocks(destination);
    return Math.abs(start - destination) * 264;
}
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let a = distanceTravelledInFeet(start, destination);
    if (a < 400) return 0;
    else if (a > 400 && a <= 2000) return (a - 400) * 0.02;
    else if (a > 2000 && a < 2500) return 25;
    else return "cannot travel that far"

}