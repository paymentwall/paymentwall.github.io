---
id: desktop-paylet-widget
title: Widget Reference
sectionid: docs
permalink: paylet/widget/reference
---

# Widget Reference

* [Additional parameters](#additional-parameters).

* [Client side callback](#client-side-callback).

* [Deep-linked payment system](#deep-linked-payment-system).

## Additional parameters

There are two main categories for additional parameters:

* Optional parameters.

We provide a set of reserved parameters, see [optional parameter](/apis#section-paylet-optional-parameter) in API call for description of each parameter.

* Custom parameters

Paylet API allows you to add your own parameter as additional parameters while building widget. We can help you to do parameter transmission and communicate it back to your server side via pingback. See [custom pingback parameter with own value](/pingback-custom-parameters#parameter-with-own-value) for more details.

> Check [Paylet API](/apis#section-paylet-stored) and find the code sample about how to add additional parameters.

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

Deep-linked payment system means the pages of desired payment method are displayed into our widgets directly. 

It requires more operations, that is, you will need to build product selection page and payment methods selection page in your own application, but has a better payment experience for your customers. 

> We recommend you to use [Custom Price](/paylet/custom-price) with deep-linked payment system.

Product selection page should be fairly easy to be finished on your side. Paymentwall provides [payment system API](/apis#section-tools-payment-systems) which can help you with payment system selection page. Below are the steps:

* Obtain the country code of your customer by ip address. You can also assign a static country code if your customer are all from a same country.

* Use [payment system API](/apis#section-tools-payment-systems) with the obtained country code to retrieve the list of payment methods activated in your project for the specific country.

* In your payment methods selection page, combine using  ```img_url```, ```name``` with *radio button* or your preferred way to create available payment methods list.

* Bind each available payment method with ```id```. When you are building widget, add ```ps``` in [optional parameter](/apis#section-paylet-optional-parameter) as an additional parameter and set the value as ```id```.

That's it, you have integrated deep-linked payment system into your application.