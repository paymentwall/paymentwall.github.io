---
codeId: code-mobile-sdk-configuration
---
```java

import com.paymentwall.pwunifiedsdk.core.PaymentSelectionActivity;
import com.paymentwall.pwunifiedsdk.core.UnifiedRequest;
import com.paymentwall.pwunifiedsdk.util.Key;
import com.paymentwall.pwunifiedsdk.util.ResponseCode;

request.setPwProjectKey(Constants.PW_PROJECT_KEY);
request.setPwSecretKey(Constants.PW_SECRET_KEY); //optional, if you add your secret key here, signature will generate from SDK but we highly recommend don't expose secret key to front end. You can use your server calculate it.
request.setAmount(good.getPrice());
request.setCurrency(good.getCurrency());
request.setItemName(good.getName());
request.setItemId(good.getId());
request.setUserId(Constants.USER_ID);
request.setSignVersion(3);
request.setItemResID(good.getImage());
request.setTimeout(30000);

request.addCustomParam("timeStamp", System.currentTimeMillis() / 1000 + "");
request.addCustomParam("own_order_id", "o123456");
request.addCustomParam("shopname", "ecopark");
```
