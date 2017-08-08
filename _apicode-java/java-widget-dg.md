---
category: section-widget-dg
---
Endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Sample Request
{% raw %}
```java
Config.getInstance().setLocalApiType(Config.API_GOODS);
Config.getInstance().setPublicKey("YOUR_PROJECT_KEY");
Config.getInstance().setPrivateKey("YOUR_SECRET_KEY");

WidgetBuilder widgetBuilder = new WidgetBuilder("USER_ID", "pw");

widgetBuilder.setExtraParams(new LinkedHashMap<String, String>(){
{
    put("email", "YOUR_CUSTOMER_EMAIL");
    put("timestamp","TRANSACTION_DATE");
    put("ps","all"); // Replace the value of 'ps' with specific payment system short code for Widget API uni
}
});

Widget widget = widgetBuilder.build();

return widget.getHtmlCode();
```
{% endraw %}