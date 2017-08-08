---
id: module-blesta
title: Modules-Blesta
permalink: modules/blesta
sectionid: docs-modules
---

# Blesta

Paymentwall’s Blesta plug-in is easy to install and fully customizable. With a single integration, all of your Hosting/SaaS products will be monetized with 150+ payment options localized in 75+ currencies and more than 200 countries.

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=blesta&mode=merchant)** if you don't have one.

***

## Download plug-in

Paymentwall's plug-in for Blesta can be downloaded **[here](https://github.com/paymentwall)**.

> The plug-in is not updated for the latest versions of Blesta. Any contribution from you on Github would be highly appreciated.

***

## Project configuration in Paymentwall system

+ Login to Paymentwall system with your account.

+ Go to **My Projects** tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on Blesta admin panel.

	- In **Settings** section, please set your project type to ```Digital Goods```.

	- Set **Pingback type** to URL.

	- Configure your **Pingback URL** to [http://[your-domain]/[blesta_folder]/callback/gw/[company_id]/paymentwall/]().

	- Your ```company_id``` can be obtained in [https://[your-domain]/admin/settings/system/companies/]().

	- Choose the **Pingback Signature Version** to version 2 or 3.

	- Add the **Custom pingback parameter** with **invoice** at ```Name```, and **OWN** at ```Value```.

> Remember to save changes at the bottom of **Settings** section.

+ You can also enable *Brick* as a payment gateway by and click the brick grey icon on your project overview. It will generate ```Brick Test Keys``` and ```Brick Live Keys``` right next to your ```Widget Keys```.

+ In **Widgets** section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on Blesta admin panel.

***

## Setup Paymentwall module on your platform

+ Unpack all files from **paymentwall-module-blesta** and upload content of **upload** folder to your Blesta **root** folder using an FTP client of your choice.

+ In your Blesta Dashboard, click **Settings** on the top right navigation and choose **Payment Gateways**

+ On the left sidebar, choose **Available** from **Payment Gateways** section, it will list all available gateways.

+ Click **Install** on *Paymentwall* or *Brick* tab.

	- Fill all the required fields.

> The ```Project Key``` and ```Secret Key``` can be found under your Blesta project overview's ```Widget Keys``` in **My Projects** tab. If you are using *Brick*, ```Public Key``` and ```Private Key``` are under ```Brick Test Keys```.  ```Widget code``` is available in your **Widgets** section of your project.

***

## Support

+ Paymentwall provides supports for Blesta versions 3 and 4.

+ List of available **Payment Methods** can be discovered [here](https://www.paymentwall.com/en/payment-methods).

***

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**
