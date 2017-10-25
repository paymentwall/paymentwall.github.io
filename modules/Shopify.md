---
id: module-shopify
title: Modules-Shopify
permalink: modules/shopify
sectionid: docs-modules
---

# Shopify

Paymentwall has partnered with Shopify to allow its server owners accept payments easily via Paymentwall using credit cards, SMS payments, prepaid payment methods (such as Paysafecard, TicketSurf, Boleto), bank transfers and eWallets.

***

## Paymentwall activation

To connect Paymentwall with your Shopify store simply follow the 2 easy steps below:

### Project configuration in Paymentwall system

+ Step 1: Create your project with [Shopify connect button](https://api.paymentwall.com/developers/connect?source=shopify). In this way, step 4 & step 5 will be done automatically, or you will need to manually configure settings in **My Projects** tab and email us for admin settings.

+ Step 2: You will be taken to **Paymentwall Account Registration Page**. **Sign Up** if you don't have an account or **Sign In** if you already have one. When you **Sign Up**, use your Shopify webstore URL for the **Website URL** field (e.g. *https://mystore.myshopify.net*).

+ Step 3: You will be taken to your merchant area page with your project already set up (a new project will be created if you had an account before).

+ Step 4: Go to **My Projects** tab. You will see that your new project has already been created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on Shopify admin panel.

	- In **Settings** section, please set **Your API type** to ```Digital Goods```.

	- Turn on the **Widget signature is required**.

	- Change the **Pingback URL** to your Shopify store URL (e.g. [https://mystore.myshopify.net]())

	- Choose the **Pingback Signature Version** to version 3.

	- Configure **Custom Pingback Parameters**.

	<div class="docs-img">
	    <img src="/textures/pic/module/shopify/custom_pingback_parameter.png" style="width:80%">
	</div>

> Remember to save changes at the bottom of **Settings** section.

+ Step 5: Send email to  <a href="mailto:integration@paymentwall.com">integration@paymentwall.com</a> to request admin settings. The advised email body is: Please help to set project custom settings for Shopify. Project key: ```your project key```.

+ Step 6: In **Widgets** section, create a widget that you prefer. And save changes.

### Setup Paymentwall module on your platform

+ Please authorize *Paymentwall* on your Shopify store via this [link](https://www.shopify.com/login?redirect=authorize_gateway%2F1030414).

+ After you log in to your shop, you will be prompted to add *Paymentwall* as a gateway.

+ Click the **Add payment gateway** button. Paymentwall should be available on your admin Payments settings page.

+ In your dashboard, please go to **Settings** --> **Payments** section, and look for **Alternative payments** tab.

	- Choose *Paymentwall* from the dropdown list.

	- Fill all the required fields and click **Activate** to enable the gateway.

> The ```Project Key``` and ```Secret Key``` can be found in your Paymentwall Account in **My Projects** tab.

***

## Support

+ Paymentwall provide supports for all up-to-date Shopify version.

+ List of available **Payment Methods** can be discovered [here](https://www.paymentwall.com/en/payment-methods).

> Contact [platform@paymentwall.com](mailto:platform@paymentwall.com) if you find the version of your Shopify module is not supported.

***

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**
