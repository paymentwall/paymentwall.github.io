---
id: desktop-paylet
title: Paylet
sectionid: docs
permalink: paylet-home
---

# Paylet

Paylet is a payment methods aggregation platform which contains all the payment methods provided by Paymentwall and our partners.

It can be integrated with a widget in your application.

## Widget

Widget is a web page hosted by Paymentwall to display available payment options to your customers. You can simply display it in a new browser window or embed it into an ```iframe```.

## Included products

Below are the products which Paylet included.

* [PayAlto](/direct/payalto-home).

* [Brick](/direct/brick-home).

* [MINT](/direct/mint-home).

* [Mobiamo](/direct/mobiamo-home).

> The payment methods which are shown in widget depends on user's current IP address and configuration in **payment system** of your project.

## Optional products

* [Stored product](/paylet/stored-products).

* [Custom price](/paylet/custom-price).

* [Invoice](/paylet/invoice).

* [Offerwall](/paylet/offerwall-home).

## Requirements

* A created Paymentwall project with payment widget created.

## Use Paylet

We assume that you have created a Paymentwall project.

* Build the payment widget by using [Paylet API](/API-Reference#section-paylet-stored) to .

+ Display our payment widget. You can use refer to the 2 options below on how to handle the ```widget``` object.
    - ```widget.getHtmlcode()```, which returns an **iframe** html code with default width and height.
    - If you want to have your own iFrame to display our payment widget or open it in a new tab, use ```widget.getUrl()``` instead.

* Setup Pingback listener

[Pingback](/default-pingback) is our instant payment notification. Each pingback has a unique reference ID in our system, you need to proceed the delivery of the product according to our pingback.

## Client side callback

> If you would like to redirect the user after a payment is made, you can pass the ```success_url``` parameter as [optional parameter](/API-Reference#section-paylet-optional-parameter) that will be used as the URL of **Continue** button displayed to the end-user after a payment is made.

For specific events we send a client-side callback via ```window.postMessage()``` mechanism with the event data in JSON format into the parent page of which our widget is embedded. This can be used for updating your page respectively, like blocking **Close** button if the payment is being processed, tracking events in Google Analytics etc.

Below are the currently supported events:

|Event|Description|
|---|---|
|paymentSuccess|Sent once a payment has been successfully. Payment details are sent in data field of the JSON message. See example below. |
|widgetLoaded|Sent once the widget has been loaded.|
|widgetSizeChanged|Sent once the widget dimensions have been changed. Dimensions are sent in data field of JSON message in the following format: ```{"height":"1000px","width":"700px"}```.|
|paymentProcessingStart|Sent once a user started making a payment, e.g. a payment method popup has been opened or a payment method iframe has been loaded. Recommended action: prevent the widget from closing until ```paymentSuccess``` or ```paymentProcessingEnd``` is received.|
|paymentProcessingEnd|Sent once a user stopped making a payment, e.g. by closing a payment method popup or by switching to another payment method thus closing the previously opened iframe.|

Example for ```paymentSuccess``` event:

```json
{
  "event":"paymentSuccess",
  "data":{
    "object":"payment",
    "id":"b123456",
    "created":1419438832,
    "amount":"9.99",
    "currency":"USD",
    "refunded":false,
    "risk":"approved",
    "uid":"user_200255",
    "product_id":"product_100244",
    "payment_system":"cc",
  }
}
```

Sample listener:

```html
<script type="text/javascript">
window.addEventListener('message', function(event) {
  if(event.origin !== 'https://api.paymentwall.com') return;
  var eventData = JSON.parse(event.data);
  if (eventData.event == 'paymentSuccess') {
    // handle the successful payment scenario
    alert('Thank you for paying ' + eventData.data.amount + ' ' + eventData.data.currency);
  }
},false);
</script>
```

> This feature can be activated for your project if you email us at [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com) with your project key.
