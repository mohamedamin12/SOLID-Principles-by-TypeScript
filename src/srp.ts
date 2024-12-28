//* Wrong approach
// class UserManager {
//   //* Handles user management
//   createUser(name: string, email: string): void {
//     console.log(`User ${name} with email ${email} created.`);
//   }

//   //* Also handles email sending (violates SRP)
//   sendEmail(email: string, message: string): void {
//     console.log(`Sending email to ${email}: ${message}`);
//   }
// }

//* Correct approach
class UserManager {
  createUser(name: string, email: string): void {
    console.log(`User ${name} with email ${email} created.`);
  }
}

class EmailService {
  sendEmail(email: string, message: string): void {
    console.log(`Sending email to ${email}: ${message}`);
  }
}

// Responsibilities are separated
const userManager = new UserManager();
const emailService = new EmailService();

userManager.createUser("Mohamed", "mohamed@example.com");
emailService.sendEmail("mohamed@example.com", "Welcome to our platform!");
