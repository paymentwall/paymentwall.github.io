---
category: section-tools-payment-systems
---

Endpoint

```
GET https://api.paymentwall.com/api/payment-systems/
```

Sample Request
```php
<?php
require_once('path/to/lib/paymentwall.php');

$params = array(
    'key' => 'YOUR_PROJECT_KEY',
    'country_code' => 'US',
    'sign_version' => 2
);

Paymentwall_Config::getInstance()->set(array('private_key' => 'YOUR_SECRET_KEY'));
$params['sign'] = (new Paymentwall_Signature_Widget())->calculate(
    $params,
    $params['sign_version']
);

$url = 'https://api.paymentwall.com/api/payment-systems/?'.http_build_query($params);
$curl = curl_init($url);
curl_setopt($curl,CURLOPT_RETURNTRANSFER,TRUE);
$response = curl_exec($curl);
echo $response;
?>
```

Sample Response:

```json
[
    {
        "id":"paypal",
        "name":"PayPal",
        "new_window":true,
        "img_url":"https:\/\/api.paymentwall.com\/images\/ps_logos\/pm_paypal.png",
        "img_class":"paypal",
        "ps_type_id":4
    },
    {
        "id":"alipay",
        "name":"AliPay",
        "new_window":true,
        "img_url":"https:\/\/api.paymentwall.com\/images\/ps_logos\/pm_alipay.png",
        "img_class":"alipay",
        "ps_type_id":4
    },
    {
        "id":"neosurf",
        "name":"Neosurf",
        "new_window":false,
        "img_url":"https:\/\/api.paymentwall.com\/images\/ps_logos\/pm_neosurf.png",
        "img_class":"neosurf",
        "ps_type_id":3
    },
    {
        "id":"mobiamo",
        "name":"Mobiamo",
        "new_window":false,
        "img_url":"https:\/\/api.paymentwall.com\/images\/ps_logos\/pm_mobiamo.png",
        "img_class":"mobiamo",
        "ps_type_id":5
    },
    {
        "id":"mint",
        "name":"MINT",
        "new_window":false,
        "img_url":"https:\/\/api.paymentwall.com\/images\/ps_logos\/pm_mint.png",
        "img_class":"mint",
        "ps_type_id":3
    }
]
```