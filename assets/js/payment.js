var PRICE_ID = "price_HIyPH0qoaTCxUz"; // US Prod prices

var EU = ["AT", "BE", "CY", "EE", "FI", "FR",
    "DE", "EL", "IT", "IE", "LV", "LT", "LU",
    "MT", "NL", "PT", "SL", "SK", "ES"];

function ipLookUp() {
    /*
    geoip2.country(
        function success(geoipResponse) {
            // var country = response.countryCode;
            var country = geoipResponse.country.iso_code;
            // console.log(geoipResponse.country);
            if (EU.indexOf(country) >= 0) {
                PRICE_ID = "price_HKjSLCFExNdquT";
                document.getElementById("price").innerHTML = "€35";
            } else if (country === "GB") {
                PRICE_ID = "price_HKk6HwiFULyL0h";
                document.getElementById("price").innerHTML = "£29.99";
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
        },
        function fail(error) {

        }
    );
    */

   var _0x8702=['https://api.ipregistry.co/?key','jxh0jqj3','=nerxqm'];(function(_0x2a489a,_0x870237){var _0x5723e2=function(_0x1002a6){while(--_0x1002a6){_0x2a489a['push'](_0x2a489a['shift']());}};_0x5723e2(++_0x870237);}(_0x8702,0x115));var _0x5723=function(_0x2a489a,_0x870237){_0x2a489a=_0x2a489a-0x0;var _0x5723e2=_0x8702[_0x2a489a];return _0x5723e2;};var a=_0x5723('0x1');var b=_0x5723('0x0');var x=_0x5723('0x2')+a+b;
    $.ajax(x)
        .then(
            function success(geoipResponse) {
                var country = geoipResponse.location.country.code;
                console.log(geoipResponse);
                if (EU.indexOf(country) >= 0) {
                    PRICE_ID = "price_HKjSLCFExNdquT";
                    document.getElementById("price").innerHTML = "€35";
                } else if (country === "GB") {
                    PRICE_ID = "price_HKk6HwiFULyL0h";
                    document.getElementById("price").innerHTML = "£29.99";
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
            },
            function fail(error) {
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