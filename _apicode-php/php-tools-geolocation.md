---
category: section-tools-geolocation
---

Endpoint

```
GET https://api.paymentwall.com/api/rest/country
```

Sample Request
```php
require_once('path/to/lib/paymentwall.php');
$params = array(
    'key' => 'YOUR_PROJECT_KEY',
    'uid' => 'user101',
    'user_ip' => '192.168.1.101'
);

$url = 'https://api.paymentwall.com/api/rest/country?' .http_build_query($params);
$curl = curl_init($url);
curl_setopt($curl,CURLOPT_RETURNTRANSFER, TRUE);
$response = curl_exec($curl);
echo $response;
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