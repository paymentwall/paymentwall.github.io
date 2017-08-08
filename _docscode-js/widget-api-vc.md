---
codeId: widget-api-vc
---
```js
var Paymentwall = require('paymentwall');
Paymentwall.Configure(
    Paymentwall.Base.API_VC,
    'YOUR_PROJECT_KEY',
    'YOUR_SECRET_KEY'
);

var widget = new Paymentwall.Widget(
    'user40012', // uid
    'pw_1', // widget 
    [], // Product parts, leave empty for Widget API
    {
        'email': 'user@hostname.com',
        'timestamp': 'current_timestamp',
        'ps': 'all', // Replace the value of 'ps' with specific payment system short code for Widget API uni
        'additional_param_name': 'additional_param_value'
    }
);
widget.getUrl();
```