---
id: module-opencart
title: Modules-Opencart
permalink: modules/opencart
sectionid: docs-modules
---

# Opencart

Paymentwall’s Opencart plug-in is easy to install and fully customizable. With a single integration, all products of your E-commerce business will be monetized with 150+ payment options localized in 75+ currencies and more than 200 countries.

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=opencart&mode=merchant)** if you don't have one.

***

## Download plug-in

Paymentwall's plug-in for Opencart can be downloaded **[here](https://github.com/paymentwall)**.

***

## Project configuration in Paymentwall system

+ Login to Paymentwall system with your account.

+ Go to **My Projects** tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on Opencart admin panel.

	- In **Settings** section, please set your project type to ```Digital Goods```.

	- Set **Pingback type** to URL.

	- Configure your **Pingback URL** to [http://[your-domain]/index.php?route=checkout/pingback]().

	- Choose the **Pingback Signature Version** to version 3.

> Remember to save changes at the bottom of **Settings** section.

+ You can also enable *Brick* as a payment gateway by clicking the grey brick icon on your project overview. It will generate ```Brick Test Keys``` and ```Brick Live Keys``` right next to your ```Widget Keys```.

+ In **Widgets** section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on Opencart admin panel.



***

## Setup Paymentwall module on your platform

+ Download the plugin archive and extract it in Opencart folder (download modules for [Opencart 1.5](https://github.com/paymentwall/module-opencart/releases/tag/v1.0.2) and [OpenCart 2.2](https://github.com/paymentwall/module-opencart/releases/tag/v2.2.0) on [Github)](https://github.com/paymentwall/module-opencart/releases).

+ Login to your admin area, go to **Extensions** -> **Payments**, browse all available payment methods.

+ In *Paymentwall tab, click **Edit** to configure your module settings.

	- Fill all the required fields and change **Active** status to **Enabled**.

> The ```Project Key``` and ```Secret Key``` can be found under your Opencart project overview's ```Widget Keys``` in **My Projects** tab. If you are using *Brick*, ```Public Key``` and ```Private Key``` are under ```Brick Test Keys``` and ```Brick Live Keys```. ```Widget code``` is available in your **Widgets** section of your project.

***

## Support

+ Paymentwall provides supports for Opencart versions 1.5 and 2.

+ List of available **Payment Methods** can be discovered [here](https://www.paymentwall.com/en/payment-methods).

> Contact [platform@paymentwall.com](mailto:platform@paymentwall.com) if you find the version of your Opencart module is not supported.

***

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**
