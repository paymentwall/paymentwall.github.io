---
category: section-widget-dg
---
Endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Sample Request
```javascript
var Paymentwall = require('paymentwall');
Paymentwall.Configure(
  Paymentwall.Base.API_GOODS,
  'YOUR_APPLICATION_KEY',
  'YOUR_SECRET_KEY'
);

var widget = new Paymentwall.Widget(
  'user4002', // uid
  'p1', // widget
  [], //empty product array for stored-product widget call
  {	
  	'email': 'user@hostname.com',
  	'timestamp': 'transaction_current_timestamp',
  	'additional_param_name': 'additional_param_value'
  }
);
widget.getHtmlCode();
```