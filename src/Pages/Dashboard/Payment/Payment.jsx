
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../Components/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
// TODO : add key

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK)
const Payment = () => {

    return (
        <div>
            <SectionTitle heading={'Payment'} subHeading={'Please pay to eat'} ></SectionTitle>
            <div>
               <Elements stripe={stripePromise} >
                   <CheckoutForm></CheckoutForm>
               </Elements>
            </div>
        </div>
    );
};

export default Payment;