---
category: section-tools-cancellation
---

Endpoint

```
POST https://api.paymentwall.com/developers/api/ticket
```

Sample Request
```php
<?php
require_once('path/to/lib/paymentwall.php');
$params = array(
    'key' => 'YOUR_PROJECT_KEY',
    'ref' => 't1234',
    'uid' => 'user40012',
    'sign_version' => 2,
    'type' => 1,
    'message' => 'cancelled order',
    'is_test' => 1,
    'sign_version' => 2
);

Paymentwall_Config::getInstance()->set(array('private_key' => 'YOUR_SECRET_KEY'));
$params['sign'] = (new Paymentwall_Signature_Widget())->calculate(
    $params,
    $params['sign_version']
);

$post = curl_init();
curl_setopt($post, CURLOPT_URL, 'https://api.paymentwall.com/developers/api/ticket');
curl_setopt($post, CURLOPT_POST, 1);
curl_setopt($post, CURLOPT_POSTFIELDS, $params);
$response = curl_exec($post);
echo $response;
```

Sample Response

```json
{"result":1}
```
