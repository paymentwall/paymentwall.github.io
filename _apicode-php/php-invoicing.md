---
category: section-invoicing
---

Endpoint
```
POST https://api.paymentwall.com/developers/invoice-api/invoice
```

Sample Request

```php
<?php
$params = json_encode(array(
    'invoice_number'=>'INV-00123',
    'currency'=>'USD',
    'date'=>'07/07/2017',
    'due_date'=>'09/10/2019',
    'contacts'=> array(
        'company_name'=>'ABCD Industries',
        'salutation'=>'Mr.',
        'first_name'=>'John',
        'last_name'=>'Doe',
        'email'=>'john@doe.com',
        'title'=>'CEO',
        'country'=>'US',
        'city'=>'Palo Alto',
        'address'=>'326 Market Street',
        'zipcode'=>'94103',
        'phone_number'=>'(800)5551000',
        'note'=>'This will show on your Invoice'
    ),
    'items'=> array(
        array(
            'quantity'=>20,
            'title'=>'Red apple',
            'description'=>'Fresh apples',
            'unit_cost'=>2,
            'currency'=>'USD',
            'tax'=> array(
                'type'=>'percentage',
                'value'=>'10'
            ),
            'discount'=> array(
                'type'=>'percentage',
                'value'=>'17'
            )
        ),
        array(
            'quantity'=>10,
            'title'=>'Green apple',
            'description'=>'Fresh apples',
            'unit_cost'=>2,
            'currency'=>'USD',
            'tax'=> array(
                'type'=>'percentage',
                'value'=>'10'
            ),
            'discount'=> array(
                'type'=>'percentage',
                'value'=>'17'
            )
        )
    ),
    'taxes'=> array(
        array(
            'type'=>'percentage',
            'value'=>'20',
            'name'=>'VAT EU'
        ),
        array(
            'type'=>'percentage',
            'value'=>'10',
            'name'=>'USA NATIONAL TAX'
        )
    ),
    'discounts'=> array(
        'type'=>'percentage',
        'value'=>'50',
        'name'=>'1 000 000 user discount'
    ),
    'key'=>'YOUR_PROJECT_KEY'
));

$post = curl_init();
curl_setopt($post, CURLOPT_URL, 'https://api.paymentwall.com/developers/invoice-api/invoice');
curl_setopt($post, CURLOPT_HTTPHEADER, array(
    'X-ApiKey: YOUR_SECRET_KEY'
));
curl_setopt($post, CURLOPT_POST, 1);
curl_setopt($post, CURLOPT_POSTFIELDS, $params);
curl_exec($post);
?>
```