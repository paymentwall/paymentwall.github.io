---
category: section-paylet-custom-subscription
---
Endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Sample Request
```ruby
var widget = new Paymentwall.Widget(
  'user40012', # uid
  'p1', # widget
  [
    new Paymentwall.Product(
      'product301', # ag_external_id
      9.99, # amount
      'USD', # currencyCode
      Paymentwall.Product.TYPE_SUBSCRIPTION, # ag_type
      1, # ag_period_length
      Paymentwall.Product.PERIOD_TYPE_MONTH, # ag_period_type
      true # ag_recurring
    )
  ],
  {	
    'email': 'user@hostname.com',
    'timestamp': 'current_timestamp',
    'addtional_param_name': 'addtional_param_value'
  }
);

widget.getHtmlCode();
```

