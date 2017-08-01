---
id: payments-reference-widgets
title: Widget
sectionid: docs
permalink: reference/widgets
---

# Widgets

Widget is a web page hosted by Paymentwall to display available payment methods to your customers. The payment methods which are shown into widget depends on user's current IP address and configuration in **Payment System** of your project.

You can choose to combine the following features to improve the payment experience of your customer when interacting with widget:

* [Additional parameters](#additional-parameters).

* [Client side callback](#client-side-callback).

* [Deep-linked payment system](#deep-linked-payment-system).

## Available widget

| Widget code | Suitable products | Mobile view compatible | Real widget| Description | 
| --- | --- | --- | --- |
| p1 | Stored Products, Custom Price | No | [Link to widget](https://api.paymentwall.com/api/subscription/?key=cd36b8635c7296dad972a239142c4b84&uid=testuser&widget=p1_1&amount=5&currencyCode=USD&ag_name=Gold+Membership&ag_type=fixed&ag_external_id=pw_t_2017051900001&sign_version=2&sign=afe2fbe4e445ae703259bdb3f0c909f0){:target="_blank"} | A unified widget for desktop. |
| p2 | Stored Products, Custom Price | No | [Link to widget using MINT as example](https://api.paymentwall.com/api/subscription/?key=cd36b8635c7296dad972a239142c4b84&uid=testuser&widget=p2_1&amount=5&currencyCode=USD&ag_name=Gold+Membership&ag_type=fixed&ag_external_id=pw_t_2017051900001&ps=epinpaymentsystem&sign_version=2&sign=f3643252dba6ed194459eea277ed85ba){:target="_blank"} | Similar to p1 but display only one payment method. Requires ```ps``` in [optional parameter](/apis#section-checkout-optional_parameter). |
| p4 | Stored Products, Custom Price | No | [Link to widget](https://api.paymentwall.com/api/subscription/?key=cd36b8635c7296dad972a239142c4b84&uid=testuser&widget=p4_1&amount=5&currencyCode=USD&ag_name=Gold+Membership&ag_type=fixed&ag_external_id=pw_t_2017051900001&sign_version=2&sign=fc715389c5e7b062dbf9eab8e937e98b){:target="_blank"} | P4 widget will force all the payment method to be opened in a new browser window. |
| p10 | Stored Products, Custom Price | No | [Link to widget](https://api.paymentwall.com/api/subscription/?key=cd36b8635c7296dad972a239142c4b84&uid=testuser&widget=p10_1&amount=5&currencyCode=USD&ag_name=Gold+Membership&ag_type=fixed&ag_external_id=pw_t_2017051900001&sign_version=2&sign=9a9ef4412a67bf93ce6d6c3f8d7adfde){:target="_blank"} | A customized version for p1 widget. |
| m2 | Stored Products, Custom Price | Yes | [Link to widget](https://api.paymentwall.com/api/subscription/?key=cd36b8635c7296dad972a239142c4b84&uid=testuser&widget=m2_1&amount=5&currencyCode=USD&ag_name=Gold+Membership&ag_type=fixed&ag_external_id=pw_t_2017051900001&sign_version=2&sign=fa282a71d06752af78b0de3724f80f41){:target="_blank"} | A unified widget with better performance on mobile. |
| mo | Stored Products, Custom Price | Yes | [Link to widget for Mobiamo in Germany](https://api.paymentwall.com/api/ps/?key=7f37fa10dcc9ce39ea133ba24b76e748&uid=testuser&widget=mo1_1&vc=Coins&country_code=DE&sign_version=2&sign=ed3a0a3aecdf33628427f7ea5596672f){:target="_blank"} |  This widget is designed for [Mobiamo](/integration/direct/mobiamo-home) only. |
| pw | Custom Price | Yes | [Link to widget](https://api.paymentwall.com/api/subscription/?key=cd36b8635c7296dad972a239142c4b84&uid=user40012&widget=pw_1&amount=0.99&currencyCode=USD&ag_name=Gold+Membership&ag_type=fixed&ag_external_id=pw_t_2017051900001&sign_version=2&sign=0802bcbf5754b056458d4036fca74d24){:target="_blank"} | New widget which supports to display your own company logo and has better humanized design. |
| w6 | offerwall | No | [Link to widget for offerwall in USA](https://api.paymentwall.com/api/?key=7f37fa10dcc9ce39ea133ba24b76e748&uid=paymentwall&widget=w6&vc=Coins&country_code=US&sign_version=2&sign=24dcd7346bae3d78dd75c7b5c44adae3){:target="_blank"} | A unified widget for offerwall merchants. |
| mw6 | offerwall | Yes | [Link to widget for offerwall in USA](https://api.paymentwall.com/api/?key=7f37fa10dcc9ce39ea133ba24b76e748&uid=paymentwall&widget=mw6&vc=Coins&country_code=US&sign_version=2&sign=abfd58e6e3db8377ff11de3cf5dca13b){:target="_blank"} | Mobile view version for Offerwall widget. |

## Create a widget

You can create any available widget above for your project in [widget area](https://api.paymentwall.com/developers/widget/). 

Widget code of created widget is expanded with additional number as suffix for [widget customization](/paylet/widget/reference#customization). 

> The default widget code without suffix can also be used directly, widget customization and its features are limited in this case.


## Additional parameters

Additional parameters can be added into [Paylet API](/apis#section-widget) to meet the additional requirements when building widget. There are two main categories for additional parameters:

* Optional parameters.

The [optional parameter](/apis#section-checkout-optional_parameter) is a collection of reversed parameters to implement certain functions. 

* Custom parameters

Paylet API allows you to add your own parameter as additional parameters while building widget. We can help you to do parameter transmission and communicate it back to your server side via pingback. See [custom pingback parameter with own value](/reference/pingback/custom-parameter#parameter-with-own-value) for more details.

## Client side callback

> If you would like to redirect the user after a payment is made, you can pass the ```success_url``` parameter as [optional parameter](/apis#section-checkout-optional_parameter) that will be used as the URL of **Continue** button displayed to the end-user after a payment is made.

For specific events we send a client-side callback via ```window.postMessage()``` mechanism with the event data in JSON format into the parent page of which our widget is embedded. This can be used for updating your page respectively, like blocking **Close** button if the payment is being processed, tracking events in Google Analytics etc. 

Below are the currently supported events:

|Event|Description|
|---|---|
|paymentSuccess|Sent once a payment has been successfully. Payment details are sent in data field of the JSON message. See example below. |
|widgetLoaded|Sent once the widget has been loaded.|
|widgetSizeChanged|Sent once the widget dimensions have been changed. Dimensions are sent in data field of JSON message in the following format: ```{"height":"1000px","width":"700px"}```.|
|paymentProcessingStart|Sent once a user started making a payment, e.g. a payment method popup has been opened or a payment method iframe has been loaded. Recommended action: prevent the widget from closing until ```paymentSuccess``` or ```paymentProcessingEnd``` is received.|
|paymentProcessingEnd|Sent once a user stopped making a payment, e.g. by closing a payment method popup or by switching to another payment method thus closing the previously opened iframe.|

Example for ```paymentSuccess``` event:

```json
{
  "event":"paymentSuccess",
  "data":{
    "object":"payment",
    "id":"b123456",
    "created":1419438832,
    "amount":"9.99",
    "currency":"USD",
    "refunded":false,
    "risk":"approved",
    "uid":"user_200255",
    "product_id":"product_100244",
    "payment_system":"cc"
  }
}
```

Sample listener:

```html
<script type="text/javascript">
window.addEventListener('message', function(event) {
  if(event.origin !== 'https://api.paymentwall.com') return;
  var eventData = JSON.parse(event.data);
  if (eventData.event == 'paymentSuccess') {
    // handle the successful payment scenario
    alert('Thank you for paying ' + eventData.data.amount + ' ' + eventData.data.currency);
  }
},false);
</script>
```

> This feature can be activated for your project if you email us at [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com) with your project key.

## Deep-linked payment system

Deep-linked payment system directly displays the user's desired payment page in our widget. It requires [Custom Price](/integration/checkout-home). 

You can build your own products selection interface, and set up your payment options interface based on our [Payment Systems API](/apis#section-tools-payment-systems) to provide your users a better payment experience.

* Obtain the country code of your customer based on his ip address. You can also assign a static country code if your customer are all from a same country.

* You can dynamically pull the list of methods via [Payment Systems API](/apis#section-tools-payment-systems) active in a given country, and then embed the respective buttons into your page. 

A list of all methods we support for the specific country will be returned by Payment System API, you can use it to build your payment methods selection form. Below is a sample for one payment method:

```json
[{
  "id":"idealnl",
  "name":"iDeal",
  "new_window":false,
  "img_url":"https:\/\/api.paymentwall.com\/images\/ps_logos\/pm_ideal.png",
  "img_class":"ideal"
}]
```

Combine using  ```img_url```, ```name``` with *radio button* or your preferred way to create available payment methods list. Afterwards, bind each available payment method with ```id``` which is returned in payment system API for next step.

* Once the user decides which payment method he wants to use, you can use [Paylet API](/apis#section-checkout) and add ```ps``` as [optional parameter](/apis#section-checkout-optional_parameter) values ```id``` (Obtained in last step) to redirect him to the corresponding payment page.

That's it, you have integrated deep-linked payment system into your application.
