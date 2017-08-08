---
codeId: pingback-listener-dg
---
```python
from paymentwall import *
Paymentwall.set_api_type(Paymentwall.API_GOODS)
Paymentwall.set_app_key('YOUR_PROJECT_KEY') # available in your merchant area
Paymentwall.set_secret_key('YOUR_SECRET_KEY') # available in your merchant area

pingback = Pingback({x:y for x, y in request.args.iteritems()}, request.remote_addr)

if pingback.validate():
    product_id = pingback.get_product().get_id()
    if pingback.is_deliverable():
        # deliver the product
        pass
    elif pingback.is_cancelable():
        # withdraw the product
        pass

    print('OK') # Paymentwall expects response to be OK, otherwise the pingback will be resent

else:
    print(pingback.get_error_summary())
```