import "../css/checkout.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function CheckoutPage() {
    let myState = useSelector((state) => state);
    let productsInCart = myState.AddToCartWorker;

    let totalPrice = myState.AddToCartWorker.reduce((acc , produc)=>{
        produc.price ? acc += produc.price * produc.quantity : acc += produc.id + 200 * produc.quantity
        return acc
    } , 0);

    return (
        <>
        
        <section className="checkout-section">
            <div className="container">
                <div className="head-of-section">
                    <Link to="Shop">
                        <i className="fa-solid fa-arrow-left"></i>
                        Back to Store
                    </Link>
                    <h2>Complate your purchase</h2>
                </div>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    let orderDonePopub = document.querySelector(".order-done-popub");
                    orderDonePopub.classList.add("active");
                    console.log(productsInCart)
                }}>

                    <div className="input-div name-div">
                        <input type="text" placeholder="Name" required/>
                    </div>
                    
                    <div className="input-div last-name-div">
                        <input type="text" placeholder="Last Name" required/>
                    </div>
                    
                    <div className="input-div email-div">
                        <input type="email" placeholder="Email" required/>
                    </div>

                        <div className="select-pay-div">
                            <h4>PAYMENT INFORMATION</h4>
                            <div className="pay-types">
                                <div className="pay-type">
                                    <input type="radio" id="credit" className="checkbox" name="pay"/>
                                    <label htmlFor="credit">
                                        Credit Card
                                        <div className="credits-images">
                                            <img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-1.png" alt=""/>
                                            <img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-2.png" alt=""/>
                                            <img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-3.png" alt=""/>
                                        </div>
                                    </label>
                                </div>
                                <div className="pay-type paypal">
                                    <input type="radio" id="paypal"  name="pay"/>
                                    <label htmlFor="paypal">
                                        PayPal
                                        <img src="https://tse3.mm.bing.net/th?id=OIP.F387clXSIAjQrTo1cExmKgHaE8&pid=Api&P=0&h=180" alt=""/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    
                    <div className="input-div card-name">
                        <input type="text" placeholder="Name On Card" required/>
                    </div>
                    <div className="input-div card-num">
                        <input type="text" placeholder="Credit Card Number" required/>
                    </div>
                    <div className="date-of-order-and-card-info">
                        <input type="date"/>
                        <input type="text" placeholder="MM/YY"/>
                        <input type="text" placeholder="CVC"/>
                    </div>

                    <div className="order-summary-div">
                        <h2>ORDER SUMMARY</h2>
                        <div className="total-amount">
                            <div className="head">
                                <p>Sup total:</p>
                                <p>{totalPrice}$</p>
                            </div>
                            <div className="amount">
                                <h4>Total amount:</h4>
                                <h2>{totalPrice}$</h2>
                            </div>
                            <span className="secure-text">
                                <i className="fa-solid fa-lock"></i>
                                Secure Payment With SSL 128-BIT Encryption
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="submit-btn">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>Buy Now</p>
                    </button>
                </form>
            </div>
            <div className="order-done-popub">
                <div className="done-popub">
                    <img src="https://img.freepik.com/free-vector/3d-cartoon-style-checkmark-phone-screen-icon-success-message-notification-document-scanning-white-background-flat-vector-illustration-paperwork-agreement-concept_778687-985.jpg?w=740&t=st=1687133187~exp=1687133787~hmac=e54271ce5538ea26b5e2116c30125c6197fbe55e97b4cfdc4d8df4d5e8025199"a alt="" />
                    <h2>Order Complate !</h2>
                    <h4>Mission accomplished! Enjoy the fruits of your decision.</h4>
                    <Link className="close-popub" onClick={()=>{
                        let orderDonePopub = document.querySelector(".order-done-popub");
                        orderDonePopub.classList.remove("active")
                        
                    }} to="ComplatedOrder">OK</Link>
                </div>
            </div>
        </section>
        
        </>
    )
}

export default CheckoutPage;