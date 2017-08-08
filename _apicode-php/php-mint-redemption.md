---
category: section-mint-redemption
---

Endpoint

```
POST https://api.paymentwall.com/api/pure-mint/payment
```

Sample Request

```php
<?php
$params = array(
    'amount' => 0.12,
    'currency' => 'USD',
    'epin[0]' => '8661217792834101',
    'app_key' => 'YOUR_PROJECT_KEY',
    'user_id' => 'user101'
);

$post = curl_init();

curl_setopt($post, CURLOPT_URL, 'https://api.paymentwall.com/api/pure-mint/payment');
curl_setopt($post, CURLOPT_POST, 1);
curl_setopt($post, CURLOPT_POSTFIELDS, $params);
$response = curl_exec($post);

echo $response;
?>
```

Sample Response

```json
{
    "change_amount" : 0.12,                 
    "change_currency" : "USD",              
    "success" : 1                         
}
```