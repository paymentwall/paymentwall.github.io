---
category: section-widget-dg
---
Endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Sample Request
```python
from paymentwall import *
Paymentwall.set_api_type(Paymentwall.API_GOODS)
Paymentwall.set_app_key('YOUR_PROJECT_KEY')
Paymentwall.set_secret_key('YOUR_SECRET_KEY')

widget = Widget(
    'user4522', # uid
    'fp', # widget
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