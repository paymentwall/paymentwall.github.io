---
category: section-tools-cancellation
---

Endpoint

```
POST https://api.paymentwall.com/developers/api/ticket
```

Sample Request
```
curl https://api.paymentwall.com/developers/api/ticket \
-d "key=[YOUR_PROJECT_KEY]" \
-d "ref=t1234" \
-d "uid=user40012" \
-d "type=1" \
-d "message=cancelled order" \
-d "is_test=1" \
-d "sign_version=2" \
-d "sign=[SIGNATURE]" \
```

Sample Response

```json
{"result":1}
```
