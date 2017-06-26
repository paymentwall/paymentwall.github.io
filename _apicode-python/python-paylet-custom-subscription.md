---
category: section-paylet-custom-subscription
---
Request endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Code sample
```python
product = Product(
    'product301', # ag_external_id
    12.12, # amount
    'USD', # currencyCode
    'test', # ag_name
    Product.TYPE_SUBSCRIPTION, # ag_type
    1, # ag_period_length
    Product.PERIOD_TYPE_WEEK, # ag_period_type
    True # ag_recurring
)

widget = Widget(
    'user4522', # uid
    'fp', # widget
    [product], # product details for custom price widget call
    {
      'email' => 'user@hostname.com',
      'timestamp' => 'transaction_current_timestamp',
      'additional_param_name' => 'additional_param_value'
    }
)
print(widget.get_html_code())
```

