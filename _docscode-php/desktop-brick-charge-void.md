---
codeId: brick-charge-void
---
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