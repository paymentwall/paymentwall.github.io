---
codeId: code-mobile-sdk-configuration
---
```js

#import <PWCoreSDK/PWCoreSDK.h>

PWCoreSDK.sharedInstance().setupPaymentwall(
  withProjectKey: "YOUR PUBLIC KEY",
  secretKey: "YOUR SECRET KEY", //optional, if you add your secret key here, signature will generate from SDK but we highly recommend don't expose secret key to front end. You can use your server calculate it.
  requestTimeout: 30,
  clearPaymentMethodsAfterFinish: false
)

let payment = PaymentObject()
payment.name = choosenItem.name
payment.price = Double(choosenItem.price)!
payment.currency = "USD"
payment.image = choosenItem.image
payment.userID = "test_user"
payment.itemID = choosenItem.name+"id"
payment.signVersion = 3

let customSetting = ["widget":"pw",
                    "ag_type":"fixed"]
payment.pwLocalParams = customSetting

PWCoreSDK.sharedInstance().setPaymentObject(payment)

```
