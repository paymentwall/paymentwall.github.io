---
category: section-tools-delivery-confirmation-digital
---

Sample Request
```php
<?php
require_once('path/to/lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'private_key' => '[YOUR_SECRET_KEY]'
));

$delivery = new Paymentwall_GenerericApiObject('delivery');

$response = $delivery->post(array(
    'payment_id' => 'b63400368',
    'merchant_reference_id' => 'order_12345',
    'type' => 'digital',
    'status' => 'delivered',
    'estimated_delivery_datetime' => '2015/01/15 15:00:00 +0300',
    'estimated_update_datetime' => '2015/01/15 11:00:00 +0300',
    'refundable' => true,
    'details' => 'Item will be delivered via email by 3PM on 2015/01/15',
    'shipping_address[email]' => 'user@hostname.com',
    'reason' => 'none',
    'attachments[0]' => '@/usr/local/www/content/proof/b63400368/1.png',
    'attachments[1]' => '@/usr/local/www/content/proof/b63400368/2.png',
));
if (isset($response['success'])) {
    // delivery status is successfully saved
} elseif (isset($response['error'])) {
    var_dump($response['error'], $response['notices']);
}
?>
```

Sample Response
```json
{
    "success": 1
}
```
