import * as readlineSync from 'readline-sync';

interface AlphabetCount {
  [char: string]: number;
}

class PalindromeReplacer {
  isPalindrome(word: string): boolean {
    return word === word.split('').reverse().join('');
  }

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

class UrlShortener {
  staticDomain: string;
  palindromeReplacer: PalindromeReplacer;

  constructor(staticDomain: string) {
    this.staticDomain = staticDomain;
    this.palindromeReplacer = new PalindromeReplacer();
  }

  validateUrl(url: string): boolean {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  }

  shortenUrl(longUrl: string): string {
    if (!this.validateUrl(longUrl)) {
      console.log("Invalid URL. Please enter a valid URL.");
      return this.shortenUrl(readlineSync.question("Enter the long URL: "));
    }

    const urlParts = longUrl.split("/");
    const lastPart = urlParts.pop() || '';
    const words = lastPart.split(/\W+/);

    const transformedWords = words.map(word => this.palindromeReplacer.replacePalindromeWithOccurrence(word));
    const shortenedUrlPart = transformedWords.join("").substring(0, 5);

    const shortenedUrl = `${this.staticDomain}/${shortenedUrlPart}`;
    return shortenedUrl;
  }
}

console.log("Welcome to the Advanced URL Shortener Application!");

const longUrl = readlineSync.question("Enter the long URL: ");

const urlShortener = new UrlShortener("https://www.shorturl.at");
const shortenedUrl = urlShortener.shortenUrl(longUrl);

console.log("\n--- Shortened URL ---");
console.log(`Shortened URL: ${shortenedUrl}`);
