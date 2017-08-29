---
codeId: brick-charge-capture
---
```javascript
var charge = new Paymentwall.Charge();
charge.otherOperation(chargeid,'capture',function(brick_response){
    brick_response.getFullResponse('JSON');
});
```