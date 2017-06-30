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
require_once('/path/to/paymentwall-php/lib/paymentwall.php');
$params = array(
    'key' => 'YOUR_PUBLIC_KEY',
    'ref' => 't1234',
    'uid' => 'user40012',
    'sign_version' => 2,
    'type' => 1,
    'message' => 'cancelled order',
    'is_test' => 1,
    'sign_version' => 2
);

Paymentwall_Config::getInstance()->set(array('private_key' => 'YOUR_PRIVATE_KEY'));
$params['sign'] = (new Paymentwall_Signature_Widget())->calculate(
    $params,
    $params['sign_version']
);

$url = 'https://api.paymentwall.com/developers/api/ticket?' . http_build_query($params);
$payment_systems = json_decode(file_get_contents($url));
?>
```

Sample Response

```json
{"result":1}
```
