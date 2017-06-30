---
category: section-brick-charge
---
Endpoint
```
POST https://api.paymentwall.com/api/brick/charge
```

Sample Request
```php
curl https://api.paymentwall.com/api/brick/charge \
-H "X-ApiKey: [YOUR_PRIVATE_KEY]" \
-d "token=[TOKEN]" \
-d "amount=9.99" \
-d "currency=USD" \
-d "email=user@host.com" \
-d "fingerprint=[FINGERPRINT_BY_BRICK.JS]" \
-d "description=TestItem"
```

<br>

Void a Charge

Endpoint
```
POST https://api.paymentwall.com/api/brick/charge/$chargeid/void
```
Sample Request
```php
curl https://api.paymentwall.com/api/brick/charge/t123456/void \
-H "X-ApiKey: [YOUR_PRIVATE_KEY]" \
```