// Importing the readline-sync library for user input
import * as readlineSync from 'readline-sync';

// Interface for counting occurrences of alphabets in a string
interface AlphabetCount {
  [char: string]: number;
}

// Class to replace palindromes in a word with unique identifiers
class PalindromeReplacer {
  // Check if a word is a palindrome
  isPalindrome(word: string): boolean {
    return word === word.split('').reverse().join('');
  }

  // Count occurrences of each alphabet in a string
  countAlphabetOccurrence(inputString: string): AlphabetCount {
    const alphabetCount: AlphabetCount = {};
    for (const char of inputString) {
      if (char.match(/[a-zA-Z]/)) {
        const charLower = char.toLowerCase();
        alphabetCount[charLower] = (alphabetCount[charLower] || 0) + 1;
      }
    }
    return alphabetCount;
  }

  // Replace palindrome in a word with a unique identifier
  replacePalindromeWithOccurrence(word: string): string {
    if (this.isPalindrome(word)) {
      const alphabetCount = this.countAlphabetOccurrence(word);
      const uniqueIdentifier = Object.keys(alphabetCount)
        .map((char) => `${char}${alphabetCount[char]}`)
        .join('');
      return uniqueIdentifier;
    } else {
      // If not a palindrome, replace with a random string
      return this.generateRandomString(word.length);
    }
  }

  // Generate a random string of given length
  private generateRandomString(length: number): string {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';
    for (let char = 0; char < length; char++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  }
}

// Class for URL shortening
class UrlShortener {
  staticDomain: string;
  palindromeReplacer: PalindromeReplacer;

  constructor(staticDomain: string) {
    this.staticDomain = staticDomain;
    this.palindromeReplacer = new PalindromeReplacer();
  }

  // Validate if a URL is in the correct format
  validateUrl(url: string): boolean {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  }

  // Shorten a given URL
  shortenUrl(longUrl: string): string {
    // Validate the URL format
    if (!this.validateUrl(longUrl)) {
      console.log("Invalid URL. Please enter a valid URL.");
      // Prompt the user again for a valid URL
      return this.shortenUrl(readlineSync.question("Enter the long URL: "));
    }

    // Split the URL and extract the last part
    const urlParts = longUrl.split("/");
    const lastPart = urlParts.pop() || '';
    // Split the last part into words
    const words = lastPart.split(/\W+/);

    // Replace palindromes in each word and join them
    const transformedWords = words.map(word => this.palindromeReplacer.replacePalindromeWithOccurrence(word));
    const shortenedUrlPart = transformedWords.join("").substring(0, 5);

    // Combine the static domain and shortened URL part
    const shortenedUrl = `${this.staticDomain}/${shortenedUrlPart}`;
    return shortenedUrl;
  }
}

// Main program
console.log("Welcome to the Advanced URL Shortener Application!");

// Get the long URL from the user
const longUrl = readlineSync.question("Enter the long URL: ");

// Create an instance of the UrlShortener class
const urlShortener = new UrlShortener("https://www.shorturl.at");
// Shorten the URL
const shortenedUrl = urlShortener.shortenUrl(longUrl);

// Display the shortened URL
console.log("\n--- Shortened URL ---");
console.log(`Shortened URL: ${shortenedUrl}`);
