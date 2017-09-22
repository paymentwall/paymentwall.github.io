---
category: section-mobiamo-token
---

Endpoint:

```
POST https://api.paymentwall.com/pwaccount/?source=pwmobiamo
```

Sample Request

```php
<?php
require_once('path/to/lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'public_key' => 'YOUR_PROJECT_KEY',
    'private_key' => 'YOUR_SECRET_KEY'
));

$mobiamo = new Paymentwall_Mobiamo();
$tokenParams = [
	'uid' => 'test'
]

$response = $mobiamo->getToken($tokenParams);
$token = $response['token'];
// store this token to use for next requests
?>
```

Sample Response

```json
{
    "success": true,
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MDM2NDQ3NzIsImp0aSI6Ik5IcWN0QjZEbGR3bjNmQWxSZ1VuXC8zWkRhQjI1R1dvZlpSelJcL0JMYzNhTT0iLCJleHAiOjE1MDM3MzExNzIsImRhdGEiOnsibWVyY2hhbnRJZCI6IjIiLCJ0aW1lc3RhbXAiOiIxNTAzNjQ0NzEzIiwicHJvamVjdF9pZCI6IjE4MjgxNSJ9fQ.R5jLTYV23qRDaMbHZlun6MDFbWfK9xXTMzPIzNglr0A",
    "expire_time": 86400
}
```