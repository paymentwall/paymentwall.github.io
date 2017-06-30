---
category: section-brick-charge-get
---

Endpoint

```
GET https://api.paymentwall.com/api/brick/charge/$chargeid
```

Sample Request
```javascript
var charge = new Paymentwall.Charge();
charge.otherOperation(chargeid,'detail',function(brick_response){
  brick_response.getFullResponse('JSON');
});
```