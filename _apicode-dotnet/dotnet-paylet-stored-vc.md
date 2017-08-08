---
category: section-widget-vc
---
Endpoint

```
GET https://api.paymentwall.com/api/ps/?
```

Sample Request
```c#
from paymentwall import *
Paymentwall.set_api_type(Paymentwall.API_VC)
Paymentwall.set_app_key('YOUR_PROJECT_KEY')
Paymentwall.set_secret_key('YOUR_SECRET_KEY')

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