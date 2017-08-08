---
codeId: widget-api-vc
---
```python
from paymentwall import *
Paymentwall.set_api_type(Paymentwall.API_VC)
Paymentwall.set_app_key('YOUR_PROJECT_KEY')
Paymentwall.set_secret_key('YOUR_SECRET_KEY')

widget = Widget(
    'user40012', 
    'pw_1', 
    [], // Product parts, leave empty for Widget API
    {
        'email' => 'user@hostname.com',
        'timestamp' => 'transaction_current_timestamp',
        'ps' => 'all', // Replace the value of 'ps' with specific payment system short code for Widget API uni
        'additional_param_name' => 'additional_param_value'
    }
)
print(widget.get_url())
```