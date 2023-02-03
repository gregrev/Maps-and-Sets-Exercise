// Maps and Sets Exercise
// Quick Question #1
// What does the following code return?

new Set([1, 1, 2, 2, 3, 4]) // {1,2,3,4}

// Quick Question #2
// What does the following code return?

[...new Set("referee")].join("") // "ref" because the set obj removes duplicates

// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

{ Array(3) => true, Array(3) => false }

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
// set obj which will remove duplicates and .size determines # of values
const hasDuplicate = arr => new Set(arr).size < arr.length

hasDuplicate([1, 3, 2, 1]) // true
hasDuplicate([1, 5, -1, 4]) // false

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function isVowel(char) {
    return "aeiou".includes(char);
}

function vowelCount(str) {
    // create empty obj with map
    const vowelMap = new Map();
    // iterate over input str
    for (let char of str) {
        // make all chars lowercase
        let lowerCaseChar = char.toLowerCase()
        // check if char is a vowel
        if (isVowel(lowerCaseChar)) {
            // use .has to check if voewl is in vowelMap
            if (vowelMap.has(lowerCaseChar)) {
                // if it is get the vowel and put back in vowel map and add 1
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
                // if it isnt in vowelMap set value to 1
            } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

