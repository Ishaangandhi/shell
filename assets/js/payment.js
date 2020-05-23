var PRICE_ID = "price_HIyPH0qoaTCxUz"; // US Prod prices

var EU = ["AT", "BE", "CY", "EE", "FI", "FR",
    "DE", "EL", "IT", "IE", "LV", "LT", "LU",
    "MT", "NL", "PT", "SL", "SK", "ES"];

function ipLookUp() {
    $.ajax('http://ip-api.com/json')
        .then(
            function success(response) {
                var country = response.countryCode;
                if (EU.indexOf(country) >= 0) {
                    PRICE_ID = "price_HKjSLCFExNdquT";
                    document.getElementById("price").innerHTML = "€35";
                } else if (country === "GB") {
                    PRICE_ID = "price_HKk6HwiFULyL0h";
                    document.getElementById("price").innerHTML = "£29,99";
                } else if (country === "CA") {
                    PRICE_ID = "price_HKkCc6FAaelHFW";
                    document.getElementById("price").innerHTML = "CDN$49.99";
                } else if (country === "AU") {
                    PRICE_ID = "price_HKkHosfFeA2Ku5";
                    document.getElementById("price").innerHTML = "$59";
                } else if (country === "IN") {
                    PRICE_ID = "price_HKkKUOlldTFXNj";
                    document.getElementById("price").innerHTML = "₹1,000";
                }
                else {
                    // keep american prices.
                }
                console.log('User\'s Location Data is ', response);
                console.log('User\'s Country', response.country);
            },

            function fail(data, status) {
            }
        );
}
ipLookUp();

function pay() {
    // var PUBLISHABLE_KEY = "pk_test_FBbenQVpcDu1h5GNOoYx1Oh400VKt6pxFn"; // testing
    var PUBLISHABLE_KEY = "pk_live_U9czz5WpQ4wDFAN38pghQp8g00SwwHnFiR"; // prod
    var DOMAIN = "https://shellnotebook.com";
    // var PRICE_ID = "price_HHircHAgfMBpCL"; // testing

    // var PRICE_ID = "price_HIyPH0qoaTCxUz"; // prod

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