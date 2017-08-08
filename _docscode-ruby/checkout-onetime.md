---
codeId: code-checkout-onetime
---
```ruby
require 'paymentwall' # alternatively, require_relative '/path/to/paymentwall-ruby/lib/paymentwall.rb'
Paymentwall::Base::setApiType(Paymentwall::Base::API_GOODS)
Paymentwall::Base::setAppKey('YOUR_APPLICATION_KEY')
Paymentwall::Base::setSecretKey('YOUR_SECRET_KEY')

widget = Paymentwall::Widget.new(
    'user40012',
    'pw_1',
    [
        Paymentwall::Product.new(
            'product301',
            9.99,
            'USD',
            'Gold Membership',
            Paymentwall::Product::TYPE_FIXED
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