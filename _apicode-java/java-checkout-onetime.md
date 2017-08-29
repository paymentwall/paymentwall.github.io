---
category: section-checkout-onetime
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

widgetBuilder.setProduct( 
    new ProductBuilder("YOUR_PRODUCT_ID") {
    {
        setAmount(0.99);
        setCurrencyCode("USD");
        setName("YOUR_PRODUCT_NAME");
        setProductType(Product.TYPE_FIXED);
    }
}.build());

widgetBuilder.setExtraParams(new LinkedHashMap<String, String>(){
{
    put("email", "YOUR_CUSTOMER_EMAIL");
    put("timestamp","TRANSACTION_DATE");
    put("ps","all"); // Replace it with specific payment system short code for single payment methods
}
});

Widget widget = widgetBuilder.build();

return widget.getUrl();
```
{% endraw %}
