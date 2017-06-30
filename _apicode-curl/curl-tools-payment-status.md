---
category: section-tools-payment-status
---

Endpoint

```
GET https://api.paymentwall.com/api/rest/payment
```

Sample Request
```
curl https://api.paymentwall.com/api/rest/payment \
-d "key=[YOUR_PROJECT_API_KEY]" \
-d "ref=t1234" \
-d "sign_version=2" \
-d "sign=[SIGNATURE]" \
```

Sample Response

```json
{  
   "object":"payment",
   "id":"t1234",
   "created":1490101573,
   "amount":"100.00",
   "currency":"USD",
   "refunded":false,
   "risk":"approved",
   "uid":"user40012",
   "product_id":"product_123",
   "payment_system":"gateway",
   "subscription":{  
      "object":"subscription",
      "id":"subs_id_123",
      "period":"month",
      "period_duration":1,
      "payments_limit":12,
      "is_trial":0,
      "started":1,
      "expired":0,
      "active":0,
      "date_started":1490101633,
      "date_next":1492780033
   }
}
```