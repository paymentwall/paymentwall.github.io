---
category: section-mobiamo-process
---

Endpoint:

```
POST https://api.paymentwall.com/api/mobiamo/process-payment
```

Sample Request

```php
<?php
require_once('path/to/lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'public_key' => 'YOUR_PROJECT_KEY',
    'private_key' => 'YOUR_SECRET_KEY'
));

$model = new Paymentwall_Mobiamo();
$processParams = [
	'uid' => 'test', 
	'ref' => $ref, //reference id returned from initiate payment request 
	'flow' => 'msisdn', //flow returned from initiate payment request
	'data' => '6312345678' //value can be: code user received after sending message / phone number of user
];

//token returned from get token step above
$response = $model->processPayment($token, $processParams);
?>
```

Sample Response

```json
{
    "success": true,
    "instructions": {
        "shortcode": "2800",
        "keyword": "PW2000",
        "info": "VAT included. For customer support, please contact us at support@mobiamo.com"
    },
    "flow": "code" //Only return if this payment requires next processing step. values can be: code - user send keyword to shortcode in instructions/ msisdn - user input phone number / redirect - redirect user to redirect_url in intructions / 	
}
```