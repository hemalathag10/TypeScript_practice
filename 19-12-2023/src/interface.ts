// Interface for user data
interface User {
  userName: string;
  emailId: string;
  password: string;
}

// Interface for validation result
interface ValidationResult {
  isValid: boolean;
  message?: string;
}

// Class to handle user-related operations
class UserManager {
  private users: User[];

  constructor() {
    // Retrieve users from localStorage or initialize an empty array
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  // Save users to localStorage
  private saveUsersToLocalStorage(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  // Validate username using a regex
  private validateUsername(username: string): ValidationResult {
    const usernameRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*_)[a-zA-Z0-9_]+$/;
    const isValid = usernameRegex.test(username);
    const message = isValid
      ? undefined
      : 'Username must consist of alphabet characters, numbers, and underscores only.';

    return { isValid, message };
  } 

  // Validate password using a regex
  private validatePassword(password: string): ValidationResult {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*()-_=+]).{8,12}$/;
    const isValid = passwordRegex.test(password);
    const message = isValid
      ? undefined
      : 'Password must be at least 8 characters and maximum 12 characters long and includes only alphabets, numbers, and special characters.';

    return { isValid, message };
  }

  // Sign up a new user
  public signUp(user: User): void {
    const usernameValidationResult = this.validateUsername(user.userName);
    const passwordValidationResult = this.validatePassword(user.password);

    if (usernameValidationResult.isValid && passwordValidationResult.isValid) {
      if (this.users.some((existingUser) => existingUser.emailId === user.emailId)) {
        this.displayMessage('Email ID is already registered');
      } else {
        this.users.push(user);
        this.saveUsersToLocalStorage();
        this.displayMessage('Registration Successful');
      }
    } else {
      if (usernameValidationResult.message) this.displayMessage(usernameValidationResult.message);
      if (passwordValidationResult.message) this.displayMessage(passwordValidationResult.message);
    }
  }

  // Login user
  public login(email: string, password: string): void {
    const user = this.users.find((user) => user.emailId.trim() === email.trim());
    user && user.password === password
      ? this.displayMessage('Login successful')
      : this.displayMessage('Invalid email or password! Please try again.');
  }

  // Forgot password
  public forgotPassword(emailId: string, newPassword: string): void {
    const userIndex = this.users.findIndex((user) => user.emailId === emailId);
    if (userIndex !== -1) {
      // Update the password in the local storage
      this.users[userIndex].password = newPassword;
      this.saveUsersToLocalStorage();
      this.displayMessage('Password updated successfully.');
    } else {
      this.displayMessage('User not found. Please check your email address.');
    }
  }

  // Display message in the HTML container
  private displayMessage(message: string): void {
    const messageContainer = document.getElementById('messageContainer');
    if (messageContainer) {
      messageContainer.textContent = message;
    }
  }
}

// Instantiate UserManager
const userManager = new UserManager();

// Event handlers
function handleSignUp(): void {
  const userName = (document.getElementById('username') as HTMLInputElement)?.value;
  const emailId = (document.getElementById('email') as HTMLInputElement)?.value;
  const password = (document.getElementById('password') as HTMLInputElement)?.value;

  const user: User = { userName, emailId, password };

  userManager.signUp(user);
}

function handleLogin(): void {
  const emailId = (document.getElementById('login-email') as HTMLInputElement)?.value;
  const password = (document.getElementById('login-password') as HTMLInputElement)?.value;

  userManager.login(emailId, password) ;
}

function handleForgotPassword(): void {
  const emailId = (document.getElementById('email') as HTMLInputElement)?.value;
  const newPassword = (document.getElementById('new-password') as HTMLInputElement)?.value;

  userManager.forgotPassword(emailId, newPassword);
}
