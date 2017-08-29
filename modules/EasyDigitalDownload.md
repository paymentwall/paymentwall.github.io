---
id: module-edd
title: Modules-EDD
permalink: modules/easy-digital-downloads
sectionid: docs-modules
---

# Easy Digital Downloads

Paymentwall’s EDD plug-in is easy to install and fully customizable. With a single integration, all products of your E-commerce business will be monetized with 150+ payment options localized in 75+ currencies and more than 200 countries.

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=edd&mode=merchant)** if you don't have one.

***

## Download plug-in

Paymentwall's plug-in for EDD can be downloaded **[here](https://github.com/paymentwall)**.

> The plug-in is not updated for the latest versions of EDD. Any contribution from you on Github would be highly appreciated.

***

## Project configuration in Paymentwall system

+ Login to Paymentwall system with your account.

+ Go to **My Projects** tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on EDD admin panel.

	- In **Settings** section, please set your project type to ```Digital Goods```.

	- Set **Pingback type** to URL.

	- Configure your **Pingback URL** to [http://[your-domain]/?edd-listener=paymentwall]().

	- Choose the **Pingback Signature Version** to version 3.

> Remember to save changes at the bottom of **Settings** section.

+ You can also enable *Brick* as a payment gateway by clicking the grey brick icon on your project overview. It will generate ```Brick Test Keys``` and ```Brick Live Keys``` right next to your ```Widget Keys```.

+ In **Widgets** section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on EDD admin panel.

***

## Setup Paymentwall module on your platform

+ Upload the plugin into your WordPress plugins directory, preserving the folder name **easy-digital-downloads-paymentwall** using an FTP client of your choice. Then log into your WordPress dashboard, navigate to your **Plugins** section, activate **Paymentwall for Easy Digital Download**.

+ Or you can navigate to your **Plugins** section, click **Add New** and search for **Paymentwall for Easy Digital Download**. Click **Install now** and then activate the plugin.

+ On the left sidebar of your WordPress dashboard, navigate to **Downloads** section and choose **Payment Gateways** tab.

+ Select *Paymentwall* in **Payment Gateways** and fill all the required fields.

> The ```Project Key``` and ```Secret Key``` can be found under your EDD project overview's ```Widget Keys``` in ```My Projects``` tab. If you are using **Brick**, ```Public Key``` and ```Private Key``` are under ```Brick Test Keys``` and ```Brick Live Keys```.  ```Widget code``` is available in your ```Widgets``` section of your project.

***

## Support

+ Paymentwall provides supports for EDD versions 5, 6 and 7.

+ List of available **Payment Methods** can be discovered [here](https://www.paymentwall.com/en/payment-methods).

***


## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**
