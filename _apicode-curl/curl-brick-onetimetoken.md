---
category: section-brick-onetime_token
---
Endpoint
```
 POST https://pwgateway.com/api/token (Live environment)
 
 POST https://api.paymentwall.com/api/brick/token (Sandbox environment)
```

Sample Request
```php
curl https://pwgateway.com/api/token \
-d "public_key=YOUR_PUBLIC_KEY" \
-d "card[number]=4000000000000002" \
-d "card[exp_month]=01" \
-d "card[exp_year]=2021" \
-d "card[cvv]=123"
```

