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
    'YOUR_PROJECT_KEY',
    'YOUR_SECRET_KEY'
);

var widget = new Paymentwall.Widget(
    'user4002', // uid
    'pw', // widget
    [], // Product parts, leave empty for Widget API
    {	
        'email': 'user@hostname.com',
        'timestamp': 'transaction_current_timestamp',
        'ps': 'all', // Replace the value of 'ps' with specific payment system short code for Widget API uni
        'additional_param_name': 'additional_param_value'
    }
);
widget.getHtmlCode();
```