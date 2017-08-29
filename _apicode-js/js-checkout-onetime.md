---
category: section-checkout-onetime
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
    'user40012', // uid
    'pw', // widget 
    [
        new Paymentwall.Product(
            'product301', // ag_external_id
            9.99, // amount
            'USD', // currencycode
            Paymentwall.Product.TYPE_FIXED // ag_type
        )
    ],
    {
        'email': 'user@hostname.com',
        'timestamp': 'current_timestamp',
        'ps': 'all', // Replace it with specific payment system short code for single payment methods
        'additional_param_name': 'additional_param_value'
    }
);
widget.getUrl();
```
