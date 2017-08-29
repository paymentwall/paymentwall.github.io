---
codeId: brick-3dsecure-secure-redirect-url
---
```
curl https://api.paymentwall.com/api/brick/charge \
-H "X-ApiKey: [YOUR_PRIVATE_KEY]" \
-d "token=[TOKEN]" \
-d "amount=9.99" \
-d "currency=USD" \
-d "email=user@host.com" \
-d "fingerprint=[FINGERPRINT_BY_BRICK.JS]" \
-d "description=TestItem" \
-d "secure_redirect_url=[YOUR_SECURE_REDIRECT_URL]" \
-d "secure_return_method=url"
```