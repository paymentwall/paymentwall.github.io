---
codeId: pingback-listener-dg
---
```c#
using Paymentwall;

Paymentwall_Base.setApiType(Paymentwall_Base.API_GOODS);
Paymentwall_Base.setAppKey("YOUR_PROJECT_KEY"); // available in your Paymentwall merchant area
Paymentwall_Base.setSecretKey("YOUR_SECRET_KEY"); // available in your Paymentwall merchant area


NameValueCollection parameters = Request.QueryString;
Paymentwall_Pingback pingback = new Paymentwall_Pingback(parameters, HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"]);
if (pingback.validate())
{
    string productId = pingback.getProduct().getId();
    if (pingback.isDeliverable())
    {
        //deliver the product
    }
    else if (pingback.isCancelable())
    {
        //withdraw the product
    }
    Response.Write("OK"); // Paymentwall expects response to be OK, otherwise the pingback will be resent
}
else {
    Response.Write(pingback.getErrorSummary());
}
```