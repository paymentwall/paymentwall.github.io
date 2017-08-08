---
category: section-widget-vc
---
Endpoint

```
GET https://api.paymentwall.com/api/ps/?
```

Sample Request
```ruby
var Paymentwall = require('paymentwall');
Paymentwall.Configure(
    Paymentwall.Base.API_VC,
    'YOUR_PROJECT_KEY',
    'YOUR_SECRET_KEY'
);

var widget = new Paymentwall.Widget(
    'user40012', # uid
    'pw', # widget
    {
        'email': 'user@hostname.com',
        'timestamp': 'current_timestamp',
        'ps' => 'all', // Replace the value of 'ps' with specific payment system short code for Widget API uni
        'addtional_param_name': 'addtional_param_value'
    }
);
widget.getHtmlCode();
```