var PRICE_ID = "price_HIyPH0qoaTCxUz"; // US Prod prices

var EU = ["AT", "BE", "CY", "EE", "FI", "FR",
    "DE", "EL", "IT", "IE", "LV", "LT", "LU",
    "MT", "NL", "PT", "SL", "SK", "ES"];

http://api.ipstack.com/check

function ipLookUp() {
    var _0x4c1a = ['http://api.ipstack.com/check?access_key',


        'fcd2147e00bcfa372ab9561c12'];
    (function (_0x461772, _0x4c1adb) {
        var _0x5dbf0e = function (_0x59a1b1) {
            while (--_0x59a1b1) {
                _0x461772['push'](_0x461772['shift']());
            }
        };
        _0x5dbf0e(++_0x4c1adb);
    }(_0x4c1a, 0x18a)); var _0x5dbf = function (_0x461772, _0x4c1adb) {
        _0x461772 = _0x461772 - 0x0;
        var _0x5dbf0e = _0x4c1a[_0x461772]; return _0x5dbf0e;
    }; var a = '=aea0a1';
    var b = _0x5dbf('0x1'); var x = _0x5dbf('0x0') + a + b;

    $.ajax(x)
        .then(
            function success(geoipResponse) {
                var country = geoipResponse.country_code;
                // console.log(geoipResponse);
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