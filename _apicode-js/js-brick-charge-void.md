---
category: section-brick-charge-void
---
Endpoint
```
POST https://api.paymentwall.com/api/brick/charge/$chargeid/void
```

Sample Request
```javascript
var charge = new Paymentwall.Charge();
charge.otherOperation(chargeid,'void',function(brick_response){
    brick_response.getFullResponse('JSON');
});
```
