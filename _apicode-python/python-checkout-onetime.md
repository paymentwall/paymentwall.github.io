---
category: section-checkout-onetime
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

product = Product(
    'product301', # ag_external_id
    12.12, # amount
    'USD', # currencyCode
    'test', # ag_name
    Product.TYPE_FIXED # ag_type
)

widget = Widget(
    'user4522', # uid
    'pw', # widget
    [product],
    {
        'email' : 'user@hostname.com',
        'timestamp' : 'transaction_current_timestamp',
        'ps' : 'all', # Replace it with specific payment system short code for single payment methods
        'additional_param_name' : 'additional_param_value'
    }
)
print(widget.get_url())
```
