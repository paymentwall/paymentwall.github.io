---
category: section-paylet-custom-onetime
---
Request endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Code sample
```ruby
widget = Paymentwall::Widget.new(
  'user40012', # uid
  'fp', # widget
  [
    Paymentwall::Product.new(
      'product301', # ag_external_id
      9.99, # amount
      'USD', # currencyCode
      'Gold Membership', # ag_name
      Paymentwall::Product::TYPE_FIXED # ag_type
    )
  ],
  {
    'email' => 'user@hostname.com',
    'timestamp': 'transaction_current_timestamp',
    'additional_param_name': 'additional_param_value'
  }
)
puts widget.getHtmlCode()
```
