---
id: module-woocommerce
title: Modules-Woocommerce
permalink: modules/woocommerce
sectionid: docs-modules
---

# Woocommerce

Paymentwall’s Woocommerce plug-in is easy to install and fully customizable. With a single integration, all products of your E-commerce business will be monetized with 150+ payment options localized in 75+ currencies and more than 200 countries. 

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=Woocommerce&mode=merchant)** if you don't have one.

***

## Download plug-in

Paymentwall's plug-in for Woocommerce can be downloaded **[here](https://github.com/paymentwall)**.

***

## Project configuration in Paymentwall system

+ Login to Paymentwall system with your account.

+ Go to **My Projects** tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on Woocommerce admin panel.

	- In **Settings** section, please set your project type to ```Digital Goods```.

	- Set **Pingback type** to URL.

	- Configure your **Pingback URL** to [http://[your-domain]/modules/gateways/callback/paymentwall.php]()

	- Choose the **Pingback Signature Version** to version 3.

> Remember to  save changes at the bottom of **Settings** section.

+ You can also enable *Brick* as a payment gateway by and click the brick grey icon on your project overview. It will generate ```Brick Test Keys``` and ```Brick Live Keys``` right next to your ```Widget Keys```.

+ In **Widgets** section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on Woocommerce admin panel.

***

## Setup Paymentwall module on your platform

+ Upload the plugin into your WordPress plugins directory, preserving the folder name **paymentwall-for-woocommerce** using an FTP client of your choice. Then log into your WordPress dashboard, navigate to your **Plugins** section, activate **Paymentwall for WooCommerce```.

+ Or you can navigate to your **Plugins** section, click **Add New** and search for **Paymentwall for Woocommerce** Click **Install now** and then activate the plugin.

+ On the left sidebar of your WordPress dashboard, navigate to **WooCommerce** -> **Settings**

+ Click on the **Checkout** tab. *Paymentwall* and *Brick* should already be available on the second navigation under **Checkout** tab as payment options.

+ Click on a payment option of your choice to set up.

	- Fill all the required fields.

> The ```Project Key``` and ```Secret Key``` can be found under your Woocommerce project overview's ```Widget Keys``` in **My Projects** tab. If you are using *Brick*, ```Public Key``` and ```Private Key``` are under ```Brick Test Keys``` and ```Brick Live Keys```. ```Widget code``` is available in your **Widgets** section of your project.

***

## Support

+ Paymentwall requires Wordpress  4.0 & WooCommerce 2.1+ or higher and is compatible up to Wordpress 4.7 & Woocommerce 2.6.4.

+ List of available *Payment Methods* can be discovered [here](https://www.paymentwall.com/en/payment-methods).

> Contact [module@paymentwall.com](mailto:module@paymentwall.com) if you find the version of your Woocommerce module is not supported.

***

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**