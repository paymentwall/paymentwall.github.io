---
codeId: brick-subscription-cancellation
---
```java
Subscription subscription = new Subscription("SUBSCRIPTION_ID");

subscription = (Subscription)(subscription.cancel());

return subscription.isActive();
```