---
category: section-widget-dg
---
Endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Sample Request
```ruby
require 'paymentwall' # alternatively, require_relative '/path/to/paymentwall-ruby/lib/paymentwall.rb'
Paymentwall::Base::setApiType(Paymentwall::Base::API_GOODS)
Paymentwall::Base::setAppKey('YOUR_PROJECT_KEY')
Paymentwall::Base::setSecretKey('YOUR_SECRET_KEY')

widget = Paymentwall::Widget.new(
    'user40012', # uid
    'pw', # widget
    [], # Product parts, leave empty for Widget API
    {
        'email' => 'user@hostname.com',
        'timestamp' => 'transaction_current_timestamp',
        'ps' => 'all', // Replace the value of 'ps' with specific payment system short code for Widget API uni
        'additional_param_name' => 'additional_param_value'
    }
)
puts widget.getHtmlCode()
```