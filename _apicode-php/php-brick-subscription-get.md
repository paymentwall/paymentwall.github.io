---
category: section-brick-subscription-get
---

Endpoint
```
GET https://api.paymentwall.com/api/brick/subscription/$id
```

Sample Request
```php
<?php
require_once('path/to/lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'private_key' => 'YOUR_PRIVATE_KEY'
));
$subscription = new Paymentwall_Subscription($subscriptionid);
$subscription->get();
$response=$subscription->getRawResponseData();
echo $response;
?>
```
