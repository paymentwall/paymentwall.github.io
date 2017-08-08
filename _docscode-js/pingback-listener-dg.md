---
codeId: pingback-listener-dg
---
```javascript
var Paymentwall = require('paymentwall');
Paymentwall.Configure(
    Paymentwall.Base.API_GOODS,
    'YOUR_PROJECT_KEY',
    'YOUR_SECRET_KEY'
);

var pingback = new Paymentwall.Pingback("query data in pingback request", "ip address of pingback");
if (pingback.validate()) {
    var productId = pingback.getProduct().getId();
    if (pingback.isDeliverable()) {
        // deliver the product
    } else if (pingback.isCancelable()) {
        // withdraw the product
    } 
    console.log('OK'); // Paymentwall expects the string OK in response, otherwise the pingback will be resent
} else {
    console.log(pingback.getErrorSummary());
}
```