---
category: section-brick-subscription-cancel
---
Endpoint
```
POST https://api.paymentwall.com/api/brick/subscription/$id/cancel
```

Sample Request
```php
<?php
require_once('path/to/lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'private_key' => 'YOUR_PRIVATE_KEY'
));
$subscription = new Paymentwall_Subscription($subscriptionid);
$subscription->cancel();
$response=$subscription->getRawResponseData();
echo $response;
?>
```
