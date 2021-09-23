import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios"
const KEY = "pk_test_51HzCR7LGboCoR3mfiE9GzeLEyJrf4q4KzdP5zBKyu5LMoan4MURbOtXsj2LVDoZQUiSAsciNBYkZBiZZZ5dEgMQU00XNe03b3Q"

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:3300/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000
                })
                console.log(res)
            } catch (e) {
                console.log(e)
            }
        }
        makeRequest()
    }, [stripeToken])
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {stripeToken ? (<span>Processing. Please wait...</span>) : (
                <StripeCheckout name="MTM" image="https://avatars/githubusercontent.com/u/1486366?v=4"
                    billingAddress
                    shippingAddress
                    description=" Your total is $10"
                    amount={1000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button
                        style={{ border: "none", width: 120, borderRadius: 5, padding: "20px", backgroundColor: "black", color: "white", fontWeight: "600", cursor: "pointer" }}
                    >
                        Pay Now
                    </button>
                </StripeCheckout>
            )}
        </div>
    )
}

export default Pay;