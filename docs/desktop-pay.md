---
id: desktop-bridge
permalink: pay-home
sectionsId: docs
title: Pay API 
---

# Pay API

Paymentwall provides one single API to process payments with all [payment methods](https://www.paymentwall.com/en/documentation/Payment-System-Shortcodes/2044) supported by Paymentwall.

The page contains code samples in PHP. You can also find the same code samples using Paymentwall libraries for [Ruby](https://github.com/paymentwall/paymentwall-ruby), [Python](https://github.com/paymentwall/paymentwall-python), [Java](https://github.com/paymentwall/paymentwall-java), [Node](https://github.com/paymentwall/paymentwall-node), [C#](https://github.com/paymentwall/paymentwall-dotnet).  

To integrate Paymentwall, follow the steps below:

1.[Add payment methods into your page](#1-add-payment-method-buttons-into-your-page).  
2.[Redirect a user to the Paymentwall Payment Page](#2-redirect-a-user-to-the-paymentwall-payment-page).  
3.[Set up Pingback Listener](#3-set-up-pingback-listener).  
4.[Dispatch payment result](#4-dispatch-payment-result).  


## 1. Add payment method buttons into your page

You can either configure specific methods from the [list of available payment methods](https://www.paymentwall.com/en/documentation/Payment-System-Shortcodes/2044), or dynamically pull the list of methods via [Payment Systems API](https://www.paymentwall.com/en/documentation/Payment-Systems-API/2661) active in a given country. You can then embed the respective buttons into your page. 
 
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

A list of all methods we support for the specific country will be returned, you can use it to build your payment methods selection form. Below is a sample for one payment method:

```json
[{
  "id":"idealnl",
  "name":"iDeal",
  "new_window":false,
  "img_url":"https:\/\/api.paymentwall.com\/images\/ps_logos\/pm_ideal.png",
  "img_class":"ideal"
}]
```

Combine using  ```img_url```, ```name``` with *radio button* or your preferred way to create available payment methods list. Afterwards, bind each available payment method with ```id``` which is returned in payment system API for next step.

## 2. Redirect a user to the Paymentwall Payment Page

Once the user decides which payment method he wants to use, you can use pay API like below to redirect him to the corresponding payment page.

```php
<?php
require_once('/path/to/paymentwall-php/lib/paymentwall.php');
Paymentwall_Base::setApiType(Paymentwall_Base::API_GOODS);
Paymentwall_Base::setAppKey('[Your_project_key]');
Paymentwall_Base::setSecretKey('[Your_secret_key]');

$widget = new Paymentwall_Widget(
  'id_of_the_user_in_your_system',
  'pw',
  array(
    new Paymentwall_Product(
      'product301',
      9.99,
      'USD',
      'Gold Membership',
      Paymentwall_Product::TYPE_FIXED
    )
  ),
  array(
      'email' => 'user@hostname.com',
      'ts' => time(),
      'ps' => '[id]',
  )
);

header('Location:' . $widget.getUrl());
?>
```

## 3. Set up Pingback Listener

You will receive a pingback which is sent from our server every time we confirm that your customer has completed his payment. You can then do delivery processing according to our pingbacks.

```php
<?php
require_once('/path/to/paymentwall-php/lib/paymentwall.php');
Paymentwall_Base::setApiType(Paymentwall_Base::API_GOODS);
Paymentwall_Base::setAppKey('[Your_project_key]');
Paymentwall_Base::setSecretKey('[Your_secret_key]');

$pingback = new Paymentwall_Pingback($_GET, $_SERVER['REMOTE_ADDR']);
if ($pingback->validate()) {
    $productId = $pingback->getProduct()->getId();
    if ($pingback->isDeliverable()) {
    // deliver the product
    } else if ($pingback->isCancelable()) {
    // withdraw the product
    } else if ($pingback->isUnderReview()) {
    // set "pending" as order status
    }
    echo 'OK'; // Paymentwall expects response to be OK, otherwise the pingback will be resent
} else {
    echo $pingback->getErrorSummary();
}
?>
```

## 4. Dispatch payment result

For a better user experience, we provide features to redirect customers back to your application. 

* ```success_url```. URL of the page where the end-user should be redirected to after the payment is complete.

* ```failure_url```. URL of the page where the end-user should be redirected to after the payment is failed.