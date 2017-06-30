---
category: section-brick-charge-refund
---

Endpoint

```
POST https://api.paymentwall.com/api/brick/charge/$chargeid/refund
```

Sample Request
```java
import import com.paymentwall.java.Charge;

Charge charge = new Charge("CHARGE_ID");
charge = (Charge)charge.refund();
return charge.isRefunded();
```