---
codeId: pingback-listener-vc
---
```ruby
require_relative '/path/to/paymentwall-ruby/lib/paymentwall.rb'
Paymentwall::Base::setApiType(Paymentwall::Base::API_VC)
Paymentwall::Base::setAppKey('YOUR_PROJECT_KEY') # available in your Paymentwall merchant area
Paymentwall::Base::setSecretKey('YOUR_SECRET_KEY') # available in your Paymentwall merchant area

pingback = Paymentwall::Pingback.new(request_get_params, request_ip_address)
if pingback.validate()
    virtualCurrency = pingback.getVirtualCurrencyAmount()
    if pingback.isDeliverable()
        # deliver the virtual currency
    elsif pingback.isCancelable()
        # withdraw the virual currency
    end 
    puts 'OK' # Paymentwall expects response to be OK, otherwise the pingback will be resent
else
    puts pingback.getErrorSummary()
end
```