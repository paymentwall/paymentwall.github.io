---
codeId: brick-3dsecure-2nd-charge-request
---
```java
LinkedHashMap<String,String> chargemap = new LinkedHashMap<String, String>();

... // your original charge request parameters

if (request.getParameter("brick_charge_id")!=null &&request.getParameter("brick_secure_token")!=null){
    chargemap.put("charge_id", request.getParameter("brick_charge_id"));
    chargemap.put("secure_token",request.getParameter("brick_secure_token"));
}
```