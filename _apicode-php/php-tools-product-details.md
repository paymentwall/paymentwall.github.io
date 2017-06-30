---
category: section-tools-product-details
---

Endpoint

```
GET https://api.paymentwall.com/api/rest/product/
```

Sample Request
```php
<?php
require_once('/path/to/paymentwall-php/lib/paymentwall.php');
$params = array(
    'key' => 'YOUR_PUBLIC_KEY',
    'ag_external_id' => 'product_100244',
    'sign_version' => 2
);

Paymentwall_Config::getInstance()->set(array('private_key' => 'YOUR_PRIVATE_KEY'));
$params['sign'] = (new Paymentwall_Signature_Widget())->calculate(
    $params,
    $params['sign_version']
);

$url = 'https://api.paymentwall.com/api/rest/product/?' . http_build_query($params);
$payment_systems = json_decode(file_get_contents($url));
?>
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
