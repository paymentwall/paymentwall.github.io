---
category: section-brick-charge-capture
---

Endpoint
```
POST https://api.paymentwall.com/api/brick/charge/$chargeid/capture
```

Sample Request
```javascript
var charge = new Paymentwall.Charge();
charge.otherOperation(chargeid,'capture',function(brick_response){
    brick_response.getFullResponse('JSON');
});
```