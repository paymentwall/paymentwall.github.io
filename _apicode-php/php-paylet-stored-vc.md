---
category: section-paylet-stored-vc
---
Request endpoint

```
GET https://api.paymentwall.com/api/ps/?
```

Code sample
```php
<?php
require_once('/path/to/paymentwall-php/lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'api_type' => Paymentwall_Config::API_VC,
    'public_key' => 'YOUR_PUBLIC_KEY',
    'private_key' => 'YOUR_PRIVATE_KEY'
));

$widget = new Paymentwall_Widget(
    'user40012', // uid
    'p1_1', // widget
    array(), // array of products - leave blank for Virtual Currency
    array(
        'email' => 'user@hostname.com', 
        'timestamp' => 'transaction_current_timestamp',
        'addtional_param_name' => 'addtional_param_value'
    )
);
echo $widget->getHtmlCode();
?>
```