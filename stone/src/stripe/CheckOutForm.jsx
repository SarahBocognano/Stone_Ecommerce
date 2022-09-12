import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

export const CheckOutForm=()=> {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async(event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if(!error){
      console.log("Token Généré: ", paymentMethod);
      // envoi du token au backend
      try{
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/api/stripe/",
        {
          amount: 100,
          id: id,
        });
        if (response.data.success){
          console.log("Payment réussi")
        }
      }catch(err){
        console.log("Erreur", err)
      }
    } else {
      console.log(error.message);
    }
  }

  return(
    <form onSubmit={handleSubmit} style={{ maxWidth: 400}}>
      <CardElement
        options={{
          hidePostalCode: true
        }} 
      />
        <button>Pay</button>
    </form>
  )
}