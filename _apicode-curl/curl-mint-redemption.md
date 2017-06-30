---
category: section-mint-redemption
---
Endpoint

```
POST https://api.paymentwall.com/api/pure-mint/payment
```

Sample Request
```
curl https://api.paymentwall.com/api/pure-mint/payment \ 
-d "amount=0.12" \
-d "currency=USD" \
-d "epin=[YOUR-EPIN]" \
-d "app_key=[YOUR-PROJECT-KEY]" \
-d "user_id=[YOUR-USER-ID]"
```

Sample Response

```json
{
  "change_amount" : 0.12,                 
  "change_currency" : "USD",              
  "success" : 1                         
}
```