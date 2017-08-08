---
category: section-mobiamo-pinless
---

Endpoint

```
POST https://api.paymentwall.com/api/mobiamo/payment
```

Sample Request

```php
<?php
require_once('path/to/lib/paymentwall.php');

$params = array(
    'uid' => 'user123',
    'key' => 'YOUR_PROJECT_KEY',
    'product_name' => 'Test',
    'product_id' => 'Test123',
    'amount' => 0.99,
    'currency' => 'EUR',
    'country' => 'DE',
    'mnc' => 2,
    'mcc' => 262,
    'ts' => time(),
    'sign_version' => 2
);

Paymentwall_Config::getInstance()->set(array('private_key' => 'YOUR_SECRET_KEY'));
$params['sign'] = (new Paymentwall_Signature_Widget())->calculate(
    $params,
    $params['sign_version']
);

$post = curl_init();
curl_setopt($post, CURLOPT_URL, 'https://api.paymentwall.com/api/mobiamo/payment?');
curl_setopt($post, CURLOPT_POST, 1);
curl_setopt($post, CURLOPT_POSTFIELDS, $params);
$response = curl_exec($post);
echo $response;
?>
```

Sample Response
```json
{
    "transaction_id": "20293982",
    "shortcode": "89000",
    "keyword": "FOR PWE",
    "regulatory_text": ["Preis: 0,99 EUR Support: 1 415 287 6030 | For customer support, please email us at support@mobiamo.com"],
    "amount": 0.99,
    "currency": "EUR",
    "sign": "257448dd33bcaa7a4d72517d9bf3fd6f"
}
```