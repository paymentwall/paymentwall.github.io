---
category: section-paylet-custom-subscription
---
Endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Sample Request
```c#
List<Paymentwall_Product> productList = new List<Paymentwall_Product>();
Paymentwall_Product product = new Paymentwall_Product(
  "product301", // ag_external_id
  9.99f, // amount
  "USD", // currencyCode
  "Gold Membership", // ag_name
  Paymentwall_Product.TYPE_SUBSCRIPTION, // ag_type
  1, // ag_period_length
  Paymentwall_Product.PERIOD_TYPE_YEAR, // ag_period_type
  true // ag_recurring
  );
productList.Add(product);
Paymentwall_Widget widget = new Paymentwall_Widget(
  "user40012", // uid
  "p1_1", // widget
  productList,
  new Dictionary<string, string>() {
    {
      'email' => 'user@hostname.com',
      'timestamp' => 'transaction_current_timestamp',
      'additional_param_name' => 'additional_param_value'
    }
  }
);
Response.Write(widget.getHtmlCode());
```

