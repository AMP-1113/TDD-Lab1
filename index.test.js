const { translate } = require("./index");

describe("Translate to PigLatin", () => {


    test("1. words starting with vowel", () => {
        let result = translate("apple");
        expect(result).toEqual("appleway");
    });

    test("2. words starting with vowel", () => {
        let result = translate("Egg");
        expect(result).toEqual("eggway");
    });
    
    test("3. words starting with vowel", () => {
        let result = translate("irritate");
        expect(result).toEqual("irritateway");
    });

    test("4. words starting with vowel", () => {
        let result = translate("obvious");
        expect(result).toEqual("obviousway");
    });

    test("5. words starting with vowel", () => {
        let result = translate("usher");
        expect(result).toEqual("usherway");
    });

    test("1. words starting with consonant", () => {
        let result = translate("ripped");
        expect(result).toEqual("ippedray");
    });
    test("2. words starting with consonant", () => {
        let result = translate("pool");
        expect(result).toEqual("oolpay");
    });

    test("3. words starting with consonant", () => {
        let result = translate("picker");
        expect(result).toEqual("ickerpay");
    });

    test("1. words starting with 2 consonants", () => {
        let result = translate("character");
        expect(result).toEqual("aracterchay");
    });

    test("1. words starting with 3 consonants", () => {
        let result = translate("strain");
        expect(result).toEqual("ainstray");
    });

    test("1. Testing for lowercase", () => {
        let result = translate("HELLO");
        expect(result).toEqual("ellohay");
    });



});

// Starts with Vowels
// apple -> appleway
// Egg -> eggway
// irritate -> irritateway
// EDIBLE -> edibleway
// exit -> exitway

// Starts with Consonants
// character -> aracterch
// pool -> oolp

