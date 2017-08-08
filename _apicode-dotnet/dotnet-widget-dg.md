---
category: section-widget-dg
---
Endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Sample Request
```c#
using Paymentwall;

Paymentwall_Base.setApiType(Paymentwall_Base.API_GOODS);
Paymentwall_Base.setAppKey("YOUR_PROJECT_KEY"); 
Paymentwall_Base.setSecretKey("YOUR_SECRET_KEY");

widget = Widget(
    'user4522', # uid
    'pw', # widget
    [], # Product parts, leave empty for Widget API
    {
        'email' => 'user@hostname.com',
        'timestamp' => 'transaction_current_timestamp',
        'ps' => 'all', // Replace the value of 'ps' with specific payment system short code for Widget API uni
        'additional_param_name' => 'additional_param_value'
    }
)
print(widget.get_html_code())
```