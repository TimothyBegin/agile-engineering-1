const readline = require('readline');

var handleOneLetter = function (numberInArrayWrapper, romanNumeralsTuple) {
    arabicNumber = romanNumeralsTuple[0];
    romanNumeral = romanNumeralsTuple[1];
    var stringToAppend = '';
    while (numberInArrayWrapper[0] >= arabicNumber) {
        stringToAppend = stringToAppend + romanNumeral;
        numberInArrayWrapper[0] -= arabicNumber;
    }
    return stringToAppend;
}

var convertArabicToRoman = function (numberToConvert) {
    var romanNumeralsMap = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    var currentNumberInArrayWrapper = [numberToConvert];
    var romanNumeralOutput = '';
    for (var counter = 0; counter < romanNumeralsMap.length; counter++) {
        romanNumeralOutput += handleOneLetter(currentNumberInArrayWrapper, romanNumeralsMap[counter])
    }
    return romanNumeralOutput;
}

var getInputFromArguments = function () {
    if (process.argv.length <= 2) {
        console.log('USAGE:  node romanMain.js <numberToConvert>');
        process.exit(0);
    }
    return Number(process.argv[2]);
}

var doOutput = function (input, output) {
    console.log("converting Arabic Number '" + input + "' to Roman Numerals gives us: '" + output + "'");
    process.exit(0);
}

var doRomanNumeralConversion = function () {
    var inputValue = getInputFromArguments();
    var convertedValue = convertArabicToRoman(inputValue);
    doOutput(inputValue, convertedValue);
}

doRomanNumeralConversion();