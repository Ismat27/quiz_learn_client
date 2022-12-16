import { usePaystackPayment } from "react-paystack"
import axios from "axios"
import styled from "styled-components"
import { useGlobalContext } from "../../../app/AppContext"

const BASE_URL = process.env.REACT_APP_BASE_API_URL


const Payment = () => {

  const { price, plan, token, userDetails } = useGlobalContext()

  const config = {
    reference: "",
    email: userDetails.email,
    amount: price[plan],
    publicKey: 'pk_test_99b4eab94e35b73b28e2a3632de5a1bf8a3ad2e5'
  }

  const paymentSuccess =  (reference) => {
    console.log(reference.reference);
    const data = {
      reference: reference.reference
    }
    axios.post(`${BASE_URL}/confirm-payment/`, data, {
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
    <Wrapper>
      <div className="capitalize section-header">
        <h1 className="section-title">
          payment method
        </h1>
        <p className="section-info">
          select your payment method and Proceed with the widrawals.
        </p>
      </div>
      <div className="btns-box">
        <button
          className="btn action-btn2"
          disabled={!Boolean(userDetails.email)}
          onClick={() => {
            initializePayment(paymentSuccess, paymentStop)
          }}  
        >
          Pay N {price[plan] / 100 }
        </button>
        {/* <button
          className="btn action-btn2 transfer"
        >
          back transfer
        </button> */}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding-block: 2rem 5rem;
max-width: 500px;
p {
  font-size: 16px;
}
.section-header {
  max-width: 300px;
  margin-bottom: 2rem;
}
${'' /* .btns-box {
  display: flex;
  justify-content: space-between;
} */}
.transfer {
  background: #D9D9D9;
  color: black;
}
@media (min-width: 576px) {
  button {
    width: 200px
  }
}
`

export default Payment
