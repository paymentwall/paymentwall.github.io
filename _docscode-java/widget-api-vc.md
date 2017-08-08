---
codeId: widget-api-vc
---
```java
Config.getInstance().setLocalApiType(Config.API_VC);
Config.getInstance().setPublicKey("YOUR_PROJECT_KEY");
Config.getInstance().setPrivateKey("YOUR_SECRET_KEY");

WidgetBuilder widgetBuilder = new WidgetBuilder("user12345", "pw_1");

widgetBuilder.setExtraParams(new LinkedHashMap<String, String>(){
{
    put("email", "user@hostname.com");
    put("timestamp","current_timestamp");
    put("ps","all"); // Replace the value of 'ps' with specific payment system short code for Widget API uni
}
});

Widget widget = widgetBuilder.build();

return widget.getUrl();
```