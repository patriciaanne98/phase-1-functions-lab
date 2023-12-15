function distanceFromHqInBlocks(someValue) {
        const headquartersBlock = 42;
        const distance = Math.abs(someValue - headquartersBlock);
        return distance;
      }
      
  function distanceFromHqInFeet(someValue) {
    // distanceFromHqInBlocks(someValue);
    const distanceInBlocks = distanceFromHqInBlocks(someValue);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }

//   function distanceTravelledInFeet(start, destination) {
//     let feetTravelled;
//     if (destination > start) {
//         feetTravelled = destination - start
//         feetTravelled *= 264
//         return feetTravelled
//     } else if (start > destination) {
//         feetTravelled = start - destination
//         feetTravelled *= 264
//         return feetTravelled
//     }
//   }
function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264
    return Math.abs(destination - start) * feetPerBlock
}
// calculatesFarePrice: Given the same starting and ending block as the previous test (hint hint), 
// return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet,
//  the price is 2 cents per foot (not including 400, which are free!). 
//  Then Scuber charges a flat fare of $25 for a distance over 2000 feet and under 2500 feet. 
//  Finally, Scuber does not allow any rides over 2500 feet 
// — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
function calculatesFarePrice (start, destination) {
    const feetPerBlock = 264
    const feetTravelled = Math.abs(destination - start) * feetPerBlock
    if (feetTravelled <= 400) {
        return 0
    } else if (feetTravelled > 400 && feetTravelled < 2000) {
        const fee = (feetTravelled - 400) * 0.02
        return fee 
    } else if (feetTravelled >= 2000 && feetTravelled <= 2500) {
        return 25 
    } else {
        return 'cannot travel that far'
    }
}
