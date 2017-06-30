---
category: section-paylet-stored-dg
---
Endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Sample Request
{% raw %}
```java
Config.getInstance().setLocalApiType(Config.API_GOODS);
Config.getInstance().setPublicKey("YOUR_APPLICATION_KEY");
Config.getInstance().setPrivateKey("YOUR_SECRET_KEY");

WidgetBuilder widgetBuilder = new WidgetBuilder("USER_ID", "WIDGET_CODE");

widgetBuilder.setExtraParams(new LinkedHashMap<String, String>(){
{
	put("email", "YOUR_CUSTOMER_EMAIL");
	put("timestamp","TRANSACTION_DATE");
}
});

Widget widget = widgetBuilder.build();

return widget.getHtmlCode();
```
{% endraw %}