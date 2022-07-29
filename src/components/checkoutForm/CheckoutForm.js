import AddressForm from "../addressForm/AddressForm"
import PaymentForm from "../paymentForm/PaymentForm"

export default function CheckoutForm({ stepProgress }){
    return(
        <>
        {stepProgress === 0 ? <AddressForm /> : <PaymentForm />}
        </>
    )
}
