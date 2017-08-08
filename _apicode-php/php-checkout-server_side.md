---
category: section-checkout-server_side
---

Standalone request endpoint

```html
GET https://api.paymentwall.com/api/standalone/
```

Sample Request

```php
<?php
require_once('path/to/lib/paymentwall.php');

$params = array(
    'key' => 'YOUR_PROJECT_KEY',
    'uid' => 'user40012',
    'widget' => 'pw',
    'sign_version' => 3,
    'amount' => 2,
    'currencyCode' => 'USD',
    'ag_name' => 'product101',
    'ag_external_id' => '101',
    'ag_type' => Paymentwall_Product::TYPE_FIXED,
    'history[registration_date]' => '1458563147'
);

Paymentwall_Config::getInstance()->set(array('private_key' => 'YOUR_SECRET_KEY'));
$params['sign'] = (new Paymentwall_Signature_Widget())->calculate(
    $params,
    $params['sign_version']
);

$url = 'https://api.paymentwall.com/api/standalone/?'.http_build_query($params);
$curl = curl_init($url);
curl_setopt($curl,CURLOPT_RETURNTRANSFER,TRUE);
$response = curl_exec($curl);
?>
```

Standalone response object

```json
{
    "type":"success",
    "skey":"12345678901234567890123456abcdef"
}
```
Paylet request endpoint

```html
GET https://api.paymentwall.com/api/subscription/
```

Sample Request

```php
<?php
$skey = json_decode($response,true);

$widget = 'https://api.paymentwall.com/api/subscription/?'.'skey='.$skey['skey'];

header("Location:".$widget);
?>
```

