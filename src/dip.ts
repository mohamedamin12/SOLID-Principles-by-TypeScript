//* Wrong approach
// class EmailNotification {
//   sendEmail(message: string): void {
//     console.log(`Sending Email: ${message}`);
//   }
// }

// class NotificationManager {
//   private emailNotification = new EmailNotification();

//   notify(message: string): void {
//     this.emailNotification.sendEmail(message); // Directly depends on a specific class
//   }
// }


//* Correct approach

interface NotificationService {
  sendNotification(message: string): void;
}

class EmailNotification implements NotificationService {
  sendNotification(message: string): void {
    console.log(`Sending Email: ${message}`);
  }
}

class SMSNotification implements NotificationService {
  sendNotification(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

class NotificationManager {
  constructor(private notificationService: NotificationService) {}

  notify(message: string): void {
    this.notificationService.sendNotification(message);
  }
}

const emailNotifier = new NotificationManager(new EmailNotification());
emailNotifier.notify("Welcome!");

const smsNotifier = new NotificationManager(new SMSNotification());
smsNotifier.notify("Welcome!");
