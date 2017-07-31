---
id: payments-sdk-smart_tv
title: SmartTV SDK
sectionid: docs
permalink: payments/sdks/smart_tv
---

# SmartTV SDK

This SDK allows merchants to accept payments on Smart TVs using [PW Smart TV Payments](https://www.paymentwall.com/en/payment-solutions/smart-tv-payments) product.

## INSTALLING THE SDK INTO YOUR APP

Add the following line into your application HTML file:

```html
<script type="text/javascript" src="https://api.paymentwall.com/js/pwsmart/ver/pwsmart.1.4.js"></script>
```

## CONFIGURATION

Make sure that **Evaluation Mode** is ON in your project's settings:

Initialization constructor takes a JSON object as parameter:

```javascript
PWSmartGateway.init(details);
```

| Parameter | Description |
| --- | --- |
| details <br> *required* <br> **JSON object**| JSON object for configuring the SDK |

Detailed JSON object parameters:

| Parameter | Description |
| --- | --- |
| key <br> *required* <br> **string** | Your Project Key (for live payments) or Brick Test Keys (for tests and development) |
| countryCode <br> **string**| ISO 3166-1 alpha-2 code of the country (e.g. "KR" or "JP") |
| containerId <br> **string** | ID of the DOM element to append Smart TV form to specific place in the app (e.g. id of the div element) |
| lang <br> **string**| ISO 639-1, 2 Letter code of the language to localize the payment form. (e.g. "KO" or "JA") |
| gaWebPropertyId <br> **string** | Web property ID listed in the management interface within Google Analytics (only if you use it) |
| brand <br> **string**|  You can use this parameter to specify a special landing page for payments depending on customer's TV set brand. (eg, lgtv, samsung, toshiba, philips, panasonic.)|

Example:
```javascript
PWSmartGateway.init({
    key: 'YOUR_PROJECT_KEY',
    countryCode: 'US',
    containerId: 'my-div',
    lang: 'en',
    gaWebPropertyId: 'UA-XXXX-Y',
    brand: 'lgtv'
});
```

If the library is loaded asynchronously use the callback method below to know when SDK has been fully loaded.

Example:
```javascript
// Asynchronous initialization
window.PWSmartGatewayOnLoadedCallback = function() {
    PWSmartGateway.init({
        key: 'YOUR_PROJECT_KEY',
        countryCode: 'US',
        containerId: 'my-div',
        lang: 'en',
        gaWebPropertyId: 'UA-XXXX-Y',
        brand: 'lgtv'
    });
};
```

## Display the payment widget

After initializing the SDK, use the method *showPaymentForm()* below to show the payment widget. If you did not specify a containerId in the step above, the widget will show itself inside the body HTML tag automatically.

```javascript
PWSmartGateway.showPaymentForm(value, function() { ... }, function() { ... });
```

| Parameter | Description |
| --- | --- | 
| value <br> *required* <br> **JSON object** | JSON object with transaction details (see details below) |
| function() { } <br> **function body** | Transaction successful callback function. Deliver goods for customer in this function |
| function() { } <br> **JSON object** | Transaction failed callback function. Show error message. |

Values of JSON object parameters:

| Parameter | Description |
| --- | --- | 
| productId <br> *required* <br> **string**| Up to 256 characters long. Alphanumeric ID of the product in your system |
| productName <br> **string** | alphanumeric, up to 256 characters long. Product name |
| currency <br> **string** | ISO 4217, Currency of the purchase, e.g. USD, EUR |
| amount <br> **float** | numeric, with "." as decimal delimiter. Amount of the purchase, e.g. 10.00 |
| period <br> *required if subscription* <br> **string** | "day" / "week" / "month" / "year". Type of product period. |
| duration <br> *required if subscription* <br> **string**  | Length of product period, e.g. 3. |
| userID <br> **string** | Alphanumeric, up to 64 characters long. ID of the end-user in your system who is viewing the widget. Examples: numeric ID, username or email. (By default SDK uses device ID) |
| onExit <br> **function** | Optional callback on user exiting the payment window, e.g. after a successful payment |
| showBackButton <br> **boolean**  | Show 'Back' button on payment form. | 
| enablePaymentRecoverFlow <br> **boolean** | Enable 'Recover My Payment' flow. |
| titles <br> **JSON object** | Custom headings: {'buyHeading': 'Subscribe to #product', 'buyHeadingRecurring': '#price per #period'} |

Example:
```javascript
// 2 months subscription
PWSmartGateway.showPaymentForm(
    {
        productId: 'Order_2044',
        productName: '2 month subscription',
        currency: 'USD', 
        amount: '9.99', 
        period: 'month',
        duration: 2,
        userId: 'test_user_2', 
        onExit: function() {},
        showBackButton: true,
        enablePaymentRecoverFlow: true,
        titles: {'buyHeading': 'Subscribe to #product', 'buyHeadingRecurring': '#price per #period'}
    }, 
    function() {
        alert('Payment Success'); // callback on success
    }, 
    function (error) {
        alert('Payment Failure'); // callback on failure
    }
);

// fixed product (no subscription)
PWSmartGateway.showPaymentForm(
    {
        productId: 'Order_2045',
        productName: '5000 Gold Coins',
        currency: 'USD', 
        amount: '9.99',
        userId: 'test_user_2', 
        onExit: function() {},
        showBackButton: true,
        enablePaymentRecoverFlow: true,
        titles: {'buyHeading': 'Subscribe to #product', 'buyHeadingRecurring': '#price per #period'}
    }, 
    function() {
        alert('Payment Success'); // callback on success
    }, 
    function (error) {
        alert('Payment Failure'); // callback on failure
    }
);
```

It is also possible to use [Stored products](/paylet/stored-products) and make a simplified SDK call.

Example:
```javascript
PWSmartGateway.showPaymentForm(
    {
        productId: 'test sku', // SKU ID of the product inside your project's products
    }, 
    function() {
        alert('Payment Success'); // callback on success
    }, 
    function (error) {
        alert('Payment Failure'); // callback on failure
    }
);
```

## Response

Once you make the showPaymentForm() call successfully, the expected result is to see the payment form in screen:

<div class="docs-img">
    <img src="/textures/pic/payments/sdks/smarttv/smarttv-widget.png" style="max-width: 50%">
</div>

## Check payment status

If you would like to first check if the product has already been purchased, you can use checkPaymentStatus() method:

```javascript
PWSmartGateway.checkPaymentStatus(value, function() { ... }, function() { ... });
```

| Parameter | Description |
| --- | --- | 
| value <br> *required* <br> **JSON object**| JSON object with transaction details (see details below) |
| function() <br> **function** | Success callback function |
| function() <br> **function** | Error callback function |

JSON object parameters:

| Parameter | Description |
| --- | --- | 
| productId <br> *required* <br> **string** | alphanumeric, up to 256 characters long. Alphanumeric ID of the product |
| userID <br> *required* <br> **string** | alphanumeric, up to 64 characters long. ID of the end-user in your system who is viewing the widget. Examples: numeric ID, username or email |

If a payment is found using the provided parameters, the success callback receives an array containing JSON objects for each payment found. Please refer [here](https://www.paymentwall.com/en/documentation/Payment-Status-API/3019) for more details about the response JSON objects. If no payment is found, error callback is triggered.

```javascript
PWSmartGateway.checkPaymentStatus(
    {
        productId: 'Order_2044', // Product SKU ID
        userId: 'test_user_2'    // ID of the user. By default SDK uses device ID
    },
    function (response) {
        // callback on success
        // refer to https://www.paymentwall.com/en/documentation/Payment-Status-API/3019 for response format
    },
    function (response) { // No payment found, show payment form so customer can purchase
        PWSmartGateway.showPaymentForm(
            {
                productId: 'Order_2044', // Required. Merchant's product SKU ID
                productName: 'Test Key', // Optional. By default pulled by SKU ID from Products section of Merchant Area
                currency: 'USD',         // Optional. By default pulled by SKU ID from Products section of Merchant Area
                amount: '9.99',          // Optional. By default pulled by SKU ID from Products section of Merchant Area
                userId: 'test_user_2'    // Optional. ID of the user. By default SDK uses device ID
            }, 
            function() {
                alert('success'); // callback on success
            }, 
            function (error) {
                alert('failure'); // callback on failure
            }
        );
    }
);
```

## Subscription management

To cancel a user's subscription, you can show the cancellation form to the end-user using the following method:

```javascript
PWSmartGateway.showCancelSubscriptionForm(value, function() { ... }, function() { ... });
```

| Parameter | Description |
| --- | --- |
| value <br> *required* <br> **JSON object** | JSON object with subscription's details (see details below) |
| function() <br> **function** | Success callback function |
| function() <br> **function** | Error callback function |


JSON object parameters:

| Parameter | Description |
| --- | --- | 
| productId  <br> *required* <br> **string** | alphanumeric, up to 256 characters long | Alphanumeric ID of the product |
| userID  <br> *required* <br> **string** | alphanumeric, up to 64 characters long | ID of the end-user in your system who is viewing the widget. Examples: numeric ID, username or email |


Example:
```javascript
PWSmartGateway.showCancelSubscriptionForm(
    {
        productId: 'product_sku_id',
        userId: 'test_user_2'
    },
    function (response) {
        // callback on success
    },
    function (response) { 
        // callback on failure
    }
);
```

## Error handling

Third parameter of ```PWSmartGateway.showPaymentForm``` is failure callback. It accepts error object of the following format:
```json
{
  "type":"error",
  "code":1001, 
  "message":"Product is not found"
}
```

Possible error codes:
* 1000 - User cancelled the payment process.
* 1001 - Product is not found. Check the product SKU ID, or provide product name, amount and currency

## Pingback Processing
Pingbacks are server-to-server messages that Paymentwall triggers whenever a payment is approved or declined. Implementing pingbacks is required in order to have your project approved. Please refer to [Digital Goods API pingbacks](/notification/pingback-home) to learn about implementation.


## Going live
After you finish the integration, you should submit your project for review in your merchant area.

> See project [go live](/development/review-home).
