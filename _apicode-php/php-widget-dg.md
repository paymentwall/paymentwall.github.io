---
category: section-widget-dg
---
Endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Sample Request
```php
<?php
require_once('path/to/lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'api_type' => Paymentwall_Config::API_GOODS,
    'public_key' => 'YOUR_PROJECT_KEY',
    'private_key' => 'YOUR_SECRET_KEY'
));

$widget = new Paymentwall_Widget(
    'userid', // uid
    'pw', // widget
    array() // Product parts, leave empty for Widget API
    array(
        'email' => 'user@hostname.com', 
        'timestamp' => 'transaction_current_timestamp',
        'ps' => 'all' // Replace the value of 'ps' with specific payment system short code for Widget API uni
        'addtional_param_name' => 'addtional_param_value'
    )
);

echo $widget->getHtmlCode();
?>
```