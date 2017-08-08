---
codeId: desktop-brick-charge-response
---
```java
JSONObject response = charge.getPublicData();
if (charge.isSuccessful()){
    if (charge.isCaptured()){
        // redirect your customer to payment success page
    } else if (charge.isUnderReview()){
        // redirect your customer to payment under review page
    } else {
        // redirect your customer to payment failure page
    }
}
```