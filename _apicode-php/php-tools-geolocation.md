---
category: section-tools-geolocation
---

Endpoint

```
GET https://api.paymentwall.com/api/rest/country
```

Sample Request
```php
<?php
require_once('/path/to/paymentwall-php/lib/paymentwall.php');
$params = array(
    'key' => 'YOUR_PUBLIC_KEY',
    'uid' => 'test_user'
);

$url = 'https://api.paymentwall.com/api/rest/country?' . http_build_query($params);
$payment_systems = json_decode(file_get_contents($url));
?>
```

Sample Response
```json
{
	"code":"US",
	"country":"United States"
}
```

Sample Response when callback parameter is present
```json
callbackFunction({
	"code":"US",
  	"country":"United States"
})
```