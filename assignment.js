// Kilometer to Meter 

function kilometerToMeter(n) {
    var kilometer = n;
    var meter = kilometer * 1000;
    return meter;
}

var resultMeter = kilometerToMeter(459);
console.log(resultMeter);







// Budget Calculator

function budgetCalculator(watch, mobile, laptop) {
    var numberOfWatches = watch;
    var numberOfMobiles = mobile;
    var numberOfLaptops = laptop;
    var watchPrice = numberOfWatches * 50;          // Price of One Watch is 50
    var mobilePrice = numberOfMobiles * 100;        // Price of One Mobile is 100 
    var laptopPrice = numberOfLaptops * 500;        // Price of One Laptop is 500
    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    return totalPrice;
}

var totalBudget = budgetCalculator(39, 65, 34);
console.log(totalBudget);







// Hotel Cost

function hotelCost(days) {
    var totalCost = 0;

    if (days <= 10) {
        totalCost = days * 100;           // Per day cost is 100 for the first ten days
    }
    else if (days <= 20) {
        firstTenDayCost = 10 * 100;
        remainingDays = days - 10;
        remainingDayCost = remainingDays * 80;              // Per day cost is 80 after ten days
        totalCost = firstTenDayCost + remainingDayCost;
    }
    else {
        firstTenDayCost = 10 * 100;             // Per day cost is 100 for the first ten days
        secondTenDayCost = 10 * 80;             // Per day cost is 80 after ten days
        remainingDays = days - 20;
        remainingDayCost = remainingDays * 50;              // Per day cost is 50 after twenty days
        totalCost = firstTenDayCost + secondTenDayCost + remainingDayCost;
    }
    return totalCost;
}

var totalHotelCost = hotelCost(87);
console.log(totalHotelCost);







// Mega Friend

function megaFriend(friends) {
    var largestName = friends[0];

    for (i = 0; i < friends.length; i++) {
        var char = friends[i];
        if (char.length > largestName.length) {
            largestName = char;
        }
    }
    return largestName;
}

var findLargestName = megaFriend(["Kamal", "Jamal", "Abir", "Khan"]);
console.log(findLargestName);

