---
category: section-brick-charge
---
Endpoint
```
POST https://api.paymentwall.com/api/brick/charge
```

Sample Request
```java
Config.getInstance().setPublicKey("YOUR_APPLICATION_KEY");
Config.getInstance().setPrivateKey("YOUR_SECRET_KEY");

LinkedHashMap<String,String> chargemap = new LinkedHashMap<String, String>();
chargemap.put("token", request.getParameter("brick_token"); 
chargemap.put("email", "test@paymentwall.com");
chargemap.put("currency", "USD");
chargemap.put("amount", "9.99");
chargemap.put("fingerprint", request.getParameter("brick_fingerprint"));
chargemap.put("description", "description");
chargemap.put("additional_parameter_name", "additonal_parameter_value");
Charge charge = new Charge();
charge = (Charge)charge.create(chargemap);
```
