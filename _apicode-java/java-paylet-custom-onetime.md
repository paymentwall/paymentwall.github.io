---
category: section-paylet-custom-onetime
---
Request endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Code sample
{% raw %}
```java
WidgetBuilder widgetBuilder = new WidgetBuilder("USER_ID", "WIDGET_CODE");

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
  //addtional parameters
}
});

Widget widget = widgetBuilder.build();

return widget.getHtmlCode();
```
{% endraw %}
