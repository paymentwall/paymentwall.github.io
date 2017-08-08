---
codeId: pingback-listener-dg
---
```java
import com.paymentwall.java.*;

Config.getInstance().setLocalApiType(Config.API_GOODS);
Config.getInstance().setPublicKey("YOUR_PROJECT_KEY");
Config.getInstance().setPrivateKey("YOUR_SECRET_KEY");

Pingback pingback = new Pingback(request.getParameterMap(), request.getRemoteAddr());
if (pingback.validate(true)) {
    String goods = pingback.getProductId();
    String userId = pingback.getUserId();
    if (pingback.isDeliverable()) {
        // deliver Product to user with userId
    } else if (pingback.isCancelable()) {
        // withdraw Product from user with userId
    }
    return "OK";
} else {
    return pingback.getErrorSummary();
}
```