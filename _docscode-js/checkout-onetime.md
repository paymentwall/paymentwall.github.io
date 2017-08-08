---
codeId: code-checkout-onetime
---
```js
var Paymentwall = require('paymentwall');
Paymentwall.Configure(
    Paymentwall.Base.API_GOODS,
    'YOUR_APPLICATION_KEY',
    'YOUR_SECRET_KEY'
);

var widget = new Paymentwall.Widget(
    'user40012', // uid
    'pw_1', // widget 
    [
        new Paymentwall.Product(
            'product301', // ag_external_id
            9.99, // amount
            'USD', // currencycode
            'Gold Membership', // ag_name
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