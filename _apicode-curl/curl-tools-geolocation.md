---
category: section-tools-geolocation
---

Endpoint

```
GET https://api.paymentwall.com/api/rest/country
```

Sample Request
```
curl https://api.paymentwall.com/api/rest/country \
> -d "key=[YOUR_PROJECT_KEY]" \
> -d "uid=[USER_ID]" \
```

Sample Response 

```json
{
	"code":"US",
	"country":"United States"
}
```
