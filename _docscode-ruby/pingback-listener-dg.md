---
codeId: pingback-listener-dg
---
```ruby
require 'paymentwall' # alternatively, require_relative '/path/to/paymentwall-ruby/lib/paymentwall.rb'
Paymentwall::Base::setApiType(Paymentwall::Base::API_GOODS)
Paymentwall::Base::setAppKey('YOUR_PROJECT_KEY') # available in your Paymentwall merchant area
Paymentwall::Base::setSecretKey('YOUR_SECRET_KEY') # available in your Paymentwall merchant area

pingback = Paymentwall::Pingback.new(request_get_params, request_ip_address)
if pingback.validate()
    productId = pingback.getProduct().getId()
    if pingback.isDeliverable()
        # deliver the product
    elsif pingback.isCancelable()
        # withdraw the product
    end 
    puts 'OK' # Paymentwall expects response to be OK, otherwise the pingback will be resent
else
    puts pingback.getErrorSummary()
end
```