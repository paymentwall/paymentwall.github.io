---
category: section-checkout-onetime
---
Endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Sample Request
```python
product = Product(
    'product301', # ag_external_id
    12.12, # amount
    'USD', # currencyCode
    'test', # ag_name
    Product.TYPE_FIXED # ag_type
)

widget = Widget(
    'user4522', # uid
    'fp', # widget
    [product], # product details for Custom Price widget call
    {
      'email' => 'user@hostname.com',
      'timestamp' => 'transaction_current_timestamp',
      'additional_param_name' => 'additional_param_value'
    }
)
print(widget.get_html_code())
```
