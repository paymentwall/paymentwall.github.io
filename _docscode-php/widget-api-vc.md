---
codeId: widget-api-vc
---
```php
<?php
require_once('lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'api_type' => Paymentwall_Config::API_VC,
    'public_key' => 'YOUR_PROJECT_KEY',
    'private_key' => 'YOUR_SECRET_KEY'
));

$widget = new Paymentwall_Widget(
    'user40012', 
    'pw_1', 
    array(), // leave this array empty for Widget API
    array(
        'email' => 'user@hostname.com', 
        'timestamp' => 'transaction_current_timestamp',
        'ps' => 'all' // Replace the value of 'ps' with specific payment system short code for Widget API uni
    )
);
echo $widget->getUrl();
?>
```