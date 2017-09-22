---
codeId: code-checkout-onetime
---
```c#
using Paymentwall;

Paymentwall_Base.setApiType(Paymentwall_Base.API_GOODS);
Paymentwall_Base.setAppKey("YOUR_PROJECT_KEY");
Paymentwall_Base.setSecretKey("YOUR_SECRET_KEY");

List<Paymentwall_Product> productList = new List<Paymentwall_Product>();
Paymentwall_Product product = new Paymentwall_Product(
    "product301", // ag_external_id
    9.99, // amount
    "USD", // currencyCode
    "Gold Membership", // ag_name
    Paymentwall_Product.TYPE_FIXED, //ag_type
);
productList.Add(product);
Paymentwall_Widget widget = new Paymentwall_Widget(
    "user40012", // uid
    "pw_1", // widget
    productList,
    new Dictionary<string, string>() {
        {
            'email' => 'user@hostname.com',
            'timestamp' => 'transaction_current_timestamp',
            'ps' => 'all', // Replace it with specific payment system short code for single payment methods
            'additional_param_name' => 'additional_param_value'
        }
    }
);
Response.Write(widget.getUrl());
```
