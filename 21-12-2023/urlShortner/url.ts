import * as readlineSync from 'readline-sync';

// Interface to represent the count of each alphabet in a string
interface AlphabetCount {
    [char: string]: number;
}

// Class for replacing palindromes with alphabet occurrences
class PalindromeReplacer {
    // Check if a word is a palindrome
    isPalindrome(word: string): boolean {
        return word === word.split('').reverse().join('');
    }

    // Count the occurrence of each alphabet in a string
    countAlphabetOccurrence(inputString: string): AlphabetCount {
        const alphabetCount: AlphabetCount = {};
        for (const char of inputString) {
            if (char.match(/[a-zA-Z]/)) {
                const charLower = char.toLowerCase();
                alphabetCount[charLower] = (alphabetCount[charLower] || 0) + 1;
            }
        }
        console.log(alphabetCount)
        return alphabetCount;
    }

    // Replace palindrome with a unique identifier incorporating alphabet occurrence
    replacePalindromeWithOccurrence(word: string): string {
        if (this.isPalindrome(word)) {
            const alphabetCount = this.countAlphabetOccurrence(word);
            const uniqueIdentifier = Object.keys(alphabetCount)
                .map((char) => `${char}${alphabetCount[char]}`)
                .join('');
            return uniqueIdentifier;
        } else {
            return word;
        }
    }
}

// Class for generating random strings
class RandomStringGenerator {
    // Generate a random string of a specified length
    generateRandomString(length: number): string {
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
    staticDomain: string;
    palindromeReplacer: PalindromeReplacer;
    randomStringGenerator: RandomStringGenerator;

    constructor(staticDomain: string) {
        this.staticDomain = staticDomain;
        this.palindromeReplacer = new PalindromeReplacer();
        this.randomStringGenerator = new RandomStringGenerator();
    }

    // Shorten the given URL
    shortenUrl(longUrl: string): string {
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
