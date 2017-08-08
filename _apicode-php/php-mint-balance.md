---
category: section-mint-balance
---

Endpoint
```
GET https://api.paymentwall.com/pwapi/mint-balances
```

Sample Request
```php
<?php
$secret='YOUR_SECRET_KEY';

$params =[];
$auth = [
    'auth[key]' => 'YOUR_AUTH_KEY',
    'auth[timestamp]' => time()
];
$auth['auth[sign]'] = md5($auth['auth[key]'] . $auth['auth[timestamp]'] . implode('', $params) . $secret);

$url = 'https://api.paymentwall.com/pwapi/mint-balances?'.http_build_query($auth);

$curl = curl_init($url);
curl_setopt($curl,CURLOPT_RETURNTRANSFER,TRUE);
$response = curl_exec($curl);
echo $response
?>
```

Sample Response

```
{
    "success": true,
    "data": [{
        "cu_code": "USD",
        "balance_amount": "9944.0655"
    }],
    "reference": "186178"
}
```