---
category: section-mint-generate
---

Endpoint
```
POST  https://api.paymentwall.com/pwapi/partners-mint (MINT app)
POST: https://api.paymentwall.com/pwapi/mint (MINT reseller)
```

Sample Response

```json
{
	"success": true,
	"data": [{
		"pin_id": 52775,
		"pin_code": "5311 8601 2711 2955",
		"pin_time_expired": 1521796425,
		"pin_generated_time": 1490260425,
		"pin_nominal_value": "5.0000",
		"cu_code": "USD",
		"cu_id": 1,
		"pin_tr_amount": "5.0000"
	}],
	"reference": "186177"
}
```
