---
category: section-checkout-subscription
---
Endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Sample Request
{% raw %}
```java
WidgetBuilder widgetBuilder = new WidgetBuilder("USER_ID", "pw");

widgetBuilder.setProduct( 
    new ProductBuilder("YOUR_PRODUCT_ID") {
    {
        setAmount(0.99);
        setCurrencyCode("USD");
        setName("YOUR_PRODUCT_NAME");
        setProductType(Product.TYPE_SUBSCRIPTION);
        setPeriodType("month");
        setPeriodLength(3);
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

