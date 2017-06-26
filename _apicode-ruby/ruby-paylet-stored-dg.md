---
category: section-paylet-stored-dg
---
Request endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Code sample
```ruby
require 'paymentwall' # alternatively, require_relative '/path/to/paymentwall-ruby/lib/paymentwall.rb'
Paymentwall::Base::setApiType(Paymentwall::Base::API_GOODS)
Paymentwall::Base::setAppKey('YOUR_APPLICATION_KEY')
Paymentwall::Base::setSecretKey('YOUR_SECRET_KEY')

widget = Paymentwall::Widget.new(
  'user40012', # uid
  'fp', # widget
  [], # empty product array for stored-product widget call
  {	
  	'email' => 'user@hostname.com',
  	'timestamp' => 'transaction_current_timestamp',
  	'additional_param_name' => 'additional_param_value'
  }
)
puts widget.getHtmlCode()
```