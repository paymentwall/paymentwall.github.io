---
codeId: brick-subscription-trial
---
```
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
-d "period_duration=2" \
-d "trail[amount]=0.5" \
-d "trail[currency]=USD" \
-d "trail[period]=day" \
-d "trail[period_duration]= 3"
```