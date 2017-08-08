---
category: section-brick-subscription-object
---
Subscription response object example
```json
{
    "active": 1,
    "charges": {
        "0": "49393608",
        "1": "49393609"
    },
    "date_next": 1419784432,
    "date_started": 1419525232,
    "expired": 0,
    "id": "VCBZT392SW",
    "is_trial": 0,
    "object": "subscription",
    "payments_limit": 0,
    "period": "day",
    "period_duration": 3,
    "started": 1
}
```

Subscription object example for trail product
```json
{
    "trial": {
        "active": 0,
        "date_next": 1419525232,
        "date_started": 1419438832,
        "expired": 1,
        "id": "VCBZT392SW",
        "is_trial": 1,
        "object": "subscription",
        "payments_limit": 1,
        "period": "day",
        "period_duration": 1,
        "started": 1
    }
}
```