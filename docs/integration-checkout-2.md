---
id: payments-checkout2
title: Checkout API
sectionid: docs
permalink: integration/checkout-home2
---

# Checkout API

Using *Checkout API* merchants can redirect users to a Paymentwall *payment page* for hosted checkout experience, or present this experience via iframe. The price to be paid is defined on merchant's side. The payment method can be predefined via API parameter, or Paymentwall will show all available payment methods.

***

## Payment Flow

1. Inside of your application/website the amount to be paid is selected.
2. The payment method is selected.
	* Option 1. Payment method is selected on Paymentwall side.  
		<div class="docs-img"><img src="/textures/pic/integration/checkout/checkout_multi.png"/></div>
		* User is redirected to Paymentwall Payment Page via iframe or as a standalone page.  
		* User selects the method to pay.  
		> Available payment methods are automatically geotargeted base on the user’s IP address. You can adjust the available methods in each country inside of the Payment Systems section of the merchant dashboard.  
  
	* Option 2. Payment method is selected on merchant side. (Single Payment Method)  
		<div class="docs-img"><img src="/textures/pic/integration/checkout/checkout_uni.png"/></div>
		* User selects the method to pay inside of your application. The method is passed to Paymentwall via ```ps``` parameter. More details in [Single Payment Method](#single-payment-method).
		* User is redirected to Paymentwall Payment Page via iframe or as a standalone page.  
3. User completes the purchase.
4. Paymentwall sends a [pingback](#pingback-payment-notifications) - server-side payment notification to the merchant.
5. The widget page sends a [client-side callback](#success-page) to the parent window (if used via iframe).
5. Paymentwall redirects the user to the [success page](#success-page).

***

## Single Payment Method

To show a Payment Page for a specific single payment method, use the ```ps``` API parameter. The value can be obtained in two ways:
1. Hardcoded from the full list [Payment System Shortcodes](/reference/ps), for example ```ps=idealnl```.
2. Retrieved dynamically via [Payment Systems API](/apis#section-tools-payment-systems) dynamically based on the user's location.

* Obtain the country code of your customer based on their IP address.  
You can also assign a static country code if your customer are all from a same country.
* Dynamically pull the list of methods active in a given country via [Payment Systems API](/apis#section-tools-payment-systems).
* Embed the respective buttons into your page. A list of all methods active for the specific country will be returned in the following format:  
  
```json
[{
  "id":"idealnl",
  "name":"iDeal",
  "new_window":false,
  "img_url":"https:\/\/api.paymentwall.com\/images\/ps_logos\/pm_ideal.png",
  "img_class":"ideal"
}]
```  

* Use ```img_url```, ```name``` with radio button or your preferred way to create the respective buttons.
* Pass the ```id``` of the selected payment method via ```ps``` parameter of the Checkout API, e.g. ```ps=idealnl```.

***

## Pingback Payment Notifications

Once a user makes a payment with the payment method and the product they choose, we will notify your server using server-side [Pingback](/reference/pingback-home).

*** 

## Success Page

Once a user makes a payment, they will be redirected to the Success page, that you can pass via ```success_url``` API parameter.  

## Client-side callback

Additionally, if Paymentwall Widget is embedded via iframe, it will send a [client-side callback](/reference/client-side-callback), that can be received with JavaScript. 
> To enable client side callback, please contact to devsupport@paymentwall.com with your Paymentwall account email address.

***

## Configuration

Once you have a project created in [merchant dashboard](https://api.paymentwall.com/developers/application/websites), you can start configuring your project in **Settings** to make it work properly with *Checkout API*:

* Select **Your API**  as *Digital Goods*.

* Fill the **Pingback url** to receive asynchronous notification.

* Configure the coverage of each payment methods for your project in **Payment System**.

* Create your preferred interface in **Widgets** section and obtain the *widget code* for building *payment page* later on. Paymentwall offers a range of *payment page* templates. The interface of each template is slightly different depending on the *widget code* you are using.

> There is no need to do configuration for **Region**, **Offers** and **Products** sections while using *Checkout API*.

***

## Relevant topics

* [Onetime payment](/integration/checkout/onetime).

* [Subscription](/integration/checkout/subscription).

* [Mobile-web integration](/reference/mobile_web).