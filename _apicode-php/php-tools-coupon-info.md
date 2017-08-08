---
category: section-tools-coupon-info
---

Endpoint

```
GET https://api.paymentwall.com/api/coupon
```

Sample Response

```php
require_once('path/to/lib/paymentwall.php');
$params = array(
    'key' => 'YOUR_PROJECT_KEY',
    'code' => 'TESTCOUPON_1',
    'timestamp' => time(),
);

Paymentwall_Config::getInstance()->set(array('private_key' => 'YOUR_SECRET_KEY'));
$params['sign'] = (new Paymentwall_Signature_Widget())->calculate(
    $params,
    3 //signature version
);

$url = 'https://api.paymentwall.com/api/coupon?'.http_build_query($params);
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER,TRUE);
$response = curl_exec($curl);
echo $response;
?>
```

Sample Response

```json
{
    "name": "Coupon_1",
    "times_redeemed": 1,
    "max_redemptions": 2,
    "expiration_date": "08\/20\/2017",
    "status": "active",
    "code": "TESTCOUPON_1",
    "currency": null,
    "percent_off": 10,
    "amount_off": null
}
```