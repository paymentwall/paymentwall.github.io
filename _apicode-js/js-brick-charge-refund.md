---
category: section-brick-charge-refund
---

Endpoint

```
POST https://api.paymentwall.com/api/brick/charge/$chargeid/refund
```

Sample Request
```javascript
var charge = new Paymentwall.Charge();
charge.otherOperation(chargeid,'refund',function(brick_response){
  brick_response.getFullResponse('JSON');
});
```