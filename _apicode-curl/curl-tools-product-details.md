---
category: section-tools-product-details
---

Endpoint

```
GET https://api.paymentwall.com/api/rest/product/
```

Sample Request
```
curl https://api.paymentwall.com/api/rest/product \
-d "key=[YOUR_PROJECT_API_KEY]" \
-d "ag_external_id=product_100244" \
-d "sign_version=2" \
-d "sign=[SIGNATURE]" \
```

Sample Response 

```json
{
	"object":"product",
	"id":"T20170101",
	"name":"testproduct",
	"amount":"9.99",
	"currency":"USD",
	"order":2,
	"best_value":0,
	"most_popular":0,
	"is_default":0,
	"type":"fixed",
	"show_discount":0,
	"old_price":"19.99",
	"product_description":"",
	"custom_fields":"",
	"slug":"testproduct",
	"product_pic_url":"",
	"promotion":""
}
```
