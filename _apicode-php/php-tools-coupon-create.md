---
category: section-tools-coupon-create 
---

Endpoint

```
POST https://api.paymentwall.com/api/coupon
```

Sample Request

```php
<?php
require_once('path/to/lib/paymentwall.php');
$params = array(
    'key' => 'YOUR_PROJECT_KEY',
    'timestamp' => time(),
    'percent_off' => 10,
    'name' => 'Coupon_1',
    'number_of_coupons' => 1,
    'code' => 'TESTCOUPON_1',
    'activate' => 'Yes',
    'max_redemptions' => 1,
    'expiration_date' => '08/20/2017',
    'available_applications' => 'ALL'
);

Paymentwall_Config::getInstance()->set(array('private_key' => 'YOUR_SERCRET_KEY'));
$params['sign'] = (new Paymentwall_Signature_Widget())->calculate(
    $params,
    3 //signature version must be 3
);

$post = curl_init();
curl_setopt($post, CURLOPT_URL, 'https://api.paymentwall.com/api/coupon');
curl_setopt($post, CURLOPT_POST, 1);
curl_setopt($post, CURLOPT_POSTFIELDS, $params);
$response = curl_exec($post);
echo $response;
?>
```

Sample Response

```json
{
    "name": "Coupon_1",
    "times_redeemed": 0,
    "max_redemptions": 1,
    "expiration_date": "08\/20\/2017",
    "status": "active",
    "code": "TESTCOUPON_1",
    "currency": null,
    "percent_off": 10,
    "amount_off": null
}
```