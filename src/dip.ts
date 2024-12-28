//* Wrong approach
// class PayPalPayment {
//   processPayment(amount: number): void {
//     console.log(`Processing payment of $${amount} through PayPal.`);
//   }
// }

// class PaymentService {
//   private paymentProcessor = new PayPalPayment(); // Direct dependency on a specific payment method

//   makePayment(amount: number): void {
//     this.paymentProcessor.processPayment(amount); // Tightly coupled to PayPal
//   }
// }

// // Using the service
// const paymentService = new PaymentService();
// paymentService.makePayment(100); // Only PayPal is supported



//* Correct approach

// Define an abstraction for payment processors
interface PaymentProcessor {
  processPayment(amount: number): void;
}

// Concrete implementation for PayPal
class PayPalPayment implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount} through PayPal.`);
  }
}

// Concrete implementation for Stripe
class StripePayment implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount} through Stripe.`);
  }
}

// Concrete implementation for Cash
class CashPayment implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount} in cash.`);
  }
}

// PaymentService depends on abstraction
class PaymentService {
  constructor(private paymentProcessor: PaymentProcessor) {}

  makePayment(amount: number): void {
    this.paymentProcessor.processPayment(amount);
  }
}

// Using the service
const paypalService = new PaymentService(new PayPalPayment());
paypalService.makePayment(100); // Processed through PayPal

const stripeService = new PaymentService(new StripePayment());
stripeService.makePayment(200); // Processed through Stripe

const cashService = new PaymentService(new CashPayment());
cashService.makePayment(50); // Processed in cash


