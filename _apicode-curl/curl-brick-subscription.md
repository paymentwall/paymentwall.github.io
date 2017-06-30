---
category: section-brick-subscription
---
Subscription request

Endpoint
```
POST https://api.paymentwall.com/api/brick/subscription
```

Sample Request
```html
curl https://api.paymentwall.com/api/brick/subscription \
-H "X-ApiKey: [YOUR_PRIVATE_KEY]" \
-d "token=[TOKEN]" \
-d "email=user@host.com" \
-d "history[registration_date]=1489655092"
-d "currency=USD" \
-d "amount=10" \
-d "fingerprint=[FINGERPRINT_BY_BRICK.JS]" \
-d "description=Order #123" \
-d "plan=product_123" \
-d "period=week" \
-d "period_duration=2"
```