---
codeId: brick-charge-store-card-request
---
{% raw %}
```java
Charge charge = new Charge();
charge = (Charge)charge.create(new HashMap<String, String>(){{
    put("token", "PERMANENT_TOKEN"); // replace it with the stored permanent token
    put("email", "test@paymentwall.com");
    put("currency", "USD");
    put("amount", "9.99");
    put("description", "description");

    put("additional_parameter_name", "additonal_parameter_value");
}});
```
{% endraw %}