---
category: section-checkout
---
Initialization:
```ruby
require 'paymentwall' # alternatively, require_relative '/path/to/paymentwall-ruby/lib/paymentwall.rb'
Paymentwall::Base::setApiType(Paymentwall::Base::API_GOODS)
Paymentwall::Base::setAppKey('YOUR_APPLICATION_KEY')
Paymentwall::Base::setSecretKey('YOUR_SECRET_KEY')
```