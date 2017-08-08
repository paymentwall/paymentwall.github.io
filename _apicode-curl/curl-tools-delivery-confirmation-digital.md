---
category: section-tools-delivery-confirmation-digital
---

Sample Request
```
curl https://api.paymentwall.com/api/delivery \
-H "X-ApiKey: [YOUR_SECRET_KEY]" \
-d "payment_id=b111260108" \
-d "merchant_reference_id=order_12345" \
-d "type=digital" \
-d "status=started" \
-d "is_test=1" \
-d "estimated_delivery_datetime=2017/01/15 15:04:55 +0500" \
-d "estimated_update_datetime=2017/01/16 15:04:55 +0500" \
-d "refundable=false" \
-d "details=Item will be delivered via email by 3PM on 2017/01/15" \
-d "shipping_address[email]=test@paymentwall.com"
-d "reason=none"
```

Sample Response
```json
{
    "success": 1
}
```