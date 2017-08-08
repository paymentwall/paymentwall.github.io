---
category: section-checkout-onetime
---
Endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Sample Request
```php
<?php
$widget = new Paymentwall_Widget(
    'user40012', // uid
    'pw', // widget
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
        'ps' => 'all', // Replace it with specific payment system short code for single payment methods
        'addtional_param_name' => 'addtional_param_value'
    )
);
echo $widget->getUrl();
?>
```
