---
codeId: desktop-brick-charge-void
---
```javascript
var charge = new Paymentwall.Charge();
charge.otherOperation(chargeid,'void',function(brick_response){
    brick_response.getFullResponse('JSON');
});
```