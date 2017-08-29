---
codeId: brick-charge-capture
---
{% raw %}
```java
Charge charge = new Charge(chargeId);
charge.capture();

JSONObject response = charge.getPublicData();
```
{% endraw %}