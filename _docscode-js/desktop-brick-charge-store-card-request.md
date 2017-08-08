---
codeId: desktop-brick-charge-store-card-request
---
```javascript
var charge = new Paymentwall.Charge(                            
    0.5,                                                                                     
    'USD',                                            
    'description',                                                 
    'test@paymentwall.com',                                        
    'fingerprint',                                                                    
    'PERMNANET_TOKEN', // replace it with the stored permanent token                                             
    {'custom[param_name]':'param_value'} 
);

charge.createCharge(function(brick_response){
    // Handle response
});
```