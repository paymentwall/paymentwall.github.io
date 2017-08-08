---
codeId: widget-api-vc
---
```c#
using Paymentwall;

Paymentwall_Base.setApiType(Paymentwall_Base.API_VC);
Paymentwall_Base.setAppKey("YOUR_PROJECT_KEY"); 
Paymentwall_Base.setSecretKey("YOUR_SECRET_KEY");

List<Paymentwall_Product> productList = new List<Paymentwall_Product>();

Paymentwall_Widget widget = new Paymentwall_Widget(
    "user40012", 
    "pw_1", 
    new Dictionary<string, string>() {
        {
            'email' => 'user@hostname.com',
            'timestamp' => 'transaction_current_timestamp',
            'ps' => 'all', // Replace the value of 'ps' with specific payment system short code for Widget API uni
            'additional_param_name' => 'additional_param_value'
        }
    }
);
Response.Write(widget.getUrl());
```