---
category: section-mint-generate
---

Endpoint
```
POST  https://api.paymentwall.com/pwapi/partners-mint (MINT app)
POST: https://api.paymentwall.com/pwapi/mint (MINT reseller)
```

Sample Request

```php
<?php
$secret = 'YOUR_SECRET_KEY';

$params = array(
    'params[serviceId]' => 0,
    'params[currencyCode]' => 'USD',
    'params[ePinNominalValue]' => 5,
    'params[ePinsCount]' => 1,
    'params[countryCode]' => 'US',
    'params[activationRequired]' => 1,
    'params[test]' => 1
);
$auth = [
    'auth[key]' => 'YOUR_AUTH_KEY',
    'auth[timestamp]' => time()
];
ksort($params);
$auth['auth[sign]'] = md5($auth['auth[key]'] . $auth['auth[timestamp]'] . implode('', $params) . $secret);

$postParams = array_merge($auth, $params);

$post = curl_init();
curl_setopt($post, CURLOPT_URL, 'https://api.paymentwall.com/pwapi/mint');
curl_setopt($post, CURLOPT_POST, 1);
curl_setopt($post, CURLOPT_POSTFIELDS, $postParams);
$response = curl_exec($post);
echo $response;
?>
```

Sample Response

```json
{
    "success": true,
    "data": [{
        "pin_id": 52775,
        "pin_code": "5311 8601 2711 2955",
        "pin_time_expired": 1521796425,
        "pin_generated_time": 1490260425,
        "pin_nominal_value": "5.0000",
        "cu_code": "USD",
        "cu_id": 1,
        "pin_tr_amount": "5.0000"
    }],
    "reference": "186177"
}
```
