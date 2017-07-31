---
category: section-checkout-onetime
---
Endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Sample Request
```javascript
var widget = new Paymentwall.Widget(
  'user40012', // uid
  'p1', // widget 
  [
    new Paymentwall.Product(
      'product301', // ag_external_id
      9.99, // amount
      'USD', // currencycode
      Paymentwall.Product.TYPE_FIXED // ag_type
    )
  ],
  {
  	'email': 'user@hostname.com',
  	'timestamp': 'current_timestamp',
  	'additional_param_name': 'additional_param_value'
  }
);
widget.getHtmlCode();
```
