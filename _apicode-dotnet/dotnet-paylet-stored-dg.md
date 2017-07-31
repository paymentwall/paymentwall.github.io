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
    'fp', # widget
    [], 
    {
  	    'email' => 'user@hostname.com',
  	    'timestamp' => 'transaction_current_timestamp',
  	    'additional_param_name' => 'additional_param_value'
    }
)
print(widget.get_html_code())
```