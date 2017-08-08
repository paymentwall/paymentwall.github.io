---
category: section-mobiamo-pricepoint
---
Endpoint

```
GET https://api.paymentwall.com/api/price-points/
```

Sample Request

```php
<?php
require_once('path/to/lib/paymentwall.php');

$params = array(
    'country_code'=>'GB',
    'key'=>'YOUR_PROJECT_KEY',
    'ps'=>'mobilegateway', 
    'sign_version'=>2
);

Paymentwall_Config::getInstance()->set(array('private_key' => 'YOUR_SECRET_KEY'));
$params['sign'] = (new Paymentwall_Signature_Widget())->calculate(
    $params,
    $params['sign_version']
    );

$url = 'https://api.paymentwall.com/api/price-points/?'.http_build_query($params);

$curl = curl_init($url);

curl_setopt($curl,CURLOPT_RETURNTRANSFER,TRUE);
$response = curl_exec($curl);
echo $response;
?>
```

Sample Response

```json
[{
    "amount": 1,
    "currency": "GBP",
    "currency_converted": "EUR",
    "amount_converted": 1.14
}, {
    "amount": 1.5,
    "currency": "GBP",
    "currency_converted": "EUR",
    "amount_converted": 1.7
}, {
    "amount": 2,
    "currency": "GBP",
    "currency_converted": "EUR",
    "amount_converted": 2.27
}, {
    "amount": 2.5,
    "currency": "GBP",
    "currency_converted": "EUR",
    "amount_converted": 2.84
}, {
    "amount": 3,
    "currency": "GBP",
    "currency_converted": "EUR",
    "amount_converted": 3.41
}, {
    "amount": 4.5,
    "currency": "GBP",
    "currency_converted": "EUR",
    "amount_converted": 5.11
}, {
    "amount": 5,
    "currency": "GBP",
    "currency_converted": "EUR",
    "amount_converted": 5.68
}, {
    "amount": 10,
    "currency": "GBP",
    "currency_converted": "EUR",
    "amount_converted": 11.36
}]
```
