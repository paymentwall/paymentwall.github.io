---
id: desktop-bridge
permalink: pay-home
sectionsId: docs
title: Pay API 
---

# Pay API

Pay API connects you with the [payment methods](https://www.paymentwall.com/payment-methods) provided by us and our partners together. 

Steps to integrate it into your application:

* [Build a payment methods selection form](#build-a-payment-selection-form).

* [Redirect customer](#redirect-customer).

* [Setup pingback listener](#setup-pingback-listener).

* [Dispatch payment result](#dispatch-payment-result).

## Build a payment methods selection form

Pull the list of methods via [payment system API](/apis#section-tools-payment-systems) and embed their logos on your page. By using payment system api, you need obtain the country code of your customer by ip address. Assign a static country code if your customer are all from a same country.
 
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

A collapsible list of all methods we support for the specific country will be returned, you can use it to build your payment methods selection from. Below is a sample for one gateway:

```json
{
  "id":"mint",
  "name":"MINT",
  "new_window":false,
  "img_url":"https:\/\/api.paymentwall.com\/images\/ps_logos\/pm_mint.png",
  "img_class":"mint",
  "ps_type_id":3
}
```

Combine using  ```img_url```, ```name``` with *radio button* or your preferred way to create available payment methods list. Afterwards, bind each available payment method with ```id``` which is returned in payment system API for next step.

## Redirect customer

Once the user decides which payment method he wants to use, you can use pay API like below to redirect him to the corresponding payment page.

```php
<?php
require_once('/path/to/paymentwall-php/lib/paymentwall.php');
Paymentwall_Base::setApiType(Paymentwall_Base::API_GOODS);
Paymentwall_Base::setAppKey('[Your_project_key]');
Paymentwall_Base::setSecretKey('[Your_secret_key]');

$widget = new Paymentwall_Widget(
  'user40012', // uid
  'p1_1', // widget
  array(
    new Paymentwall_Product(
      'product301', // ag_external_id
      9.99, // amount
      'USD', // currencyCode
      'Gold Membership', // ag_name
      Paymentwall_Product::TYPE_FIXED // ag_type
    )
    ),
  array(
      'email' => 'user@hostname.com',
      'timestamp' => 'transaction_current_timestamp',
      'addtional_param_name' => 'addtional_param_value',
      'ps' => '[id]', // The id returned in payment system API
  )
);

$url = $widget.getUrl();
?>
```

## Setup pingback listener

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

## Dispatch payment result

For a better user experience, we provide features to redirect customers back to your application. 

* ```success_url```. URL of the page where the end-user should be redirected to after the payment is complete.

* ```failure_url```. URL of the page where the end-user should be redirected to after the payment is failed.