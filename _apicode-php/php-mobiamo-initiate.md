---
category: section-mobiamo-initiate
---

Endpoint:

```
POST https://api.paymentwall.com/api/mobiamo/init-payment
```

Sample Request

```php
<?php
require_once('path/to/lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'public_key' => 'YOUR_PROJECT_KEY',
    'private_key' => 'YOUR_SECRET_KEY'
));

$mobiamo = new Paymentwall_Mobiamo();
$initParams = [
	'uid' => 'test', 
	'amount' => 2000, 
	'currency' => 'PHP', //currency of payment in ISO 4217 format
	'country' => 'PH', //country of payment in ISO alpha-2 format
	'product_id' => 'product101', //product id of payment
	'product_name' => 'Test Product', //product name of payment
	'carrier' => '255' //mandatory in some countries - Given id of user's operator
];

//token returned from get token step above
$response = $mobiamo->initPayment($token, $initParams);

$ref = $response['ref'];
// store this token to use for next request
?>
```

Sample Response

```json
{
    "ref": "21180452",
    "flow": "msisdn",
    "instructions": {},
    "price": {
        "amount": 2000,
        "currency": "PHP",
        "formatted": "PHP 2,000.00",
        "carriers": [{
            "id": 255,
            "name": "Globe"
        }]
    },
    "product_name": "coins",
    "success": true
}
```