---
category: section-paylet-stored-dg
---
Request endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Code sample
```python
from paymentwall import *
Paymentwall.set_api_type(Paymentwall.API_GOODS)
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