---
category: section-mobiamo-get-transaction
---

Endpoint:

```
POST https://api.paymentwall.com/api/mobiamo/get-payment
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
$getPaymentParams = [
    'uid' => 'test', 
    'ref' => $ref, //reference id returned from initiate payment request 
];

//token returned from get token step above
$response = $mobiamo->processPayment($token, $getPaymentParams);
?>
```

Sample Response

```json
{
    "success" => true,
    "completed" => true, //value: true/false - indicate this payment was already successfull or not
    "amount" => 2000,
    "currency" => "PHP",
    "country" => "PH",
    "product_name" => "Test Product",
    "msisdn" => "63123456789",
    "ref" => "w123456789"
}
```