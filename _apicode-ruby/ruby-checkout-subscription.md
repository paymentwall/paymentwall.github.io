---
category: section-checkout-subscription
---
Endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Sample Request
```ruby
widget = Paymentwall::Widget.new(
    'user40012', # uid
    'pw', # widget
    [
        Paymentwall::Product.new(
            'product301', # ag_external_id
            9.99, # amount
            'USD', # currencyCode
            'Gold Membership', # ag_name
            Paymentwall::Product::TYPE_SUBSCRIPTION, # ag_type
            1, # ag_period_length
            Paymentwall::Product::PERIOD_TYPE_MONTH, # ag_period
            true # recurring
        )
    ],
    {
        'email' => 'user@hostname.com',
        'timestamp' => 'transaction_current_timestamp',
        'ps' => 'all', # Replace it with specific payment system short code for single payment methods
        'additional_param_name' => 'additional_param_value'
    }
)
puts widget.getUrl()
```

