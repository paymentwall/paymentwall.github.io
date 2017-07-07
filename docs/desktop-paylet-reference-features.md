---
id: desktop-paylet-reference-features
title: Features
sectionid: docs
permalink: /paylet/reference/feature
---

# Features

You can choose to combine the following features to improve the payment experience of your customer when interacting with widgets:

* [Additional parameters](#additional-parameters).

* [Client side callback](#client-side-callback).

* [Deep-linked payment system](#deep-linked-payment-system).

## Additional parameters

Additional parameters can be added into [Paylet API](/apis#section-paylet-stored) to meet the additional requirements when building widgets. There are two main categories for additional parameters:

* Optional parameters.

The [optional parameter](/apis#section-paylet-optional-parameter) is a collection of reversed parameters to implement certain functions. 

* Custom parameters

Paylet API allows you to add your own parameter as additional parameters while building widget. We can help you to do parameter transmission and communicate it back to your server side via pingback. See [custom pingback parameter with own value](/pingback-custom-parameters#parameter-with-own-value) for more details.

## Client side callback

If you would like to redirect the user after a payment is made, you can pass the ```success_url``` parameter as [optional parameter](/apis#section-paylet-optional-parameter) that will be used as the URL of **Continue** button displayed to the end-user after a payment is made.

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
    "payment_system":"cc"
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

## Deep-linked payment system

Deep-linked payment system directly displays the user's desired payment page in our widgets. It requires [Custom Price](/paylet/custom-price). 

You can build your own products selection interface, and set up your payment options interface based on our [Payment Systems API](/apis#section-tools-payment-systems) to provide your users a better payment experience.

* Obtain the country code of your customer based on his ip address. You can also assign a static country code if your customer are all from a same country.

* You can dynamically pull the list of methods via [Payment Systems API](/apis#section-tools-payment-systems) active in a given country, and then embed the respective buttons into your page. 

A list of all methods we support for the specific country will be returned by Payment System API, you can use it to build your payment methods selection form. Below is a sample for one payment method:

```json
[{
  "id":"idealnl",
  "name":"iDeal",
  "new_window":false,
  "img_url":"https:\/\/api.paymentwall.com\/images\/ps_logos\/pm_ideal.png",
  "img_class":"ideal"
}]
```

Combine using  ```img_url```, ```name``` with *radio button* or your preferred way to create available payment methods list. Afterwards, bind each available payment method with ```id``` which is returned in payment system API for next step.

* Once the user decides which payment method he wants to use, you can use [Paylet API](/apis#section-paylet-custom) and add ```ps``` as [optional parameter](/apis#section-paylet-optional-parameter) values ```id``` (Obtained in last step) to redirect him to the corresponding payment page.

That's it, you have integrated deep-linked payment system into your application.