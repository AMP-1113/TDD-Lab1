function translate(string) {
    
    function vowel_count(str1) {
        const vowel_list = 'aeiou';
        let vcount = 0;
        
        for(let x = 0; x < str1.length; x++) {
          if (vowel_list.indexOf(str1[x]) !== -1) {
            vcount += 1;
          }
        } return vcount;
      }

    let lowerCaseString = string.toLowerCase();

    if (lowerCaseString[0] === "a") {
        lowerCaseString = lowerCaseString.concat("way");
        return lowerCaseString;
    } else if (lowerCaseString[0] === "e") {
        lowerCaseString = lowerCaseString.concat("way");
        return lowerCaseString;
    } else if (lowerCaseString[0] === "i") {
        lowerCaseString = lowerCaseString.concat("way");
        return lowerCaseString;
    } else if (lowerCaseString[0] === "o") {
        lowerCaseString = lowerCaseString.concat("way");
        return lowerCaseString;
    } else if (lowerCaseString[0] === "u") {
        lowerCaseString = lowerCaseString.concat("way");
        return lowerCaseString;
    } else {
        let vowelIndex = vowel_count(lowerCaseString) - 1;
        let consonants = lowerCaseString.slice(0, vowelIndex);
        let shortenString = lowerCaseString.substring(vowelIndex);
        lowerCaseString = shortenString.concat(consonants + "ay");
        return lowerCaseString;
    }


};


translate('character');
translate('pool');
translate('brave');
translate('school');
translate('begg');
module.exports.translate = translate;



// for (let vowel of vowels) {
//     if (vowel === lowerCaseString[0]) {
//         lowerCaseString = lowerCaseString.concat("way");
//         return lowerCaseString;
//     }  
// } 

// for (let vowel of vowels) {
//     if (lowerCaseString[0] !== vowel) {
//         let vowelIndex = lowerCaseString.indexOf(vowel);
//         console.log(vowelIndex);
//         let consonants = lowerCaseString.slice(0, vowelIndex);
//         let shortenString = lowerCaseString.substring(vowelIndex)
//         lowerCaseString = shortenString.concat(consonants);
//         return lowerCaseString;
//     }  
// } 

// for (let letter of lowerCaseString) {
//     if (letter === "a" || "e" || "i" || "o" || "u") {
//         lowerCaseString = lowerCaseString.concat("way");
//         return lowerCaseString;
//     } else {
        // let vowelIndex = lowerCaseString.indexOf(vowels);
        // console.log(vowelIndex);
        // let consonants = lowerCaseString.slice(0, vowelIndex);
        // let shortenString = lowerCaseString.substring(vowelIndex)
        // lowerCaseString = shortenString.concat(consonants);
        // return lowerCaseString;
//     }
// }
