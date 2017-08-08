---
codeId: pingback-listener-vc
---
```javascript
var Paymentwall = require('paymentwall');
Paymentwall.Configure(
    Paymentwall.Base.API_VC,
    'YOUR_PROJECT_KEY',
    'YOUR_SECRET_KEY'
);

var pingback = new Paymentwall.Pingback("query data in pingback request", "ip address of pingback");
if (pingback.validate()) {
    var virtualCurrency = pingback.getVirtualCurrencyAmount();
    if (pingback.isDeliverable()) {
        // deliver the virtual currency
    } else if (pingback.isCancelable()) {
        // withdraw the virtual currency
    } 
    console.log('OK'); // Paymentwall expects the string OK in response, otherwise the pingback will be resent
} else {
    console.log(pingback.getErrorSummary());
}
```