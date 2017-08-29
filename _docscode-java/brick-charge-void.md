---
codeId: brick-charge-void
---
{% raw %}
```java
Charge charge = new Charge(chargeId);
charge.void_();
JSONObject response = charge.getPublicData();
```
{% endraw %}