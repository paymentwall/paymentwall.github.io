---
id: payments-sdk-unity
title: Unity SDK
sectionid: docs
permalink: integration/sdks/unity
---

# Unity

Paymentwall’s Unity SDK allows merchants to accept payments in the games created by Unity.

This tutorial assumes that you have a Paymentwall Merchant Account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=amember&mode=merchant)** if you don't have one.

***

## Download SDK

Paymentwall's SDK for Unity can be downloaded **[here](https://github.com/paymentwall/module-unity)**.

> In github, you will be able to find our **module-unity**. Extract the code from **Unity/Paymentwall** folder to use the SDK. If you would like to use our demo, the database can be taken from **Database** folder, and the code will be from **Unity/Demo** folder.

***

## Project configuration in Paymentwall system

+ After you login, please go to **My Projects** tab. You will see your first project already created. Please take note of the ```Project Key``` and ```Secret Key```. You will need them later to finish the project setup.  

	- Press the **Settings** button. Please select ```Digital Goods``` (or other API) under **Your API**.

	- Set the **Pingback URL** to: [http://[your-domain].com/paymentwall_pingback]().

	- In **Custom Pingback parameters**, add  ```currencyCode``` as parameter, **OWN** as value. Add ```amount``` as parameter, **OWN** as value.

	- Set the **Signature Version** to 3.

	- Click **Save Changes**.  

+  Press the Widgets button, then the **Add New Widget**, scroll down and select the widget of your preference. 

***

## Integrate payment widget 

+ Create a new Unity MonoBehaviour class, add the following code to it. Modify API type and other custom parameters as you like.

{% raw %}
```java
using Paymentwall;

public class TestPlugin : MonoBehaviour {

	// Use this for initialization
	void Start () {
		PWBase.SetApiType(Paymentwall_Base.API_VC);
		PWBase.SetAppKey("9fa5245253f742e50e705f65b9b02d66"); // your Project Public key - available in your Paymentwall merchant area
		PWBase.SetSecretKey("3918c61450ab7aaa62760036f03eb947"); // your Project Private key - available in your Paymentwall merchant area

		List<PWProduct> productList = new List<PWProduct>();
		PWProduct product = new PWProduct(
			"product301", // id of the product in your system
			9.99f, // price
			"USD", // currency code
			"Gold Membership", // product name
			PWProduct.TYPE_SUBSCRIPTION, // this is a time-based product; for one-time products, use Paymentwall_Product.TYPE_FIXED and omit the following 3 parameters
			1, // time duration
			PWProduct.PERIOD_TYPE_YEAR, // year
			true // recurring
			);
		productList.Add(product);
		PWWidget widget = new PWWidget(
			"user40012", // id of the end-user who's making the payment
			"pw_1", // widget code, e.g. p1; can be picked inside of your merchant account
			productList,
			new Dictionary<string, string>() {{"email", "user@hostname.com"}} // additional parameters
		);
		
		PWUnityWidget unity = new PWUnityWidget (widget);
		StartCoroutine (unity.callWidgetWebView (gameObject,canvas)); // call this function to display widget
	}
}
```
{% endraw %}

+ You can modify the size and behaviour of payment's widget in **PWUnityWidget.cs**.

+ Run Unity Editor (support only on OSX ) or build it to mobile and see your result.  

***

## Next step

You can start making test payments for your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you are sure that everything works smoothly, please submit your project for review to go live.

> **[See how to live your project](/guides/review-home)**