---
id: notification-client_side_callback
title: Client-side Callback
sectionid: docs
permalink: reference/client-side-callback
---

# Client-side Callback

For specific events we send a *client-side callback* via ```window.postMessage()``` mechanism with the event data in JSON format into the parent page of which our *payment page* is embedded. This can be used for updating your page respectively, like blocking **Close** button if the payment is being processed, tracking events in Google Analytics etc. 

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

