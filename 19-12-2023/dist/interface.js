"use strict";
// Class to handle user-related operations
class UserManager {
    constructor() {
        // Retrieve users from localStorage or initialize an empty array
        this.users = JSON.parse(localStorage.getItem('users') || '[]');
    }
    // Save users to localStorage
    saveUsersToLocalStorage() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }
    // Validate username using a regex
    validateUsername(username) {
        const usernameRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*_)[a-zA-Z0-9_]+$/;
        const isValid = usernameRegex.test(username);
        const message = isValid
            ? undefined
            : 'Username must consist of alphabet characters, numbers, and underscores only.';
        return { isValid, message };
    }
    // Validate password using a regex
    validatePassword(password) {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*()-_=+]).{8,12}$/;
        const isValid = passwordRegex.test(password);
        const message = isValid
            ? undefined
            : 'Password must be at least 8 characters and maximum 12 characters long and includes only alphabets, numbers, and special characters.';
        return { isValid, message };
    }
    // Sign up a new user
    signUp(user) {
        const usernameValidationResult = this.validateUsername(user.userName);
        const passwordValidationResult = this.validatePassword(user.password);
        if (usernameValidationResult.isValid && passwordValidationResult.isValid) {
            if (this.users.some((existingUser) => existingUser.emailId === user.emailId)) {
                this.displayMessage('Email ID is already registered');
            }
            else {
                this.users.push(user);
                this.saveUsersToLocalStorage();
                this.displayMessage('Registration Successful');
            }
        }
        else {
            if (usernameValidationResult.message)
                this.displayMessage(usernameValidationResult.message);
            if (passwordValidationResult.message)
                this.displayMessage(passwordValidationResult.message);
        }
    }
    // Login user
    login(email, password) {
        const user = this.users.find((user) => user.emailId.trim() === email.trim());
        user && user.password === password
            ? this.displayMessage('Login successful')
            : this.displayMessage('Invalid email or password! Please try again.');
    }
    // Forgot password
    forgotPassword(emailId, newPassword) {
        const userIndex = this.users.findIndex((user) => user.emailId === emailId);
        if (userIndex !== -1) {
            // Update the password in the local storage
            this.users[userIndex].password = newPassword;
            this.saveUsersToLocalStorage();
            this.displayMessage('Password updated successfully.');
        }
        else {
            this.displayMessage('User not found. Please check your email address.');
        }
    }
    // Display message in the HTML container
    displayMessage(message) {
        const messageContainer = document.getElementById('messageContainer');
        if (messageContainer) {
            messageContainer.textContent = message;
        }
    }
}
// Instantiate UserManager
const userManager = new UserManager();
// Event handlers
function handleSignUp() {
    var _a, _b, _c;
    const userName = (_a = document.getElementById('username')) === null || _a === void 0 ? void 0 : _a.value;
    const emailId = (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value;
    const password = (_c = document.getElementById('password')) === null || _c === void 0 ? void 0 : _c.value;
    const user = { userName, emailId, password };
    userManager.signUp(user);
}
function handleLogin() {
    var _a, _b;
    const emailId = (_a = document.getElementById('login-email')) === null || _a === void 0 ? void 0 : _a.value;
    const password = (_b = document.getElementById('login-password')) === null || _b === void 0 ? void 0 : _b.value;
    userManager.login(emailId, password);
}
function handleForgotPassword() {
    var _a, _b;
    const emailId = (_a = document.getElementById('email')) === null || _a === void 0 ? void 0 : _a.value;
    const newPassword = (_b = document.getElementById('new-password')) === null || _b === void 0 ? void 0 : _b.value;
    userManager.forgotPassword(emailId, newPassword);
}
