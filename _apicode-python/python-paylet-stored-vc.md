---
category: section-paylet-stored-vc
---
Request endpoint

```
GET https://api.paymentwall.com/api/ps/?
```

Code sample
```python
from paymentwall import *
Paymentwall.set_api_type(Paymentwall.API_VC)
Paymentwall.set_app_key('YOUR_PROJECT_KEY')
Paymentwall.set_secret_key('YOUR_SECRET_KEY')

widget = Widget(
	'user40012', # uid
	'p1_1', # widget
	[], 
    {
      'email' => 'user@hostname.com',
      'timestamp' => 'transaction_current_timestamp',
      'additional_param_name' => 'additional_param_value'
    }
)
print(widget.get_html_code())
```