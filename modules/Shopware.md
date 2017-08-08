---
id: module-shopware
title: Modules-Shopware
permalink: modules/shopware
sectionid: docs-modules
---

# Shopware

Paymentwall’s Shopware plug-in is easy to install and fully customizable. With a single integration, all products of your E-commerce business will be monetized with 150+ payment options localized in 75+ currencies and more than 200 countries. 

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=shopware&mode=merchant)** if you don't have one.

***

## Download plug-in

Paymentwall's plug-in for Shopware can be downloaded **[here](https://github.com/paymentwall)**.

> The plug-in is not updated for the latest versions of Shopware. Any contribution from you on Github would be highly appreciated.

***

## Project configuration in Paymentwall system

+ Login to Paymentwall system with your account.

+ Go to **My Projects** tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on Shopware admin panel.

	- In **Settings** section, please set your project type to **Digital Goods**.

	- Set **Pingback type** to URL.

	- Configure your **Pingback URL** to [http://[your-domain]/shop/paymentwall/pingback]()

	- Choose the **Pingback Signature Version** to version 3.

> Remember to save changes at the bottom of **Settings** section.

+ In **Widgets** section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on Shopware admin panel.

***

## Setup Paymentwall module on your platform

+ Upload the content of **pw_shopware_module** folder to Shopware root folder using a FTP client of your choice.

+ In your Shopware Admin Panel, please go to **Configuration** -> **Plugin Manager** section.

+ Click **Installed** on the left-hand side, it will list down all available modules, you will see *Paymentwall* under **Inactivate** section.

+ Click **Edit** icon on *Paymentwall* tab and **Activate** the module.

	- Fill out all the required fields.

> The ```Project Key``` and ```Secret Key``` can be found under your Shopware project overview's ```Widget Keys``` in **My Projects** tab.  ```Widget code``` is available in your **Widgets** section of your project.

***

## Support

+ Paymentwall provides supports for Shopware versions 3, 4 and 5.

+ List of available **Payment Methods** can be discovered [here](https://www.paymentwall.com/en/payment-methods).

***

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**