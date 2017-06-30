---
category: section-brick-onetime_token
---
Endpoint
```
 POST https://pwgateway.com/api/token (Live environment)
 
 POST https://api.paymentwall.com/api/brick/token (Sandbox environment)
```

Sample Request
{% raw  %}
```java
OneTimeToken token = new OneTimeToken();
token = (OneTimeToken) token.create(new LinkedHashMap<String, String>(){{
  put("public_key", Config.getInstance().getPublicKey());
  put("card[number]", "4000000000000002");
  put("card[exp_month]", "01");
  put("card[exp_year]", "2020");
  put("card[cvv]", "123");
}});
return token.getToken();
```
{% endraw %}