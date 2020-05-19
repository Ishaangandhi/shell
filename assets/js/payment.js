function pay() {
    // var PUBLISHABLE_KEY = "pk_test_FBbenQVpcDu1h5GNOoYx1Oh400VKt6pxFn"; // testing
    var PUBLISHABLE_KEY = "pk_live_U9czz5WpQ4wDFAN38pghQp8g00SwwHnFiR"; // prod
    var DOMAIN = "https://shellnotebook.com";
    // var PRICE_ID = "price_HHircHAgfMBpCL"; // testing
    var PRICE_ID = "price_HIyPH0qoaTCxUz"; // prod

    var stripe = Stripe(PUBLISHABLE_KEY);
    stripe
        .redirectToCheckout({
            mode: 'payment',
            lineItems: [{ price: PRICE_ID, quantity: 1 }],
            successUrl:
                DOMAIN + "/success.html?session_id={CHECKOUT_SESSION_ID}",
            cancelUrl: DOMAIN + ""
        });
}

document.getElementById("buyButton").onclick = pay;
document.getElementById("buyButton2").onclick = pay;