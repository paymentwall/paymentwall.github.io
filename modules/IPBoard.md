---
id: module-ipboard
title: Modules-IPBoard
permalink: modules/ipboard
sectionid: docs-modules
---

# IP.Board

Paymentwall’s IP.Board plug-in is easy to install and fully customizable. With a single integration, all of your Hosting/SaaS products will be monetized with 150+ payment options localized in 75+ currencies and more than 200 countries.

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=ipb&mode=merchant)** if you don't have one.

***

## Download plug-in

Paymentwall's plug-in for IP.Board can be downloaded **[here](https://github.com/paymentwall)**.

> The plug-in is not updated for the latest versions of IP.Board. Any contribution from you on Github would be highly appreciated.

***

## Project configuration in Paymentwall system

+ Login to Paymentwall system with your account.

+ Go to **My Projects** tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on IP.Board admin panel.

	- In **Settings** section, please set your project type to ```Digital Goods```.

	- Set **Pingback type** to URL.

	- Configure your **Pingback URL** 
	
	- For **IPBoard v3**: [http://path-to-ipboard/index.php?app=nexus&module=payments&section=receive&do=validate]().

	- For **IPBoard v4**: [http://path-to-ipboard/index.php?app=nexus&module=checkout&controller=pwPingback]().

	- Add a new **Custom pingback parameter** with **id** as ```Name``` and **OWN** as ```Value```.

	- Choose the **Pingback Signature Version** to version 3.

> Remember to save changes at the bottom of **Settings** section.

+ In **Widgets** section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on IP.Board admin panel.

***

## Setup Paymentwall module on your platform

+ Download the plugin archive and extract it in IP.Board folder (download modules for [IP.Board 1.5](https://github.com/paymentwall/module-IP.Board/releases/tag/v1.0.2) and [IP.Board 2.2](https://github.com/paymentwall/module-IP.Board/releases/tag/v2.2.0) on [Github)](https://github.com/paymentwall/module-IP.Board/releases).

+ Login to your admin area, go to **Extensions** -> **Shipping** -> **Payments**, browse all available payment methods.

+ In *Paymentwall* tab, click **Edit** to configure your module settings.

+ Fill all the required fields and change **Active** status to **Enabled**.

> The ```Project Key``` and ```Secret Key``` can be found in your Paymentwall Account in ```My Projects``` tab. ```Widget code``` is available in your **Widgets** section of your Paymentwall project of IP.Board.

***

## Support

+ Paymentwall provides supports for IP.Board versions 1.5 and 2.

+ List of available **Payment Methods** can be discovered [here](https://www.paymentwall.com/en/payment-methods).

***

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**