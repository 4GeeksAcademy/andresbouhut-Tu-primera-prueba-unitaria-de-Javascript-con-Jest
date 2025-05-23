// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
//2
const fromDollarToYen = function(valueInDollar) {
    
    let valueInYen = valueInDollar / 1.07 * 156.5;
    
    return valueInYen;
}
//3
const fromYenToPound = function(valueInYen) {
    
    let valueInPound = valueInYen / 156.5 * 0.87;

    return valueInPound

}

let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
};


// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar };
module.exports = { sum, fromDollarToYen };
module.exports = { sum, fromYenToPound };