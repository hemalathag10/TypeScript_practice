// Function with an optional parameter
const greet = (name?: string) => {
    if (name) {
      console.log(`Hello, ${name}!`);
    } else {
      console.log('Hello, Guest!');
    }
  };
  
  // Example usage
  greet();            
  greet('John');      
  