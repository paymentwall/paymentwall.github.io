---
id: development-signature_calculation
title: Signature Calculation
sectionid: docs
permalink: reference/signature-calculation
---

# Signature Calculation

The Signature value is calculated with your project key and secret key. 
We support two versions to calculate a signature value, [version 2](#version-2) and [version 3](#version-3).

[Paymentwall API Libraries](https://github.com/paymentwall) can automatically calculate signatures for the Widget Call and for the Pingback signature validation.
You can also use the Paymentwall API Libraries to calculate the signature value for other Paymentwall APIs or you can also calculate the signature value manually. 
Please check which parameters should be included to calculate the signature for each Paymentwall API before you integrate the API.> Signature Calculation version 1 is deprecated.

## Version 2

sign = MD5("PARAM_NAME_1=PARAM_VALUE_1PARAM_NAME_2=PARAM_VALUE_2PARAM_NAME_3=PARAM_VALUE_3...PARAM_NAME_n=PARAM_VALUE_nSECRET_KEY")

Signature version 2 is an MD5 lowercase hash in the form of 32 digit hexadecimal number. Signature is calculated as below:

```
sign = MD5(goodsid=no1234ref=b1491808025sign_version=2slength=speriod=type=0uid=useridSECRET_KEY)
```

SECRET_KEY is your project secret key.
Please note that parameters should be **sorted in alphabetical order** by parameter name prior to hash calculation.


* Exercise with Payment Systems API

Let's exercise how to calculate signature using signature version 2 for Payment Systems API.

The table below shows the mandatory parameters needed to call the Payment Systems API.

> Please refer [Payment Systems API](/apis#section-tools-payment-systems) for more detailed information about this API.

| Name | Format|
|---|---|
|**key**|string|
|**country_code**|string|
|**sign_version**|string|
|**sign**|string|


Calculate signature by using Paymentwall API Libraries
```php
<?php
require_once('/path/to/paymentwall-php/lib/paymentwall.php');
$params = array(
    'key' => 'YOUR_PUBLIC_KEY',
    'country_code' => 'KR',
    'sign_version' => 2
);

Paymentwall_Config::getInstance()->set(array('private_key' => 'YOUR_PRIVATE_KEY'));
$params['sign'] = (new Paymentwall_Signature_Widget())->calculate(
    $params,
    $params['sign_version']
);

$url = 'https://api.paymentwall.com/api/payment-systems/?' . http_build_query($params);
$payment_systems = json_decode(file_get_contents($url));
?>
```

Calculate manually by using MD5
```php
<?php
$params = array(
        'key' => 'YOUR_PUBLIC_KEY',
        'country_code' => 'KR',
        'sign_version' => 2
);

$private_key = 'YOUR_PRIVATE_KEY';

ksort($params);        // sort parameters in alphabetical order

$baseString = '';
foreach ($params as $key => $value) {
    $baseString .= $key . '=' . ($value === false ? '0' : $value);
}

$baseString .= $private_key;
$sign = MD5($baseString);
$params['sign'] .= $sign;

$url = 'https://api.paymentwall.com/api/payment-systems/?' . http_build_query($params);
$payment_systems = json_decode(file_get_contents($url));
?>
```
Sample Base string of the exercise:
```
country_code=KRkey=YOUR_PUBLIC_KEYsign_version=2SIGNATURE_CALCULATED
```

## Version 3

sign = SHA256("PARAM_NAME_1=PARAM_VALUE_1PARAM_NAME_2=PARAM_VALUE_2PARAM_NAME_3=PARAM_VALUE_3...PARAM_NAME_n=PARAM_VALUE_nSECRET_KEY")

Signature version 3 is calculated the same way as version 2 but uses SHA256 hash instead of MD5.

```
sign = SHA256(goodsid=no1234ref=b1491808025sign_version=3slength=speriod=type=0uid=useridSECRET_KEY)
```

SECRET_KEY is your project secret key.
Please note that parameters should be **sorted in alphabetical order** by parameter name prior to hash calculation.