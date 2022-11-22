import { useState, useContext } from "react"
import { usePaystackPayment } from "react-paystack"
import axios from "axios"
import { Context } from '../../../app/AppContext'

const Payment = () => {

  const { token } = useContext(Context)
  const [email, setEmail] = useState("")

  const config = {
    reference: "",
    email: email,
    amount: 5000,
    publicKey: 'pk_test_99b4eab94e35b73b28e2a3632de5a1bf8a3ad2e5'
  }

  const paymentSuccess =  (reference) => {
    console.log(reference.reference);
    const data = {
      reference: reference.reference
    }
    axios.post('http://127.0.0.1:8000/confirm-payment/', data, {
      headers: {Authorization: `Token ${token}`}
    })
    .then((response) => {
      console.log(response);
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response);
      }
      else if (error.request) {
        console.log(error.request);
      }
      else {
        console.log('unable to send');
      }
    })
   
  }


  
  const paymentStop = () => {
    // what to do if user cancel payment
  }
  
  const initializePayment = usePaystackPayment(config)

  return (
    <div>
      <div>
        <button
          disabled={!Boolean(email)}
          onClick={() => {
            initializePayment(paymentSuccess, paymentStop)
          }}  
        >
          Pay N 50
        </button>
        <input
          type={'email'}
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder="Enter your email address"
        />
      </div>
    </div>
  )
}

export default Payment
