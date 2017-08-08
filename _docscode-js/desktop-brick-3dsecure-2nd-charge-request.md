---
codeId: desktop-brick-3dsecure-2nd-charge-request
---
```javascript
// We are using Express framework in this sample

//custom parameters
var custom = {
    secure: 1
};

var parameters = req.body;
if (parameters.brick_charge_id&&parameters.brick_secure_token){
    custom.charge_id = parameters.brick_charge_id;
    custom.secure_token = parameters.brick_secure_token;
}

var charge = new Paymentwall.Charge(
    0.5, //price
    'USD', //currency code
    'description', //description of the product
    req.body.email, // user's email which can be gotten by req.body.email
    req.body.brick_fingerprint, // fingerprint which can be gotten by req.body.brick_fingerprint
    req.body.brick_token, //one-time token
    custom 
);
```