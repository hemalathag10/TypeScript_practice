"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
// Class for replacing palindromes with alphabet occurrences
class PalindromeReplacer {
    // Check if a word is a palindrome
    isPalindrome(word) {
        return word === word.split('').reverse().join('');
    }
    // Count the occurrence of each alphabet in a string
    countAlphabetOccurrence(inputString) {
        const alphabetCount = {};
        for (const char of inputString) {
            if (char.match(/[a-zA-Z]/)) {
                const charLower = char.toLowerCase();
                alphabetCount[charLower] = (alphabetCount[charLower] || 0) + 1;
            }
        }
        console.log(alphabetCount);
        return alphabetCount;
    }
    // Replace palindrome with a unique identifier incorporating alphabet occurrence
    replacePalindromeWithOccurrence(word) {
        if (this.isPalindrome(word)) {
            const alphabetCount = this.countAlphabetOccurrence(word);
            const uniqueIdentifier = Object.keys(alphabetCount)
                .map((char) => `${char}${alphabetCount[char]}`)
                .join('');
            return uniqueIdentifier;
        }
        else {
            return word;
        }
    }
}
// Class for generating random strings
class RandomStringGenerator {
    // Generate a random string of a specified length
    generateRandomString(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let randomString = '';
        for (let char = 0; char < length; char++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomIndex);
        }
        return randomString;
    }
}
// Class for shortening URLs
class UrlShortener {
    constructor(staticDomain) {
        this.staticDomain = staticDomain;
        this.palindromeReplacer = new PalindromeReplacer();
        this.randomStringGenerator = new RandomStringGenerator();
    }
    // Shorten the given URL
    shortenUrl(longUrl) {
        const urlParts = longUrl.split("/");
        const lastPart = urlParts.pop() || '';
        const words = lastPart.split(/\W+/);
        // Apply the PalindromeReplacer to each word
        const transformedWords = words.map(word => this.palindromeReplacer.replacePalindromeWithOccurrence(word));
        // Join the words back together and take the first 5 characters
        const shortenedUrlPart = transformedWords.join("").substring(0, 5);
        // Build the shortened URL with the static domain
        const shortenedUrl = `${this.staticDomain}/${shortenedUrlPart}`;
        return shortenedUrl;
    }
}
// Main application
console.log("Welcome to the Advanced URL Shortener Application!");
// Input long URL
const longUrl = readlineSync.question("Enter the long URL: ");
// Create an instance of UrlShortener with the static domain
const urlShortener = new UrlShortener("https://www.shorturl.at");
// Shorten URL
const shortenedUrl = urlShortener.shortenUrl(longUrl);
// Print the shortened URL
console.log("\n--- Shortened URL ---");
console.log(`Shortened URL: ${shortenedUrl}`);
