---
category: section-tools-payment-status
---

Endpoint

```
GET https://api.paymentwall.com/api/rest/payment
```

Sample Request
```php
<?php
require_once('path/to/lib/paymentwall.php');

$params = array(
    'key' => 'YOUR_PROJECT_KEY',
    'ref' => 'b123456789',
    'uid' => 'user40012',
    'callback' => 'paymentStatusHandler',
    'sign_version' => 2
);

Paymentwall_Config::getInstance()->set(array('private_key' => 'YOUR_SECRET_KEY'));
$params['sign'] = (new Paymentwall_Signature_Widget())->calculate(
    $params,
    $params['sign_version']
);

$url = 'https://api.paymentwall.com/api/rest/payment/?'.http_build_query($params);
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
$response = curl_exec($curl); 
echo $response;
?>
```

Sample Response:

```json
{  
    "object":"payment",
    "id":"t1234",
    "created":1490101573,
    "amount":"100.00",
    "currency":"USD",
    "refunded":false,
    "risk":"approved",
    "uid":"user101",
    "product_id":"product_123",
    "payment_system":"gateway",
    "subscription":{  
        "object":"subscription",
        "id":"subs_id_123",
        "period":"month",
        "period_duration":1,
        "payments_limit":12,
        "is_trial":0,
        "started":1,
        "expired":0,
        "active":0,
        "date_started":1490101633,
        "date_next":1492780033
    }
}
```
