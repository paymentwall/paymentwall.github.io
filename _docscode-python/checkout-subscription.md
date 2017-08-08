---
codeId: code-checkout-subscription
---
```python
from paymentwall import *
Paymentwall.set_api_type(Paymentwall.API_GOODS)
Paymentwall.set_app_key('YOUR_PROJECT_KEY')
Paymentwall.set_secret_key('YOUR_SECRET_KEY')

product = Product(
    'product301',              # id of the product in your system 
    9.99,                     # price
    'USD',                     # currency code
    'Gold Membership',                    # product name
    Product.TYPE_SUBSCRIPTION, # this is a time-based product
    1,                         # duration is 1
    Product.PERIOD_TYPE_WEEK,  #               week
    True                       # recurring
)

widget = Widget(
    'user40012', # uid
    'pw_1', # widget
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