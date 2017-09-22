---
codeId: mobiamo-token-request
---
```php
require_once('path-to-paymentwall-lib/paymentwall.php');

$public_key = '028e62585a9a21d9aedddcc9d49e0464';
$private_key = 'c9ce1884821d9a134e6ba6669c1621ce';

Paymentwall_Config::getInstance()->set(array(
	'public_key' => 'YOUR_PROJECT_KEY', 
	'private_key' => 'YOUR_SECRET_KEY'
));

$model = new Paymentwall_Mobiamo();
$response = $model->getToken(['uid' => 'user40012']); 

$token = $response['token'];
```