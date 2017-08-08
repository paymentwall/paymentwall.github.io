---
codeId: widget-api-vc
---
```ruby
require 'paymentwall' # alternatively, require_relative '/path/to/paymentwall-ruby/lib/paymentwall.rb'
Paymentwall::Base::setApiType(Paymentwall::Base::API_VC)
Paymentwall::Base::setAppKey('YOUR_PROJECT_KEY')
Paymentwall::Base::setSecretKey('YOUR_SECRET_KEY')

widget = Paymentwall::Widget.new(
    'user40012',
    'pw_1',
    [],
    {
        'email' => 'user@hostname.com',
        'timestamp' => 'transaction_current_timestamp',
        'ps' => 'all', // Replace the value of 'ps' with specific payment system short code for Widget API uni
        'additional_param_name' => 'additional_param_value'
    }
)
puts widget.getUrl()
```