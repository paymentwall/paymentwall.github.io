---
category: section-brick-charge-void
---
Endpoint
```
POST https://api.paymentwall.com/api/brick/charge/$chargeid/void
```

Sample Request
```php
<?php
require_once('path/to/lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'private_key' => 'YOUR_PRIVATE_KEY'
));
$charge = new Paymentwall_Charge($chargeid);
$charge->void();
$response=$charge->getRawResponseData();
echo $response;
?>
```