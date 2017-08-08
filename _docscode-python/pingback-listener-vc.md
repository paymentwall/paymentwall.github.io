---
codeId: pingback-listener-vc
---
```python
from paymentwall import *
Paymentwall.set_api_type(Paymentwall.API_VC)
Paymentwall.set_app_key('YOUR_PROJECT_KEY')
Paymentwall.set_secret_key('YOUR_SECRET_KEY')

pingback = Pingback({x:y for x, y in request.args.iteritems()}, request.remote_addr)
if pingback.validate():
    virtual_currency = pingback.get_vc_amount()
    if pingback.is_deliverable():
        # deliver the virtual currency
        pass
    elif pingback.is_cancelable():
        # withdraw the virtual currency
        pass 
    print('OK') # Paymentwall expects response to be OK, otherwise the pingback will be resent
else:
    print(pingback.get_error_summary())
end
```