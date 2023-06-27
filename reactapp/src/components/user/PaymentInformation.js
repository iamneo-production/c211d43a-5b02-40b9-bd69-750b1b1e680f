import React, { useState } from 'react';
import '../../Styles.css';

function PaymentInformation() {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      cardNumber: '**** **** **** 1234',
      expirationDate: '12/25',
      name: 'John Doe',
    },
    // Add more payment methods if needed
  ]);

  const handleAddPaymentMethod = () => {
    // Logic to add a new payment method
    // You can open a modal or navigate to a new page to add payment details
    console.log('Add Payment Method');
  };

  return (
    <div className="payment-information">
      <h4>Payment Information</h4>

      <div className="payment-methods">
        <h5>Saved Payment Methods</h5>

        {paymentMethods.map((method) => (
          <div key={method.id} className="payment-method">
            <div>Card Number: {method.cardNumber}</div>
            <div>Expiration Date: {method.expirationDate}</div>
            <div>Name: {method.name}</div>
          </div>
        ))}
      </div>

      <button onClick={handleAddPaymentMethod}>Add New Payment Method</button>
    </div>
  );
}

export default PaymentInformation;
